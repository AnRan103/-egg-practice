'use strict';

const Controller = require('egg').Controller;

class MoneyController extends Controller {
  async list() {
    console.log('money/list');
    const { ctx } = this;
    const data = await ctx.service.money.findList();
    ctx.body = data;
  }
  async add() {
    const params = this.ctx.request.body;
    const id = parseInt(Math.random() * 100);
    await this.ctx.service.money.add({ ...params, id });
    this.ctx.body = id;
  }
}

module.exports = MoneyController;

