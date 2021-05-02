function human_calculator(value_source, output_target) {
    var value = value_source["value"];
    if (!value)
        return;
    var liters = human_calc(value);
    document.querySelector("#" + output_target).innerHTML = "<b title=\"" + liters + "\">" + Math.round(liters) + "</b> liter v\u00EDz f\u00E9rne el <b title=\"" + value + "\">" + Math.round(value) + "</b> feln\u0151tt emberben";
}
function human_calc(human_count) {
    var human_volume = 0.062;
    var l = 0.001;
    return ((human_volume * 0.70) * human_count) / l;
}
