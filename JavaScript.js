//ini adalah side bar 
function side() {
    var text = document.getElementById("SideBar");
    if (text.style.opacity === "0" || text.style.opacity === "") {
        text.style.opacity = "1";
        text.style.visibility = "visible";
        text.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out";
    } else {
        text.style.opacity = "0";
        text.style.visibility = "hidden";
        text.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out";
    }
}
//ini adalah lib h1 yakkk
    document.addEventListener("DOMContentLoaded", function () {
        new TypeIt("#Kelas", {
            strings: ["KELAS PPLG 2 AKT 24"],
        }).go();
        });
        document.addEventListener("DOMContentLoaded", function () {
            new TypeIt("#Sejarahnya", {
                strings: "Kami adalah siswa kelas PPLG 2 Angkatan 2024 dari smk yayasan leo sutrisno. Kami memiliki jumlah murid 38 siswa, 33 siswa dan 5 siswi. tidak terlalu banyak informasi tentang kami, karena kami masih dalam proses pembelajaran. terimkasih",
                speed: 50,
                waitUntilVisible: true,
            }).go(); 
        })