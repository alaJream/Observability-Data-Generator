$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});
function changeImage(){
    let displayImage = document.getElementById("image1")
    if(displayImage.src.match("./icons/play.png")){
        displayImage.src = "./icons/pause.png"
    } else {
        displayImage.src = "./icons/play.png"
    }
}