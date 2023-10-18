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
            .input($Schema.FreeExpressFeeRuleInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRule.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['aggregate'],
            ReturnType<PrismaClient['freeExpressFeeRule']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['createMany'],
            ReturnType<PrismaClient['freeExpressFeeRule']['createMany']>
        >,

        create: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['create'],
            ReturnType<PrismaClient['freeExpressFeeRule']['create']>
        >,

        deleteMany: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['deleteMany'],
            ReturnType<PrismaClient['freeExpressFeeRule']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['delete'],
            ReturnType<PrismaClient['freeExpressFeeRule']['delete']>
        >,

        findFirst: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRule.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['findFirst'],
            ReturnType<PrismaClient['freeExpressFeeRule']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRule.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['findFirst'],
            ReturnType<PrismaClient['freeExpressFeeRule']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRule.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['findMany'],
            ReturnType<PrismaClient['freeExpressFeeRule']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRule.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['findUnique'],
            ReturnType<PrismaClient['freeExpressFeeRule']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRule.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['findUnique'],
            ReturnType<PrismaClient['freeExpressFeeRule']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRule.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['groupBy'],
            ReturnType<PrismaClient['freeExpressFeeRule']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['updateMany'],
            ReturnType<PrismaClient['freeExpressFeeRule']['updateMany']>
        >,

        update: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['update'],
            ReturnType<PrismaClient['freeExpressFeeRule']['update']>
        >,

        upsert: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRule.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['upsert'],
            ReturnType<PrismaClient['freeExpressFeeRule']['upsert']>
        >,

        count: procedure
            .input($Schema.FreeExpressFeeRuleInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRule.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleInputSchema)['count'],
            ReturnType<PrismaClient['freeExpressFeeRule']['count']>
        >,
    });
}
