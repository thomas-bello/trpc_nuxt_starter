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
            .input($Schema.ProduceSpecificationInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecification.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['aggregate'],
            ReturnType<PrismaClient['produceSpecification']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ProduceSpecificationInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['createMany'],
            ReturnType<PrismaClient['produceSpecification']['createMany']>
        >,

        create: procedure
            .input($Schema.ProduceSpecificationInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['create'],
            ReturnType<PrismaClient['produceSpecification']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ProduceSpecificationInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['deleteMany'],
            ReturnType<PrismaClient['produceSpecification']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ProduceSpecificationInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['delete'],
            ReturnType<PrismaClient['produceSpecification']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ProduceSpecificationInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecification.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['findFirst'],
            ReturnType<PrismaClient['produceSpecification']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ProduceSpecificationInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecification.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['findFirst'],
            ReturnType<PrismaClient['produceSpecification']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ProduceSpecificationInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecification.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['findMany'],
            ReturnType<PrismaClient['produceSpecification']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ProduceSpecificationInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecification.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['findUnique'],
            ReturnType<PrismaClient['produceSpecification']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ProduceSpecificationInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).produceSpecification.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['findUnique'],
            ReturnType<PrismaClient['produceSpecification']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ProduceSpecificationInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecification.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['groupBy'],
            ReturnType<PrismaClient['produceSpecification']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ProduceSpecificationInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['updateMany'],
            ReturnType<PrismaClient['produceSpecification']['updateMany']>
        >,

        update: procedure
            .input($Schema.ProduceSpecificationInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['update'],
            ReturnType<PrismaClient['produceSpecification']['update']>
        >,

        upsert: procedure
            .input($Schema.ProduceSpecificationInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).produceSpecification.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['upsert'],
            ReturnType<PrismaClient['produceSpecification']['upsert']>
        >,

        count: procedure
            .input($Schema.ProduceSpecificationInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).produceSpecification.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProduceSpecificationInputSchema)['count'],
            ReturnType<PrismaClient['produceSpecification']['count']>
        >,
    });
}
