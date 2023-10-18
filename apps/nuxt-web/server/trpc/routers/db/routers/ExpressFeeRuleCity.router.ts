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
            .input($Schema.ExpressFeeRuleCityInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRuleCity.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['aggregate'],
            ReturnType<PrismaClient['expressFeeRuleCity']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['createMany'],
            ReturnType<PrismaClient['expressFeeRuleCity']['createMany']>
        >,

        create: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['create'],
            ReturnType<PrismaClient['expressFeeRuleCity']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['deleteMany'],
            ReturnType<PrismaClient['expressFeeRuleCity']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['delete'],
            ReturnType<PrismaClient['expressFeeRuleCity']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRuleCity.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['findFirst'],
            ReturnType<PrismaClient['expressFeeRuleCity']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.findFirst)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).expressFeeRuleCity.findFirstOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['findFirst'],
            ReturnType<PrismaClient['expressFeeRuleCity']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRuleCity.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['findMany'],
            ReturnType<PrismaClient['expressFeeRuleCity']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRuleCity.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['findUnique'],
            ReturnType<PrismaClient['expressFeeRuleCity']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).expressFeeRuleCity.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['findUnique'],
            ReturnType<PrismaClient['expressFeeRuleCity']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRuleCity.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['groupBy'],
            ReturnType<PrismaClient['expressFeeRuleCity']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['updateMany'],
            ReturnType<PrismaClient['expressFeeRuleCity']['updateMany']>
        >,

        update: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['update'],
            ReturnType<PrismaClient['expressFeeRuleCity']['update']>
        >,

        upsert: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRuleCity.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['upsert'],
            ReturnType<PrismaClient['expressFeeRuleCity']['upsert']>
        >,

        count: procedure
            .input($Schema.ExpressFeeRuleCityInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRuleCity.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleCityInputSchema)['count'],
            ReturnType<PrismaClient['expressFeeRuleCity']['count']>
        >,
    });
}
