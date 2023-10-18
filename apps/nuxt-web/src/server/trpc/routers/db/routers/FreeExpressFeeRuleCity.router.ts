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
            .input($Schema.FreeExpressFeeRuleCityInputSchema.aggregate)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRuleCity.aggregate(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['aggregate'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['createMany'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['createMany']>
        >,

        create: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['create'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['create']>
        >,

        deleteMany: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['deleteMany'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['delete'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['delete']>
        >,

        findFirst: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRuleCity.findFirst(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['findFirst'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRuleCity.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['findFirst'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRuleCity.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['findMany'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRuleCity.findUnique(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['findUnique'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).freeExpressFeeRuleCity.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['findUnique'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRuleCity.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['groupBy'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['updateMany'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['updateMany']>
        >,

        update: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['update'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['update']>
        >,

        upsert: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).freeExpressFeeRuleCity.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['upsert'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['upsert']>
        >,

        count: procedure
            .input($Schema.FreeExpressFeeRuleCityInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).freeExpressFeeRuleCity.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FreeExpressFeeRuleCityInputSchema)['count'],
            ReturnType<PrismaClient['freeExpressFeeRuleCity']['count']>
        >,
    });
}
