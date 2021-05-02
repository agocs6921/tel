document.querySelectorAll(".current-year").forEach(function (element) {
    element["innerText"] = new Date().getFullYear();
});
