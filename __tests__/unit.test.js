// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('functionality of isPhoneNumber', () => {
    expect(functions.isPhoneNumber('858-539-6950')).toBe(true);
});

test('functionality of isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('functionality of isPhoneNumber', () => {
    expect(functions.isPhoneNumber('this-is-a-phone-number')).toBe(false);
});

test('functionality of isPhoneNumber', () => {
    expect(functions.isPhoneNumber('#1234567890')).toBe(false);
});

test('functionality of isEmail', () => {
    expect(functions.isEmail('Rancoon@ucsd.edu')).toBe(true);
});

test('functionality of isEmail', () => {
    expect(functions.isEmail('khosla@gmail.com')).toBe(true);
});

test('functionality of isEmail', () => {
    expect(functions.isEmail('114514')).toBe(false);
});

test('functionality of isEmail', () => {
    expect(functions.isEmail('s1mplegggggggggggiiiiiiiiigggaccchhhhadddddducla.edu')).toBe(false);
});

test('functionality of isStrongPassword', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('functionality of isStrongPassword', () => {
    expect(functions.isStrongPassword('strongPassWord')).toBe(true);
});

test('functionality of isStrongPassword', () => {
    expect(functions.isStrongPassword('1145141919810')).toBe(false);
});

test('functionality of isStrongPassword', () => {
    expect(functions.isStrongPassword('OwO')).toBe(false);
});

test('functionality of isDate', () => {
    expect(functions.isDate('01/01/2001')).toBe(true);
});

test('functionality of isDate', () => {
    expect(functions.isDate('07/18/2077')).toBe(true);
});

test('functionality of isDate', () => {
    expect(functions.isDate('nintyeightyfour')).toBe(false);
});

test('functionality of isDate', () => {
    expect(functions.isDate('1919/08/10')).toBe(false);
});

test('functionality of isHexColor', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('functionality of isHexColor', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('functionality of isHexColor', () => {
    expect(functions.isHexColor('red')).toBe(false);
});

test('functionality of isHexColor', () => {
    expect(functions.isHexColor('255,255,255')).toBe(false);
});