import React from "react";
import { FaLinkedin } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div>
      <div className="flex flex-col w-full mt-20">
        <div className="divider "></div>
      </div>
      <h2 className="text-3xl font-bold mb-6  text-white">
        My Social Link
      </h2>
      <a
        href="https://www.facebook.com/profile.php?id=100081910032895"
        target="_blank"
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
      >
        <svg
          class="w-5 h-5 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span>Facebook</span>
      </a>

      <a
        href="https://www.linkedin.com/in/anusuya-bhattacharjee-2b4217211/"
        target="_blank"
        className=" ml-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
      >
        {" "}
        <span className="h-5 w-5">
          <FaLinkedin> </FaLinkedin>
        </span>
        <span>Linkedin </span>
      </a>
      <div class="flex flex-col w-full">
        <div class="divider"></div>
      </div>
    </div>
  );
};

export default SocialLink;