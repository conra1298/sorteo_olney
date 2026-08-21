import React from 'react';
import { MessageCircle, ShieldCheck, FileText, Gift } from 'lucide-react';
import { SorteoConfig } from '../types/sorteo';
import { InstagramIcon } from './InstagramIcon';
import logoOlney from '../assets/logo-olney.png';

interface FooterProps {
  config: SorteoConfig;
  onOpenLegal: (tab: 'bases' | 'terminos') => void;
  onOpenGratis: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenLegal, onOpenGratis }) => {
  return (
    <footer className="w-full bg-olney-darker border-t border-olney-border mt-12 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Brand & Social Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-olney-border/60">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <img
              src={logoOlney}
              alt={config.empresa.nombre}
              className="h-12 w-auto object-contain"
            />
            <div>
              <span className="text-sm font-black text-white uppercase block">
                {config.empresa.nombre}
              </span>
              <span className="text-xs text-olney-muted">
                Especialistas en equipamiento 4x4 y cubiertas off-road
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={config.empresa.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-olney-panel hover:bg-pink-600/20 text-pink-400 hover:text-pink-300 border border-olney-border transition-all flex items-center gap-2 text-xs font-bold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{config.empresa.instagramHandle}</span>
            </a>

            <a
              href={`https://wa.me/${config.empresa.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-olney-panel hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 border border-olney-border transition-all flex items-center gap-2 text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-olney-muted">
          <button
            onClick={() => onOpenLegal('bases')}
            className="text-olney-muted hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Bases y condiciones del sorteo</span>
          </button>
          <span className="hidden sm:inline text-olney-border">•</span>
          <button
            onClick={() => onOpenLegal('terminos')}
            className="text-olney-muted hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Términos de compra digital</span>
          </button>
          <span className="hidden sm:inline text-olney-border">•</span>
          <button
            onClick={onOpenGratis}
            className="text-olney-gold hover:text-olney-gold-light transition-colors cursor-pointer flex items-center gap-1.5 font-semibold"
          >
            <Gift className="w-3.5 h-3.5" />
            <span>Participación gratuita (Sin obligación)</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-olney-border/40 text-center text-[11px] text-olney-muted space-y-1">
          <div className="flex items-center justify-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sorteo oficial certificado por {config.empresa.razonSocial} — CUIT {config.empresa.cuit}</span>
          </div>
          <p>© {new Date().getFullYear()} Olney 4x4 Parts. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
