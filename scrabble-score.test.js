import { calculateScrabbleScore } from "./scrabble-score";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

test('testing if the letter A gives score of 1',()=>{
    const actual = calculateScrabbleScore('A')
    const expected = 1
    expect(actual).toBe(expected)
})

test('testing if the letter B gives score of 3',()=>{
    const actual = calculateScrabbleScore('B')
    const expected = 3
    expect(actual).toBe(expected)
})


test('testing if the letter C gives score of 3',()=>{
    const actual = calculateScrabbleScore('C')
    const expected = 3
    expect(actual).toBe(expected)
})


test('testing if the letter D gives score of 2',()=>{
    const actual = calculateScrabbleScore('D')
    const expected = 2
    expect(actual).toBe(expected)
})


test('testing if the letter E gives score of 1',()=>{
    const actual = calculateScrabbleScore('E')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter F gives score of 4',()=>{
    const actual = calculateScrabbleScore('F')
    const expected = 4
    expect(actual).toBe(expected)
})


test('testing if the letter G gives score of 2',()=>{
    const actual = calculateScrabbleScore('G')
    const expected = 2
    expect(actual).toBe(expected)
})


test('testing if the letter H gives score of 4',()=>{
    const actual = calculateScrabbleScore('H')
    const expected = 4
    expect(actual).toBe(expected)
})


test('testing if the letter I gives score of 1',()=>{
    const actual = calculateScrabbleScore('I')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter J gives score of 8',()=>{
    const actual = calculateScrabbleScore('J')
    const expected = 8
    expect(actual).toBe(expected)
})


test('testing if the letter K gives score of 5',()=>{
    const actual = calculateScrabbleScore('K')
    const expected = 5
    expect(actual).toBe(expected)
})


test('testing if the letter L gives score of 1',()=>{
    const actual = calculateScrabbleScore('L')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter M gives score of 3',()=>{
    const actual = calculateScrabbleScore('M')
    const expected = 3
    expect(actual).toBe(expected)
})


test('testing if the letter N gives score of 1',()=>{
    const actual = calculateScrabbleScore('N')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter O gives score of 1',()=>{
    const actual = calculateScrabbleScore('O')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter P gives score of 3',()=>{
    const actual = calculateScrabbleScore('P')
    const expected = 3
    expect(actual).toBe(expected)
})


test('testing if the letter Q gives score of 10',()=>{
    const actual = calculateScrabbleScore('Q')
    const expected = 10
    expect(actual).toBe(expected)
})


test('testing if the letter R gives score of 1',()=>{
    const actual = calculateScrabbleScore('R')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter S gives score of 1',()=>{
    const actual = calculateScrabbleScore('S')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter T gives score of 1',()=>{
    const actual = calculateScrabbleScore('T')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter U gives score of 1',()=>{
    const actual = calculateScrabbleScore('U')
    const expected = 1
    expect(actual).toBe(expected)
})


test('testing if the letter V gives score of 4',()=>{
    const actual = calculateScrabbleScore('V')
    const expected = 4
    expect(actual).toBe(expected)
})


test('testing if the letter W gives score of 4',()=>{
    const actual = calculateScrabbleScore('W')
    const expected = 4
    expect(actual).toBe(expected)
})


test('testing if the letter X gives score of 8',()=>{
    const actual = calculateScrabbleScore('X')
    const expected = 8
    expect(actual).toBe(expected)
})


test('testing if the letter Y gives score of 4',()=>{
    const actual = calculateScrabbleScore('Y')
    const expected = 4
    expect(actual).toBe(expected)
})


test('testing if the letter Z gives score of 10',()=>{
    const actual = calculateScrabbleScore('Z')
    const expected = 10
    expect(actual).toBe(expected)
})


