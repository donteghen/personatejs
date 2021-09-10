const {all,randomPerson}  = require('./src/index.js');
console.log(all.length)

let testarray = []
for (let i = 0; i < 3000; i++){
    testarray.push(i)
}
testarray.map(x => {
    const {index, personSet, selectedRandom} = randomPerson()
    console.log(x + ' =====> ' + selectedRandom.email + '  at index : ' + index + '  remaining length : ' + personSet.length)
})
