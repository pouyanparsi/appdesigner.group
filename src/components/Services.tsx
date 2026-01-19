import { Database, Cloud, Shield, Wifi, Users, Boxes } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Modern ETL, real-time streaming, and data lakehouse architectures using GCP BigLake, Dataflow, and Apache Beam.",
    features: ["Real-time Analytics", "Data Governance", "AI/ML Ready"],
  },
  {
    icon: Cloud,
    title: "Enterprise Solutions",
    description: "Cloud-native applications on GKE and Cloud Run with API-first architecture using Apigee and GraphQL.",
    features: ["Microservices", "CI/CD Pipelines", "Auto-scaling"],
  },
  {
    icon: Boxes,
    title: "ETL & Transformation",
    description: "Next-generation data fabric solutions with Informatica Cloud, serverless ETL, and intelligent data quality.",
    features: ["Data Quality", "MDM Solutions", "Hybrid Cloud"],
  },
  {
    icon: Wifi,
    title: "Telecommunications",
    description: "5G, IoT, and edge computing solutions with OSS/BSS transformation and network virtualization.",
    features: ["5G Core", "Edge Computing", "Network AI"],
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Agile, SAFe, and Lean Portfolio Management with certified Scrum Masters and Program Managers.",
    features: ["Agile/SAFe", "DevSecOps", "PMO Governance"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Zero Trust architectures with Google BeyondCorp, IAM, and compliance frameworks including ISO 27001.",
    features: ["Zero Trust", "SIEM/SOAR", "Compliance"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive IT services designed for modern enterprises, 
            powered by cutting-edge technology and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-background border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
