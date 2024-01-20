// Original nested object
const nestedObject = {
    level1: {
        key1: 'value1',
        level2: {
            key2: 'value2',
            level3: {
                key3: 'value3'
            },
            addFunction: function () {
                console.log('Function executed!');
            }
        }
    }
};

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        // Base case: if obj is not an object, return it as is
        return obj;
    }

    if (Array.isArray(obj)) {
        // If obj is an array, create a new array and deep copy each element
        return obj.map((element) => deepCopy(element));
    }

    // If obj is an object, create a new object and deep copy each property
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}





//deep copy with loop
const deepCopyObject = deepCopy(nestedObject);
console.log("deepCopyObject", deepCopyObject);

//deep copy by json.parse
const deepCopytwo = JSON.parse(JSON.stringify(nestedObject))
console.log("with functions", deepCopytwo);