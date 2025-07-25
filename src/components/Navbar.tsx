import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg"></div>
          <p className="text-xl font-bold">Blogger App</p>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-gray-600 hover:text-brand-700 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Button
            variant={"outline"}
            size={"sm"}
            className="border-brand-300 text-brand-700 hover:bg-brand-50"
          >
            Sign In
          </Button>
          <Link href="/auth/signup">
            <Button
              size={"sm"}
              className="bg-brand-600 hover:bg-brand-700 text-white"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
