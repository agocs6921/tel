function get_current_year() {
    return new Date().getFullYear();
}
document.querySelectorAll(".current-year").forEach(function (element) {
    element["innerText"] = new Date().getFullYear();
});
