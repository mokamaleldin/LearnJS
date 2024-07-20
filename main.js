fetch("https://api.github.com/users/mokamaleldin/repos").then((result) => {
    let data = result.json();
    return data;
}).then((data) => {
    data.length = 10;
    return data;
}).then((data) => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }
})