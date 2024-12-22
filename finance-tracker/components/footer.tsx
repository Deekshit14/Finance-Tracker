import { FaFacebookF, FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
     return (
          <footer className="bg-blue-900 text-white py-10">
               <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-wrap justify-between items-center">
                         {/* Logo Section */}
                         <div className="mb-6 md:mb-0 mr-20">
                              <h2 className="text-2xl font-bold">Finance Tracker</h2>
                              <p className="text-sm mt-2">Track your finances with ease.</p>
                         </div>

                         {/* Navigation Links */}
                         <div className="flex gap-x-20 sm:space-x-5">
                              <ul className="space-y-2 text-sm">
                                   <li>
                                        <a href="/" className="hover:text-blue-400 transition">
                                             Home
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.linkedin.com/in/deekshit-m1404/" target="_blank" className="hover:text-blue-400 transition">
                                             About Us
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://instagram.com" target="_blank" className="hover:text-blue-400 transition">
                                             Blog
                                        </a>
                                   </li>
                              </ul>
                              <ul className="space-y-2 text-sm">
                                   <li>
                                        <a href="#" className="hover:text-blue-400 transition">
                                             Privacy Policy
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" className="hover:text-blue-400 transition">
                                             Terms of Service
                                        </a>
                                   </li>
                                   <li>
                                        <a href="https://www.linkedin.com/in/deekshit-m1404/" target="_blank" className="hover:text-blue-400 transition">
                                             Contact Us
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>

                    <hr className="my-8 border-blue-700" />

                    {/* Social Media and Credits */}
                    <div className="flex flex-wrap justify-between items-center">
                         <div className="flex gap-x-4 mr-10">
                              <a
                                   href="https://facebook.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition"
                              >
                                   <FaFacebookF />
                              </a>
                              <a
                                   href="https://twitter.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition"
                              >
                                   <FaTwitter />
                              </a>
                              <a
                                   href="https://instagram.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition"
                              >
                                   <FaInstagram />
                              </a>
                              <a
                                   href="https://www.linkedin.com/in/deekshit-m1404/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition"
                              >
                                   <FaLinkedinIn />
                              </a>
                         </div>
                         <p className="text-sm text-center md:text-right mt-6 md:mt-0">
                              © {new Date().getFullYear()} Finance Tracker. All rights reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
};
