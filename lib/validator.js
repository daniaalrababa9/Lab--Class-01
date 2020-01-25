'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  

  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};
/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNumber=(input)=>{
  return typeof input === 'number';
}
/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean=(input)=>{
  return typeof input === 'boolean';
}
/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) =>{
  return typeof input === 'object';
};
/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) =>{
  return Array.isArray(input);
};
/**
 * Is this an function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = (input) =>{
  return typeof input === 'function';
};
/**
 *Is it has a Keys?
 * @param input
 * @returns {boolean}
 */
validator.isItHasAKeys= (input)=>{
  if(Object.keys(input)){
return true;
  }}
  /**
 *Is the type of values matches?
 * @param input
 * @returns {boolean}
 */
 
  validator.isTheTypeOfValuesMatches=(input)=>{
return Object.values(input).every(val=>typeof val==='string'||typeof val==='number'||typeof val==='object') 
}
/**
 *Is there array?
 * @param input
 * @returns {boolean}
 */
validator.isThereArray=(input)=>{
return Object.values(input).every(val=>typeof val==='object'&& val===null)
}
/**
 *Is the input value of the array iatring of yes or no?
 * @param input
 * @returns {boolean}
 */
validator.isTheValueOfTheArrrayIsYesOrNo=(input)=>{
  return Object.values(input).every(val=>typeof val==='string'&& val==='yes'|| val==='no')
  }
