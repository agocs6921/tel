//
// Agócs Kevin írta
//
/**
 * Vissza ad nekünk egy számot, nem tudom mire tudnád használni lol
 * @returns {number} Mai év
 */
const get_current_year = () => new Date().getFullYear(); // Imádom a E6-os nyíl függvényeket 
/**
 * Egy függvény mely minden '.current-year' osztályú elemen végig megy és belé írja a mai évet mint szöveg
 * @returns {void}
 */
const init_current_years = () => {
    document.querySelectorAll(".current-year").forEach(element => {
        element["innerText"] = get_current_year();
    });
};
init_current_years();
