import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2  text-neutral-700 hidden md:flex">
        <Image
          src="/linelogo.png"
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p
          className={cn("text-lg text-neutral-700 pt-1", headingFont.className)}
        >
          LineTasky
        </p>
      </div>
    </Link>
  );
};
