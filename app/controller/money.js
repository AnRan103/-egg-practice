'use strict';

const Controller = require('egg').Controller;

class MoneyController extends Controller {
  async list() {
    console.log('money/list');
    const { ctx } = this;
    const params = ctx.request.body;
    const data = await ctx.service.money.findList(params);
    ctx.body = data;
  }

  async addMoneys() {
    const params = this.ctx.request.body;
    // const id = parseInt(Math.random() * 100);
    // await this.ctx.service.money.add(params);
    this.ctx.body = await this.ctx.service.money.addMoneys(params);
  }

  async average() {
    const params = this.ctx.request.body;
    const data = await this.ctx.service.money.getAverage(params);
    this.ctx.body = data;
  }
}

module.exports = MoneyController;

