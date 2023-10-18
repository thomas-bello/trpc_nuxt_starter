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
            .input($Schema.ProduceSpecificationValuePriceInputSchema.aggregate)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.aggregate(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['aggregate'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['createMany'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['createMany']>
        >,

        create: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['create'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['delete'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.findFirst(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.findMany)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.findMany(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['findMany'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.findUnique(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.groupBy)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.groupBy(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['groupBy'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['updateMany'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['updateMany']>
        >,

        update: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['update'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['update']>
        >,

        upsert: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValuePrice.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['upsert'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['upsert']>
        >,

        count: procedure
            .input($Schema.ProduceSpecificationValuePriceInputSchema.count)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValuePrice.count(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValuePriceInputSchema)['count'],
            ReturnType<PrismaClient['produceSpecificationValuePrice']['count']>
        >,
    });
}
