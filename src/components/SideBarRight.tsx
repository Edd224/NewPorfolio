import { Link } from "react-router-dom";
import { sideBarRightMail } from "../assets/lib/data";
import React from "react";

const SiteBarLeft: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[70vh] max-lg:hidden ">
      <div className=" h-[80%] w-[4rem] flex items-center justify-center ">
        <Link
          to={sideBarRightMail.link}
          className="text-[--lightblue] mb-2 [writing-mode:vertical-lr] absolute top-0 right-0  h-[50%] hover:text-[--orange] transition-all duration-200 "
        >
          {sideBarRightMail.text}
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col h-[90%] ">
        <div className=" w-[0.25rem] h-[100%] bg-[--lightblue]"></div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
