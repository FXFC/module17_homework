import { getPercents } from "../getPercents";

describe('test for percents function', () => {
    it('function must return persent from number', () => {
        expect(getPercents(8, 76)).toBe(6.08)
    }),
    
    it('function fail', () => {
        expect(getPercents(8, 76)).toBe(7)
    }),

    it('function gets invalid number', () => {
        expect(getPercents(8, 0)).toBe('Wrong data')
    })   

});    