$(function () {

    $("#div-third img").mouseover(function () {
        console.log("dw");
        document.getElementById("pr-img").src = this.src;
    })


})