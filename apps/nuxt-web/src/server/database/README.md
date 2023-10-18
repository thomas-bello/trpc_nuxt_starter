# database

[中文文档](https://prisma.yoga/)

```bash
Set up a new Prisma project
$ prisma init

Generate artifacts (e.g. Prisma Client) 生成js代码的对象定义
$ prisma generate

Browse your data
$ prisma studio

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ prisma migrate dev

Pull the schema from an existing database, updating the Prisma schema
$ prisma db pull

Push the Prisma schema state to the database
$ prisma db push

Validate your Prisma schema
$ prisma validate

Format your Prisma schema
$ prisma format
```

通过 Prisma 的数据库迁移工具 Prisma Migrate，工作流如下：

- 手动调整你的 Prisma 数据模型（data model）
- 通过 `prisma migrate dev` 命令同步表结构到你的开发数据库中。
- 在应用代码中使用 Prisma Client 访问数据库

假如你是删了 `node_modules` 的话，在安装包的时候会自动调用`prisma generate`。如果发现 `@prisma/client` 无法导出你定义的模型，也可以手动调用 `prisma generate` 重新生成 Prisma Client 来确保 `node_modules/.prisma/client` 中的代码也更新了。

当你修改了你的数据模型（data model），你需要手动调用`prisma migrate dev`重新生成 Prisma Client 来确保 `node_modules/.prisma/client` 中的代码也更新了。

## zenstackhq

[zenstackhq](https://zenstack.dev)

[sample-multiple-schema](https://github.dev/zenstackhq/sample-multiple-schema)

[sample-todo-trpc](https://github.dev/zenstackhq/sample-todo-trpc)
