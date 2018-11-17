const path = require("path");
const expect = require("chai").expect;

const RobotState = require(path.join("..", "app", "RobotState"));
const config = require(path.join("..", "config", "config.json"));

const maxX = config.table.width;
const maxY = config.table.height;

describe.only("Robot state", () => {

  it("should initialise the state on the table", () => {
    const state = new RobotState(1, 1, 0);
    expect(state.x).to.equal(1);
    expect(state.y).to.equal(1);
    expect(state.f).to.equal(0);
    expect(state.isOnTheTable).to.equal(true);
  });

  it("should initialise the state off the table when we exeed the table widh", () => {
    const state = new RobotState(maxX + 1, 0, 0);
    expect(state.x).to.equal(0);
    expect(state.y).to.equal(0);
    expect(state.f).to.equal(0);
    expect(state.isOnTheTable).to.equal(false);
  });

  it("should initialise the state off the table when below the table widh", () => {
    const state = new RobotState(0, -1, 0);
    expect(state.x).to.equal(0);
    expect(state.y).to.equal(0);
    expect(state.f).to.equal(0);
    expect(state.isOnTheTable).to.equal(false);
  });

  it("should initialise the state off the table when we exeed the table height", () => {
    const state = new RobotState(0, maxY + 1, 0);
    expect(state.x).to.equal(0);
    expect(state.y).to.equal(0);
    expect(state.f).to.equal(0);
    expect(state.isOnTheTable).to.equal(false);
  });

  it("should initialise the state off the table when below the table height", () => {
    const state = new RobotState(0, -1, 0);
    expect(state.x).to.equal(0);
    expect(state.y).to.equal(0);
    expect(state.f).to.equal(0);
    expect(state.isOnTheTable).to.equal(false);
  });
});