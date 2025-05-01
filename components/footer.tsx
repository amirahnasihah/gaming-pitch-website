import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 md:px-8 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/placeholder.svg?height=60&width=180"
              alt="Okarun Gaming Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Okarun Gaming is a professional esports organization based in
              Tokyo, Japan, competing at the highest level in Mobile Legends:
              Bang Bang and other titles. Our team combines supernatural
              abilities with gaming expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#sponsorship"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Sponsorships
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">partnerships@okarungaming.com</li>
              <li className="text-gray-400">Tokyo, Japan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Okarun Gaming. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
