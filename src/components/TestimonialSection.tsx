import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    text: "This platform has revolutionized how we work. The efficiency gains are incredible!",
    author: "John Smith",
    role: "CEO, TechCorp",
    avatar: "/placeholder-avatar-1.jpg",
    initials: "JS",
  },
  {
    text: "Amazing customer support and the features just keep getting better. Highly recommend!",
    author: "Maria Johnson",
    role: "Product Manager, StartupXYZ",
    avatar: "/placeholder-avatar-2.jpg",
    initials: "MJ",
  },
  {
    text: "The integration capabilities are fantastic. It fits perfectly into our existing workflow.",
    author: "David Brown",
    role: "CTO, InnovateLab",
    avatar: "/placeholder-avatar-3.jpg",
    initials: "DB",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge
            variant={"outline"}
            className="mb-4 border-brand-300 text-brand-700"
          >
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our users say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our users about their experience with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 fill-brand-500 text-brand-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-brand-100 text-brand-700">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
