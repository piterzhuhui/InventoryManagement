# inventory

仓库管理员测试账号：
账号：201811003
密码：123456

此项目是软件工程课程的大作业，是团队协作项目，主要完成出入库管理，库存帐务管理、统计报表，以及提供查询信息和提供库存报警数据。

产品入库管理的过程是：各生产车间随时将制造出来的产品连同填写好的入库单一起送至仓库。仓库人员首先进行检验，一是抽检产品的质量是否合格，二是核对产品的实物数量和规格是否与入库单相符，当然还要核对入库单上的产品代码。检验合格的产品立即进行产品入库处理，同时登记产品入库流水帐。检验不合格的产品要及时退回车间。

产品出库管理的过程是：仓库保管员根据销售科开出的有效产品出库单及时付货，并判明是零售出库还是成批销售出库，以便及时登记相应的产品出库流水帐。 

每天仓库平均核收三十笔入库业务，五十笔出库业务。每天出入库处理结束后，记帐员就根据入库流水帐和出库流水帐按产品及规格分别进行累计，以便将本日发生的累计数填入库存台帐。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


首页：

![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/home.png)

登录：
![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/login.png)

入库流水账页面：
![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/inventoryRecords.png)

添加：
![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/add.png)

出库流水账：
![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/OutboundRecords.png)

产品信息及库存量：
![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/StockList.png)

盘存管理：
![Image](https://github.com/piterzhuhui/InventoryManagement/blob/master/Screenshot/InventoryManagement.png)
