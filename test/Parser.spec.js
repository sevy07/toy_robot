/**
 * LM Group Technical test
 * 
 * @author Jean-Yves Chanal
 */
const path = require("path");
const expect = require("chai").expect;

const Parser = require(path.join("..", "app", "Parser"));
const currentParser = new Parser();


describe("Parser", () => {

  it("should match a MOVE input", () => {
    const result = currentParser.matchMove("MOVE");
    expect(result).to.eql(["MOVE"]);
  });

  it("should not match and invalid MOVE input", () => {
    expect(undefined).to.eql(currentParser.matchMove(null));
    expect(null).to.eql(currentParser.matchMove("stuff"));
    expect(null).to.eql(currentParser.matchMove("MOVE EAST"));
    expect(null).to.eql(currentParser.matchMove(" MOVE"));
  });

  it("should match a LEFT input", () => {
    const result = currentParser.matchLeft("LEFT");
    expect(result).to.eql(["LEFT"]);
  });

  it("should not match and invalid LEFT input", () => {
    expect(undefined).to.eql(currentParser.matchLeft(null));
    expect(null).to.eql(currentParser.matchLeft("stuff"));
    expect(null).to.eql(currentParser.matchLeft("LEFT EAST"));
    expect(null).to.eql(currentParser.matchLeft(" LEFT"));
  });

  it("should match a RIGHT input", () => {
    const result = currentParser.matchRight("RIGHT");
    expect(result).to.eql(["RIGHT"]);
  });

  it("should not match and invalid RIGHT input", () => {
    expect(undefined).to.eql(currentParser.matchRight(null));
    expect(null).to.eql(currentParser.matchRight("stuff"));
    expect(null).to.eql(currentParser.matchRight("RIGHT EAST"));
    expect(null).to.eql(currentParser.matchRight(" RIGHT"));
  });

  it("should match a REPORT input", () => {
    const result = currentParser.matchReport("REPORT");
    expect(result).to.eql(["REPORT"]);
  });

  it("should not match and invalid REPORT input", () => {
    expect(undefined).to.eql(currentParser.matchReport(null));
    expect(null).to.eql(currentParser.matchReport("stuff"));
    expect(null).to.eql(currentParser.matchReport("REPORT EAST"));
    expect(null).to.eql(currentParser.matchReport(" REPORT"));
  });

  it("should match a PLACE input", () => {
    const result = currentParser.matchPlace("PLACE 0,0,NORTH");
    expect(result).to.eql(["PLACE 0,0,NORTH"]);
  });

  it("should not match and invalid PLACE input", () => {
    expect(undefined).to.eql(currentParser.matchPlace(null));
    expect(null).to.eql(currentParser.matchPlace("PLACE"));
    expect(null).to.eql(currentParser.matchPlace("PLACE EAST,0,0,EAST,NORTH"));
    expect(null).to.eql(currentParser.matchPlace(" PLACE"));
    expect(null).to.eql(currentParser.matchPlace(" PLACE0,0,NORTH"));
  });

  it("should extract the correct coordinates", () => {
    const result = currentParser.parsePlaceInput("PLACE 0,0,NORTH");
    expect(result).to.eql({"x": 0, "y": 0, "f": 0});
  });

  it("should ignore coordinates that are not on the table", () => {
    const result = currentParser.parsePlaceInput("PLACE 10,10,NORTH");
    expect(result).to.eql(null);
  });

  it("should not fail at parsing coordinates", () => {
    expect(null).to.eql(currentParser.parsePlaceInput(null));
    expect(null).to.eql(currentParser.parsePlaceInput("stuff"));
  });

});
