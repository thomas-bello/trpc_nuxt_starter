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
            .input($Schema.I18nValueInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['aggregate'],
            ReturnType<PrismaClient['i18nValue']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.I18nValueInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['createMany'],
            ReturnType<PrismaClient['i18nValue']['createMany']>
        >,

        create: procedure
            .input($Schema.I18nValueInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['create'],
            ReturnType<PrismaClient['i18nValue']['create']>
        >,

        deleteMany: procedure
            .input($Schema.I18nValueInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['deleteMany'],
            ReturnType<PrismaClient['i18nValue']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.I18nValueInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['delete'],
            ReturnType<PrismaClient['i18nValue']['delete']>
        >,

        findFirst: procedure
            .input($Schema.I18nValueInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['findFirst'],
            ReturnType<PrismaClient['i18nValue']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.I18nValueInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['findFirst'],
            ReturnType<PrismaClient['i18nValue']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.I18nValueInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['findMany'],
            ReturnType<PrismaClient['i18nValue']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.I18nValueInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['findUnique'],
            ReturnType<PrismaClient['i18nValue']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.I18nValueInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['findUnique'],
            ReturnType<PrismaClient['i18nValue']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.I18nValueInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['groupBy'],
            ReturnType<PrismaClient['i18nValue']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.I18nValueInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['updateMany'],
            ReturnType<PrismaClient['i18nValue']['updateMany']>
        >,

        update: procedure
            .input($Schema.I18nValueInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['update'],
            ReturnType<PrismaClient['i18nValue']['update']>
        >,

        upsert: procedure
            .input($Schema.I18nValueInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).i18nValue.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['upsert'],
            ReturnType<PrismaClient['i18nValue']['upsert']>
        >,

        count: procedure
            .input($Schema.I18nValueInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).i18nValue.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.I18nValueInputSchema)['count'],
            ReturnType<PrismaClient['i18nValue']['count']>
        >,
    });
}
