/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const expect = require("chai").expect;

const config = require(path.join("..", "config", "config.json"));
const RobotState = require(path.join("..", "app", "RobotState"));
const ToyRobot = require(path.join("..", "app", "ToyRobot"));

describe("Toy Robot class", () => {

  const onTheTableParams = {
    x: 0,
    y: 1,
    f: 0
  };

  const offTheTableParams = {
    x: -1,
    y: 0,
    f: 0
  };
  
  const onTheTableState = new RobotState(onTheTableParams.x, onTheTableParams.y, onTheTableParams.f);
  const offTheTableState = new RobotState(offTheTableParams.x, offTheTableParams.y, offTheTableParams.f);

  describe("Place", () => {
    it("should place the robot on the table", () => {
      const robot = new ToyRobot(onTheTableParams);
      expect(robot.state).to.eql(onTheTableState);
    });
  });

  describe("Move", () => {
    it("should ignore the command if the robot is not on the table", () => {
      const robot = new ToyRobot(offTheTableParams);
      const newState = robot.move();
      expect(newState).to.eql(offTheTableState);
    });

    it("should increase Y by one when moving North", () => {
      const robot = new ToyRobot(onTheTableParams);
      const movedState = new RobotState(0, 2, 0);
      const newState = robot.move();
      expect(newState).to.eql(movedState);
    });

    it("should increase X by one when moving East", () => {
      const robot = new ToyRobot({ x: 0, y: 2, f: 1 });
      const movedState = new RobotState(1, 2, 1);
      const newState = robot.move();
      expect(newState).to.eql(movedState);
    });

    it("should decrease Y by one when moving South", () => {
      const robot = new ToyRobot({ x: 0, y: 2, f: 2 });
      const movedState = new RobotState(0, 1, 2);
      const newState = robot.move();
      expect(newState).to.eql(movedState);
    });

    it("should decrease X by one when moving West", () => {
      const robot = new ToyRobot({ x: 1, y: 2, f: 3 });
      const movedState = new RobotState(0, 2, 3);
      const newState = robot.move();
      expect(newState).to.eql(movedState);
    });

    it("should not fall from the top of the table", () => {
      const cornerState = new RobotState(0, 5, 0 );
      const robot = new ToyRobot({ x: 0, y: 5, f: 0 });
      const newState = robot.move();
      expect(cornerState).to.eql(newState);
    });

    it("should not fall from the right of the table", () => {
      const cornerState = new RobotState(5, 0, 1);
      const robot = new ToyRobot({ x: 5, y: 0, f: 1 });
      const newState = robot.move();
      expect(cornerState).to.eql(newState);
    });

    it("should not fall from the bottom of the table", () => {
      const cornerState = new RobotState(1, 0, 2);
      const robot = new ToyRobot({ x: 1, y: 0, f: 2 });
      const newState = robot.move();
      expect(cornerState).to.eql(newState);
    });

    it("should not fall from the left of the table", () => {
      const cornerState = new RobotState(0, 1, 3);
      const robot = new ToyRobot({ x: 0, y: 1, f: 3 });
      const newState = robot.move();
      expect(cornerState).to.eql(newState);
    });
  });

  describe("Left", () => {
    it("should ignore the command if the robot is not on the table", () => {
      const robot = new ToyRobot(offTheTableParams);
      const newState = robot.left();
      expect(newState).to.eql(offTheTableState);
    });

    it("should face East when turning left from South", () => {
      const robot = new ToyRobot({ x: 0, y: 1, f: 2 });
      const robotFacingEast = new RobotState(0, 1, 1);
      const newState = robot.left();
      expect(newState).to.eql(robotFacingEast);
    });

    it("should face West when turning left from North", () => {
      const robot = new ToyRobot(onTheTableParams);
      const newState = robot.left();
      const robotFacingWest = new RobotState(0, 1, 3);
      expect(newState).to.eql(robotFacingWest);
    });

    it("should face the same direction when turning left 4 times", () => {
      const robot = new ToyRobot(onTheTableParams);
      robot.left();
      robot.left();
      robot.left();
      const newState = robot.left();
      expect(newState).to.eql(onTheTableState);
    });
  });

  describe("Right", () => {
    it("should ignore the command if the robot is not on the table", () => {
      const robot = new ToyRobot(offTheTableParams);
      const newState = robot.right();
      expect(newState).to.eql(offTheTableState);
    });

    it("should face East when turning right from North", () => {
      const robot = new ToyRobot(onTheTableParams);
      const robotFacingEast = new RobotState(0, 1, 1);
      const newState = robot.right();
      expect(newState).to.eql(robotFacingEast);
    });

    it("should face North when turning right from West", () => {
      const robot = new ToyRobot({ x: 0, y: 1, f: 3 });
      const newState = robot.right();
      expect(newState).to.eql(onTheTableState);
    });

    it("should face the same direction when turning right 4 times", () => {
      const robot = new ToyRobot(onTheTableParams);
      robot.right();
      robot.right();
      robot.right();
      const newState = robot.right();
      expect(newState).to.eql(onTheTableState);
    });
  });

  describe("Report", () => {
    it("should ignore the command if the robot is not on the table", () => {
      const robot = new ToyRobot(offTheTableParams);
      const report = robot.report();
      expect(report).to.equal("");
    });

    it("should return the current state of the robot as a string", () => {
      const robot = new ToyRobot(onTheTableState);
      const report = robot.report();
      const expected = `0,1,${config.north}`;
      expect(report).to.be.equal(expected);
    });
  });

});