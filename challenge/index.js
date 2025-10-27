

const Nobtn = document.getElementById('nosubmit');
const Yesbtn = document.getElementById('yesubmit');
Nobtn.addEventListener('mouseover', function(){
    const left = Math.floor(Math.random() * 500) + "px";
    const top = Math.floor(Math.random() * 500) + "px";

    Nobtn.style.position = "relative";
    Nobtn.style.left = left;
    Nobtn.style.top = top;
});
Yesbtn.addEventListener('click', function(){
    document.getElementById('paragraphe').innerText = 'JavaScript also says "I love you".';
});