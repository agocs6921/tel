var human_volume = 0.062;
function calculator() {
    var l = document.querySelector("#length")["value"];
    var w = document.querySelector("#width")["value"];
    var d = document.querySelector("#depth")["value"];
    var r = document.querySelector("#result");
    var _a = pool_calc(l, w, d), human_count = _a[0], volume = _a[1];
    r.innerHTML = "<b title=\"" + human_count + "\">" + Math.round(human_count) + "</b> ember f\u00E9r el egy <b title=\"" + volume + "\">" + Math.round(volume) + "</b> m<sup>3</sup>-es medenc\u00E9ben";
}
function pool_calc(length, width, depth) {
    var volume = length * width * depth;
    return [volume / human_volume, volume];
}
