function toUpperCase(string)
{
    let firstletter = string[0].toUpperCase();
    let lastword = "";
    
        for(let i = 1; i < string.length;i++)
        {
            lastword += string[i];
        }        
        console.log(firstletter+lastword);
}

toUpperCase("amine");