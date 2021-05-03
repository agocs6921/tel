//
// Agócs Kevin írta
//
/* Ez a fájl haszontalan, ne használd xD  */
function human_calculator(value_source, output_target) {
    var value = value_source["value"];
    if (!value)
        return;
    const liters = human_calc(value);
    document.querySelector(`#${output_target}`).innerHTML = `<b title="${liters}">${Math.round(liters)}</b> liter víz férne el <b title="${value}">${Math.round(value)}</b> felnőtt emberben`;
}
function human_calc(human_count) {
    const human_volume = 0.062;
    const l = 0.001;
    return ((human_volume * 0.70) * human_count) / l;
}
