const path = require("path");
const expect = require("chai").expect;

const ToyRobot = require(path.join("..", "app", "ToyRobot"));

describe("Toy Robot class", () => {

  describe("Place", () => {
    it("should place the robot on the table", () => {
      const toyRobot = new ToyRobot();
      expect(toyRobot).not.to.be.undefined;
    });
  
    it("should place the robot off the table", () => {
      expect(false).to.be.equal(true);
    });
  });

  describe("Move", () => {
    it("should ignore the command if the robot is not on the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should increase X by one when moving North", () => {
      expect(false).to.be.equal(true);
    });

    it("should increase Y by one when moving East", () => {
      expect(false).to.be.equal(true);
    });

    it("should decrease X by one when moving Sorth", () => {
      expect(false).to.be.equal(true);
    });

    it("should decrease Y by one when moving West", () => {
      expect(false).to.be.equal(true);
    });

    it("should not fall from the top of the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should not fall from the right of the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should not fall from the bottom of the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should not fall from the left of the table", () => {
      expect(false).to.be.equal(true);
    });
  });

  describe("Left", () => {
    it("should ignore the command if the robot is not on the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should face East when turning left from South", () => {
      expect(false).to.be.equal(true);
    });

    it("should face West when turning left from North", () => {
      expect(false).to.be.equal(true);
    });

    it("should face the same direction when turning left 4 times", () => {
      expect(false).to.be.equal(true);
    });
  });

  describe("Right", () => {
    it("should ignore the command if the robot is not on the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should face East when turning right from North", () => {
      expect(false).to.be.equal(true);
    });

    it("should face North when turning right from West", () => {
      expect(false).to.be.equal(true);
    });

    it("should face the same direction when turning right 4 times", () => {
      expect(false).to.be.equal(true);
    });
  });

  describe("Report", () => {
    it("should ignore the command if the robot is not on the table", () => {
      expect(false).to.be.equal(true);
    });

    it("should return the current state of the robot as a string", () => {
      expect(false).to.be.equal(true);
    });
  });

});