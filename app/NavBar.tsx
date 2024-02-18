import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Logo from "./Components/Logo";

const links = [
  { label: "Education", href: "/education" },
  { label: "Methodology", href: "/methodology" },
  { label: "Bank Rewards", href: "/bankRewards" },
];

const NavBar = () => {
  return (
    <nav className="bg-[#1C4596] text-white py-3">
      <Container>
        <Flex justify="between">
          <Logo />
          <Flex align="center" gap="4">
            <NavLinks />
            <NavButtons />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavButtons = () => {
  return (
    <>
      <button className="inline-flex items-center bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-1 px-4 border border-white-500 hover:border-transparent rounded">
        <FaRegUser />
        <span className="mr-1"></span>
        Log in
      </button>
      <button className="inline-flex items-center bg-yellow-500  text-white-700 font-semibold hover:text-white py-1 px-4   rounded">
        Get Started
        <span className="mr-1"></span>
        <MdOutlineKeyboardArrowRight />
      </button>
    </>
  );
};

export default NavBar;
