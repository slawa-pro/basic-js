const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('not array');
    }

    let depth = 1;
    let maxDepth = 0;

    for (const item of arr) {
      if (Array.isArray(item)) {
        const currentDepth = this.calculateDepth(item);
        maxDepth = Math.max(maxDepth, currentDepth);
      }
    }

    return depth + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
