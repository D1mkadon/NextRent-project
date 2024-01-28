import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import { Menu, X } from "lucide-react";
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [scrolledHead, setScrolledHead] = useState(false);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setScrolledHead(true);
      } else {
        setScrolledHead(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const NavLinks = ({ click }: any) => {
    return (
      <>
        <ul className="flex-col md:flex md:flex-row text-center">
          <li className="p-2 cursor-pointer linka">
            <Link onClick={click} href="/">
              Home
            </Link>
          </li>
          <li className="p-2 cursor-pointer linka">
            <Link onClick={click} href="/about">
              About
            </Link>
          </li>
          {!user ? null : (
            <li className="p-2 cursor-pointer linka">
              <Link onClick={click} href="/profile">
                Profile
              </Link>
            </li>
          )}

          <li className="p-2 cursor-pointer linka">
            <Link onClick={click} href="/blog">
              Blog
            </Link>
          </li>
          <li className="p-2 cursor-pointer linka">
            <Link onClick={click} href="/docs">
              Docs
            </Link>
          </li>
        </ul>
        {loading ? null : !user ? (
          <ul className="text-center flex flex-col md:flex md:flex-row ">
            <li onClick={handleSignIn} className="p-2 cursor-pointer linka">
              Login
            </li>
            <li onClick={handleSignIn} className="p-2 cursor-pointer linka">
              Sign up
            </li>
          </ul>
        ) : (
          <div className="text-center p-2 flex order-first md:order-none flex-col items-center md:flex md:flex-row ">
            <Image
              className="p-2"
              src={user.photoURL}
              alt="/"
              height={50}
              width={50}
            />
            <div className="flex items-center p-2 font-semibold">
              Welcome {user.displayName}
            </div>
            <p onClick={handleSignOut} className="cursor-pointer linka">
              Sign out
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <div
        className={`hidden flex-wrap text-center text-lg  md:flex h-20 w-full items-center justify-around px-4 ${
          scrolledHead ? "scrolledHeader normalHeader" : "normalHeader"
        }`}
      >
        <NavLinks />
      </div>
      <div className="flex md:hidden bg-black">
        <button className="z-40 fixed left-2 top-2" onClick={toggleNav}>
          {isOpen ? <X /> : <Menu />}
        </button>

        <div
          className={`fixed bg-zinc-900 flex  flex-col justify-center items-center basis-full min-h-screen min-w-full z-30 font-bold transition-all duration-500 ease-in ${
            isOpen ? "left-0" : "left-[-800px]"
          }`}
        >
          <NavLinks click={toggleNav} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
