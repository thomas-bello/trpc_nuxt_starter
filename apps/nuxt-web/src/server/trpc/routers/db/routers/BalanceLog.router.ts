/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.'
import $Schema from '@zenstackhq/runtime/zod/input'
import { checkRead, checkMutate } from '../helper'

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
  router: Router,
  procedure: Proc
) {
  return router({
    aggregate: procedure
      .input($Schema.BalanceLogInputSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.aggregate(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['aggregate'],
      ReturnType<PrismaClient['balanceLog']['aggregate']>
    >,

    createMany: procedure
      .input($Schema.BalanceLogInputSchema.createMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.createMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['createMany'],
      ReturnType<PrismaClient['balanceLog']['createMany']>
    >,

    create: procedure
      .input($Schema.BalanceLogInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.create(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['create'],
      ReturnType<PrismaClient['balanceLog']['create']>
    >,

    deleteMany: procedure
      .input($Schema.BalanceLogInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.deleteMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['deleteMany'],
      ReturnType<PrismaClient['balanceLog']['deleteMany']>
    >,

    delete: procedure
      .input($Schema.BalanceLogInputSchema.delete)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.delete(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['delete'],
      ReturnType<PrismaClient['balanceLog']['delete']>
    >,

    findFirst: procedure
      .input($Schema.BalanceLogInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.findFirst(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['findFirst'],
      ReturnType<PrismaClient['balanceLog']['findFirst']>
    >,

    findFirstOrThrow: procedure
      .input($Schema.BalanceLogInputSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.findFirstOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['findFirst'],
      ReturnType<PrismaClient['balanceLog']['findFirstOrThrow']>
    >,

    findMany: procedure
      .input($Schema.BalanceLogInputSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.findMany(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['findMany'],
      ReturnType<PrismaClient['balanceLog']['findMany']>
    >,

    findUnique: procedure
      .input($Schema.BalanceLogInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.findUnique(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['findUnique'],
      ReturnType<PrismaClient['balanceLog']['findUnique']>
    >,

    findUniqueOrThrow: procedure
      .input($Schema.BalanceLogInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.findUniqueOrThrow(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['findUnique'],
      ReturnType<PrismaClient['balanceLog']['findUniqueOrThrow']>
    >,

    groupBy: procedure
      .input($Schema.BalanceLogInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.groupBy(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['groupBy'],
      ReturnType<PrismaClient['balanceLog']['groupBy']>
    >,

    updateMany: procedure
      .input($Schema.BalanceLogInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.updateMany(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['updateMany'],
      ReturnType<PrismaClient['balanceLog']['updateMany']>
    >,

    update: procedure
      .input($Schema.BalanceLogInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.update(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['update'],
      ReturnType<PrismaClient['balanceLog']['update']>
    >,

    upsert: procedure
      .input($Schema.BalanceLogInputSchema.upsert)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).balanceLog.upsert(input as any))) as ProcReturns<
      'mutation',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['upsert'],
      ReturnType<PrismaClient['balanceLog']['upsert']>
    >,

    count: procedure
      .input($Schema.BalanceLogInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).balanceLog.count(input as any))) as ProcReturns<
      'query',
      Proc,
      (typeof $Schema.BalanceLogInputSchema)['count'],
      ReturnType<PrismaClient['balanceLog']['count']>
    >,
  })
}
