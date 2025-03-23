function SumArr(arr){
    let s = 0;
    for(let i =  0; i < arr.length;i++)
    {
        s += arr[i];
        console.log(s); 
    }
}
let x = [1,2,3,4];
SumArr(x);