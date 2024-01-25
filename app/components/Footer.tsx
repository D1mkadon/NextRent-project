import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center">
      <div className="mt-10 w-[90%] h-[30vh] border-t ">
        <div className="flex justify-around w-[100%] px-[20%] top-10 relative">
          <ul className="flex flex-col justify-start h-[100%] ">
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9]  hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
          </ul>
          <ul className="flex flex-col h-[100%] ">
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
          </ul>
          <ul className="flex flex-col h-[100%] ">
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>{" "}
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>{" "}
            <Link
              className="text-gray-600/[0.9] hover:text-white transition-all duration-500 capitalize"
              href={"/company"}
            >
              company
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
