const x = "kak";

const z = x.split("").reverse().join("");
if(z === x)
{
    console.log("yes " + x + " " + "is palindrome");
}else{
    console.log("no " + x + " " + "is not palindrome");

}