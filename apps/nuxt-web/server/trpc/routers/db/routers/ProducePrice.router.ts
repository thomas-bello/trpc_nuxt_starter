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
            .input($Schema.ProducePriceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['aggregate'],
            ReturnType<PrismaClient['producePrice']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ProducePriceInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).producePrice.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['createMany'],
            ReturnType<PrismaClient['producePrice']['createMany']>
        >,

        create: procedure
            .input($Schema.ProducePriceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).producePrice.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['create'],
            ReturnType<PrismaClient['producePrice']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ProducePriceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).producePrice.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['producePrice']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ProducePriceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).producePrice.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['delete'],
            ReturnType<PrismaClient['producePrice']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ProducePriceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['producePrice']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ProducePriceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['producePrice']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ProducePriceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['findMany'],
            ReturnType<PrismaClient['producePrice']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ProducePriceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['producePrice']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ProducePriceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['producePrice']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ProducePriceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['groupBy'],
            ReturnType<PrismaClient['producePrice']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ProducePriceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).producePrice.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['updateMany'],
            ReturnType<PrismaClient['producePrice']['updateMany']>
        >,

        update: procedure
            .input($Schema.ProducePriceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).producePrice.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['update'],
            ReturnType<PrismaClient['producePrice']['update']>
        >,

        upsert: procedure
            .input($Schema.ProducePriceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).producePrice.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['upsert'],
            ReturnType<PrismaClient['producePrice']['upsert']>
        >,

        count: procedure
            .input($Schema.ProducePriceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).producePrice.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ProducePriceInputSchema)['count'],
            ReturnType<PrismaClient['producePrice']['count']>
        >,
    });
}
