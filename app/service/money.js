'use strict';

const Service = require('egg').Service;

class MoneyService extends Service {
  async findList(params) {
    const where = {};
    if (params.state) where.state = params.state;
    const result = await this.app.mysql.select('account_book', {
      where,
      // columns: ['author', 'title'],
      orders: [[ 'pay_time', 'desc' ]],
    });
    return { list: result };
  }

  async addMoneys(obj) {
    const userList = await this.app.mysql.select('user');
    const users = {};
    userList.forEach((item) => {
      users[item.id] = item;
    });
    obj.money.forEach(item => {
      item.gmt_created = this.app.mysql.literals.now;
      item.payerName = users[item.payer].chineseName;
    });
    console.log(obj.money);
    const result = await this.app.mysql.insert('account_book', obj.money);
    return result;
  }

  async getAverage(obj) {
    const sql = `
    SELECT payer, payerName, SUM(fee) as total
    FROM account_book
    WHERE state = 1
    GROUP BY payer, payerName
    `;
    const result = await this.app.mysql.query(sql);
    console.log(result);
    return result;
    // this.findList({ state : 1 }).then((res) => {
    //   let sum = 0;
    //   res.list.forEach((item) => {
    //     sum = sum + item.fee;
    //   });
    //   const average = sum / 3;
    // });
  }
}

module.exports = MoneyService;
