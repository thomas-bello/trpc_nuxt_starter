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
            .input($Schema.CardProduceAccountInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduceAccount.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['aggregate'],
            ReturnType<PrismaClient['cardProduceAccount']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.CardProduceAccountInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['createMany'],
            ReturnType<PrismaClient['cardProduceAccount']['createMany']>
        >,

        create: procedure
            .input($Schema.CardProduceAccountInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['create'],
            ReturnType<PrismaClient['cardProduceAccount']['create']>
        >,

        deleteMany: procedure
            .input($Schema.CardProduceAccountInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['deleteMany'],
            ReturnType<PrismaClient['cardProduceAccount']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.CardProduceAccountInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['delete'],
            ReturnType<PrismaClient['cardProduceAccount']['delete']>
        >,

        findFirst: procedure
            .input($Schema.CardProduceAccountInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduceAccount.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['findFirst'],
            ReturnType<PrismaClient['cardProduceAccount']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.CardProduceAccountInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).cardProduceAccount.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['findFirst'],
            ReturnType<PrismaClient['cardProduceAccount']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.CardProduceAccountInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduceAccount.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['findMany'],
            ReturnType<PrismaClient['cardProduceAccount']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.CardProduceAccountInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduceAccount.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['findUnique'],
            ReturnType<PrismaClient['cardProduceAccount']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.CardProduceAccountInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).cardProduceAccount.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['findUnique'],
            ReturnType<PrismaClient['cardProduceAccount']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.CardProduceAccountInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduceAccount.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['groupBy'],
            ReturnType<PrismaClient['cardProduceAccount']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.CardProduceAccountInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['updateMany'],
            ReturnType<PrismaClient['cardProduceAccount']['updateMany']>
        >,

        update: procedure
            .input($Schema.CardProduceAccountInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['update'],
            ReturnType<PrismaClient['cardProduceAccount']['update']>
        >,

        upsert: procedure
            .input($Schema.CardProduceAccountInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).cardProduceAccount.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['upsert'],
            ReturnType<PrismaClient['cardProduceAccount']['upsert']>
        >,

        count: procedure
            .input($Schema.CardProduceAccountInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).cardProduceAccount.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CardProduceAccountInputSchema)['count'],
            ReturnType<PrismaClient['cardProduceAccount']['count']>
        >,
    });
}
