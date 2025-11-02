
const audios = document.querySelectorAll('.myAudio');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn=>{
    btn.addEventListener('click', function(e){
    let value = e.target.textContent;
    console.log(value);

    if(value === "A")
    {
        audios[0].play();
    }
    if(value === "B")
    {
        audios[1].play();
    }
    if(value === "C")
    {
        audios[2].play();
    }
    if(value === "D")
    {
        audios[3].play();
    }if(value === "E")
    {
        audios[4].play();
    }
    if(value === "F")
    {
        audios[5].play();
    }
    if(value === "G")
    {
        audios[6].play();
    }
    if(value === "H")
    {
        audios[7].play();
    }
    if(value === "I")
    {
        audios[8].play();
    }
    if(value === "J")
    {
        audios[9].play();
    }
    if(value === "K")
    {
        audios[10].play();
    }
    if(value === "L")
    {
        audios[11].play();
    }
    if(value === "M")
    {
        audios[12].play();
    }
    if(value === "N")
    {
        audios[13].play();
    }
    if(value === "O")
    {
        audios[14].play();
    }
    if(value === "P")
    {
        audios[15].play();
    }
    if(value === "Q")
    {
        audios[16].play();
    }
    if(value === "K")
    {
        audios[10].play();
    }
    if(value === "K")
    {
        audios[10].play();
    }
});
})