import uniqueRandomArray from 'unique-random-array';
import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('../persons.json', import.meta.url)
  )
);
const all = json;
const randomPerson =  uniqueRandomArray(json)
export {
   all, randomPerson
}