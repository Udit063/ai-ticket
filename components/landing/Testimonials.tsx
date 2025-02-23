import { StarIcon } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-primary-600">Loved</span> by Support Teams
          </h2>
          <p className="text-gray-600">
            See what support professionals are saying about TicketAI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "TicketAI has transformed how we handle customer support. Response times are down 60%.",
              author: "Sarah Johnson",
              role: "Support Manager, TechCorp",
              image:
                "https://www.shutterstock.com/image-photo/studio-close-portrait-handsome-young-260nw-2134031979.jpg",
            },
            {
              quote:
                "The AI-powered insights have helped us identify and fix recurring issues faster.",
              author: "Mike Chen",
              role: "Customer Success, StartupX",
              image:
                "https://www.shutterstock.com/image-photo/testimonial-portrait-beautiful-businesswoman-standing-260nw-2253895261.jpg",
            },
            {
              quote:
                "Our team loves how easy it is to prioritize and handle tickets with TicketAI.",
              author: "Emily Brown",
              role: "Support Lead, Enterprise Co",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
            },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
