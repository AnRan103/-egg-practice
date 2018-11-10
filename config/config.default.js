'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540522193182_8202';

  // add your config here
  config.middleware = [];

  // // sequelize配置
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   database: 'fee',
  // };

  // 连接数据库
  config.mysql = {
    client: {
      host: '192.168.3.111',
      port: '3306',
      user: 'root',
      password: '850668546',
      database: 'fee',
    },
    app: true,
    agent: false,
  };

  // cors 跨域配置
  config.security = {
    csrf: {
      enable: true, // 打开csrf安全策略
      ignore: '/user/login', // 登陆接口忽略csrf校验
      // csrf token 配置
      headerName: 'token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      useSession: false, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
    // domainWhiteList: '*',
  };
  // cors 跨域配置
  // config.cors = {
  //   origin: '*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  // };

  // 获取参数
  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };


  return config;
};
