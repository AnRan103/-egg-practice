#创建账本数据库
account book

CREATE TABLE `account_book` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `fee` decimal(10,2) NOT NULL COMMENT '价格',
  `detail` varchar(100) NOT NULL COMMENT '明细',
  `payer` bigint(20) NOT NULL COMMENT '付款人',
  `gmt_created` datetime NOT NULL COMMENT '创建时间'
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='账本表';

# egg-fee

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org