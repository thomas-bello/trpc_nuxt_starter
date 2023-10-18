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
            .input($Schema.ShopMemberInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['aggregate'],
            ReturnType<PrismaClient['shopMember']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ShopMemberInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).shopMember.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['createMany'],
            ReturnType<PrismaClient['shopMember']['createMany']>
        >,

        create: procedure
            .input($Schema.ShopMemberInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shopMember.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['create'],
            ReturnType<PrismaClient['shopMember']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ShopMemberInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).shopMember.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['deleteMany'],
            ReturnType<PrismaClient['shopMember']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ShopMemberInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shopMember.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['delete'],
            ReturnType<PrismaClient['shopMember']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ShopMemberInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['findFirst'],
            ReturnType<PrismaClient['shopMember']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ShopMemberInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['findFirst'],
            ReturnType<PrismaClient['shopMember']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ShopMemberInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['findMany'],
            ReturnType<PrismaClient['shopMember']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ShopMemberInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['findUnique'],
            ReturnType<PrismaClient['shopMember']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ShopMemberInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['findUnique'],
            ReturnType<PrismaClient['shopMember']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ShopMemberInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['groupBy'],
            ReturnType<PrismaClient['shopMember']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ShopMemberInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).shopMember.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['updateMany'],
            ReturnType<PrismaClient['shopMember']['updateMany']>
        >,

        update: procedure
            .input($Schema.ShopMemberInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shopMember.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['update'],
            ReturnType<PrismaClient['shopMember']['update']>
        >,

        upsert: procedure
            .input($Schema.ShopMemberInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).shopMember.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['upsert'],
            ReturnType<PrismaClient['shopMember']['upsert']>
        >,

        count: procedure
            .input($Schema.ShopMemberInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).shopMember.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ShopMemberInputSchema)['count'],
            ReturnType<PrismaClient['shopMember']['count']>
        >,
    });
}
