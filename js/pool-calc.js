//
// Agócs Kevin írta
//
/**
 * Az átlag ember térfogatának állandója
 * @type {number}
 */
const human_volume = 0.062;
/**
 * Függvény a térfogat számításra és az emberek számára
 * @param {number} length Medence hossza
 * @param {number} width Medence szélessége
 * @param {number} depth Medence mélysége
 * @returns {number[]} Emberek számát[0] és a medence térfogatát[1] tartalmazó Array
 */
const pool_calc = (length, width, depth) => [(length * width * depth) / human_volume, length * width * depth]; // Mindenhol fogok használni nyíl függvényeket ahol tudok és maga nem tud megállítani, hahaha
/**
 * Számológép függvény
 * @returns {void}
 */
const calculator = () => {
    // Az értékeink amik kellenek nekünk
    const [l, w, d] = [
        document.querySelector("#length")["value"],
        document.querySelector("#width")["value"],
        document.querySelector("#depth")["value"]
    ];
    // Ellenőrizzünk hogy értékek léteznek
    if (!(l && w && d))
        return;
    // Kiszámoljuk az értékeket ami kell nekünk
    const [human_count, volume] = pool_calc(l, w, d);
    // Kijelezzük az értékeket normálisan
    document.querySelector("#result").innerHTML = `<b title="${human_count}">${Math.round(human_count)}</b> ember fér el egy <b title="${volume}">${Math.round(volume)}</b> m<sup>3</sup>-es medencében`;
};
