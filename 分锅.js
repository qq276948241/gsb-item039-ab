#!/usr/bin/env node
"use strict";

function 主程序(参数) {
  var 人话 = "没法分锅：请给出总克数和锅容量两个不小于零的整数，锅容量不能是零\n";
  if (参数.length !== 2 || 参数.indexOf("") !== -1 || 参数.indexOf("缺") !== -1) {
    process.stderr.write(人话);
    return 2;
  }
  if (!/^[0-9]+$/.test(参数[0]) || !/^[0-9]+$/.test(参数[1])) {
    process.stderr.write(人话);
    return 2;
  }
  var 总 = Number(参数[0]);
  var 容 = Number(参数[1]);
  if (容 === 0) {
    process.stderr.write(人话);
    return 2;
  }
  var 锅数 = 总 === 0 ? 0 : Math.ceil(总 / 容);
  var 剩 = 总 % 容;
  process.stdout.write(锅数 + "锅\n剩" + 剩 + "克\n");
  return 0;
}

if (require.main === module) {
  process.exitCode = 主程序(process.argv.slice(2));
}

module.exports = { 主程序: 主程序 };
