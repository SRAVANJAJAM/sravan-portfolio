import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <section className="pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-20">
          <img
            src="sravan.jpg"
            className="w-32 h-32 bg-[#2ecc71] rounded-full mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-[#2ecc71]">Sravan Jajam</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#3498db] mb-8">
            React Developer
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/projects"
              className="bg-[#2ecc71] text-[#2c3e50] px-8 py-3 rounded-lg hover:bg-[#27ae60] transition-colors duration-300"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#2ecc71] text-[#2ecc71] px-8 py-3 rounded-lg hover:bg-[#2ecc71]/10 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl mb-8 text-[#3498db]">Tech Stack</h2>
            <div className="flex justify-center space-x-12 text-4xl text-[#3498db]">
              <FaReact className="hover:text-[#2ecc71] transition-colors duration-300" />
              <SiTypescript className="hover:text-[#2ecc71] transition-colors duration-300" />
              <FaNodeJs className="hover:text-[#2ecc71] transition-colors duration-300" />
              <SiTailwindcss className="hover:text-[#2ecc71] transition-colors duration-300" />
              <FaDatabase className="hover:text-[#2ecc71] transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
