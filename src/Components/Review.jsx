import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import p1 from "../assets/Images/1.png";
// import { p2 } from "../assets/Images/2.png";
// import { p3 } from "../assets/Images/3.png";
const Review = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center  mx-auto sm:p-10">
        <p className="text-center text-5xl font-bold text-[#008EC4] mb-5">
          Development team
        </p>
        <h1 className="text-center text-3xl font-bold mb-14">
          The talented people behind the scenes
        </h1>
        <div className="flex flex-col md:flex-row mt-8 w-full">
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md dark:bg-[#008EC4] dark:text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover "
              src={p1}
            />
            <div className=" my-4">
              <p className="text-xl font-semibold leading-snug">
                Leroy Jenkins
              </p>
              <p>Visual Designer</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <MdEmail />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md dark:bg-[#008EC4] dark:text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover "
              src={p1}
            />
            <div className=" my-4">
              <p className="text-xl font-semibold leading-snug">
                Leroy Jenkins
              </p>
              <p>Visual Designer</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <MdEmail />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md dark:bg-[#008EC4] dark:text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover "
              src={p1}
            />
            <div className=" my-4">
              <p className="text-xl font-semibold leading-snug">
                Leroy Jenkins
              </p>
              <p>Visual Designer</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <MdEmail />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
