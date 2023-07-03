import { getMonth } from "../getMonth";

describe('test for getMonth function', () => {
    it('function must return Month name from number', () => {
        expect(getMonth(8)).toBe('August')
    }),
    
    it('function fail', () => {
        expect(getMonth(8)).toBe('October')
    }),

    it('function gets invalid number', () => {
        expect(getMonth(15)).toBe('It is not month number')
    })   

}); 