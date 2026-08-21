import React from 'react';
import { ShieldCheck, Sparkles, FileText, Gift } from 'lucide-react';
import { SorteoConfig } from '../types/sorteo';
import { InstagramIcon } from './InstagramIcon';

interface HeaderProps {
  config: SorteoConfig;
  onOpenLegal: (tab: 'bases' | 'terminos') => void;
  onOpenGratis: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenLegal, onOpenGratis }) => {
  return (
    <header className="w-full pt-4 pb-2 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Top Banner & Quick Legal Links */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-olney-muted mb-4 border-b border-olney-border/50 pb-3">
        <button
          onClick={onOpenGratis}
          className="inline-flex items-center gap-1.5 font-bold text-olney-gold hover:text-olney-gold-light transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-olney-gold/10"
        >
          <Gift className="w-3.5 h-3.5" />
          <span>Sin obligación de compra</span>
        </button>
        <span className="text-olney-border">|</span>
        <button
          onClick={() => onOpenLegal('bases')}
          className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer underline underline-offset-4 py-1"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Bases y condiciones</span>
        </button>
        <span className="text-olney-border">|</span>
        <button
          onClick={() => onOpenLegal('terminos')}
          className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer underline underline-offset-4 py-1"
        >
          <span>Términos</span>
        </button>
      </div>

      {/* Brand Identity / Official Sorteo Pill */}
      <div className="inline-flex items-center gap-2 bg-olney-panel px-3.5 py-1.5 rounded-full border border-olney-border mb-4 shadow-sm">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olney-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-olney-red"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-olney-muted">
          Sorteo Oficial Olney 4x4
        </span>
        <a
          href={config.empresa.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 ml-1 transition-colors"
          title="Ver Instagram Oficial"
        >
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>{config.empresa.instagramHandle}</span>
        </a>
      </div>

      {/* Official Logo */}
      <div className="flex justify-center my-2">
        <a href="#" className="inline-block transition-transform hover:scale-105 duration-200">
          <img
            src="/logo-olney.png"
            alt={config.empresa.nombre}
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
          />
        </a>
      </div>

      {/* Main Headline */}
      <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-sans leading-tight">
        Comprá tu pack de fotos y participá por un{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-olney-red to-orange-500 underline decoration-olney-gold/40 decoration-4">
          Juego Completo de Cubiertas 4x4
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-sm sm:text-base text-olney-muted max-w-xl mx-auto leading-relaxed">
        Elegí tu pack de fotografías off-road en alta calidad, transferí por alias y descargá tus archivos al instante.
      </p>

      {/* Key Guarantees */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
        <div className="flex items-center gap-1.5 bg-olney-panel/80 px-3 py-1.5 rounded-lg border border-olney-border">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Participación 100% segura por alias bancario</span>
        </div>
        <div className="flex items-center gap-1.5 bg-olney-panel/80 px-3 py-1.5 rounded-lg border border-olney-border">
          <Sparkles className="w-4 h-4 text-olney-gold" />
          <span>Medida a elección para tu camioneta</span>
        </div>
      </div>
    </header>
  );
};
