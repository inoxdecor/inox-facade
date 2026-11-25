"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { CompareSlider } from "./compare-slider";
import { FinishStudio } from "./finish-studio";
import { ContactForm } from "./contact-form";
import { PanelViewer } from "./panel-viewer";
export function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="fine-rule" /> Architectural aluminium systems
          </p>
          <h1>
            Building
            <br />
            <em>Systems.</em>
          </h1>
          <p className="hero-tagline">
            Bespoking luxury metalness.
            <br />
            Grandiodising exteriors and interiors.
          </p>
          <Link href="#systems" className="button">
            Explore systems
          </Link>
          <div className="hero-note">
            <span>
              Considered surfaces.
              <br />
              Extraordinary possibilities.
            </span>
            <span className="vertical-rule" />
            <span>
              Designed for the way
              <br />
              you imagine spaces.
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/pdf/hero-facade.webp"
            alt="Warm metal cladding, vertical fins and perforated panels on a contemporary facade"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 55vw"
          />
          <div className="hero-image-label">
            <span>THE ART OF THE EXTERIOR</span>
            <span>
              <span className="inox-text">INOX</span> / BUILDING SYSTEMS
            </span>
          </div>
          <div className="hero-material">
            <PanelViewer kind="fluting-series" hero />
            <span>Explore the material · move your pointer</span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Aluminium, reimagined.</span>
          <a href="#systems">
            Scroll to discover <span className="scroll-line" />
          </a>
        </div>
      </section>
      <section id="systems" className="section systems">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">The collection</p>
            <h2>
              Five systems.
              <br />
              <em>Infinite expressions.</em>
            </h2>
          </div>
          <p>
            A language of lines, light and texture.
            <br />
            Find the system that brings your vision to life.
          </p>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <Link
              href={`/products/${p.slug}/`}
              className="product-card"
              key={p.slug}
            >
              <motion.div
                layoutId={`product-${p.slug}`}
                className="product-image"
              >
                <Image
                  src={p.image}
                  alt={
                    p.name === "Designer Panels"
                      ? "Geometric architectural metal panel pattern"
                      : `${p.name} from the INOX catalogue`
                  }
                  fill
                  sizes="(max-width: 600px) 80vw, (max-width: 1000px) 45vw, 22vw"
                />
                <span className="product-view">Explore system</span>
              </motion.div>
              <div className="product-title">
                <span className="product-number">0{i + 1}</span>
                <h3>{p.name}</h3>
              </div>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="transformation section" data-reveal>
        <div className="transformation-copy">
          <p className="eyebrow">A new perspective</p>
          <h2>
            Same space.
            <br />
            <em>New possibilities.</em>
          </h2>
          <p>
            From weathered walls to a refined architectural facade. Explore the
            same building reimagined through material and finish.
          </p>
          <Link className="text-link" href="/products/fluting-series/">
            Discover facade systems
          </Link>
        </div>
        <CompareSlider />
      </section>
      <section id="finishes" className="section finishes-section">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">The finishing touch</p>
            <h2>
              Made to feel
              <br />
              <em>like your vision.</em>
            </h2>
          </div>
          <p>
            Wood-effect textures. Powder-coated colours.
            <br />A material palette with room for individuality.
          </p>
        </div>
        <FinishStudio />
      </section>
      <section id="about" className="section about">
        <div className="about-image" data-reveal>
          <Image
            src="/images/pdf/page-7-16.webp"
            alt="Geometric metal ceiling creating a sculptural architectural interior"
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
          />
          <span>Form follows imagination.</span>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">
            The <span className="inox-text">INOX</span> story / Since 2000
          </p>
          <h2>
            A foundation
            <br />
            in quality.
            <br />
            <em>A future in design.</em>
          </h2>
          <p>
            Established in India in 2000,{" "}
            <span className="inox-text">INOX</span> began with kitchen
            accessories, growing into wardrobe and bathroom solutions, and then
            into powder coating and wood-effect coating.
          </p>
          <p>
            Today, a wide range of RAL colours and wood finishes brings that
            same attention to detail to interior and exterior architecture.
          </p>
          <a
            href="/images/pdf/page-2-4.webp"
            target="_blank"
            rel="noreferrer"
            className="certificate"
          >
            <Image
              src="/images/pdf/page-2-4.webp"
              alt="ISO 9001:2015 certificate reproduced from the INOX catalogue"
              width={45}
              height={62}
            />
            <span>
              ISO 9001:2015<span>View catalogue certificate</span>
            </span>
          </a>
        </div>
      </section>
      <section id="contact" className="section contact">
        <div data-reveal>
          <p className="eyebrow">Let’s build together</p>
          <h2>
            Every great space
            <br />
            starts with
            <br />
            <em>a conversation.</em>
          </h2>
          <p>
            Tell us what you have in mind.
            <br />
            Let’s find its architectural expression.
          </p>
          <a className="text-link" href="mailto:info@inoxdecor.com">
            info@inoxdecor.com
          </a>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
