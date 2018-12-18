'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/money/list', controller.money.list);
  router.get('/money/average', controller.money.average);
  router.post('/money/add/muti', controller.money.addMoneys);
  router.post('/user/login', controller.user.login);
};
