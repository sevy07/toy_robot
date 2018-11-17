/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const config = require(path.join("..", "config", "config.json"));

const maxX = config.table.width;
const maxY = config.table.height;

/**
 * @class RobotState
 * 
 * Represents the state of the robot 
 * 
 * @author Jean-Yves Chanal
 */
class RobotState {

  /**
   * @constructor Initialise a RobotState with x and x coordinates, facing f
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} f 
   */
  constructor(x, y, f) {

    this.isOnTheTable = true;
    this.x = this.getInitialValue(x, maxX);
    this.y = this.getInitialValue(y, maxY);
    this.f = this.getInitialValue(f, 3);

  }

  /**
   * Initialises the value if it is between 0 and the upper bound
   * @param {Number} value 
   * @param {Number} upperBound 
   */
  getInitialValue(value, upperBound) {
    if (typeof value == "number" && value >= 0 && value <= upperBound) {
      return value;
    } else {
      this.isOnTheTable = false;
      return 0;
    }
  }
}

module.exports = RobotState;