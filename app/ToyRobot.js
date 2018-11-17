/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const config = require(path.join("..", "config", "config.json"));
const RobotState = require(path.join("..", "app", "RobotState"));

const maxX = config.table.width;
const maxY = config.table.height;

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
  constructor(initParams) {
    if (initParams) {
      this.state = new RobotState(initParams.x, initParams.y, initParams.f);
    } else {
      this.state = new RobotState(-1, -1, 0);
    }
  }

  /**
   * Moves the robot
   * @returns {RobotState} state
   */
  move() {
    if (this.state.isOnTheTable) {
      const facingPosition = this.state.f;
      switch (facingPosition) {
      case 0:
      case 2:
        this.moveY(facingPosition == 0 ? 1 : -1);
        break;
      case 1:
      case 3:
        this.moveX(facingPosition == 1 ? 1 : -1);
        break;
      default:
        break;
      }
    }
    return this.state;
  }

  /**
   * Moves alog X Axis
   * @param {Numer} imcrement
   */
  moveX(increment) {
    let newPositionX = this.state.x + increment;
    if (newPositionX < 0 || newPositionX > maxX){
      return;
    }
    this.state.x = newPositionX;
  }

  /**
   * Moves alog X Axis
   * @param {Numer} imcrement
   */
  moveY(increment) {
    let newPositionY = this.state.y + increment;
    if (newPositionY < 0 || newPositionY > maxY) {
      return;
    }
    this.state.y = newPositionY;
  }

  /**
   * Turns the robot left
   * @returns {RobotState} state
   */
  left() {
    if (this.state.isOnTheTable) {
      let newFacingPosition = this.state.f - 1;
      if (newFacingPosition < 0) {
        newFacingPosition = 3;
      }
      this.state.f = newFacingPosition;
    }
    return this.state;
  }

  /**
   * Turns the robot right
   * @returns {RobotState} state
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