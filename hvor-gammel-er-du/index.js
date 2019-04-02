

const dato = new Date();

const år = dato.getFullYear();
// HTML-elementer
const inpDato = document.querySelector("#inpDato");
const info = document.querySelector("#info");

const måned = dato.getMonth();
const ukedag =dato.getDay();
const dagIMåneden = dato.getDate();

function sjekkAlder() {
    const fdato = new Date(inpDato.value);
    const fmåned = fdato.getMonth();
    const fukedag = fdato.getDay();
    const fdagIMåneden = fdao.getDate();
}



inpDato.addEventListener("change", sjekkAlder);
