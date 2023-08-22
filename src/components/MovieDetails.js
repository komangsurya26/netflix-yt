import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { baseUrl } from "../../utils/constant";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function MovieDetails({ movie, showPlayer, setShowPlayer, trailerURL }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh] justify-center lg:pb-12">
          <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
            <Image
              className="object-cover"
              alt="moviePoster"
              fill
              src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            />
          </div>
          <h1 className="text-4xl px-3 font-semibold md:text-4xl lg:text-5xl">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="max-w-xs px-3 text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
            {movie?.overview}
          </p>
          <div className="flex px-3 gap-2 md:px-3 md:gap-4">
            <button
              className="bannerButton bg-white text-black"
              onClick={() => {
                setShowPlayer(true);
              }}
            >
              <FaPlay className="h-4 w-4 text-black md:h-7 md:w-6" />
              Mulai
            </button>

            <button className="bannerButton bg-[gray]/70">
              <IoIosInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
              Info Lain
            </button>
          </div>
        </div>
        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold">Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <AiOutlineClose className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={trailerURL}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
