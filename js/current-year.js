/**
 * Agócs Kevin írta
 */
// Vissza ad nekünk egy számot, nem tudom mire tudnád használni lol
function get_current_year() {
    return new Date().getFullYear();
}
// Ugyan az csak az oldal betöltésekor fut le, 'span' tag használata ajánlott
document.querySelectorAll(".current-year").forEach(element => {
    element["innerText"] = get_current_year();
});
