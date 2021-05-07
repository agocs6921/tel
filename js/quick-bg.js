//
// Agócs Kevin írta
//
/* Ez a script ez egy gyors háttér beállítást ér el
a 'bg' egyedi attribútum segítségével */
/**
 * Lekérjük az összes 'bg' attribútumú elemet és átmegyünk mindegyikek és az attribútumba írt url alapján beállítjuk a hátteret
 * @returns {void}
 */
const init_quick_bgs = () => {
    document.querySelectorAll("[bg]").forEach(element => {
        // Megnézzük hogy ürese és ha igen akkor vissza megyünk
        if (element.getAttribute("bg") == null)
            return;
        // Beállítjuk a hátteret
        element["style"].backgroundImage = `url(${element.getAttribute("bg")})`;
    });
};
init_quick_bgs();
