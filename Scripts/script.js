function Gambar() {
  
    let text = document.getElementById('text');
    if(text.style.display == 'none') {
        
        text.style.display = 'block'; // Menampilkan teks saat gambar diklik
    } else {
        text.style.display = 'none'; // Menghilangkan teks saat gambar diklik lagi
    }
  };
  