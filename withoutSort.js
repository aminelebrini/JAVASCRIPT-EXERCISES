let arr = [6,4,7,2,3,1,5];
let tmp = 0;
for(let i = 0; i < arr.length - 1 - i; i++)
{
    for(let j = 0; j < arr.length; j++)
    {
        if(arr[j] < arr[j+1])
        {
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
    }
    console.log(arr);
}