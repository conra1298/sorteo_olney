import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SorteoConfig } from '../types/sorteo';

interface FaqSectionProps {
  faqs: SorteoConfig['faqs'];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-olney-gold bg-olney-gold/10 px-3 py-1 rounded-full border border-olney-gold/30 mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Dudas frecuentes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          Preguntas Frecuentes
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-olney-muted">
          Todo lo que necesitás saber sobre el sorteo y la compra de tus packs.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl bg-olney-panel border border-olney-border overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-olney-panel-alto transition-colors"
              >
                <span className="font-bold text-sm sm:text-base text-white">
                  {faq.pregunta}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-olney-gold shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 border-t border-olney-border/50 pt-3 leading-relaxed animate-fade-in">
                  {faq.respuesta}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
