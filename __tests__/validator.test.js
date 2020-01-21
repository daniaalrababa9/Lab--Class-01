'use strict';

const validator = require('../lib/validator.js');

// describe('validator module performs basic validation of', () => {

//   // TODO: Make this series of tests less repetitive ... DRY it out

//   it('strings', () => {
//     let str = 'yes';
//     let num = 1;
//     let arr = ['a'];
//     let obj = {x:'y'};
//     let func = () => {};
//     let bool = false;
//     expect(validator.isString(str)).toBeTruthy();
//     expect(validator.isString(num)).toBeFalsy();
//     expect(validator.isString(arr)).toBeFalsy();
//     expect(validator.isString(obj)).toBeFalsy();
//     expect(validator.isString(func)).toBeFalsy();
//     expect(validator.isString(bool)).toBeFalsy();
//   });

//   it('numbers', () => {
//     expect(true).toBeFalsy();
//   });

//   it('arrays', () => {
//     expect(true).toBeFalsy();
//   });

//   it('objects', () => {
//     expect(true).toBeFalsy();
//   });

//   it('booleans', () => {
//     expect(true).toBeFalsy();
//   });

//   it('functions', () => {
//     expect(true).toBeFalsy();
//   });

// });

describe('validator module performs complex validations', () => {

  // it('validates the presence of required object properties at any level', () => {
  //   // i.e. does person.hair.color exist and have a good value, not just person.hair
  //   expect(true).toBeFalsy();
  // });

  // it('validates the proper types of object properties', () => {
  //   // i.e. person.name must be a string, etc.
  //   expect(true).toBeFalsy();
  // });

  // it('validates the types of values contained in an array', () => {
  //   // i.e. an array of all strings or numbers
  //   expect(true).toBeFalsy();
  // });

  // it('validates a value array against an approved list', () => {
  //   // i.e. a string might only be allowed to be "yes" or "no"
  //   expect(true).toBeFalsy();
  // });

  // TODO: Cover so, so many more cases
  it ('validates an object or not ',()=>{
    const susan = {};
    expect(validator.isObject(susan)).toBeTruthy();
  })
  it ('validates is the object has keys or not ',()=>{
    const susan = {  id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],};
    expect(validator.isItHasAKeys(susan)).toBeTruthy();
  })
  it ('validates is the type of values is string ',()=>{
    const susan = {  id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],};
    expect(validator.isTheTypeOfValuesMatches(susan)).toBeTruthy();
  })
});

