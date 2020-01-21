'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;
  it('strings', () => {
    let arrayOfTypes=[num,arr,obj,func,bool];
    expect(validator.isString(str)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validator.isString(val)).toBeFalsy();
    })
   
  });

  it('numbers', () => {
    let arrayOfTypes=[str,arr,obj,func,bool];
    expect(validator.isNumber(num)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validator.isNumber(val)).toBeFalsy();
    })
  });

  it('arrays', () => {
    let arrayOfTypes=[str,num,obj,func,bool];
    expect(validator.isArray(arr)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validator.isArray(val)).toBeFalsy();
    })
  });

  it('objects', () => {
    let arrayOfTypes=[str,num,func,bool];
    expect(validator.isObject(obj)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validator.isObject(val)).toBeFalsy();
    })
  });

  it('booleans', () => {
    let arrayOfTypes=[str,num,obj,func,arr];
    expect(validator.isBoolean(bool)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validator.isBoolean(val)).toBeFalsy();
    })
  });

  it('functions', () => {
    let arrayOfTypes=[str,num,obj,arr,bool];
    expect(validator.isFunction(func)).toBeTruthy();
    arrayOfTypes.forEach(val=>{
      expect(validator.isFunction(val)).toBeFalsy();
    })
  });

});

describe('validator module performs complex validations', () => {
  const susan = {  id:'123-45-6789',
  name:'Susan McDeveloperson',
  age: 37,
  children:[],};
  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(validator.isItHasAKeys(susan)).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.isTheTypeOfValuesMatches(susan)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
  expect(validator.isThereArray(susan)).toBeFalsy(); 
  });

  // it('validates a value array against an approved list', () => {
  //   // i.e. a string might only be allowed to be "yes" or "no"
  //   expect(true).toBeFalsy();
  // });

  // TODO: Cover so, so many more cases
})

