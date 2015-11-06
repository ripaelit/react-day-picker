
import { expect } from "chai";
import DateUtils from "../src/DateUtils";

describe("DateUtils", () => {

  describe("clone", () => {
    it("should clone a date", () => {
      const date = new Date();
      const newDate = DateUtils.clone(date);
      expect(newDate).to.not.equal(date);
    });
  });

  describe("isDayOutsideMonth", () => {
    it("detects days outside a month", () => {
      const isOutside = DateUtils.isDayOutsideMonth(
        new Date(2015, 10, 30),
        new Date(2015, 11, 1)
      );
      expect(isOutside).to.be.true;
    });
    it("does detect days inside a month", () => {
      const isOutside = DateUtils.isDayOutsideMonth(
        new Date(2015, 11, 30),
        new Date(2015, 11, 1)
      );
      expect(isOutside).to.be.false;
    });
  });

  describe("isSameDay", () => {
    it("returns true if two days differ only by time", () => {
      const day1 = new Date(2015, 10, 11, 5, 25);
      const day2 = new Date(2015, 10, 11, 7, 40);
      const isSameDay = DateUtils.isSameDay(day1, day2);
      expect(isSameDay).to.be.true;
    });
    it("returns false for different days", () => {
      const day1 = new Date(2015, 8, 12);
      const day2 = new Date(2015, 5, 11);
      const isSameDay = DateUtils.isSameDay(day1, day2);
      expect(isSameDay).to.be.false;
    });
  });

  describe("isPastDay", () => {
    it("detects a day is in the past", () => {
      const isPastDay = DateUtils.isPastDay(new Date(2015, 5, 11));
      expect(isPastDay).to.be.true;
    });
    it("detects a day in the future", () => {
      const isPastDay = DateUtils.isPastDay(new Date(2100, 1, 11));
      expect(isPastDay).to.be.false;
    });
    it("says today is not a past day", () => {
      const isPastDay = DateUtils.isPastDay(new Date());
      expect(isPastDay).to.be.false;
    });
  });

  describe("isDayBetween", () => {
    it("detects a day between two days", () => {
      const d = new Date(2015, 10, 12);
      const d1 = new Date(2015, 10, 7);
      const d2 = new Date(2015, 10, 16);
      const isDayBetweenA = DateUtils.isDayBetween(d, d1, d2);
      expect(isDayBetweenA).to.be.true;
      const isDayBetweenB = DateUtils.isDayBetween(d, d2, d1);
      expect(isDayBetweenB).to.be.true;
    });
    it("strictly excludes the given days", () => {
      const d = new Date(2015, 10, 7);
      const d1 = new Date(2015, 10, 7);
      const d2 = new Date(2015, 10, 16);
      const isDayBetween = DateUtils.isDayBetween(d, d1, d2);
      expect(isDayBetween).to.be.false;
    });
  });

  describe("addDayToRange", () => {
    it("set the day as `from` day, if range is missing", () => {
      const day = new Date();
      const range = DateUtils.addDayToRange(day);
      expect(range).to.deep.equal({ from: day, to: null});
    });
    it("set the day as `to` day, if `from` is set", () => {
      const from = new Date(2015, 1, 10);
      const day = new Date();
      const range = DateUtils.addDayToRange(day, { from });
      expect(range).to.deep.equal({ from: from, to: day});
    });
    it("resets when selecting again the same from day", () => {
      const day = new Date();
      let range = { from: day, to: day };
      range = DateUtils.addDayToRange(day, range);
      expect(range).to.deep.equal({ from: null, to: null});
    });
    it("replaces the first day if given day comes before it ", () => {
      const day = new Date(2015, 10, 1);
      const to = new Date(2015, 10, 20);
      let range = { from: new Date(2015, 10, 5), to: to };
      range = DateUtils.addDayToRange(day, range);
      expect(range).to.deep.equal({ from: day, to: to});
    });
    it("set the range to the same day if last day is same as first", () => {
      const day = new Date(2015, 10, 7);
      const to = new Date(2015, 10, 7);
      const from = new Date(2015, 10, 4);
      let range = { from: from, to: to };
      range = DateUtils.addDayToRange(day, range);
      expect(range).to.deep.equal({ from: day, to: day});
    });
    it("adds the day to the end of the range", () => {
      const day = new Date(2015, 10, 5);
      const from = new Date(2015, 10, 4);
      let range = { from: from };
      range = DateUtils.addDayToRange(day, range);
      expect(range).to.deep.equal({ from: from, to: day});
    });
    it("works when last day comes before the first day", () => {
      const day = new Date(2015, 10, 4);
      const from = new Date(2015, 10, 5);
      let range = { from: from };
      range = DateUtils.addDayToRange(day, range);
      expect(range).to.deep.equal({ from: day, to: from});
    });
  });

  describe("isDayInRange", () => {
    it("detects a day in a range", () => {
      const day = new Date(2015, 10, 5);
      const from = new Date(2015, 10, 4);
      const to = new Date(2015, 10, 6);
      const range = { from, to };
      const isDayInRange = DateUtils.isDayInRange(day, range);
      expect(isDayInRange).to.be.true;
    });
    it("detects a day in a range (inclusive)", () => {
      const day = new Date(2015, 10, 4);
      const from = new Date(2015, 10, 4);
      const to = new Date(2015, 10, 6);
      const range = { from, to };
      const isDayInRange = DateUtils.isDayInRange(day, range);
      expect(isDayInRange).to.be.true;
    });
    it("detects a day outside a range", () => {
      const day = new Date(2015, 10, 15);
      const from = new Date(2015, 10, 4);
      const to = new Date(2015, 10, 6);
      const range = { from, to };
      const isDayInRange = DateUtils.isDayInRange(day, range);
      expect(isDayInRange).to.be.false;
    });
  });



});
