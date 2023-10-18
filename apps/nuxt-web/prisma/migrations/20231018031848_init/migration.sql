-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `inviterId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,

    PRIMARY KEY (`provider`, `providerAccountId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    PRIMARY KEY (`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoginLog` (
    `day` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `startAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`day`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shop` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `status` ENUM('OPEND', 'DRAFT', 'REVIEW') NOT NULL DEFAULT 'DRAFT',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShopMember` (
    `role` ENUM('OWNER', 'ADMIN', 'SALER') NOT NULL,
    `shopId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`shopId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProduceSpecification` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(191) NOT NULL,
    `producId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProduceSpecificationValue` (
    `id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `iamge` VARCHAR(191) NULL,
    `produceSpecificationId` VARCHAR(191) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProducePrice` (
    `id` VARCHAR(191) NOT NULL,
    `goods_no` VARCHAR(191) NULL,
    `currency` ENUM('AUD', 'CAD', 'CHF', 'DKK', 'EUR', 'GBP', 'HKD', 'JPY', 'KRW', 'KZT', 'MOP', 'MYR', 'NOK', 'NZD', 'PKR', 'RUB', 'SEK', 'SGD', 'THB', 'USD', 'ZAR', 'PHP', 'CNY') NOT NULL DEFAULT 'CNY',
    `price` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `cost` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `weight` INTEGER NOT NULL DEFAULT 0,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `reduceStock` INTEGER NOT NULL,
    `saled` INTEGER NOT NULL DEFAULT 0,
    `saledAmount` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `deletedAt` DATETIME(3) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `producId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProduceSpecificationValuePrice` (
    `producePriceId` VARCHAR(191) NOT NULL,
    `produceSpecificationValueId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`producePriceId`, `produceSpecificationValueId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produce` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('IN_STOCK', 'DRAFT', 'REVIEW') NOT NULL DEFAULT 'DRAFT',
    `linePrice` DECIMAL(65, 30) NOT NULL,
    `tags` VARCHAR(191) NULL,
    `visits` INTEGER NOT NULL DEFAULT 0,
    `saled` INTEGER NOT NULL DEFAULT 0,
    `saledAmount` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `isLimitBuy` BOOLEAN NOT NULL DEFAULT false,
    `limitBuyType` ENUM('DAY', 'WEEK', 'MONTH', 'ONCE') NULL,
    `limitBuyValue` INTEGER NULL,
    `minBuyValue` INTEGER NULL,
    `shopId` VARCHAR(191) NOT NULL,
    `type` ENUM('CARD', 'COMBO', 'PHYSICAL') NOT NULL DEFAULT 'PHYSICAL',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CardProduceAccount` (
    `id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `status` ENUM('IN_STOCK', 'SOLD') NOT NULL DEFAULT 'IN_STOCK',
    `cardProduceId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CardProduce` (
    `id` VARCHAR(191) NOT NULL,
    `produceId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CardProduce_produceId_key`(`produceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComboProduce` (
    `id` VARCHAR(191) NOT NULL,
    `produceId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ComboProduce_produceId_key`(`produceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FreeExpressFeeRule` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('ORDER_AMOUNT_LIMIT', 'ORDER_FEE_LIMIT', 'PRODUCE_AMOUNT_LIMIT', 'PRODUCE_FEE_LIMIT') NOT NULL DEFAULT 'ORDER_FEE_LIMIT',
    `isDef` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FreeExpressFeeRuleCity` (
    `id` VARCHAR(191) NOT NULL,
    `citys` VARCHAR(191) NOT NULL,
    `limit` INTEGER NOT NULL,
    `freeExpressFeeRuleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExpressFeeRule` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('AMOUNT', 'WEIGHT') NOT NULL DEFAULT 'AMOUNT',
    `isDef` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExpressFeeRuleCity` (
    `id` VARCHAR(191) NOT NULL,
    `citys` VARCHAR(191) NOT NULL,
    `firstLimit` INTEGER NOT NULL,
    `firstFee` DECIMAL(65, 30) NOT NULL,
    `step` INTEGER NOT NULL,
    `stepFee` DECIMAL(65, 30) NOT NULL,
    `expressFeeRuleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PhysicalProduce` (
    `id` VARCHAR(191) NOT NULL,
    `produceId` VARCHAR(191) NOT NULL,
    `expressFee` DECIMAL(65, 30) NOT NULL,
    `isFreeExpressFee` BOOLEAN NOT NULL,
    `freeExpressFeeRuleId` VARCHAR(191) NOT NULL,
    `expressFeeRuleId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PhysicalProduce_produceId_key`(`produceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `I18nValue` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `lang` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConfigValue` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `creatorId` VARCHAR(191) NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `key` ENUM('TENCENT_COS_SECRET', 'TENCENT_COS_UPLOAD') NOT NULL,
    `value` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProducePriceToProduceSpecificationValue` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProducePriceToProduceSpecificationValue_AB_unique`(`A`, `B`),
    INDEX `_ProducePriceToProduceSpecificationValue_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_inviterId_fkey` FOREIGN KEY (`inviterId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoginLog` ADD CONSTRAINT `LoginLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shop` ADD CONSTRAINT `Shop_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShopMember` ADD CONSTRAINT `ShopMember_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShopMember` ADD CONSTRAINT `ShopMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProduceSpecification` ADD CONSTRAINT `ProduceSpecification_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProduceSpecification` ADD CONSTRAINT `ProduceSpecification_producId_fkey` FOREIGN KEY (`producId`) REFERENCES `Produce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProduceSpecificationValue` ADD CONSTRAINT `ProduceSpecificationValue_produceSpecificationId_fkey` FOREIGN KEY (`produceSpecificationId`) REFERENCES `ProduceSpecification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProducePrice` ADD CONSTRAINT `ProducePrice_producId_fkey` FOREIGN KEY (`producId`) REFERENCES `Produce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProduceSpecificationValuePrice` ADD CONSTRAINT `ProduceSpecificationValuePrice_producePriceId_fkey` FOREIGN KEY (`producePriceId`) REFERENCES `ProducePrice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProduceSpecificationValuePrice` ADD CONSTRAINT `ProduceSpecificationValuePrice_produceSpecificationValueId_fkey` FOREIGN KEY (`produceSpecificationValueId`) REFERENCES `ProduceSpecificationValue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produce` ADD CONSTRAINT `Produce_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produce` ADD CONSTRAINT `Produce_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardProduceAccount` ADD CONSTRAINT `CardProduceAccount_cardProduceId_fkey` FOREIGN KEY (`cardProduceId`) REFERENCES `CardProduce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardProduce` ADD CONSTRAINT `CardProduce_produceId_fkey` FOREIGN KEY (`produceId`) REFERENCES `Produce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboProduce` ADD CONSTRAINT `ComboProduce_produceId_fkey` FOREIGN KEY (`produceId`) REFERENCES `Produce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FreeExpressFeeRule` ADD CONSTRAINT `FreeExpressFeeRule_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FreeExpressFeeRuleCity` ADD CONSTRAINT `FreeExpressFeeRuleCity_freeExpressFeeRuleId_fkey` FOREIGN KEY (`freeExpressFeeRuleId`) REFERENCES `FreeExpressFeeRule`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExpressFeeRule` ADD CONSTRAINT `ExpressFeeRule_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExpressFeeRuleCity` ADD CONSTRAINT `ExpressFeeRuleCity_expressFeeRuleId_fkey` FOREIGN KEY (`expressFeeRuleId`) REFERENCES `ExpressFeeRule`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhysicalProduce` ADD CONSTRAINT `PhysicalProduce_produceId_fkey` FOREIGN KEY (`produceId`) REFERENCES `Produce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhysicalProduce` ADD CONSTRAINT `PhysicalProduce_freeExpressFeeRuleId_fkey` FOREIGN KEY (`freeExpressFeeRuleId`) REFERENCES `FreeExpressFeeRule`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhysicalProduce` ADD CONSTRAINT `PhysicalProduce_expressFeeRuleId_fkey` FOREIGN KEY (`expressFeeRuleId`) REFERENCES `ExpressFeeRule`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `I18nValue` ADD CONSTRAINT `I18nValue_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConfigValue` ADD CONSTRAINT `ConfigValue_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProducePriceToProduceSpecificationValue` ADD CONSTRAINT `_ProducePriceToProduceSpecificationValue_A_fkey` FOREIGN KEY (`A`) REFERENCES `ProducePrice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProducePriceToProduceSpecificationValue` ADD CONSTRAINT `_ProducePriceToProduceSpecificationValue_B_fkey` FOREIGN KEY (`B`) REFERENCES `ProduceSpecificationValue`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
