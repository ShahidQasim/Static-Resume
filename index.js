// 
var togal = document.getElementById("togsec");
var picture = document.querySelector("#pic");
var kntactt = document.querySelector("#contact");
function app(sec) {
    if (sec.style.display === "none") {
        sec.style.display = "block";
    }
    else {
        sec.style.display = "none";
    }
}
togal.addEventListener("change", function () {
    var selectedvalue = togal.value;
    if (selectedvalue === "pic") {
        app(picture);
    }
    else if (selectedvalue === "contact") {
        app(kntactt);
    }
});
