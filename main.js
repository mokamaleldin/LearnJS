function first() {
    console.log('First');
}

function second() {
    first();
    console.log('Second');
}


function three() {
    second();
    console.log('Second');
}