import { CheckCircle2, Award, Users, Globe } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Projects Delivered" },
  { icon: Globe, value: "50+", label: "Enterprise Clients" },
];

const capabilities = [
  "Google Cloud Partner Expertise",
  "Informatica Certified Specialists",
  "ISO 27001 Compliance Ready",
  "24/7 Enterprise Support",
  "Agile & SAFe Methodologies",
  "Multi-cloud Architecture",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building Tomorrow's{" "}
              <span className="text-primary">Digital Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              AppDesigner Group is a Canadian IT services provider specializing in 
              high-level enterprise solutions, data integration, and cloud-native 
              architecture. We leverage cutting-edge frameworks like GCP, Informatica, 
              and BigQuery to deliver transformative business outcomes.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our philosophy is simple: <strong className="text-foreground">no assumptions, solid solutions</strong>. 
              We dive deep into understanding your unique challenges before architecting 
              solutions that scale with your business.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="grid gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-6 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
