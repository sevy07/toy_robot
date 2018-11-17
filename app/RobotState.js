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

    this.f = f;
    this.isOnTheTable = true;

    if (x < 0 || x > maxX) {
      this.isOnTheTable = false;
      this.x = 0;
    } else {
      this.x = x;
    }
    if (y < 0 || y > maxY) {
      this.isOnTheTable = false;
      this.y = 0;
    } else {
      this.y = y;
    }
  }
}

module.exports = RobotState;