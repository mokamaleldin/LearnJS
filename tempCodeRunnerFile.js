const myPromise = new Promise((resolve, reject) => {
    // let employee = ['mohamed', 'ahmed', 'ali', 'omar'];
    let employee = [];
    if (employee.length > 0) {
        resolve(employee);
    } else {
        reject(Error('No Employee'));
    }
});

myPromise.then((resolve) => {
    resolve.length = 2;
    return resolve;
});

myPromise.then((resolve) => {
    resolve.length = 1;
    return resolve;
});

myPromise.then((resolve) => {
    console.log(`Employee: ${resolve}`);
}).catch((reject) => {
    console.log(reject);
})