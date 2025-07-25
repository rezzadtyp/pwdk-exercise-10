import { CheckIcon, ChevronRightIcon, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge
          variant={"secondary"}
          className="mb-4 bg-brand-100 text-brand-500 border-brand-100"
        >
          <Zap className="w-3 h-3 mr-1" />
          New: AI-Powered Features
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900  bg-clip-text text-transparent leading-tight">
          Build Amazing Blogs
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The all-in-one platform that helps teams ship better products faster.
          From idea to launch, we've got you covered with powerful tools and
          seamless workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white">
            Start Free Trial
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-brand-500 mr-2" />
            Free 14-days trial
          </div>
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-brand-500 mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-brand-500 mr-2" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
