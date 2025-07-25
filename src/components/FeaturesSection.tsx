import { Shield, Star, Users, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed with optimized performance that scales with your business",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Real-time collaboration tools that keep your team in sync and productive",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Star,
    title: "Smart Analytics",
    description:
      "Advanced insights and reporting to help you make data-driven decisions",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamless integrations with your favorite tools and services",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to help you whenever you need it",
    iconBgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge
            className="mb-4 border-brand-300 text-brand-700"
            variant={"outline"}
          >
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to streamline your workflow and boost
            productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow hover:shadow-brand-200/20">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
