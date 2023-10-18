import z from 'zod'

export const getZodWhere = (props?) => {
  const { where } = props || {}
  return {
    where: z.object({
      deleted: z.boolean().default(false),
      ...(where || {}),
    }),
  }
}

export const getZodWhereInput = (props?) => {
  return z.object({
    ...getZodWhere(props),
  })
}

export const getZodIdInput = () => {
  return z.object({
    id: z.string(),
  })
}

export const getZodFindManyInput = (props?) => {
  return z.object({
    ...getZodWhere(props),

    skip: z.number().default(0),
    take: z.number().min(1).max(50).default(10),
  })
}
