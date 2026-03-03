import codefiestaLogo from "../assets/codefiesta.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 text-xs">

          {/* 1️⃣ LOGO */}
          <div className="space-y-4">
            <img
              src={codefiestaLogo}
              alt="CodeFiesta 6.0"
              className="w-20"
            />
            <p>
              Empowering developers through{" "}
              <span className="text-cyan-400 font-medium">
                CODEFIESTA 6.0
              </span>
            </p>
          </div>

          {/* 2️⃣ MAP */}
          <div className="space-y-3">
            <div className="h-40 rounded-md overflow-hidden border border-white/10 hover:border-cyan-400 transition">
              <iframe
                title="location"
                src="https://www.google.com/maps?q=15.1004188,75.4555657&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Smt+Kamala+And+Sri+Venkappa+M.+Agadi+College+of+Engineering+%26+Technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-xs"
            >
              View on Google Maps
            </a>
          </div>

          {/* 3️⃣ CONTACT */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Contact</h4>
            <a
              href="mailto:codefiesta6@agadiengcollege.com"
              className="block hover:text-cyan-400 transition"
            >
              📧 codefiesta6@agadiengcollege.com
            </a>
            <p>
              📍 Lakshmeshwar, SH 6, Gadag,<br />
              Karnataka – 582116
            </p>
          </div>

          {/* 4️⃣ STUDENT COORDINATORS */}
          <div>
            <h4 className="text-sky-400 font-semibold mb-3">
              Student Coordinators
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Sourabh Desai</span>
                <a href="tel:+919449732759" className="hover:text-cyan-400">
                  +91 94497 32759
                </a>
              </li>
              <li className="flex justify-between">
                <span>Ganesh Bannimatti</span>
                <a href="tel:+918088125908" className="hover:text-cyan-400">
                  +91 80881 25908
                </a>
              </li>
              <li className="flex justify-between">
                <span>Rakshita Halagatti</span>
                <a href="tel:+919742876149" className="hover:text-cyan-400">
                  +91 9742876149
                </a>
              </li>
              <li className="flex justify-between">
                <span>Sneha Marabannavar</span>
                <a href="tel:+918618599972" className="hover:text-cyan-400">
                  +91 8618599972
                </a>
              </li>
            </ul>
          </div>

          {/* 5️⃣ FACULTY COORDINATORS */}
          <div>
            <h4 className="text-green-400 font-semibold mb-3">
              Faculty Coordinators
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Prof. Rajeshwari G</span>
                <a href="tel:+919591316573" className="hover:text-cyan-400">
                  +91 9591316573
                </a>
              </li>
              <li className="flex justify-between">
                <span>Prof. Nagaraj B</span>
                <a href="tel:+919632769295" className="hover:text-cyan-400">
                  +91 9632769295
                </a>
              </li>
              <li className="flex justify-between">
                <span>Prof. Shrikanth M</span>
                <a href="tel:+919035528726" className="hover:text-cyan-400">
                  +91 9035528726
                </a>
              </li>
              <li className="flex justify-between">
                <span>Prof. Jagadish K</span>
                <a href="tel:+919916865653" className="hover:text-cyan-400">
                  +91 9916865653
                </a>
              </li>
            </ul>
          </div>

          {/* 6️⃣ ACCOMMODATION COORDINATORS */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-3">
              Accommodation Coordinators
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Arun H Lamani</span>
                <a href="tel:+916363598291" className="hover:text-cyan-400">
                  +91 6363598291
                </a>
              </li>
              <li className="flex justify-between">
                <span>Rahul Byahatti</span>
                <a href="tel:+917483942625" className="hover:text-cyan-400">
                  +91 7483942625
                </a>
              </li>
              <li className="flex justify-between">
                <span>Mohammad Rihan</span>
                <a href="tel:+918904326873" className="hover:text-cyan-400">
                  +91 8904326873
                </a>
              </li>
              <li className="flex justify-between">
                <span>Kavya M Angadi</span>
                <a href="tel:+919535948252" className="hover:text-cyan-400">
                  +91 9535948252
                </a>
              </li>
              <li className="flex justify-between">
                <span>Ranjita Topannavar</span>
                <a href="tel:+918904841488" className="hover:text-cyan-400">
                  +91 8904841488
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 text-center border-t border-white/10 pt-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white/20">
            CODEFIESTA 6.0
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            © 2026 Team CODEFIESTA. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ by Ganesh M B
          </p>
        </div>

      </div>
    </footer>
  );
}