export const FAQ = () => {
  const faqs = [
    {
      question: "How does TicketAI analyze support tickets?",
      answer:
        "TicketAI uses advanced machine learning algorithms to analyze the content, sentiment, and urgency of support tickets. It automatically categorizes tickets, extracts key information, and provides smart summaries to help your team respond more efficiently.",
    },
    {
      question: "Can TicketAI integrate with our existing tools?",
      answer:
        "Yes! TicketAI seamlessly integrates with popular support platforms like Zendesk, Intercom, Freshdesk, and communication tools like Slack. Our API also allows for custom integrations with your existing workflow.",
    },
    {
      question: "How secure is our ticket data with TicketAI?",
      answer:
        "We take security seriously. TicketAI uses enterprise-grade encryption, complies with GDPR and SOC 2, and processes all data in secure, isolated environments. Your data is never shared or used for training other models.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 email support for all plans, with priority phone and chat support for Pro plan customers. Our dedicated customer success team helps with onboarding, training, and optimization of TicketAI for your specific needs.",
    },
    {
      question: "Can we try TicketAI before committing?",
      answer:
        "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can process up to 100 tickets during the trial to see how TicketAI works with your actual support queries.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about TicketAI
          </p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
