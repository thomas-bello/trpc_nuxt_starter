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
            .input($Schema.ProduceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['aggregate'],
            ReturnType<PrismaClient['produce']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ProduceInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['createMany'],
            ReturnType<PrismaClient['produce']['createMany']>
        >,

        create: procedure
            .input($Schema.ProduceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['create'],
            ReturnType<PrismaClient['produce']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ProduceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['produce']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ProduceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['delete'],
            ReturnType<PrismaClient['produce']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['produce']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['produce']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ProduceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['findMany'],
            ReturnType<PrismaClient['produce']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['produce']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['produce']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ProduceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['groupBy'],
            ReturnType<PrismaClient['produce']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ProduceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['updateMany'],
            ReturnType<PrismaClient['produce']['updateMany']>
        >,

        update: procedure
            .input($Schema.ProduceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['update'],
            ReturnType<PrismaClient['produce']['update']>
        >,

        upsert: procedure
            .input($Schema.ProduceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).produce.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceInputSchema)['upsert'],
            ReturnType<PrismaClient['produce']['upsert']>
        >,

        count: procedure
            .input($Schema.ProduceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).produce.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceInputSchema)['count'],
            ReturnType<PrismaClient['produce']['count']>
        >,
    });
}
