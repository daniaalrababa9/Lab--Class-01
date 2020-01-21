'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
// validator.isValid = (input, rules) => {
  

//   return true;
// };

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
// validator.isString = (input) => {
//   return typeof input === 'string';
// };

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) =>{
  return typeof input === 'object';
};
/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
validator.isItHasAKeys= (input)=>{
  if(Object.keys(input)){
return true;
  }}
 
  validator.isTheTypeOfValuesMatches=(input)=>{
return Object.values(input).every(val=>typeof val==='string'||typeof val==='number'||typeof val==='object') 
}
