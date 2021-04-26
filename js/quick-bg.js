document.querySelectorAll("[bg]").forEach((element) => {
    if (element.getAttribute("bg") == null) return;

    try{
        element.setAttribute("style", `background-image: url(${element.getAttribute("bg")}); ${element.getAttribute("style")}`);
    }catch(err){
        console.log(err);
    }
})