'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.find({ name: params.name });
    if (!user || params.password !== user.password) {
      ctx.body = {
        message: '用户名或者密码错误',
      };
      // console.log('user/login  error');
    } else {
      ctx.body = { message: '登陆成功' };
      ctx.session = { user };
      // 调用 rotateCsrfSecret 刷新用户的 CSRF token
      ctx.rotateCsrfSecret();
      // console.log('user/login  success');
    }
  }
}

module.exports = UserController;
