import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Download, CheckCircle2, Sparkles, RefreshCw, ExternalLink, HelpCircle } from 'lucide-react';
import { Pack } from '../types/sorteo';
import { InstagramIcon } from './InstagramIcon';

interface SuccessViewProps {
  pack: Pack;
  onReset: () => void;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ pack, onReset }) => {
  useEffect(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#d01218', '#eab308', '#ffffff'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#d01218', '#eab308', '#ffffff'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#d01218', '#eab308', '#ffffff'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#d01218', '#eab308', '#ffffff'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#d01218', '#eab308', '#ffffff'],
    });
  }, []);

  const handleDownloadSample = () => {
    const content = `=====================================================
OLNEY 4X4 PARTS - PACK DIGITAL OFICIAL
=====================================================
Pack: ${pack.nombre}
Fotos incluidas: ${pack.cantidadFotos} Fotografías Off-Road en Alta Resolución
Chances asignadas: ${pack.chances} Chances para el Sorteo del Juego de Cubiertas 4x4
Fecha de Sorteo: Sorteo Oficial en Vivo por Instagram @olney4x4parts

¡Gracias por confiar en Olney 4x4!
Sorteo Oficial - Córdoba, Argentina.
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pack.zipFileName.replace('.zip', '-info.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="success-section" className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
      <div className="rounded-3xl bg-olney-panel border-2 border-olney-gold/70 p-6 sm:p-10 shadow-glow-gold text-center relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-olney-gold/10 via-transparent to-transparent pointer-events-none" />

        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-olney-gold/20 border-2 border-olney-gold flex items-center justify-center mb-4 text-olney-gold shadow-lg">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
          ¡Listo! Tu participación está confirmada
        </h2>

        {/* Chances Confirmation Badge */}
        <div className="inline-flex items-center gap-2 bg-olney-panel-alto px-4 py-2 rounded-2xl border border-olney-gold/50 my-4">
          <Sparkles className="w-5 h-5 text-olney-gold" />
          <span className="text-sm sm:text-base font-black text-olney-gold font-mono uppercase">
            {pack.chances} {pack.chances === 1 ? 'CHANCE REGISTRADA' : 'CHANCES REGISTRADAS'}
          </span>
        </div>

        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Ya estás participando por el <strong className="text-white">Juego Completo de 4 Cubiertas 4x4</strong>. Tu número de comprobante y transferencia quedaron registrados en el sorteo.
        </p>

        {/* Download Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleDownloadSample}
            className="w-full py-4 px-6 rounded-2xl font-black text-base uppercase tracking-wider bg-olney-gold hover:bg-olney-gold-light text-black shadow-glow-gold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>Descargar Mis Fotos ({pack.cantidadFotos} Fotos)</span>
          </button>
          <span className="text-xs text-olney-muted mt-2 block">
            Archivo: {pack.zipFileName}
          </span>
        </div>

        {/* Instagram Browser Troubleshooting Tip */}
        <div className="mt-6 bg-olney-darker/80 rounded-2xl p-4 border border-olney-border text-left">
          <div className="flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-olney-gold shrink-0 mt-0.5" />
            <div className="text-xs text-olney-muted leading-relaxed">
              <strong className="text-white block mb-0.5">¿Estás en el navegador de Instagram?</strong>
              Si la descarga no inicia automáticamente, tocá los 3 puntos (···) arriba a la derecha y elegí <span className="text-white font-semibold">"Abrir en Chrome"</span> o <span className="text-white font-semibold">"Abrir en Safari"</span>.
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-olney-border flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-bold text-olney-muted hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Comprar otro pack de fotos</span>
          </button>

          <a
            href="https://www.instagram.com/olney4x4parts/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-pink-400 hover:text-pink-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Seguinos en Instagram @olney4x4parts</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
