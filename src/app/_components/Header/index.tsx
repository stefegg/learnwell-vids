import logo from "../../../../public/static/logos/logo_light.png";
import Image from "next/image";
import Link from "next/link";
// Site Header
export default function Header() {
  return (
    <div className="h-36 sm:h-24 bg-greenDark bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40 sm:px-4 flex flex-col sm:flex-row w-full items-center justify-evenly fixed z-10">
      <Link href="/">
        <Image src={logo} alt="logo" quality={100} unoptimized />
      </Link>
      <div className="sm:ml-auto gap-4 flex flex-row text-white text-sm sm:text-base md:text-lg font-thin">
        <Link
          className="hover:text-cheese cursor-pointer"
          href="/watch"
          style={{
            textShadow: `1px 1px 0px #000000, 5px 4px 0px rgba(0,0,0,0.02)`,
          }}
        >
          Watch Videos
        </Link>
        <Link
          className="hover:text-cheese cursor-pointer"
          href="/new"
          style={{
            textShadow: `1px 1px 0px #000000, 5px 4px 0px rgba(0,0,0,0.02)`,
          }}
        >
          Add New Video
        </Link>
      </div>
    </div>
  );
}
