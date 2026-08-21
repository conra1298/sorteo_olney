import React from 'react';
import { Sparkles, Check, Flame, ArrowRight } from 'lucide-react';
import { Pack } from '../types/sorteo';
import { formatCurrency } from '../utils/formatters';

interface PackSelectorProps {
  packs: Pack[];
  selectedPackId: string | null;
  onSelectPack: (packId: string) => void;
}

export const PackSelector: React.FC<PackSelectorProps> = ({
  packs,
  selectedPackId,
  onSelectPack,
}) => {
  return (
    <section id="packs-section" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Title Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-olney-red bg-olney-red/10 px-3 py-1 rounded-full border border-olney-red/30 mb-2">
          <Flame className="w-3.5 h-3.5" />
          <span>Paso 1 de 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          Elegí tu pack de fotos
        </h2>
        <p className="mt-1 text-sm text-olney-muted">
          Cada pack incluye fotos 4x4 en alta resolución y chances automáticas para el sorteo.
        </p>
      </div>

      {/* Grid of Packs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {packs.map((pack) => {
          const isSelected = selectedPackId === pack.id;

          return (
            <div
              key={pack.id}
              onClick={() => onSelectPack(pack.id)}
              className={`relative cursor-pointer rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between border-2 ${
                isSelected
                  ? 'bg-olney-panel-alto border-olney-gold shadow-glow-gold scale-[1.02]'
                  : 'bg-olney-panel border-olney-border hover:border-olney-red/60 hover:bg-olney-panel-hover'
              }`}
            >
              {/* Badge if Popular / Best Value */}
              {pack.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-olney-red to-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    {pack.badge}
                  </span>
                </div>
              )}

              {/* Pack Image Header */}
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-3 bg-olney-darker">
                  <img
                    src={pack.imagen}
                    alt={pack.nombre}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {pack.cantidadFotos} Fotos HD
                    </span>
                  </div>
                </div>

                {/* Name & Price */}
                <div className="flex items-baseline justify-between gap-1">
                  <h3 className="text-base font-black text-white tracking-tight">
                    {pack.nombre}
                  </h3>
                  <span
                    className={`text-xl font-black font-mono ${
                      isSelected ? 'text-olney-gold' : 'text-white'
                    }`}
                  >
                    {formatCurrency(pack.precio)}
                  </span>
                </div>

                {/* Chances Highlight */}
                <div className="mt-1.5 inline-flex items-center gap-1 bg-olney-gold/15 text-olney-gold px-2 py-1 rounded-md text-xs font-black uppercase tracking-wider font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-olney-gold" />
                  <span>
                    {pack.chances} {pack.chances === 1 ? 'CHANCE' : 'CHANCES'}
                  </span>
                </div>

                {/* Short Description */}
                <p className="mt-2 text-xs text-olney-muted leading-relaxed">
                  {pack.descripcionCorta}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-4 pt-3 border-t border-olney-border">
                {isSelected ? (
                  <div className="flex items-center justify-center gap-1.5 bg-olney-gold text-black font-black text-xs uppercase py-2 px-3 rounded-xl shadow-md">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Pack Elegido</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-olney-muted group-hover:text-white py-2">
                    <span>Seleccionar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
