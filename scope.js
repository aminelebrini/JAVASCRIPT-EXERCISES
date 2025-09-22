let y = 30; //global scope
function test()
{
    let x = 20;
    console.log(x+y);
}

console.log(y);
test();