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
            .input($Schema.CardProduceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['aggregate'],
            ReturnType<PrismaClient['cardProduce']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.CardProduceInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduce.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['createMany'],
            ReturnType<PrismaClient['cardProduce']['createMany']>
        >,

        create: procedure
            .input($Schema.CardProduceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).cardProduce.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['create'],
            ReturnType<PrismaClient['cardProduce']['create']>
        >,

        deleteMany: procedure
            .input($Schema.CardProduceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduce.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['cardProduce']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.CardProduceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).cardProduce.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['delete'],
            ReturnType<PrismaClient['cardProduce']['delete']>
        >,

        findFirst: procedure
            .input($Schema.CardProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['cardProduce']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.CardProduceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['findFirst'],
            ReturnType<PrismaClient['cardProduce']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.CardProduceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['findMany'],
            ReturnType<PrismaClient['cardProduce']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.CardProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['cardProduce']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.CardProduceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['findUnique'],
            ReturnType<PrismaClient['cardProduce']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.CardProduceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['groupBy'],
            ReturnType<PrismaClient['cardProduce']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.CardProduceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduce.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['updateMany'],
            ReturnType<PrismaClient['cardProduce']['updateMany']>
        >,

        update: procedure
            .input($Schema.CardProduceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).cardProduce.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['update'],
            ReturnType<PrismaClient['cardProduce']['update']>
        >,

        upsert: procedure
            .input($Schema.CardProduceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).cardProduce.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['upsert'],
            ReturnType<PrismaClient['cardProduce']['upsert']>
        >,

        count: procedure
            .input($Schema.CardProduceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduce.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceInputSchema)['count'],
            ReturnType<PrismaClient['cardProduce']['count']>
        >,
    });
}
