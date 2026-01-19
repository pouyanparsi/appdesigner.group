import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AppDesigner Group | Enterprise IT Solutions & Data Integration</title>
        <meta 
          name="description" 
          content="Canadian IT services provider specializing in enterprise data integration, cloud architecture, and cybersecurity. GCP Partner with Informatica expertise." 
        />
        <meta name="keywords" content="data integration, cloud solutions, GCP, enterprise IT, cybersecurity, ETL, digital transformation" />
        <meta property="og:title" content="AppDesigner Group | Enterprise IT Solutions" />
        <meta property="og:description" content="No assumptions, solid solutions. Enterprise-grade data integration and cloud architecture services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://appdesigner.group" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AppDesigner Group",
            "description": "Enterprise IT solutions provider specializing in data integration, cloud architecture, and cybersecurity.",
            "url": "https://appdesigner.group",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toronto",
              "addressRegion": "Ontario",
              "addressCountry": "CA"
            },
            "sameAs": [
              "https://linkedin.com/company/appdesigner",
              "https://twitter.com/appdesigner"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Expertise />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
