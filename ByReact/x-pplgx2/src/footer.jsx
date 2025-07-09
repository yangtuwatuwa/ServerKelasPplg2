import Swal from "sweetalert2";
import React from "react";
import TypeIt from "typeit-react";
import Tailwind from "tailwindcss"
import { Route } from "react-router-dom";

export default function(){
   
    return (
<footer className="bg-black/90 backdrop-blur-md text-white py-10 mt-12">
  <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-6">
    <p className="text-center text-base leading-relaxed text-gray-300 max-w-2xl">
      Terima kasih telah mengunjungi website kami hingga ke bagian footer.  
      Kami sangat menghargai kehadiran Anda.  
      Kritik atau saran? Silakan sampaikan melalui  
      <span className="font-semibold text-white underline"> Discord kami</span>.
    </p>

    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-100">Spesial Thanks</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Tuhan Yang Maha Esa
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Orang Tua Kami
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Bapak Dicky Fernando S.
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Wali Kelas Kami di SMK
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Ibu Sriyanti
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Bapak Muhammad Bagas R.
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Bapak Anathapindika Surja P.
        </li>
        <li className="bg-white/5 rounded-md px-3 py-2 text-center hover:bg-white/10 transition">
          Bapak Mohammad Syahdzani A. S.
        </li>
      </ul>
    </div>

    <p className="text-xs mt-6 text-gray-500">&copy; 2024 Kelas PPLG 2. All rights reserved.</p>
  </div>
</footer>

    )
}
