//
// Agócs Kevin írta
//
/* Ez a fájl haszontalan, ne használd xD  */
/**
 * Ez a függvény haszontalan, ne használd!
 * @param {Element} value_source Ez az az elem amely hívta a függvény, 'input'-nak kell lennie
 * @param {string|Element} output_target Az 'id'-e vagy maga az elem ami majd ki fogja jelezni az eredményt
 * @returns {void}
 */
const human_calculator = (value_source, output_target) => {
    /**
     * Az érték amit használunk arra hogy kiszámoljuk a víz mennyiségét ami ennyibe belefér
     * @type {number}
     */
    const value = value_source["value"];
    /**
     * Szövegdoboz ami kifogja írni a vég eredényt
     * @type {Element}
     */
    const text_box = typeof output_target == "string" ? document.querySelector(`${(output_target.startsWith("#") ? "" : "#")}${output_target}`) : output_target;
    if (!value)
        return;
    /**
     * Amennyi víz elfér *value* mennyiségű emberben
     * @type {number}
     */
    const liters = human_calc(value);
    text_box.innerHTML = `<b title="${liters}">${Math.round(liters)}</b> liter víz férne el <b title="${value}">${Math.round(value)}</b> felnőtt emberben`;
};
/**
 * Ez a függvény számolja a litereket
 * @param {number} human_count Emberek száma
 * @returns {number} Literben víz amennyi elfér *human_count* mennyiségű emberben
 */
const human_calc = (human_count) => {
    /**
     * Emberi térfogat
     * @type {number}
     */
    const human_volume = 0.062;
    /**
     * 1 liter víz térfogata
     * @type {number}
     */
    const l = 0.001;
    return ((human_volume * 0.70) * human_count) / l;
};
