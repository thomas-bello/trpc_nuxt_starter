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
            .input($Schema.PhysicalProduceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).physicalProduce.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['aggregate'],
            ReturnType<PrismaClient['physicalProduce']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.PhysicalProduceInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['createMany'],
            ReturnType<PrismaClient['physicalProduce']['createMany']>
        >,

        create: procedure
            .input($Schema.PhysicalProduceInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['create'],
            ReturnType<PrismaClient['physicalProduce']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PhysicalProduceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['physicalProduce']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PhysicalProduceInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['delete'],
            ReturnType<PrismaClient['physicalProduce']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PhysicalProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).physicalProduce.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['physicalProduce']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PhysicalProduceInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).physicalProduce.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['physicalProduce']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PhysicalProduceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).physicalProduce.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['findMany'],
            ReturnType<PrismaClient['physicalProduce']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PhysicalProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).physicalProduce.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['physicalProduce']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PhysicalProduceInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).physicalProduce.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['physicalProduce']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PhysicalProduceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).physicalProduce.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['groupBy'],
            ReturnType<PrismaClient['physicalProduce']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PhysicalProduceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['updateMany'],
            ReturnType<PrismaClient['physicalProduce']['updateMany']>
        >,

        update: procedure
            .input($Schema.PhysicalProduceInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['update'],
            ReturnType<PrismaClient['physicalProduce']['update']>
        >,

        upsert: procedure
            .input($Schema.PhysicalProduceInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).physicalProduce.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['upsert'],
            ReturnType<PrismaClient['physicalProduce']['upsert']>
        >,

        count: procedure
            .input($Schema.PhysicalProduceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).physicalProduce.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PhysicalProduceInputSchema)['count'],
            ReturnType<PrismaClient['physicalProduce']['count']>
        >,
    });
}
