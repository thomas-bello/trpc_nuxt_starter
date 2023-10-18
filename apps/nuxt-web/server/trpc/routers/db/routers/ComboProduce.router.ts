/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.ComboProduceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['aggregate'],
            ReturnType<PrismaClient['comboProduce']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ComboProduceInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).comboProduce.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['createMany'],
            ReturnType<PrismaClient['comboProduce']['createMany']>
        >,

        create: procedure
            .input($Schema.ComboProduceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comboProduce.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['create'],
            ReturnType<PrismaClient['comboProduce']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ComboProduceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).comboProduce.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['comboProduce']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ComboProduceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comboProduce.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['delete'],
            ReturnType<PrismaClient['comboProduce']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ComboProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['comboProduce']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ComboProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['comboProduce']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ComboProduceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['findMany'],
            ReturnType<PrismaClient['comboProduce']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ComboProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['comboProduce']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ComboProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['comboProduce']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ComboProduceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['groupBy'],
            ReturnType<PrismaClient['comboProduce']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ComboProduceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).comboProduce.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['updateMany'],
            ReturnType<PrismaClient['comboProduce']['updateMany']>
        >,

        update: procedure
            .input($Schema.ComboProduceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comboProduce.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['update'],
            ReturnType<PrismaClient['comboProduce']['update']>
        >,

        upsert: procedure
            .input($Schema.ComboProduceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).comboProduce.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['upsert'],
            ReturnType<PrismaClient['comboProduce']['upsert']>
        >,

        count: procedure
            .input($Schema.ComboProduceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).comboProduce.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ComboProduceInputSchema)['count'],
            ReturnType<PrismaClient['comboProduce']['count']>
        >,
    });
}
