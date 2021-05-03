/**
 * Agócs Kevin írta
 */
// Vissza ad nekünk egy számot, nem tudom mire tudnád használni lol
var get_current_year = () => new Date().getFullYear();
// Ugyan az csak az oldal betöltésekor fut le, 'span' tag használata ajánlott
document.querySelectorAll(".current-year").forEach(element => {
    element["innerText"] = get_current_year();
});
