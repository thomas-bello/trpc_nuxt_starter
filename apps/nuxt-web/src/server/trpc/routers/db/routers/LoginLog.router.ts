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
            .input($Schema.LoginLogInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['aggregate'],
            ReturnType<PrismaClient['loginLog']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.LoginLogInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['createMany'],
            ReturnType<PrismaClient['loginLog']['createMany']>
        >,

        create: procedure
            .input($Schema.LoginLogInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['create'],
            ReturnType<PrismaClient['loginLog']['create']>
        >,

        deleteMany: procedure
            .input($Schema.LoginLogInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['deleteMany'],
            ReturnType<PrismaClient['loginLog']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.LoginLogInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['delete'],
            ReturnType<PrismaClient['loginLog']['delete']>
        >,

        findFirst: procedure
            .input($Schema.LoginLogInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['findFirst'],
            ReturnType<PrismaClient['loginLog']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.LoginLogInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['findFirst'],
            ReturnType<PrismaClient['loginLog']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.LoginLogInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['findMany'],
            ReturnType<PrismaClient['loginLog']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.LoginLogInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['findUnique'],
            ReturnType<PrismaClient['loginLog']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.LoginLogInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['findUnique'],
            ReturnType<PrismaClient['loginLog']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.LoginLogInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['groupBy'],
            ReturnType<PrismaClient['loginLog']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.LoginLogInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['updateMany'],
            ReturnType<PrismaClient['loginLog']['updateMany']>
        >,

        update: procedure
            .input($Schema.LoginLogInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['update'],
            ReturnType<PrismaClient['loginLog']['update']>
        >,

        upsert: procedure
            .input($Schema.LoginLogInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).loginLog.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['upsert'],
            ReturnType<PrismaClient['loginLog']['upsert']>
        >,

        count: procedure
            .input($Schema.LoginLogInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).loginLog.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LoginLogInputSchema)['count'],
            ReturnType<PrismaClient['loginLog']['count']>
        >,
    });
}
