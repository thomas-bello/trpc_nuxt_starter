export interface PostMeta {
  page: number
  limit: number
}

export interface Meta extends PostMeta {
  total: number
  hasNext: boolean
}
