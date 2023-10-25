<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between gap-4">
      <div>
        <NSelect
          v-model:value="formValueRef.userId"
          filterable
          clearable
          remote
          :options="optionsRef"
          :loading="searchLoadingRef"
          :render-label="renderLabel"
          :render-tag="renderSingleSelectTag"
          @search="handleSearch"
        />
      </div>

      <NButton @click="() => (addDrawerShowRef = true)">{{ i18nRef.dataTableBalanceLogTopUp }}</NButton>
    </div>
    <NDataTable
      :row-key="(row) => row.id"
      :columns="columnsRef"
      :data="listRef"
      :loading="loadingRef"
      :row-props="rowProps"
      :pagination="paginationReactive"
      :on-update:page="handlePageChange"
      :on-update:page-size="handlePageSizeChange"
      :on-update:sorter="handleSorterChange"
      :on-update:filters="handleFiltersChange"
    />
    <NDrawer v-model:show="addDrawerShowRef" :mask-closable="false" resizable>
      <NDrawerContent closable>
        <NForm ref="formRef" :model="formValueRef" :rules="rulesRef">
          <NFormItem :label="i18nRef.dataTableBalanceLogUser" path="userId">
            <NSelect
              v-model:value="formValueRef.userId"
              filterable
              clearable
              remote
              :options="optionsRef"
              :loading="searchLoadingRef"
              :render-label="renderLabel"
              :render-tag="renderSingleSelectTag"
              @search="handleSearch"
            />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableBalanceLogChange" path="change">
            <NInputNumber v-model:value="formValueRef.change">
              <template #prefix> ￥ </template>
            </NInputNumber>
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableBalanceLogRemark" path="remark">
            <NInput v-model:value="formValueRef.remark" />
          </NFormItem>
        </NForm>
        <template #footer>
          <div class="flex justify-end">
            <NButton round type="primary" @click="handleSaveButtonClick">
              {{ i18nRef.dataTableSaveBtn }}
            </NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>

    <NDropdown
      placement="bottom-start"
      trigger="manual"
      :x="xRef"
      :y="yRef"
      :options="dropdownOptionsRef"
      :show="showDropdownRef"
      :on-clickoutside="onClickDropdownOutside"
      @select="handleDropdownSelect"
    />
  </div>
</template>

<script setup lang="ts">
import {
  NDataTable,
  NButton,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  NDropdown,
  NSelect,
  NInputNumber,
} from 'naive-ui'
import type { DataTableColumn, FormRules, SelectOption, SelectRenderTag, SelectRenderLabel } from 'naive-ui'
import type { BalanceLog, User } from '@prisma/client'
import AvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  dataTableBalanceLogUser: '用户',
  dataTableBalanceLogBalance: '余额',
  dataTableBalanceLogChange: '改变',
  dataTableBalanceLogChangeBefore: '改变前',
  dataTableBalanceLogRemark: '备注(remark)',
  dataTableBalanceLogCreator: '创建者',
  dataTableBalanceLogCreatedAt: '创建时间',
  dataTableBalanceLogTopUp: '充值',
})

type I18nType = ReturnType<typeof getI18nConfig>

const currentUserRef = useCurrentUser()

const {
  paginationReactive,
  loadingRef,

  listRef,
  i18nRef,
  columnsRef,
  rowProps,
  dropdownOptionsRef,
  xRef,
  yRef,
  showDropdownRef,
  rulesRef,
  formValueRef,
  addDrawerShowRef,
  formRef,
  whereRef,
  handlePageChange,
  handlePageSizeChange,
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<BalanceLog, I18nType>({
  model: 'balanceLog',
  getI18nConfig,

  getColumns: () => {
    const columns: DataTableColumn<BalanceLog>[] = [
      {
        type: 'expand',
        expandable: (rowData) => !!rowData.log,
        renderExpand: (rowData) => {
          return h(
            'div',
            {
              class: 'whitespace-pre-wrap',
            },
            JSON.stringify(rowData.log, null, 2)
          )
        },
      },
      {
        title: i18nRef.dataTableBalanceLogUser,
        key: 'user',
        width: 300,
        resizable: true,
        render: (row) => {
          return h(
            'div',
            {
              class: 'cursor-pointer',
              onClick: () => {
                console.log('click row.userId', row.userId)
                formValueRef.userId = row.userId
              },
            },
            h(AvatarCard, {
              user: row.user,
              round: true,
            })
          )
        },
      },
      {
        title: i18nRef.dataTableBalanceLogBalance,
        key: 'balance',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return row.balance
        },
      },
      {
        title: i18nRef.dataTableBalanceLogChange,
        key: 'change',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return row.change
        },
      },
      {
        title: i18nRef.dataTableBalanceLogChangeBefore,
        key: 'changeBefore',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return row.changeBefore
        },
      },
      {
        title: i18nRef.dataTableBalanceLogRemark,
        key: 'remark',
        width: 300,
        resizable: true,
      },
      {
        title: i18nRef.dataTableBalanceLogUser,
        key: 'creator',
        width: 300,
        resizable: true,
        render: (row) => {
          return h(AvatarCard, {
            user: row.creator,
            round: true,
          })
        },
      },
      {
        title: i18nRef.dataTableBalanceLogCreatedAt,
        key: 'createdAt',
        width: 150,
        sortOrder: 'descend' as any,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return getDayjs(row.createdAt).format('YYYY-MM-DD HH:mm')
        },
      },
    ]
    return columns
  },
  getRules: (i18nRef) => {
    const rules: FormRules = {
      change: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableBalanceLogChange }),
          trigger: ['blur'],
          type: 'number',
        },
      ],
      remark: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableBalanceLogRemark }),
          trigger: ['blur'],
        },
      ],
      userId: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableBalanceLogUser }),
          trigger: ['blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    balance: 0 as any,
    change: 0 as any,
    changeBefore: 0 as any,
    remark: '充值',
    userId: null,
    creatorId: '',
    preBalanceLogId: null,
  }),
  createFormat: async (formValueRef) => {
    const lastLog: BalanceLog = await getTrpc().db.balanceLog.findFirst.query({
      where: {
        userId: formValueRef.userId,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    })

    if (lastLog) {
      formValueRef.preBalanceLogId = lastLog.id
      formValueRef.changeBefore = lastLog.balance

      const balance: any = parseFloat(`${lastLog.balance}`) + parseFloat(`${formValueRef.change}`)
      formValueRef.balance = balance
    } else {
      formValueRef.balance = formValueRef.change
    }

    formValueRef.creatorId = currentUserRef.value.id

    return formValueRef
  },
  getSelectForList: () => ({
    select: {
      balance: true,
      change: true,
      changeBefore: true,
      remark: true,
      log: true,
      createdAt: true,
      userId: true,
      creator: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      preBalanceLog: {
        select: {
          balance: true,
          change: true,
          changeBefore: true,
          remark: true,
        },
      },
    },
  }),
  initOrderBy: () => [
    {
      createdAt: 'desc',
    },
  ],
})

const optionsRef = ref<(SelectOption & User)[]>([])
const searchLoadingRef = ref(false)
const handleSearch = useDebounce(async (query: string) => {
  searchLoadingRef.value = true

  const orList = []
  if (formValueRef.userId) {
    orList.push({
      id: formValueRef.userId,
    })
  }

  if (query) {
    console.log('handleSearch query', query)
    orList.push(
      ...[
        {
          id: {
            contains: query,
          },
        },
        {
          name: {
            contains: query,
          },
        },
        {
          email: {
            contains: query,
          },
        },
      ]
    )
  }

  if (orList.length) {
    const list = await getTrpc().db.user.findMany.query({
      take: 10,
      where: {
        OR: orList,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        block: true,
        deleted: true,
      },
    })
    console.log('handleSearch list', list)
    optionsRef.value = list.map((item) => ({ ...item, label: item.name, value: item.id }))
  } else {
    optionsRef.value = []
  }

  searchLoadingRef.value = false
}, 300)

const renderLabel: SelectRenderLabel = (option) => {
  console.log('renderLabel option', option)
  return h(AvatarCard, {
    user: option,
    round: true,
  })
}

const renderSingleSelectTag: SelectRenderTag = ({ option }) => {
  console.log('renderSingleSelectTag option', option)
  return h(AvatarCard, {
    user: option,
    round: true,
  })
}

watch(
  () => formValueRef.userId,
  (newValue) => {
    const { where } = whereRef.value as any
    if (newValue) {
      where.userId = newValue
    } else {
      where.userId = undefined
    }

    whereRef.value = {
      where,
    }

    handleSearch()
  }
)
</script>
