import React from "react";
import pic from "../../../assetss/Google-Play-Store.webp";
import pics from "../../../assetss/ioss.png";
import appimage from "../../../assetss/hero.png";
import BackGroundLoading from "../../BackGroundLoading/BackGroundLoading";
const Banner = () => {
  return (
    <div>
      <div className="flex-col justify-center items-center text-center min-h-screen px-4">
        <div className=" mt-20">
          <h1 className="text-[72px] font-bold">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2]  text-transparent bg-clip-text">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="py-3 text-[20px] text-[#627382]">
            At Canvas.IO, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="mt-2 flex flex-col-reverse md:flex-row justify-center items-center gap-3">
          <a
            href="https://play.google.com/"
            className="flex items-center gap-2 btn bg-white text-black border-[#e5e5e5] rounded-lg shadow hover:shadow-md transition"
          >
            <img src={pic} className="h-6 w-6" />
            Google Play
          </a>

          <a
            href="https://appstoreconnect.apple.com/"
            className="flex items-center gap-2 btn bg-white text-black border-[#e5e5e5] rounded-lg shadow hover:shadow-md transition "
          >
            <img src={pics} className="h-6 w-6 bg-none" />
            App Store
          </a>
        </div>
        <img
          src={appimage}
          alt="App preview"
          className="mt-10 mx-auto max-w-xs  md:max-w-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
