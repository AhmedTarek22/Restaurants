import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function ContactUs() {
  return (
    <div className="py-14 px-20 bg-[#030303] text-white">
      <div className="mb-16 w-fit m-auto text-center">
        <h4 className="text-3xl">Contact us</h4>
      </div>
      <div className="flex gap-40">
        {/* Details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-[#E86A33] rounded-full">
              <FiPhone className="text-[#E86A33]" />
            </div>
            <div className="flex flex-col gap-2">
              <span>Phone</span>
              <span className="text-[#949393]">01150568830</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-[#E86A33] rounded-full">
              <CgMail className="text-[#E86A33]" />
            </div>
            <div className="flex flex-col gap-2">
              <span>Email</span>
              <span className="text-[#949393]">Example@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 border-2 border-[#E86A33] rounded-full">
              <CiLocationOn className="text-[#E86A33]" />
            </div>
            <div className="flex flex-col gap-2">
              <span>Address</span>
              <span className="text-[#949393]">Cairo, Egypt</span>
            </div>
          </div>
        </div>
        {/* Company */}
        <div>
          <h4 className="text-2xl">Comapny</h4>
          <ul className="mt-4 flex flex-col gap-4">
            <li>Menu</li>
            <li>Team</li>
            <li>Popular dishes</li>
            <li>Latest new</li>
            <li>Offers</li>
          </ul>
        </div>
        {/* Opening hours */}
        <div>
          <h4 className="text-2xl">Opening hours</h4>
          <ul className="mt-4 flex flex-col gap-2">
            <li>Everyday</li>
            <li>8AM - 3AM</li>
          </ul>
        </div>
        {/* Find me */}
        <div>
          <h4 className="text-2xl">Find me</h4>
          <ul className="mt-4 flex gap-4">
            <li>
              <img className="w-16" src="images/insta.png" alt="" />
            </li>
            <li>
              <img className="w-16" src="images/google.png" alt="" />
            </li>
            <li>
              <img className="w-16" src="images/face.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
