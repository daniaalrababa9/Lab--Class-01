'use strict';

const validator = require('./lib/validator.js');
const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  };
validator.isValid(susan,validator);
console.log(validator.isString(susan.id))
console.log(validator.isArray(susan.children))
console.log(validator.isNumber(susan.age))
console.log(validator.isItHasAKeys(susan))
console.log(validator.isObject(susan))
console.log(validator.isTheTypeOfValuesMatches(susan))
console.log(validator.isThereArray(susan.children))
console.log(validator.isTheValueOfTheArrrayIsYesOrNo(susan.children))
