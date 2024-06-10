import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function MainNavbar() {
  return (
    <Navbar
      className="py-10 pb-5 px-20 w-100 z-50
      sticky xl:block hidden bg-gradient-to-b from-zinc-900 to-transparent via-zinc-900/[.25] text-white"
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <img src="logomark.png" className="w-10 h-auto invert m-5 mt-6" />
        <p className="font-bold text-inherit pr-5 pl-0 text-white">
          Mihir Malaviya
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 text-sm" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#skills"
            className="hover:underline px-6 rounded focus:ring-0"
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#projects"
            className="hover:underline px-6 rounded focus:ring-0"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#blogs"
            className="hover:underline px-6 rounded focus:ring-0"
          >
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
