
let lis = document.querySelectorAll("ul li");

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataaset.color)
    })
})