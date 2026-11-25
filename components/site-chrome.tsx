"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="INOX Building Systems home">
      <Image
        src="/images/brand/inox-logo.png"
        alt="INOX"
        width={68}
        height={68}
        className="brand-logo"
      />
      <span className="brand-division">
        BUILDING
        <br />
        SYSTEMS
      </span>
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation" className={open ? "nav open" : "nav"}>
        <Link onClick={() => setOpen(false)} href="/#systems">
          Our systems
        </Link>
        <Link onClick={() => setOpen(false)} href="/#finishes">
          Finishes
        </Link>
        <Link onClick={() => setOpen(false)} href="/#about">
          Our story
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/#contact"
          className="nav-contact"
        >
          Let’s build together
        </Link>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Brand />
        <p>
          In collaboration with <span className="inox-text">INOX</span> Decor
          Corp USA.
        </p>
      </div>
      <div>
        <p>
          <span className="inox-text">INOX</span> Decor Pvt. Ltd.
        </p>
        <p>
          Block B-1, Plot No. -1/2, Main Najafgarh Road,
          <br />
          Janak Puri East, New Delhi – 110058, India
        </p>
      </div>
      <div>
        <a href="tel:+911146467777">+91 11 4646 7777</a>
        <a href="mailto:info@inoxdecor.com">info@inoxdecor.com</a>
        <a href="https://www.inoxdecor.com">www.inoxdecor.com</a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} <span className="inox-text">INOX</span>{" "}
          Decor Pvt. Ltd.
        </span>
        <span>Thoughtfully engineered. Beautifully finished.</span>
        <a href="#main">Back to top</a>
      </div>
    </footer>
  );
}
