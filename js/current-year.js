//
// Agócs Kevin írta
//
/**
 * Vissza ad nekünk egy számot, nem tudom mire tudnád használni lol
 * @returns {number}
 */
const get_current_year = () => new Date().getFullYear(); // Imádom a E6-os nyíl függvényeket 
// Ugyan az csak az oldal betöltésekor fut le, 'span' tag használata ajánlott
document.querySelectorAll(".current-year").forEach(element => {
    element["innerText"] = get_current_year();
});
