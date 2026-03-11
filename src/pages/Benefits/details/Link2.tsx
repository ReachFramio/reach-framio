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
          Deliver production-ready visuals that inspire confidence
        </h1>

        {/* Content Box */}
        <div className="bg-gray-100 p-8 sm:p-10 rounded-2xl text-lg sm:text-xl leading-relaxed space-y-8 shadow-sm">

          <p>
            With CMYK support, colour separations, and ICC-managed output, layouts are prepared for professional print workflows. This ensures that visual presentations are not only beautiful but also technically reliable for production partners.
          </p>

          <p>
            Such precision builds trust with mills, printers, and manufacturing teams.
          </p>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Link1;
