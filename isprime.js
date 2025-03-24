function isprime(n){
    
    if(n % n === 0 && n % 1 === 0 && n % 2 === 0)
        {
            console.log(n + " " +"Is Not Prime");
        }else{
            console.log(n + " " +"Is Prime");
    
        }
}
isprime(4)