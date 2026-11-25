"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layers, X } from "lucide-react";
import { type Product, products } from "@/data/products";
import { FinishStudio } from "./finish-studio";
import { CompareSlider } from "./compare-slider";
import { PanelViewer } from "./panel-viewer";
import { FeatureIcon } from "./feature-icon";
export function ProductDetail({
  product: p,
  index,
}: {
  product: Product;
  index: number;
}) {
  const [photo, setPhoto] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (photo !== null) dialog.current?.showModal();
    else dialog.current?.close();
  }, [photo]);
  const prev = products[(index + 4) % 5],
    next = products[(index + 1) % 5];
  return (
    <main id="main" className="product-page">
      <section className="product-hero section">
        <div>
          <Link href="/#systems" className="text-link">
            All systems
          </Link>
          <p className="eyebrow">System / 0{index + 1}</p>
          <h1>{p.name}</h1>
          <p className="detail-tagline">{p.tagline}</p>
          <a href={`/#contact`} className="button">
            Enquire about this system
          </a>
          <span className="large-index" aria-hidden="true">
            0{index + 1}
          </span>
        </div>
        <motion.div
          layoutId={`product-${p.slug}`}
          className="detail-hero-image"
        >
          <Image
            src={p.image}
            alt={p.name}
            fill
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </motion.div>
      </section>
      <section className="section why">
        <p className="eyebrow">Considered in every detail</p>
        <h2>
          Why <em>it works.</em>
        </h2>
        <div className="features">
          {p.features.map(([title, text]) => (
            <article key={title} data-reveal>
              <FeatureIcon title={title} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section specification">
        <div>
          <p className="eyebrow">Precision, specified</p>
          <h2>
            The finer <em>details.</em>
          </h2>
          <table>
            <caption className="sr-only">{p.name} specifications</caption>
            <tbody>
              {p.specs.map(([key, value]) => (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="eyebrow option-label">
            {p.slug === "fluting-series"
              ? "Profile options · refer to catalogue drawing"
              : "Sizes & pattern options"}
          </p>
          <div className="options">
            {p.options.map((o) => (
              <span key={o}>{o}</span>
            ))}
          </div>
        </div>
        <div className="detail-viewer">
          <PanelViewer kind={p.slug} />
          <p>Interactive material study · move your pointer</p>
          <span className="fine-print">
            Illustrative geometry. Refer to specifications for actual profiles.
          </span>
        </div>
      </section>
      <section className="section">
        <FinishStudio compact />
      </section>
      <section className="section applications">
        <p className="eyebrow">Room for possibility</p>
        <h2>
          At home in <em>every space.</em>
        </h2>
        <div className="applications-row">
          {p.applications.map((a) => (
            <span key={a}>
              <Layers size={24} strokeWidth={1} />
              {a}
            </span>
          ))}
        </div>
        <div className="gallery">
          {p.gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setPhoto(i)}
              aria-label={`Enlarge ${p.name} catalogue image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${p.name} architectural reference ${i + 1} from the catalogue`}
                fill
                sizes="(max-width: 700px) 90vw, 40vw"
              />
              <span>View image</span>
            </button>
          ))}
        </div>
        <dialog
          ref={dialog}
          onCancel={() => setPhoto(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setPhoto(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" && photo !== null)
              setPhoto((photo + 1) % p.gallery.length);
            if (e.key === "ArrowLeft" && photo !== null)
              setPhoto((photo + p.gallery.length - 1) % p.gallery.length);
          }}
          className="lightbox"
        >
          <button
            className="lightbox-close"
            onClick={() => setPhoto(null)}
            aria-label="Close image"
          >
            <X />
          </button>
          {photo !== null && (
            <Image
              src={p.gallery[photo]}
              alt={`Enlarged ${p.name} catalogue image ${photo + 1}`}
              width={1400}
              height={1000}
              style={{ objectFit: "contain" }}
            />
          )}
          <div className="lightbox-controls">
            <button
              onClick={() =>
                setPhoto(
                  ((photo ?? 0) + p.gallery.length - 1) % p.gallery.length,
                )
              }
            >
              Previous image
            </button>
            <span>
              {(photo ?? 0) + 1} / {p.gallery.length}
            </span>
            <button
              onClick={() => setPhoto(((photo ?? 0) + 1) % p.gallery.length)}
            >
              Next image
            </button>
          </div>
        </dialog>
      </section>
      <section className="section material-compare">
        <div>
          <p className="eyebrow">A different character</p>
          <h2>
            From raw
            <br />
            to <em>refined.</em>
          </h2>
          <p>
            Explore an illustrative study of raw aluminium and a warm
            wood-effect finish.
          </p>
        </div>
        <CompareSlider finishOnly />
      </section>
      <nav className="section product-navigation" aria-label="Other systems">
        <Link href={`/products/${prev.slug}/`}>
          <small>Previous system</small>
          <span>{prev.name}</span>
        </Link>
        <Link href={`/products/${next.slug}/`}>
          <small>Next system</small>
          <span>{next.name}</span>
        </Link>
      </nav>
    </main>
  );
}
