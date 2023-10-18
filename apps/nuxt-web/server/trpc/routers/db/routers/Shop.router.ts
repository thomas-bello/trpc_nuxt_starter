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
            .input($Schema.ShopInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['aggregate'],
            ReturnType<PrismaClient['shop']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ShopInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['createMany'],
            ReturnType<PrismaClient['shop']['createMany']>
        >,

        create: procedure
            .input($Schema.ShopInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['create'],
            ReturnType<PrismaClient['shop']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ShopInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['deleteMany'],
            ReturnType<PrismaClient['shop']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ShopInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['delete'],
            ReturnType<PrismaClient['shop']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ShopInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['findFirst'],
            ReturnType<PrismaClient['shop']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ShopInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['findFirst'],
            ReturnType<PrismaClient['shop']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ShopInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['findMany'],
            ReturnType<PrismaClient['shop']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ShopInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['findUnique'],
            ReturnType<PrismaClient['shop']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ShopInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['findUnique'],
            ReturnType<PrismaClient['shop']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ShopInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['groupBy'],
            ReturnType<PrismaClient['shop']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ShopInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['updateMany'],
            ReturnType<PrismaClient['shop']['updateMany']>
        >,

        update: procedure
            .input($Schema.ShopInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['update'],
            ReturnType<PrismaClient['shop']['update']>
        >,

        upsert: procedure
            .input($Schema.ShopInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shop.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopInputSchema)['upsert'],
            ReturnType<PrismaClient['shop']['upsert']>
        >,

        count: procedure
            .input($Schema.ShopInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).shop.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopInputSchema)['count'],
            ReturnType<PrismaClient['shop']['count']>
        >,
    });
}
