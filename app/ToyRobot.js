/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const config = require(path.join("..", "config", "config.json"));

/**
 * @constant cardinals maps cacrdinal points to integers
 */
const cardinals = {
  "0": config.north,
  "1": config.east,
  "2": config.south,
  "3": config.west
};

/**
 * @class ToyRobot
 * 
 * Implements the behavior of a robot on a table
 */
class ToyRobot {

  /**
   * @constructor Initialise a ToyRobot with a state
   * @param {RobotState} state
   */
  constructor(state) {
    this.state = state;
  }

  /**
   * Moves the robot
   */
  move() {
    if (this.state.isOnTheTable) {
      return;
    }
    return this.state;
  }

  /**
   * Turns the robot left
   */
  left() {
    if (this.state.isOnTheTable) {
      return;
    }
    return this.state;
  }

  /**
   * Turns the robot right
   */
  right() {
    if (this.state.isOnTheTable) {
      let newFacingPosition = this.state.f + 1;
      if (newFacingPosition > 3) {
        newFacingPosition = 0;
      }
      this.state.f = newFacingPosition;
    }
    return this.state;
  }

  /**
   * Reports the current state of the robot
   * @returns {String}
   */
  report() {
    if (this.state.isOnTheTable) {
      return `${this.state.x},${this.state.y},${cardinals[this.state.f]}`;
    }
    return "";
  }
}

module.exports = ToyRobot;