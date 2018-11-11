'use strict';

const Service = require('egg').Service;

class MoneyService extends Service {
  async findList() {
    const result = await this.app.mysql.get('account_book');
    return result;
  }

  async add(obj) {
    for (var i = obj.length - 1; i >= 0; i--) {   //这里是循环定时 上传
      await this.app.mysql.insert('account_book', obj[i]);
    }

  }


  async query(obj) {
    const TABLE_NAME = 'account_book';
    const QUERY_STR = 'id, fee, detail, payer,gmt_created';
    var QUERY_CRITERIA = "";
    if (obj.create_user != "") {
      QUERY_CRITERIA = "and payer=" + obj.payer;
    }

    if (obj.detail != "") {
      QUERY_CRITERIA = "and detail like %" + obj.detail + "%";
    }

    if (obj.startTime != "") {
      QUERY_CRITERIA = "and gmt_created >=" + obj.startTime;
    }

    if (obj.endTime != "") {
      QUERY_CRITERIA = "and gmt_created <=" + obj.endTime;
    }

    QUERY_CRITERIA = QUERY_CRITERIA.substring(3);

    let sql = `select ${QUERY_STR} from ${TABLE_NAME} where ${QUERY_CRITERIA}`;
    const row = await this.app.mysql.query(sql);

    var totalFee = 0;

    for (var i = row.length - 1; i >= 0; i--) {   //这里是循环定时 上传
      totalFee = totalFee + row[i].fee;
    }

    var result = {data: row, totalFee: totalFee};
    return result;
  }
}

module.exports = MoneyService;
