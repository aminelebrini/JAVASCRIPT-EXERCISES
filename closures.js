function call()
{
    let counter = 0;

    function recall()
    {
        counter++;
        return counter;
    }
    return recall;
}

  const counterFn = call(); 

console.log(counterFn()); 
console.log(counterFn()); 
console.log(counterFn());