const path = require("path");
const expect = require("chai").expect;

const RobotState = require(path.join("..", "app", "RobotState"));

describe("Robot state", () => {

  it("should initialise the state on the table", () => {
    const state = new RobotState();
    expect(state).not.to.be.undefined;
  });

  it("should initialise the state off the table when we exeed the table widh", () => {
    expect(false).to.equal(true);
  });

  it("should initialise the state off the table when below the table widh", () => {
    expect(false).to.equal(true);
  });

  it("should initialise the state off the table when we exeed the table height", () => {
    expect(false).to.equal(true);
  });

  it("should initialise the state off the table when below the table height", () => {
    expect(false).to.equal(true);
  });
});