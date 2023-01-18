// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((shoeList, brand) => shoeList.concat(brand.shoes), []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const ageTotal = dogs.reduce((acc, dog) => (acc += dog.age), 0) / dogs.length;
  return ageTotal;
};
