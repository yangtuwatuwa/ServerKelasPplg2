import React from "react";
import TypeIt from "typeit-react";
import Swal from "sweetalert2";
import Header from "./HEADER";
import { Link } from "react-router-dom";
import Tailwind from "tailwindcss"
function pernapasan(params) {
    return(
        <div>
            <Header />
            <h1 className="flex justify-center mb-20 mt-10 text-3xl font-bold text-bold">INI ADALAH ALBUM KAMI SELAMA BERSEKOLAH</h1>
            <div className="flex">
            <img src="FotoSaatMpls.jpg" alt="" className=" rounded-xl w-100"/>
            <div>
            <h1 className="ml-20 text-3xl font-bold text-white bg-blue-500 h-fit p-5 rounded-2xl w-fit">MPLS JULI 2024 </h1>
            <br />
            <p className="ml-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia natus odio id harum ipsum hic, laborum, voluptatum perspiciatis voluptate iure molestiae nobis laboriosam facere! Aperiam laboriosam ad quae alias?</p>
            </div>
            </div>
        </div>
    )
}

export default pernapasan