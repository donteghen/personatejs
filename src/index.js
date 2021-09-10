const { random, uniqBy, } = require('lodash');

const jsonContentOne = require('../dataOne.json');
const jsonContentTwo = require('../dataTwo.json');
const all = jsonContentOne.concat(jsonContentTwo);

let personSet  = [];

const reset = () => {
   personSet = uniqBy(all);
}

const  randomPerson = () => {
    if (personSet.length === 0) {
        console.log('reseting person set.....')
        reset()
    }
    let index = random(personSet.length - 1)
    let selectedRandom = personSet[index];
        personSet = personSet.filter(item => item._id !== selectedRandom._id);
        return {selectedRandom, personSet, index};
}

module.exports =  {
   all, randomPerson
}