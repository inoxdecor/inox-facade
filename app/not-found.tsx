import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section error-page">
      <p className="eyebrow">Page not found</p>
      <h1>A different direction.</h1>
      <p>The system you are looking for could not be found.</p>
      <Link href="/" className="button">
        Explore Building Systems
      </Link>
    </main>
  );
}
