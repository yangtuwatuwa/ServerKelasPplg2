import { useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from'react-router-dom';
export default function InformasiKelas() {
  function kelik() {
    Swal.fire("Masih dalam tahap development. Maaf atas ketidaknyamanannya.");
  }

  function galih() {
    Swal.fire("TEST BERHASIL!");
  }

  return (
    <main>
      <div className="isiKontenKedua" id="Jadwal">
        <h1 className="flex justify-center font-bold text-5xl mt-20 mb-10">
          INFORMASI <span className="text-red-500 ml-2">KELAS</span>
        </h1>
        <div className="justify-around flex">
          <div className="card">
            <div className="gambar">
              <img
                src="https://media.tenor.com/67oMAs1JSVcAAAAM/ingfo-no-ingfo.gif"
                alt="jadwal"
                width="300px"
              />
            </div>
            <div className="teksnya">
              <h2>Jadwal Kelas</h2>
              <p>Jadwal baju, jadwal buku, jadwal piket</p>
              <button onClick={kelik}>Kunjungi</button>
            </div>
          </div>

          <div className="card">
            <div className="gambar">
              <img
                src="https://media.tenor.com/67oMAs1JSVcAAAAM/ingfo-no-ingfo.gif"
                alt="absensi"
                width="300px"
              />
            </div>
            <div className="teksnya">
              <h2>Absensi Kelas</h2>
              <p>No Absen dan Kehadiran Siswa selama 1 Semester</p>
              <button onClick={kelik}>Kunjungi</button>
            </div>
          </div>
        </div>
      </div>

      <div className="isiKontenTiga">
        <h1 className="text-center font-bold text-4xl mt-16 mb-8">Album Kelas</h1>

        <div className="kami flex justify-center">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/4W8I7Gi3a3CgbvWsYBrngc?utm_source=generator&theme=0"
            width="50%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div className="foto mt-10">
          <div className="nama text-center mb-4">
            <h1 className="text-2xl font-semibold">ALBUM KAMI SELAMA KELAS 10</h1>
          </div>

          <div className="bg-[url('FotoSaatMpls.jpg')] relative h-30 flex items-center justify-start bg-cover bg-center p-4">
            <div className="backdrop-blur-md bg-white/30 p-4 rounded-xl shadow-lg w-full max-w-md">
              <h1 className="font-mono text-xl">Disinilah kami mulai</h1>
              <p className="mb-3">Kami adalah pemuda yang sedang masa transisi dari SMP ke SMK</p>
              <button
                className="Album border px-4 py-2 rounded hover:bg-white hover:text-black transition"
                onClick={galih}
              ><Link to="/albumFoto" > Album Picture</Link></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
