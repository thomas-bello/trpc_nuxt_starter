import type {
  PaginationProps,
  DataTableFilterState,
  DataTableSortState,
  DataTableColumn,
  DropdownOption,
  DataTableCreateRowProps,
  FormRules,
  FormInst,
} from 'naive-ui'

import type { Ref, UnwrapNestedRefs } from 'vue'
import { useMessage } from 'naive-ui'

import type { DataTableI18nType } from './i18n'

type ModelType = 'i18nValue' | 'configValue' | 'user'
type UpdateFunc<DataType> = (id: string, data: Partial<DataType>) => Promise<boolean>

type ActionType = 'del'
type ActionFunc = () => Promise<void>

export const useDataTable = <DataType extends { id: string }, I18nType>({
  model,
  getStatusLoading,
  getI18nConfig: getNewI18nConfig,
  getColumns,
  refresh: otherRefresh,
  getRules,
  getDefFormData,
  getSelectForList,
}: {
  model: ModelType
  getI18nConfig: () => I18nType
  getColumns: (updateFunc: UpdateFunc<DataType>) => DataTableColumn<DataType>[]
  getRules: (i18nRef: UnwrapNestedRefs<DataTableI18nType & I18nType>) => FormRules
  getDefFormData: () => Partial<DataType>
  refresh?: () => void
  getStatusLoading?: (statusLoading: boolean) => boolean
  getSelectForList?: () => { select?: Record<string, any> }
}) => {
  const getI18nConfig = () =>
    ({
      ...getDataTableI18nConfig(),
      ...getNewI18nConfig(),
    }) as DataTableI18nType & I18nType

  const { i18nRef } = useI18n(getI18nConfig())

  const paginationReactive = reactive<PaginationProps>({
    page: 1,
    pageSize: 10,
    itemCount: 0,
    pageSizes: [10, 20, 30],
    showSizePicker: true,
    prefix({ itemCount }) {
      return evaluate(i18nRef.dataTablePaginationTotal, {
        num: itemCount,
      })
    },
  })

  const handlePageChange = (curPage: number) => {
    paginationReactive.page = curPage
  }
  const handlePageSizeChange = (pageSize: number) => {
    paginationReactive.pageSize = pageSize
  }

  const whereRef = ref({
    where: {},
  })
  const orderRef = ref({
    orderBy: [],
  })

  const handleSorterChange = (sorterArr: DataTableSortState[]) => {
    const orderObj = { ...orderRef.value }
    console.log('sorterArr', sorterArr)
    sorterArr.forEach((sorter) => {
      const { columnKey, order } = sorter || {}
      console.log('sorter', sorter, 'columnKey', columnKey)
      if (columnKey) {
        orderObj.orderBy = orderObj.orderBy.filter((item) => !item[columnKey])

        if (order) {
          orderObj.orderBy.push({
            [columnKey]: {
              descend: 'desc',
              ascend: 'asc',
            }[order],
          })
        }
      }
    })

    orderRef.value = orderObj
  }

  const handleFiltersChange = (filter: DataTableFilterState) => {
    const whereObj = { ...whereRef.value }

    const whereKeys = Object.keys(filter)

    whereObj.where = whereKeys.reduce((where, key) => {
      let val = filter[key]
      if (!Array.isArray(val)) {
        val = [val]
      }

      const { length } = val || []
      if (length) {
        where[key] = {
          in: val,
        }
      } else {
        where[key] = undefined
      }

      return where
    }, whereObj.where)
    whereRef.value = whereObj
  }

  const listWhereRef = computed(() => {
    let select
    if (getSelectForList) {
      select = getSelectForList()
    }

    const listWhere = {
      ...whereRef.value,
      ...getPaginationProps(paginationReactive.page, paginationReactive.pageSize),
      ...orderRef.value,
      ...(select || {}),
    }
    // console.log('listWhere computed', listWhere)
    return listWhere
  })

  const loadingRef = ref(false)

  const {
    data: countRef,
    refresh: countRefresh,
    status: countStatusRef,
  } = getTrpc().db[model].count.useQuery(whereRef, {
    immediate: true,
  })

  const {
    data: listRef,
    refresh: listRefresh,
    status: listStatusRef,
  } = getTrpc().db[model].findMany.useQuery(listWhereRef, {
    immediate: true,
  })

  const refresh = () => {
    countRefresh()
    listRefresh()
    otherRefresh && otherRefresh()
  }

  watchEffect(() => {
    paginationReactive.itemCount = countRef.value
  })

  const statusLoadingRef = computed(() => {
    const defFunc = (statusLoading: boolean) => statusLoading

    const func = getStatusLoading ?? defFunc

    const loading = countStatusRef.value === 'pending' || listStatusRef.value === 'pending'

    return func(loading)
  })

  watch(
    () => statusLoadingRef.value,
    (loading) => {
      if (loading !== loadingRef.value) {
        loadingRef.value = loading
      }
    }
  )

  const message = useMessage()

  const update: UpdateFunc<DataType> = async (id, data) => {
    if (loadingRef.value) return false

    loadingRef.value = true
    try {
      await getTrpc().db[model].update.mutate({
        where: {
          id,
        },
        data,
      })
      refresh()
      message.success(i18nRef.dataTableSaveSuccessTips)
      return true
    } catch (error) {
      loadingRef.value = false

      message.error(i18nRef.dataTableSaveErrorTips)
    }

    return false
  }

  const columnsRef = computed(() => {
    return getColumns(update)
  })

  /**
   * =======================================================
   * Dropdown
   * =======================================================
   */

  const showDropdownRef = ref(false)
  const xRef = ref(0)
  const yRef = ref(0)
  const selectRowRef = ref<DataType | null>(null)

  const dropdownOptionsRef = computed(() => {
    const dropdownOptions: DropdownOption[] = [
      {
        key: 'del',
        label: i18nRef.dataTableDelBtn,
      },
    ]

    return dropdownOptions
  })

  const rowProps: DataTableCreateRowProps<DataType> = (row) => {
    return {
      onContextmenu: (e) => {
        e.preventDefault()
        showDropdownRef.value = false
        nextTick().then(() => {
          showDropdownRef.value = true
          xRef.value = e.clientX
          yRef.value = e.clientY
          selectRowRef.value = row as any
        })
      },
    }
  }

  const onClickDropdownOutside = () => {
    showDropdownRef.value = false
  }

  const handleDropdownSelect = async (key: ActionType) => {
    const funcMap: Record<ActionType, ActionFunc> = {
      del: async () => {
        if (selectRowRef.value) {
          const { id } = selectRowRef.value
          if (id) {
            try {
              await getTrpc().db[model].delete.mutate({
                where: {
                  id,
                },
              })

              refresh()
              message.success(i18nRef.dataTableDelSuccessTips)
            } catch {
              message.error(i18nRef.dataTableDelErrorTips)
            }
          }
        }
      },
    }

    const func = funcMap[key]
    if (func) {
      await func()
    }
    showDropdownRef.value = false
  }

  /**
   * =======================================================
   * Drawer
   * =======================================================
   */

  const addDrawerShowRef = ref(false)

  const formRef = ref<FormInst | null>()
  const formValueRef = reactive<Partial<DataType>>(getDefFormData())

  const rulesRef = computed(() => {
    return getRules(i18nRef)
  })

  const handleSaveButtonClick = async (e: MouseEvent) => {
    e.preventDefault()

    await formRef.value?.validate()

    loadingRef.value = true
    try {
      await getTrpc().db[model].create.mutate({
        data: {
          ...formValueRef,
          // creatorId: userRef.value?.id,
        },
      })
      refresh()
      message.success(i18nRef.dataTableSaveSuccessTips)

      addDrawerShowRef.value = false
    } catch (error) {
      loadingRef.value = false

      message.error(i18nRef.dataTableSaveErrorTips)
    }
  }

  return {
    paginationReactive,
    loadingRef,
    listWhereRef,
    whereRef,
    countRef,
    countStatusRef,
    listStatusRef,
    listRef: listRef as Ref<DataType[]>,
    statusLoadingRef,
    i18nRef,
    columnsRef,
    message,
    rowProps,
    dropdownOptionsRef,
    xRef,
    yRef,
    showDropdownRef,
    rulesRef,
    formValueRef,
    addDrawerShowRef,
    formRef,
    handlePageChange,
    handlePageSizeChange,
    handleSorterChange,
    handleFiltersChange,
    countRefresh,
    listRefresh,
    refresh,
    update,
    handleDropdownSelect,
    onClickDropdownOutside,
    handleSaveButtonClick,
  }
}
