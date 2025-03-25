function Mergetwoarr(arr1,arr2)
{
    for(let i = 0; i< arr2.length;i++)
    {
        arr1.push(arr2[i]); 
    }
    console.log(arr1);
}
let x = [1,2,3,4];
let y = [5,6,7];
Mergetwoarr(x,y);