import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState([false, false, false]);

  const toggleAccordion = (index) => {
    setOpen((prev) =>
      prev.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">[ Dúvidas ]</h2>
      <p className="mb-8">Ficou com alguma dúvida, dê uma olhada nas perguntas frequentes:</p>

      <div className="space-y-4">
        {["Quais as formas de pagamento?", "Quais as formas de pagamento?", "Quais as formas de pagamento?"].map((question, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-2 px-4 bg-purple-600 text-white focus:outline-none"
            >
              {question}
            </button>
            {open[index] && (
              <div className="px-4 py-2 bg-purple-100">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, risus id iaculis, Sed molestie eu velit aliquet.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
