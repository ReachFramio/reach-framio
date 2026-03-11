import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Link1 = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="p-6 sm:p-10 max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          to="/benefits"
          className="text-primary text-lg mb-6 inline-flex items-center gap-2"
        >
          <span className="text-2xl">←</span> Back to Benefits
        </Link>

        {/* Title */}
        <h1 className="text-center text-primary text-3xl sm:text-4xl font-bold mb-8 leading-normal">
          Showcase image-rich textile collections smoothly
        </h1>

        {/* Content Box */}
        <div className="bg-gray-100 p-8 sm:p-10 rounded-2xl text-lg sm:text-xl leading-relaxed space-y-8 shadow-sm">

          <p>
            High-resolution fabric scans, CAD artwork, and styled photography can be used within layouts without slowing down performance. Linked assets keep documents efficient while still allowing designers to present visually detailed pages.
          </p>

          <p>
            This makes it easier to create visually rich catalogs and lookbooks.
          </p>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Link1;
