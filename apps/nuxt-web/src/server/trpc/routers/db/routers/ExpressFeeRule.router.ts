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
            .input($Schema.ExpressFeeRuleInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['aggregate'],
            ReturnType<PrismaClient['expressFeeRule']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ExpressFeeRuleInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['createMany'],
            ReturnType<PrismaClient['expressFeeRule']['createMany']>
        >,

        create: procedure
            .input($Schema.ExpressFeeRuleInputSchema.create)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.create(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['create'],
            ReturnType<PrismaClient['expressFeeRule']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ExpressFeeRuleInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['deleteMany'],
            ReturnType<PrismaClient['expressFeeRule']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ExpressFeeRuleInputSchema.delete)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.delete(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['delete'],
            ReturnType<PrismaClient['expressFeeRule']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ExpressFeeRuleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['findFirst'],
            ReturnType<PrismaClient['expressFeeRule']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ExpressFeeRuleInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['findFirst'],
            ReturnType<PrismaClient['expressFeeRule']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ExpressFeeRuleInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['findMany'],
            ReturnType<PrismaClient['expressFeeRule']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ExpressFeeRuleInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['findUnique'],
            ReturnType<PrismaClient['expressFeeRule']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ExpressFeeRuleInputSchema.findUnique)
            .query(({ ctx, input }) =>
                checkRead(db(ctx).expressFeeRule.findUniqueOrThrow(input as any)),
            ) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['findUnique'],
            ReturnType<PrismaClient['expressFeeRule']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ExpressFeeRuleInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['groupBy'],
            ReturnType<PrismaClient['expressFeeRule']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ExpressFeeRuleInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['updateMany'],
            ReturnType<PrismaClient['expressFeeRule']['updateMany']>
        >,

        update: procedure
            .input($Schema.ExpressFeeRuleInputSchema.update)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.update(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['update'],
            ReturnType<PrismaClient['expressFeeRule']['update']>
        >,

        upsert: procedure
            .input($Schema.ExpressFeeRuleInputSchema.upsert)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).expressFeeRule.upsert(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['upsert'],
            ReturnType<PrismaClient['expressFeeRule']['upsert']>
        >,

        count: procedure
            .input($Schema.ExpressFeeRuleInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).expressFeeRule.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ExpressFeeRuleInputSchema)['count'],
            ReturnType<PrismaClient['expressFeeRule']['count']>
        >,
    });
}
