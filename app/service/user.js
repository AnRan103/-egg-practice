'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(obj) {
    const user = await this.app.mysql.get('user', obj);
    return user;
  }
}

module.exports = UserService;
