function norepetn(arr)
{
    let newarr = [];
    for(let i = 0; i<= arr.length; i++)
    {
        if(arr[i] !== arr[i+1])
        {
            console.log(arr[i]);
        }
        
    }
}

norepetn([1,2,3,3,4,4,10,10,10,5]);
