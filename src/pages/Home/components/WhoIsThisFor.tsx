const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-green-35">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Framio For?
        </h2>

        {/* Bag brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile and Surface Pattern Designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Textile designers can present their work as complete collection stories rather than simple design files. REACH Framio allows them to organize repeats, placements, and colour variations into polished presentation boards that look professional and portfolio-ready.
            </li>
            <li>
              High-quality PDFs help designers confidently present their work to brands, studios, and mills worldwide while demonstrating an understanding of both creative design and production workflows.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Fashion Designers and Apparel Brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Fashion brands can present fabrics, prints, silhouettes, and trims within cohesive seasonal lookbooks that communicate both design intent and commercial value. Consistent templates for line sheets and range plans ensure that each collection launch maintains a strong visual identity.
            </li>
            <li>
              These professionally designed documents help buyers and stakeholders understand the full story behind a collection.
            </li>
          </ul>
        </div>

        {/* E-commerce */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile CAD and Product Development Teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              CAD teams can combine technical specifications, CAD visuals, colour references, and BOM details into clear layouts that vendors can easily understand. This improves communication with manufacturers and reduces errors during sampling and production.
            </li>
            <li>
              Structured documentation also helps teams manage complex product development workflows more efficiently.
            </li>
          </ul>
        </div>

        {/* Corporate gifting */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Mills, Converters, and Print Service Providers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Mills and printing partners can present collections and capabilities through visually rich proposal documents that resemble premium catalogs. Instead of sending technical sheets, companies can showcase their fabrics and production options in compelling presentation formats.
            </li>
            <li>
              This helps build stronger client confidence and speeds up the transition from sample discussions to production orders.
            </li>
          </ul>
        </div>

        {/* OEM / ODM */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Merchandising and Marketing Teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Marketing and merchandising teams can create compelling range plans, catalogs, and sales presentations that clearly communicate the story behind a collection. With consistent visual templates, teams can quickly generate customized presentations for different clients or markets.
            </li>
            <li>
              This improves brand storytelling and strengthens sales presentations.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design Educators and Students
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Educational institutions can use REACH Framio to teach professional layout and presentation skills alongside textile design. Students can transform coursework and collections into polished portfolios that demonstrate industry-ready design communication.
            </li>
            <li>
              This helps bridge the gap between classroom projects and professional design workflows.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
