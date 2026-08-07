import Image from "next/image";
import { cn } from "@/lib/utils";

export const LOGO_SRC =
  "https://framerusercontent.com/images/1IBJt3Kk0BWgZiQy99caMRoTc.png?width=285&height=96";

export function Logo({
  className,
  width = 120,
  height = 40,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <a href="#home" className={cn("inline-flex items-center", className)}>
      <Image
        src={LOGO_SRC}
        alt="two spoon."
        width={width}
        height={height}
        className="h-auto w-[90px] md:w-[106px]"
        priority
      />
    </a>
  );
}
