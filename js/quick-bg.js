/**
 * Agócs Kevin írta
 */
/* Ez a script ez egy gyors háttér beállítást ér el
a 'bg' egyedi attribútum segítségével */
// Lekérjük az összes 'bg' attribútumú elemet és átmegyünk mindegyikek
document.querySelectorAll("[bg]").forEach(function (element) {
    // Megnézzük hogy ürese és ha igen akkor vissza megyünk
    if (element.getAttribute("bg") == null)
        return;
    // Beállítjuk a hátteret
    element["style"].backgroundImage = "url(" + element.getAttribute("bg") + ")";
});
