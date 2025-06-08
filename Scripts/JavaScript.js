

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
            strings: ["KELAS PPLG 2 AKT 27"],
        }).go();
        });
        document.addEventListener("DOMContentLoaded", function () {
            new TypeIt("#Sejarahnya", {
                strings: "Kami adalah siswa/siswi kelas PPLG 2 Angkatan 2027 dari SMK Yayasan Leo Sutrisno. Kami memiliki jumlah murid 38 siswa, 33 siswa dan 5 siswi. tidak terlalu banyak informasi tentang kami, karena kami masih dalam proses pembelajaran. terimkasih",
                speed: 50,
                waitUntilVisible: true,
            }).go(); 
        })

//JADWAL KELAS YAKK
let memories = document.getElementById('Memories');

memories.addEventListener('click', function(){
    swal("masih dalam tahap pengembangan")
});

// document.addEventListener('DOMContentLoaded', function(){
//     swal('dom content loaded')
// });


