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
  </div>
</template>

<script setup lang="ts">
import { NDataTable, NSelect } from 'naive-ui'
import type { DataTableColumn, SelectOption, SelectRenderTag, SelectRenderLabel } from 'naive-ui'
import type { LoginLog, User } from '@prisma/client'
import AvatarCard from '~/components/User/AvatarCard.vue'

const getI18nConfig = () => ({
  dataTableLoginLogUser: '用户',
  dataTableLoginLogBalance: '余额',
  dataTableLoginLogStartAt: '开始时间',
  dataTableLoginLogEndAt: '结束时间',
  dataTableLoginLogDay: '日期',
})

type I18nType = ReturnType<typeof getI18nConfig>

const {
  paginationReactive,
  loadingRef,

  listRef,
  i18nRef,
  columnsRef,
  rowProps,

  formValueRef,

  whereRef,
  handlePageChange,
  handlePageSizeChange,
  handleSorterChange,
  handleFiltersChange,
} = useDataTable<LoginLog, I18nType>({
  model: 'loginLog',
  getI18nConfig,

  getColumns: () => {
    const columns: DataTableColumn<LoginLog>[] = [
      {
        title: i18nRef.dataTableLoginLogUser,
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
        title: i18nRef.dataTableLoginLogDay,
        key: 'day',
        resizable: true,
      },
      {
        title: i18nRef.dataTableLoginLogStartAt,
        key: 'startAt',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return getDayjs(row.startAt).format('YYYY-MM-DD HH:mm')
        },
      },
      {
        title: i18nRef.dataTableLoginLogEndAt,
        key: 'endAt',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return row.endAt ? getDayjs(row.endAt).format('YYYY-MM-DD HH:mm') : '-'
        },
      },
    ]
    return columns
  },
  getDefFormData: () => ({
    userId: null,
  }),
  getSelectForList: () => ({
    select: {
      startAt: true,
      endAt: true,
      day: true,
      userId: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  }),
  initOrderBy: () => [
    {
      startAt: 'desc',
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
