'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/money/list', controller.money.list);
  router.post('/money/add', controller.money.add);
  router.post('/money/add', controller.money.add);
  router.post('/user/login', controller.user.login);
};
