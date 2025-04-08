// src/components/common/Footer.jsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf4] text-[#5a3e2b] py-8 px-4 mt-10 border-t border-[#e7dfd7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-xl font-bold text-[#8b5e3c] mb-2">PilgrimPath</h2>
          <p className="text-sm">
            Your trusted companion for a peaceful and guided Hajj & Umrah journey.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#8b5e3c]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#a97449]">Home</Link></li>
            <li><Link href="/services" className="hover:text-[#a97449]">Services</Link></li>
            <li><Link href="/about" className="hover:text-[#a97449]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#a97449]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#8b5e3c]">Contact Us</h3>
          <p className="text-sm">📍 PilgrimPath Office, Pune, India</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉️ support@pilgrimpath.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 pt-4 text-center text-xs text-[#7a4f2c] border-t border-[#e7dfd7]">
        &copy; {new Date().getFullYear()} PilgrimPath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
