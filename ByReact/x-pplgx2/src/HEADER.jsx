import React from 'react';
import logo from './assets/logo.png';
import Swal from 'sweetalert2';
import ketik from 'typeit-react'
import TypeIt from 'typeit-react';
import { Link } from 'react-router-dom';
function Header() {
  const handleClick = () => {
    Swal.fire({
      title: 'Halo!',
      text: 'SELAMAT DATANG DI KELAS KAMI :)',
      icon: 'success',
      confirmButtonText: 'Oke'
    });
  };

  const side = () => {
    const sidebar = document.getElementById('SideBar');
    if (sidebar) sidebar.classList.toggle('hidden');
  };

  return (
    <div>
      <header>
        <nav className="m-0 flex justify-between items-center">
          <img className="" src={logo} alt="" width="100px" />
          <ul className="flex justify-between items-center">
            <li><a className="mr-5">nama siswa</a></li>
            <li><a href="#EkstrakulikulerKelas" className="mr-5">EkstrakulikulerKelas</a></li>
            <li><a href="#Jadwal" className="mr-5">Jadwal</a></li>
            <li><a href="#Memories" className="mr-5" id="Memories">Memories</a></li>
            <li>
              <button onClick={side}>
                <svg width="50px" height="50px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                  <path className="ham" d="M7.94977 11.9498H39.9498" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="ham" d="M7.94977 23.9498H39.9498" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="ham" d="M7.94977 35.9498H39.9498" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        <ul id="SideBar" className="float-right sticky bg-black text-white p-10 rounded-2xl h-150 hidden">
          <li className="mb-5">
            <a href="../LoginPages/LoginPage.html" className="">
              <svg height="20px" width="20px" viewBox="0 0 450.546 450.546" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <g>
                    <path style={{ fill: '#ffffff' }} d="M238.74,140.177c6.396,0,12.393,2.488..." />
                  </g>
                  <g>
                    <polygon style={{ fill: '#ffffff' }} points="450.546,387.927 125.239,387.927..." />
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className="mb-5"><a href="" className="item">--</a></li>
          <li className="mb-5"><a href="" className="item">--</a></li>
          <li><a href="" className="item">--</a></li>
        </ul>

        <div className="flex flex-row-reverse justify-around mt-5" id="home">
          <div className="float-right flex">
            <img src="/17agustusan.jpg" className="border-10 border-black rounded-2xl" alt="" width="500px" />
          </div>
          <div className="w-2xs flex items-center">
            <div className="textdivision">
            <TypeIt><h1 id="Kelas" className="p-5 bg-black text-white  rounded-2xl transition-transform duration-[1000ms] p-5 bg-black text-white flex justify-center hover:scale-120 text-4xl">KELAS PPLG 2</h1></TypeIt>
              <TypeIt><p id="Sejarahnya" className="my-4">Kami adalah siswa/siswi kelas PPLG 2 Angkatan 2027 dari SMK Yayasan Leo Sutrisno. Kami memiliki jumlah murid 38 siswa, 33 siswa dan 5 siswi. tidak terlalu banyak informasi tentang kami, karena kami masih dalam proses pembelajaran. terimkasih</p></TypeIt>
                <button
                  className="px-5 py-2 text-black rounded-2xl border-2 border-black hover:bg-black hover:text-white hover:rounded-2xl transition-transform duration-[2000ms]"
                  onClick={handleClick} ><Link to={"/"}>EXPLORE</Link></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
 