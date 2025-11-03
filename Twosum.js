let arr = [1,2,3,8,4,9];
let arr1 = [];
for(let i = 0; i < arr.length - 1; i++)
{
    arr1.push(arr[i] + arr[i+1]);
}
console.log(arr1);