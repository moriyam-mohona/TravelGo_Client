import { CiDollar } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { SiFsecure } from "react-icons/si";

const ChooseUs = () => {
  return (
    <div>
      <h2 className="text-center text-7xl font-bold text-[#008EC4] mb-14">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-6 items-center">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <CiDollar className="text-[#008EC4] text-5xl " />
          </div>
          <h4 className="text-2xl font-bold"> Competitive Prices</h4>
          <p className="text-center text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <SiFsecure className="text-[#008EC4] text-5xl " />
          </div>
          <h4 className="text-2xl font-bold"> Secure Booking</h4>
          <p className="text-center text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <IoReload className="text-[#008EC4] text-5xl " />
          </div>
          <h4 className="text-2xl font-bold">Seamless Experience</h4>
          <p className="text-center text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
