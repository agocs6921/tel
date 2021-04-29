/* Ez a script ez egy gyors háttér beállítást csinál
a 'bg' egyedi attribútum segítségével */

// lekérjük az összes 'bg' attribútumú elemet és átmegyünk mindegyikek
document.querySelectorAll("[bg]").forEach((element) => {
    // Megnézzük hogy ürese és ha igen akkor vissza megyünk
    if (element.getAttribute("bg") == null) return;

    /* Megpróbáljuk beállítani a hátteret a 'style' attribútummal
    mert valamiért element.style az nem működött :P */
    try{
        element.setAttribute("style", `background-image: url(${element.getAttribute("bg")}); ${element.getAttribute("style") ? element.getAttribute("style") : ""}`);
    }catch(err){
        console.log(err);
    }
})