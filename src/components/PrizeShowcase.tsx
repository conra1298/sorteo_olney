import React from 'react';
import { Truck, CheckCircle2, Award, Wrench, Shield, ChevronDown, Radio } from 'lucide-react';
import { PrizeInfo } from '../types/sorteo';
import { smoothScrollTo } from '../utils/formatters';

interface PrizeShowcaseProps {
  prize: PrizeInfo;
}

export const PrizeShowcase: React.FC<PrizeShowcaseProps> = ({ prize }) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-olney-panel to-olney-panel-alto border-2 border-olney-red/40 shadow-2xl p-5 sm:p-8">
        {/* Glow Accent Effect */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-olney-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-olney-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Prize Badge Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-olney-border pb-4 mb-6">
          <div className="inline-flex items-center gap-2 bg-olney-red text-white text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-xl shadow-glow-red">
            <Award className="w-4 h-4" />
            <span>Premio Principal</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-olney-gold font-semibold bg-olney-gold/10 px-3 py-1 rounded-full border border-olney-gold/30">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>En vivo por @olney4x4parts</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Prize Image Showcase */}
          <div className="md:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-olney-border bg-olney-darker aspect-[4/3] sm:aspect-square flex items-center justify-center">
              <img
                src={prize.imagen}
                alt={prize.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-mono uppercase text-olney-gold font-bold">
                  SET X4 CUBIERTAS
                </span>
                <span className="text-sm font-black text-white">
                  MEDIDAS Y MODELOS SELECCIONADOS
                </span>
              </div>
            </div>
            {/* Shipping & Installation Badges */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-olney-darker/90 rounded-xl p-2.5 border border-olney-border text-center">
                <Truck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white block">Envío Gratis</span>
                <span className="text-[10px] text-olney-muted">Todo el país</span>
              </div>
              <div className="bg-olney-darker/90 rounded-xl p-2.5 border border-olney-border text-center">
                <Wrench className="w-4 h-4 text-olney-gold mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white block">Colocación</span>
                <span className="text-[10px] text-olney-muted">Taller Córdoba</span>
              </div>
            </div>
          </div>

          {/* Prize Info & Bullet points */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                {prize.titulo}
              </h2>
              <p className="mt-1 text-sm font-semibold text-olney-gold">
                {prize.subtitulo}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-olney-muted leading-relaxed">
                {prize.descripcion}
              </p>

              {/* Items List */}
              <ul className="mt-4 space-y-2.5">
                {prize.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-olney-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA button to scroll to packs */}
            <div className="mt-6 pt-4 border-t border-olney-border/80 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => smoothScrollTo('packs-section')}
                className="w-full sm:w-auto flex-1 cursor-pointer bg-olney-red hover:bg-olney-red-dark text-white font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 shadow-glow-red hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Elegir Pack y Participar</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <div className="flex items-center gap-1.5 text-xs text-olney-muted text-center sm:text-left">
                <Shield className="w-4 h-4 text-olney-gold shrink-0" />
                <span>Sorteo oficial verificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
