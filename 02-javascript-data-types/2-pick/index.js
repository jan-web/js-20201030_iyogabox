/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const arr = Object.entries(obj);
  const newObj = {};
  for (let value of arr) {
    if (fields.includes(value[0])) {
      newObj[value[0]] = value[1];
    }
  }
  return newObj;
};
