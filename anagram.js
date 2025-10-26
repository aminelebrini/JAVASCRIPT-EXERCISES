const str = "listen";
const str1 = "siLent";

function isAnagram(str , str1)
{
   
    str = str.replace(/\s/g, "").toLowerCase();
    
    str1 = str1.replace(/\s/g, "").toLowerCase();

    const sortedstr = str.split('').sort().join(''); 
    const sortedstr1 = str1.split('').sort().join('');

    if(sortedstr === sortedstr1)
    {
        console.log("true");
    }else{
        console.log("false");
    }
}

isAnagram(str, str1);