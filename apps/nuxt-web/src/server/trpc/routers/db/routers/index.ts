/* eslint-disable */
import {
  type AnyRouter,
  type AnyRootConfig,
  type CreateRouterInner,
  type Procedure,
  type ProcedureBuilder,
  type ProcedureParams,
  type ProcedureRouterRecord,
  type ProcedureType,
} from '@trpc/server'
import { type PrismaClient, type Prisma } from '@prisma/client'
import type z from 'zod'
import createUserRouter from './User.router'
import createAccountRouter from './Account.router'
import createSessionRouter from './Session.router'
import createVerificationTokenRouter from './VerificationToken.router'
import createLoginLogRouter from './LoginLog.router'
import createBalanceLogRouter from './BalanceLog.router'
import createShopRouter from './Shop.router'
import createShopMemberRouter from './ShopMember.router'
import createProduceSpecificationRouter from './ProduceSpecification.router'
import createProduceSpecificationValueRouter from './ProduceSpecificationValue.router'
import createProducePriceRouter from './ProducePrice.router'
import createProduceSpecificationValuePriceRouter from './ProduceSpecificationValuePrice.router'
import createProduceRouter from './Produce.router'
import createCardProduceAccountRouter from './CardProduceAccount.router'
import createCardProduceRouter from './CardProduce.router'
import createComboProduceRouter from './ComboProduce.router'
import createFreeExpressFeeRuleRouter from './FreeExpressFeeRule.router'
import createFreeExpressFeeRuleCityRouter from './FreeExpressFeeRuleCity.router'
import createExpressFeeRuleRouter from './ExpressFeeRule.router'
import createExpressFeeRuleCityRouter from './ExpressFeeRuleCity.router'
import createPhysicalProduceRouter from './PhysicalProduce.router'
import createI18nValueRouter from './I18nValue.router'
import createConfigValueRouter from './ConfigValue.router'

export { PrismaClient } from '@prisma/client'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <ProcRouterRecord extends ProcedureRouterRecord>(
  procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<{
  _config: Config
  _ctx_out: Config['$types']['ctx']
  _input_in: any
  _input_out: any
  _output_in: any
  _output_out: any
  _meta: Config['$types']['meta']
}>

type ExtractParamsFromProcBuilder<Builder extends ProcedureBuilder<any>> = Builder extends ProcedureBuilder<infer P>
  ? P
  : never

type FromPromise<P extends Promise<any>> = P extends Promise<infer T> ? T : never

type Join<A, B> = A extends symbol ? B : A & B

export type ProcReturns<
  PType extends ProcedureType,
  PBuilder extends ProcBuilder<BaseConfig>,
  ZType extends z.ZodType,
  PPromise extends Prisma.PrismaPromise<any>,
> = Procedure<
  PType,
  ProcedureParams<
    ExtractParamsFromProcBuilder<PBuilder>['_config'],
    ExtractParamsFromProcBuilder<PBuilder>['_ctx_out'],
    Join<ExtractParamsFromProcBuilder<PBuilder>['_input_in'], z.infer<ZType>>,
    Join<ExtractParamsFromProcBuilder<PBuilder>['_input_out'], z.infer<ZType>>,
    Join<ExtractParamsFromProcBuilder<PBuilder>['_output_in'], FromPromise<PPromise>>,
    Join<ExtractParamsFromProcBuilder<PBuilder>['_output_out'], FromPromise<PPromise>>,
    ExtractParamsFromProcBuilder<PBuilder>['_meta']
  >
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
  router: Router,
  procedure: Proc
) {
  return router({
    user: createUserRouter<Router, Proc>(router, procedure),
    account: createAccountRouter<Router, Proc>(router, procedure),
    session: createSessionRouter<Router, Proc>(router, procedure),
    verificationToken: createVerificationTokenRouter<Router, Proc>(router, procedure),
    loginLog: createLoginLogRouter<Router, Proc>(router, procedure),
    balanceLog: createBalanceLogRouter<Router, Proc>(router, procedure),
    shop: createShopRouter<Router, Proc>(router, procedure),
    shopMember: createShopMemberRouter<Router, Proc>(router, procedure),
    produceSpecification: createProduceSpecificationRouter<Router, Proc>(router, procedure),
    produceSpecificationValue: createProduceSpecificationValueRouter<Router, Proc>(router, procedure),
    producePrice: createProducePriceRouter<Router, Proc>(router, procedure),
    produceSpecificationValuePrice: createProduceSpecificationValuePriceRouter<Router, Proc>(router, procedure),
    produce: createProduceRouter<Router, Proc>(router, procedure),
    cardProduceAccount: createCardProduceAccountRouter<Router, Proc>(router, procedure),
    cardProduce: createCardProduceRouter<Router, Proc>(router, procedure),
    comboProduce: createComboProduceRouter<Router, Proc>(router, procedure),
    freeExpressFeeRule: createFreeExpressFeeRuleRouter<Router, Proc>(router, procedure),
    freeExpressFeeRuleCity: createFreeExpressFeeRuleCityRouter<Router, Proc>(router, procedure),
    expressFeeRule: createExpressFeeRuleRouter<Router, Proc>(router, procedure),
    expressFeeRuleCity: createExpressFeeRuleCityRouter<Router, Proc>(router, procedure),
    physicalProduce: createPhysicalProduceRouter<Router, Proc>(router, procedure),
    i18nValue: createI18nValueRouter<Router, Proc>(router, procedure),
    configValue: createConfigValueRouter<Router, Proc>(router, procedure),
  })
}
