var nav_opened = false;

window.addEventListener("resize", function(event){
    if (nav_opened){
        if (window.innerWidth > 900){
            document.getElementById("sidebar").style.width = "20%";
        } else{
            document.getElementById("sidebar").style.width = "100%";
        }
    } else {
        closeNav();
    }
})

function openNav(){

    if (window.innerWidth > 900){
        document.getElementById("sidebar").style.width = "20%";
    } else{
        document.getElementById("sidebar").style.width = "100%";
    }

    nav_opened = true;

    document.getElementById("sidebar_btn").setAttribute("onclick", "closeNav()");
}

function closeNav(){
    nav_opened = false;

    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("sidebar_btn").setAttribute("onclick", "openNav()");
}