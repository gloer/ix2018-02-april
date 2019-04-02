const klokka = document.querySelector("#klokka");


function visKlokka() {
    const tid = new Date();
    let timer = tid.getHours();
    let minutter = tid.getMinutes();
    let sekunder = tid.getSeconds();

    if(timer < 10) {
        timer = "0" + timer;
    }
    if(minutter < 10) {
        minutter = `0${minutter}`;
    }
    if(sekunder < 10) {
        sekunder = "0" + sekunder;
    }


    // Hvordan kan dere få klokka til å vise 09:14:07
    // Nå viser den 9:14:7
    const tidstekst = `${timer}:${minutter}:${sekunder}`;
    const csstid = `#${timer}${minutter}${sekunder}`;
    //klokka.innerHTML = tidstekst;
    klokka.innerHTML = csstid;
    document.body.style.backgroundColor = csstid;
}

setInterval(visKlokka, 1000);
visKlokka();