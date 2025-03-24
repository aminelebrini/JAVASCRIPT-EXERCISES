function createArr(b)
{
    let newArr = [];
    for(let i = 1; i<=b; i++)
    {
        for(let j = 1; j <= i;j++)
        {
            newArr.push(j);
        }
    }
    console.log(newArr)
}
createArr(3);