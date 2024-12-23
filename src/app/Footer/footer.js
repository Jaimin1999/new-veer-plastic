import React from "react";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
  IconRss,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-[#184F75] text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Address</h4>
          <p>51 Phasellus Avenue Maecenas</p>
          <p>Aliquam, AQ 52098</p>
        </div>

        {/* Phone Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Phone</h4>
          <p>Reception: +105 123 4567</p>
          <p>Office: +107 235 7890</p>
        </div>

        {/* Email Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Email</h4>
          <p>Office: info@example.com</p>
          <p>
            Site:{" "}
            <a href="https://example.com" className="underline">
              https://example.com
            </a>
          </p>
        </div>

        {/* Social Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Social</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <IconBrandTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IconBrandInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IconBrandFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IconRss size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IconBrandGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-400 pt-4 text-sm flex justify-between">
        <p>All rights reserved</p>
        <div>
          <a href="#" className="hover:underline mr-4">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
