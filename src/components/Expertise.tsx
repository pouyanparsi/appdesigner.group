const technologies = [
  { name: "Google Cloud Platform", category: "Cloud" },
  { name: "Informatica IICS", category: "Data" },
  { name: "BigQuery", category: "Analytics" },
  { name: "Kubernetes (GKE)", category: "DevOps" },
  { name: "Apache Kafka", category: "Streaming" },
  { name: "Terraform", category: "IaC" },
  { name: "Apigee", category: "API" },
  { name: "Firebase", category: "Backend" },
  { name: "Anthos", category: "Hybrid" },
  { name: "Dataflow", category: "ETL" },
  { name: "Looker", category: "BI" },
  { name: "Cloud Run", category: "Serverless" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We leverage best-in-class technologies to build scalable, 
            secure, and future-proof solutions for your enterprise.
          </p>
        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-background border border-border rounded-full px-6 py-3 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-foreground font-medium">{tech.name}</span>
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Certifications & Partnerships
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["Google Cloud Partner", "Informatica Partner", "ISO 27001", "SOC 2 Type II"].map((cert) => (
              <div
                key={cert}
                className="bg-background border border-border rounded-xl px-8 py-4 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-muted-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
