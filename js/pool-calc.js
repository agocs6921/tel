// Az átlag ember térfogatának állandója
var human_volume = 0.062;
// Számoló gép függvény
function calculator() {
    // Összes szám ami kell nekünk
    var values = [
        document.querySelector("#length")["value"],
        document.querySelector("#width")["value"],
        document.querySelector("#depth")["value"]
    ];
    var l = values[0], w = values[1], d = values[2];
    // Ellenőrzünk
    if (!(l && w && d))
        return;
    // Kiszámoljuk
    var _a = pool_calc(l, w, d), human_count = _a[0], volume = _a[1];
    // Kijelezzük
    document.querySelector("#result").innerHTML = "<b title=\"" + human_count + "\">" + Math.round(human_count) + "</b> ember f\u00E9r el egy <b title=\"" + volume + "\">" + Math.round(volume) + "</b> m<sup>3</sup>-es medenc\u00E9ben";
}
// Függvény a térfogat számításra
function pool_calc(length, width, depth) {
    // Egy állandóként kiszámoljuk a térfogatát
    var volume = length * width * depth;
    // Vissza küldjük az eredményeket
    return [volume / human_volume, volume];
}
