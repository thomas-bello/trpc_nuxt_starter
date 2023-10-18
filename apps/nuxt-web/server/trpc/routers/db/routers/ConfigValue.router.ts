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
            .input($Schema.ConfigValueInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['aggregate'],
            ReturnType<PrismaClient['configValue']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ConfigValueInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).configValue.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['createMany'],
            ReturnType<PrismaClient['configValue']['createMany']>
        >,

        create: procedure
            .input($Schema.ConfigValueInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).configValue.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['create'],
            ReturnType<PrismaClient['configValue']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ConfigValueInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).configValue.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['deleteMany'],
            ReturnType<PrismaClient['configValue']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ConfigValueInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).configValue.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['delete'],
            ReturnType<PrismaClient['configValue']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ConfigValueInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['findFirst'],
            ReturnType<PrismaClient['configValue']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ConfigValueInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['findFirst'],
            ReturnType<PrismaClient['configValue']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ConfigValueInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['findMany'],
            ReturnType<PrismaClient['configValue']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ConfigValueInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['findUnique'],
            ReturnType<PrismaClient['configValue']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ConfigValueInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['findUnique'],
            ReturnType<PrismaClient['configValue']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ConfigValueInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['groupBy'],
            ReturnType<PrismaClient['configValue']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ConfigValueInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).configValue.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['updateMany'],
            ReturnType<PrismaClient['configValue']['updateMany']>
        >,

        update: procedure
            .input($Schema.ConfigValueInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).configValue.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['update'],
            ReturnType<PrismaClient['configValue']['update']>
        >,

        upsert: procedure
            .input($Schema.ConfigValueInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).configValue.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['upsert'],
            ReturnType<PrismaClient['configValue']['upsert']>
        >,

        count: procedure
            .input($Schema.ConfigValueInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).configValue.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ConfigValueInputSchema)['count'],
            ReturnType<PrismaClient['configValue']['count']>
        >,
    });
}
