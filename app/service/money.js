'use strict';

const Service = require('egg').Service;

class MoneyService extends Service {
  async findList() {
    const user = await this.app.mysql.get('money');
    return user;
  }
  async add(obj) {
    await this.app.mysql.insert('money', obj);
  }
}

module.exports = MoneyService;
