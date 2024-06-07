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
      sticky xl:block hidden"
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <img src="logomark.png" className="w-10 h-auto invert m-5 mt-6" />
        <p className="font-bold text-inherit pr-5">Mihir Malaviya</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#skills"
            className="bg-zinc-950/[.25] px-6 py-3 rounded"
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            href="#projects"
            className="bg-zinc-950/[.25] px-6 py-3 rounded"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#blogs"
            className="bg-zinc-950/[.25] px-6 py-3 rounded"
          >
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
