import React from 'react';
import { X, Gift, ShieldAlert, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { SorteoConfig } from '../types/sorteo';

interface FreeEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SorteoConfig;
}

export const FreeEntryModal: React.FC<FreeEntryModalProps> = ({ isOpen, onClose, config }) => {
  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${config.empresa.whatsapp}?text=${encodeURIComponent(
    config.gratis.whatsappMensaje
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-olney-panel border-2 border-olney-gold/50 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-olney-muted hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-olney-gold/20 border border-olney-gold flex items-center justify-center mx-auto mb-3 text-olney-gold">
            <Gift className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            Participación Gratuita
          </h3>
          <span className="text-xs font-mono uppercase text-olney-gold font-bold">
            Sin Obligación de Compra
          </span>
        </div>

        {/* Legal notice content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="bg-olney-darker p-4 rounded-2xl border border-olney-border">
            <div className="flex items-center gap-2 font-bold text-white mb-1">
              <ShieldAlert className="w-4 h-4 text-olney-gold" />
              <span>Normativa Argentina Vigente</span>
            </div>
            <p className="text-xs text-olney-muted">
              {config.gratis.instrucciones}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Requisitos para validar la chance gratuita:
            </h4>
            <ul className="space-y-1.5 text-xs text-olney-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Ser mayor de 18 años con residencia en Argentina.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Presentar DNI original al momento de retirar el premio.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Límite de 1 (una) chance por persona física y por DNI.</span>
              </li>
            </ul>
          </div>

          {/* Action options */}
          <div className="pt-4 space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Participar Gratis por WhatsApp</span>
            </a>

            <a
              href={config.gratis.formularioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-olney-panel-alto hover:bg-olney-panel-hover text-white border border-olney-border flex items-center justify-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-olney-gold" />
              <span>Completar Formulario de Registro</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-olney-border text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-olney-muted hover:text-white underline cursor-pointer"
          >
            Volver al sorteo principal
          </button>
        </div>
      </div>
    </div>
  );
};
