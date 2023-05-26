import { add } from './calculator';

describe('adding', () => {
    [
        [0, 0, 0],
        [-1, 1, 0],
        [1000, 1001, 2001],
        [45, -46, -1],
    ].forEach(([a, b, sum]) =>
        it(`(${a}) + (${b}) = ${sum}`, () => {
            expect(add(a, b)).toBe(sum);
        }),
    );
});

describe('adding 2', () => {

    const examples: Array<[number, number, number]> =
        [
            [0, 0, 0],
            [-1, 1, 0],
            [1000, 1001, 2001],
            [45, -46, -1],
        ];

    examples.forEach(([a, b, sum]) =>
        it(`(${a}) + (${b}) = ${sum}`, () => {
            expect(add(a, b)).toBe(sum);
        }),
    );
});

describe('adding 3', () => {

    interface Example {
        a: number;
        b: number;
        sum: number;
    }

    const examples: Example[] =
        [
            { a: 0, b: 0, sum: 0 },
            { a: -1, b: 1, sum: 0 },
            { a: 1000, b: 1001, sum: 2001 },
            { a: 45, b: -46, sum: -1 },
        ];

    examples.forEach(({ a, b, sum }) =>
        it(`(${a}) + (${b}) = ${sum}`, () => {
            expect(add(a, b)).toBe(sum);
        }),
    );
});

// somewhere in production code
const PI = 3.14159265358979323846;
const E = 2.71828182845904523536;
const TAU = 6.28318530717958647692;
const CONSTANTS = [PI, TAU, E];

describe('adding with constants supported', () => {

    CONSTANTS.forEach(constant =>
        it(`constant ${constant}`, () => {
            expect(() => add(constant, 1)).not.toThrow();
        }),
    );
});

// somewhere in production code
const ALL_NUMBERS = [0, 42, 23.56133, 1];

describe('any number can be added to 42, except 42 itself', () => {

    ALL_NUMBERS
        .filter(num => num !== 42)
        .forEach(num => it('' + num, () => {
            expect(() => add(num, 42)).not.toThrow();
        }));
});

describe('adding odd & even numbers results in an odd number', () => {

    const ALL_ODD_NUMBERS = [1, 3, 5, 7, 9];
    const ALL_EVEN_NUMBERS = [0, 2, 4, 6, 8];

    ALL_ODD_NUMBERS.forEach(oddNumber =>
        ALL_EVEN_NUMBERS.forEach(evenNumber =>
            it(`${oddNumber} + ${evenNumber}`, () => {
                expect(add(oddNumber, evenNumber) % 2).toBe(1);
            }),
        ),
    );
});
