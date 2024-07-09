function parent() {
    let a = 10;

    function child() {
        console.log(`from child ${a}`);
        function grand() {
            console.log(`from grand ${a}`)
        }
        grand();
    }
    child()
}
parent() //10 //10