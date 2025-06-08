// Menunggu seluruh halaman (HTML) selesai dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", function () {

    // --- Inisialisasi Pustaka (Library) ---
    // Tampilkan pesan selamat datang sekali saja saat halaman dimuat
    swal("MAAF, WEBSITE MASIH DALAM TAHAP DEVELOPMENT :)");

    // Inisialisasi TypeIt untuk elemen #Kelas
    new TypeIt("#Kelas", {
        strings: ["KELAS PPLG 2 AKT 27"],
        speed: 75,
        waitUntilVisible: true,
    }).go();

    // Inisialisasi TypeIt untuk elemen #Sejarahnya
    new TypeIt("#Sejarahnya", {
        strings: "Kami adalah siswa/siswi kelas PPLG 2 Angkatan 2027 dari SMK Yayasan Leo Sutrisno. Kelas kami memiliki jumlah murid 35 siswa, 30 siswa dan 5 siswi. Tidak terlalu banyak informasi tentang kami, karena kami masih dalam proses pembelajaran. Terimakasih.",
        speed: 50,
        waitUntilVisible: true,
    }).go();
});

// --- Fungsi untuk Interaksi Pengguna ---

/**
 * Fungsi untuk menampilkan atau menyembunyikan sidebar.
 * Lebih efisien dengan menggunakan toggle class CSS.
 */
function side() {
    const sideBarElement = document.getElementById("SideBar");
    if (sideBarElement) { // Cek apakah elemen ada sebelum memanipulasinya
        sideBarElement.classList.toggle("active");
    } else {
        console.error("Elemen dengan ID 'SideBar' tidak ditemukan.");
    }
}

/**
 * Fungsi untuk menampilkan notifikasi Jadwal.
 * Menggunakan SweetAlert agar konsisten dengan notifikasi lain.
 */
function Jadwal() {
    swal("Fitur Jadwal Masih Dalam Pengembangan", "Mohon tunggu pembaruan selanjutnya ya!", "info");
}

/**
 * Fungsi untuk mengarahkan pengguna ke halaman daftar nama siswa.
 * Memperbaiki bug pada window.location.
 */
function NamaSiswa() {
    swal({
        title: "Pindah Halaman?",
        text: "Anda akan diarahkan ke halaman daftar siswa. Lanjutkan?",
        icon: "warning",
        buttons: ["Batal", "Ya, Lanjutkan!"],
        dangerMode: true,
    })
    .then((willRedirect) => {
        if (willRedirect) {
            // CARA YANG BENAR untuk redirect:
            window.location.href = "https://www.google.com"; // Ganti dengan URL halaman nama siswa Anda
        } else {
            swal("Aksi dibatalkan.", {
                icon: "error",
            });
        }
    });
}