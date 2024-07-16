/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
    let [{ title: t, age: a, available: v, skills: [, last] }, ,] = myFriends;

    console.log(t)
    console.log(a)
    if (v === true) {
        console.log('available')
    } else {
        console.log("not available")
    }
    console.log(last)
} else if (chosen === 2) {
    let [, { title: t, age: a, available: v, skills: [, last] },] = myFriends;

    console.log(t)
    console.log(a)
    if (v === true) {
        console.log('available')
    } else {
        console.log("not available")
    }
    console.log(last)

} else {
    let [, , { title: t, age: a, available: v, skills: [, last] }] = myFriends;

    console.log(t)
    console.log(a)
    if (v === true) {
        console.log('available')
    } else {
        console.log("not available")
    }
    console.log(last)
};
