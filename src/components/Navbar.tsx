import Image from "next/image";
import logoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="px-4">
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF)] blur-md"></div>
            <Image
              src={logoImage}
              alt="Logo Icon"
              className="relative h-12 w-12"
            />
          </div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white border-opacity-30 sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden items-center gap-6 text-white sm:flex">
            <a href="#" className="navbutton">
              About
            </a>
            <a href="#" className="navbutton">
              Features
            </a>
            <a href="#" className="navbutton">
              Updates
            </a>
            <a href="#" className="navbutton">
              Help
            </a>
            <a href="#" className="navbutton">
              Customers
            </a>
            <button className="btn-primary">Get for free</button>
          </nav>
        </div>
      </div>
    </header>
  );
};
