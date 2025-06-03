import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-[#e0e0e0] text-lg font-bold">Daze Studio</h3>
            <p className="text-gray-400">
              High-energy mobile experiences with zero effort and 100% chaos.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#e0e0e0] text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/app-development" className="text-gray-400 hover:text-[#9500ff]">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/game-development" className="text-gray-400 hover:text-[#9500ff]">
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="/services/tools" className="text-gray-400 hover:text-[#9500ff]">
                  Development Tools
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-[#9500ff]">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#e0e0e0] text-lg font-bold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://play.google.com/store/apps/details?id=com.DazeStudio.MazeBlitz" className="text-gray-400 hover:text-[#9500ff]">
                  Maze Blitz
                </Link>
              </li>
              <li>
                <Link href="/screenshot-generator" className="text-gray-400 hover:text-[#9500ff]">
                  Chat Screenshot Generator
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#e0e0e0] text-lg font-bold">Contact Us</h3>
            <p className="text-gray-400">
              Email: support@doingabsolutezeroeffort.com
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#9500ff]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9500ff]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9500ff]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Daze Studio. All vibes, no effort.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#9500ff] text-sm">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms-of-use" className="text-gray-400 hover:text-[#9500ff] text-sm">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 