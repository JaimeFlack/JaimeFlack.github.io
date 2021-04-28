function menuMobile(){
    var btn_open_menuMobile = document.getElementById("btn-open-menuMobile");
    var menu_mobile = document.getElementById("menuMobile");
    var btn_close_menuMobile = document.getElementById("btn-close-menuMobile");

    btn_open_menuMobile.addEventListener("click", function(e){
        e.preventDefault();
        btn_open_menuMobile.style.left = "-1000px";
        btn_close_menuMobile.style.left = "0px";
        menu_mobile.style.left = "0px";
        menu_mobile.style.transition = ".3s ease all";
    });
    btn_close_menuMobile.addEventListener("click", function(e){
        e.preventDefault();
        btn_close_menuMobile.style.left = "-1000px";
        btn_open_menuMobile.style.left = "0px";
        menu_mobile.style.left = "-1000px";
        menu_mobile.style.transition = ".3s ease all";
    });
}
menuMobile();