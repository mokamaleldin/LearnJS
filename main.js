//every things i don't write it will be false

const myObject = {
    a: 1,
    b: 2,
}

Object.defineProperties(myObject, {
    c: { value: 3, configurable: true },
    b: { value: 4, configurable: true },
    d: { value: 5, configurable: true },
})

console.log(myObject) //{a: 1, b: 4, c: 3, d: 5}

console.log(Object.getOwnPropertyDescriptor(myObject, 'c')) //{value: 3, writable: false, enumerable: false, configurable: true}