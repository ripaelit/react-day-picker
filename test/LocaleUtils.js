/* eslint-disable global-require */
import { expect } from 'chai';
import * as LocaleUtils from '../src/LocaleUtils';

describe('LocaleUtils', () => {
  it('should work with commonjs require', () => {
    const { LocaleUtils: LU } = require('../DayPicker');
    expect(LU.formatMonthTitle).to.be.a('function');
  });

  describe('formatMonthTitle', () => {
    it('returns month and day as string', () => {
      const date = new Date(2015, 11, 20);
      const formattedDate = LocaleUtils.formatMonthTitle(date);
      expect(formattedDate).to.equal('December 2015');
    });
  });

  describe('formatWeekdayShort', () => {
    it('returns the short day name as string', () => {
      expect(LocaleUtils.formatWeekdayShort(0)).to.equal('Su');
    });
  });

  describe('formatWeekdayLong', () => {
    it('returns the long day name as string', () => {
      expect(LocaleUtils.formatWeekdayLong(0)).to.equal('Sunday');
    });
  });

  describe('getFirstDayOfWeek', () => {
    it('returns sunday', () => {
      expect(LocaleUtils.getFirstDayOfWeek()).to.equal(0);
    });
  });

  describe('getMonths', () => {
    it('return twelve months', () => {
      expect(LocaleUtils.getMonths()).to.have.length(12);
    });
  });
});
