#!/usr/bin/env node
"use strict";

function 算锅数(总克数, 锅容量) {
  return 总克数 === 0 ? 0 : Math.ceil(总克数 / 锅容量);
}

function 算剩余(总克数, 锅容量) {
  return 总克数 % 锅容量;
}

function 报错() {
  process.stderr.write("没法分锅：请给出总克数和锅容量两个不小于零的整数，锅容量不能是零\n");
  return 2;
}

function 主程序(参数) {
  if (参数.length !== 2 || 参数.indexOf("") !== -1 || 参数.indexOf("缺") !== -1) {
    return 报错();
  }
  if (!/^[0-9]+$/.test(参数[0]) || !/^[0-9]+$/.test(参数[1])) {
    return 报错();
  }
  var 总 = Number(参数[0]);
  var 容 = Number(参数[1]);
  if (容 === 0) {
    return 报错();
  }
  process.stdout.write(算锅数(总, 容) + "锅\n剩" + 算剩余(总, 容) + "克\n");
  return 0;
}

if (require.main === module) {
  process.exitCode = 主程序(process.argv.slice(2));
}

module.exports = { 算锅数: 算锅数, 算剩余: 算剩余, 主程序: 主程序 };
