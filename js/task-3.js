'use strict';

function getElementWidth(content, padding, border) {
  const contentNum = parseFloat(content);
  const paddingNum = parseFloat(padding);
  const borderNum = parseFloat(border);

  const result = contentNum + 2 * paddingNum + 2 * borderNum;
  return result;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
