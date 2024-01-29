import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center">
      <div className="mt-10 w-[90%] h-[70vh] md:h-[30vh] border-t ">
        <div className="flex text-center md:text-left md:justify-around h-full w-[100%] px-[20%] top-10 relative flex-col justify-center gap-5 md:flex-row">
          <ul className="flex flex-col justify-start h-[100%] capitalize ">
            <h3 className="capitalize font-bold">company</h3>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="text-gray-600/[0.9]  hover:text-white transition-all duration-500 capitalize"
              href={"/work"}
            >
              jobs
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/for_the_record"}
            >
              for the record
            </Link>
          </ul>
          <ul className="flex flex-col h-[100%] ">
            <h3 className="capitalize font-bold">Communities</h3>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/developers"}
            >
              Developers
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/investors"}
            >
              Investors
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/vendors"}
            >
              Vendors
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/sellers"}
            >
              For Sellers
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/advertising"}
            >
              Advertising
            </Link>
          </ul>
          <ul className="flex flex-col h-[100%] ">
            <h3 className="capitalize font-bold">Useful links</h3>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/support"}
            >
              Support
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/mobile_app"}
            >
              Free Mobile App
            </Link>
          </ul>
        </div>
        <div className="relative">
          <hr />
          <p>© 2024 Car Rent comp.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
