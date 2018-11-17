/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const config = require(path.join("..", "config", "config.json"));
const ToyRobot = require(path.join("..", "app", "ToyRobot"));

const initPattern = 
  `[0-9]+${config.inputSeparator}[0-9]+${config.inputSeparator}(?:${config.north})?(?:${config.south})?(?:${config.east})?(?:${config.west})?`;

const placeRegEx = new RegExp(`^${config.place} ${initPattern}$`);
const positionRegEx = new RegExp(initPattern);
const moveRegEx = new RegExp(`^${config.move}$`);
const rightRegEx = new RegExp(`^${config.right}$`);
const leftRegEx = new RegExp(`^${config.left}$`);
const reportRegEx = new RegExp(`^${config.report}$`);
let cardinals = {};

/**
 * @class Parser
 * 
 * Parse the input
 */
class Parser {

  /**
   * @constructor initialises a Parser
   */
  constructor(){
    this.robot = new ToyRobot();
    cardinals[config.north] = 0;
    cardinals[config.east] = 1;
    cardinals[config.south] = 2;
    cardinals[config.west] = 3;
  }

  /**
   * Parses an input string
   * @param {String} input 
   */
  parse(input){
    // let's ignore case sensitivity, and whitespace before and after the command.
    if(input) {
      input = input.toUpperCase().trim();
    } else {
      return;
    }

    const place = this.matchPlace(input);
    const move = this.matchMove(input);
    const right = this.matchRight(input);
    const left = this.matchLeft(input);
    const report = this.matchReport(input);

    if(place){
      const position = this.parsePlaceInput(input);
      if (position){
        this.robot = new ToyRobot(position);
      }
      return;
    }

    if (move) {
      this.robot.move();
      return;
    }

    if (right) {
      this.robot.right();
      return;
    }

    if (left) {
      this.robot.left();
      return;
    }

    if (report) {
      const status = this.robot.report();
      if (status){
        process.stdout.write(status + "\n");
      }
      return;
    }
  }

  /**
   * Detects a match for the PLACE command
   * @param {String} input 
   */
  matchPlace(input) {
    if (input) {
      return input.match(placeRegEx);
    }
    return;
  }

  /**
   * Detects a match for the MOVE command
   * @param {String} input 
   */
  matchMove(input) {
    if (input){
      return input.match(moveRegEx);
    }
    return;
  }

  /**
   * Detects a match for the RIGHT command
   * @param {String} input 
   */
  matchRight(input) {
    if (input) {
      return input.match(rightRegEx);
    }
    return;
  }

  /**
   * Detects a match for the LEFT command
   * @param {String} input 
   */
  matchLeft(input) {
    if (input) {
      return input.match(leftRegEx);
    }
    return;
  }

  /**
   * Detects a match for the REPORT command
   * @param {String} input 
   */
  matchReport(input) {
    if (input) {
      return input.match(reportRegEx);
    }
    return;
  }

  /**
   * Extracts the relevant info from the PLACE Input
   * @param {String} input 
   */
  parsePlaceInput(input) {
    let result = null;
    if(input){
      let positionMatch = input.match(positionRegEx);
      if (positionMatch){
        let positionString = positionMatch[0];
        if (positionString) {
          let position = positionString.split(config.inputSeparator);
          const x = parseInt(position[0]);
          const y = parseInt(position[1]);
          const f = cardinals[position[2]];
          if (x >= 0 && x <= config.table.width && y >= 0 && y <= config.table.height) {
            result = {"x": x, "y": y, "f": f};
          }
        }
      }
    }
    return result;
  }

}

module.exports = Parser;