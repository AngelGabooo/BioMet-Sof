import { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { getWhatsAppLink } from '../../utils/whatsapp';
import Reveal from '../ui/Reveal';

function PlusIcon({ open }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`
        w-4 h-4 shrink-0
        transition-transform duration-300 ease-out
        ${open ? 'rotate-45' : 'rotate-0'}
      `}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`
        group
        bg-surface border rounded-2xl
        transition-all duration-300
        ${isOpen ? 'border-accent/40 shadow-card' : 'border-border hover:border-accent/30'}
      `}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between gap-4
          px-5 py-4 md:px-6 md:py-5
          text-left
        "
      >
        <span
          className={`
            text-sm md:text-base font-semibold
            transition-colors duration-200
            ${isOpen ? 'text-accent' : 'text-foreground'}
          `}
        >
          {faq.question}
        </span>

        <span
          className={`
            inline-flex items-center justify-center
            w-7 h-7 md:w-8 md:h-8 rounded-lg shrink-0
            transition-all duration-300
            ${isOpen
              ? 'bg-accent text-white'
              : 'bg-background border border-border text-muted group-hover:text-accent'}
          `}
        >
          <PlusIcon open={isOpen} />
        </span>
      </button>

      <div
        className={`
          grid transition-all duration-300 ease-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
            <div className="h-px bg-border mb-4" />
            <p className="text-sm text-muted leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="container-biomey">

        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/[0.04] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase">
                Preguntas frecuentes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Resolvemos tus <span className="text-accent">dudas</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Las preguntas más comunes que nos hacen nuestros clientes antes de
              empezar un proyecto.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.id} delay={index * 40}>
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted text-center">
              ¿Tienes otra pregunta? Estamos para ayudarte.
            </p>
            <a
              href={getWhatsAppLink(
                'Hola BioMey 👋, tengo una duda que no está en las preguntas frecuentes.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center justify-center gap-2
                bg-accent hover:bg-accent-hover
                text-white text-sm font-semibold
                px-6 py-3.5 rounded-xl
                transition-all duration-200
                shadow-soft hover:shadow-glow
                active:scale-[0.98]
              "
            >
              Preguntar por WhatsApp
              <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}