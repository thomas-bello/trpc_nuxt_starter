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
            .input($Schema.ProduceSpecificationValueInputSchema.aggregate)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.aggregate(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['aggregate'],
            ReturnType<PrismaClient['produceSpecificationValue']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['createMany'],
            ReturnType<PrismaClient['produceSpecificationValue']['createMany']>
        >,

        create: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['create'],
            ReturnType<PrismaClient['produceSpecificationValue']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['deleteMany'],
            ReturnType<PrismaClient['produceSpecificationValue']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['delete'],
            ReturnType<PrismaClient['produceSpecificationValue']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.findFirst(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['findFirst'],
            ReturnType<PrismaClient['produceSpecificationValue']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['findFirst'],
            ReturnType<PrismaClient['produceSpecificationValue']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.findMany)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.findMany(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['findMany'],
            ReturnType<PrismaClient['produceSpecificationValue']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.findUnique(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['findUnique'],
            ReturnType<PrismaClient['produceSpecificationValue']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['findUnique'],
            ReturnType<PrismaClient['produceSpecificationValue']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.groupBy)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecificationValue.groupBy(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['groupBy'],
            ReturnType<PrismaClient['produceSpecificationValue']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['updateMany'],
            ReturnType<PrismaClient['produceSpecificationValue']['updateMany']>
        >,

        update: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['update'],
            ReturnType<PrismaClient['produceSpecificationValue']['update']>
        >,

        upsert: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecificationValue.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['upsert'],
            ReturnType<PrismaClient['produceSpecificationValue']['upsert']>
        >,

        count: procedure
            .input($Schema.ProduceSpecificationValueInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecificationValue.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationValueInputSchema)['count'],
            ReturnType<PrismaClient['produceSpecificationValue']['count']>
        >,
    });
}
