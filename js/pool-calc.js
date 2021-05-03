/**
 * Agócs Kevin írta
 */
// Az átlag ember térfogatának állandója
const human_volume = 0.062;
// Számoló gép függvény
function calculator() {
    // Összes szám ami kell nekünk
    let values = [
        document.querySelector("#length")["value"],
        document.querySelector("#width")["value"],
        document.querySelector("#depth")["value"]
    ];
    var [l, w, d] = values;
    // Ellenőrizzünk
    if (!(l && w && d))
        return;
    // Kiszámoljuk
    const [human_count, volume] = pool_calc(l, w, d);
    // Kijelezzük
    document.querySelector("#result").innerHTML = `<b title="${human_count}">${Math.round(human_count)}</b> ember fér el egy <b title="${volume}">${Math.round(volume)}</b> m<sup>3</sup>-es medencében`;
}
// Függvény a térfogat számításra
function pool_calc(length, width, depth) {
    // Egy állandóként kiszámoljuk a térfogatát
    const volume = length * width * depth;
    // Vissza küldjük az eredményeket
    return [volume / human_volume, volume];
}
