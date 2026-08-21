import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, Building2, UserCheck, CreditCard, Sparkles } from 'lucide-react';
import { Pack, BankData } from '../types/sorteo';
import { formatCurrency, copyToClipboard } from '../utils/formatters';

interface TransferSectionProps {
  pack: Pack;
  bank: BankData;
}

export const TransferSection: React.FC<TransferSectionProps> = ({ pack, bank }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyAlias = async () => {
    const success = await copyToClipboard(bank.alias);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="transfer-section" className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
      <div className="rounded-3xl bg-olney-panel border-2 border-olney-red/60 shadow-2xl p-5 sm:p-8 relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-olney-red/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-olney-red bg-olney-red/10 px-3 py-1 rounded-full border border-olney-red/30 mb-2">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Paso 2 de 2</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Transferí desde tu banco o billetera
          </h2>
          <p className="mt-1 text-sm text-olney-muted">
            Transferí el monto exacto al alias oficial de Olney 4x4.
          </p>
        </div>

        {/* Selected Pack Pill */}
        <div className="flex items-center justify-between bg-olney-panel-alto p-3 rounded-2xl border border-olney-border mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-olney-darker shrink-0">
              <img src={pack.imagen} alt={pack.nombre} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs text-olney-muted uppercase block font-semibold">Pack Seleccionado</span>
              <span className="text-sm font-black text-white">{pack.nombre}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-olney-gold bg-olney-gold/15 px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3" />
              <span>{pack.chances} {pack.chances === 1 ? 'chance' : 'chances'}</span>
            </div>
          </div>
        </div>

        {/* Alias Big Box */}
        <div className="bg-olney-panel-alto p-4 sm:p-5 rounded-2xl border-2 border-olney-border mb-4">
          <div className="flex items-center justify-between text-xs font-bold uppercase text-olney-gold tracking-wider mb-1.5">
            <span>Alias de Transferencia</span>
            <span className="text-[10px] text-olney-muted lowercase">Tocá para copiar</span>
          </div>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-mono select-all tracking-wider break-all py-1">
            {bank.alias}
          </div>

          <button
            type="button"
            onClick={handleCopyAlias}
            className={`mt-3 w-full py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              copied
                ? 'bg-emerald-500 text-black shadow-lg'
                : 'bg-olney-red hover:bg-olney-red-dark text-white shadow-glow-red'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 stroke-[3]" />
                <span>¡Alias Copiado con Éxito!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copiar Alias</span>
              </>
            )}
          </button>
        </div>

        {/* Amount Box */}
        <div className="bg-olney-panel-alto p-4 sm:p-5 rounded-2xl border border-olney-border mb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase text-olney-muted tracking-wider block">
              Monto Exacto a Transferir
            </span>
            <span className="text-xs text-olney-muted/80">
              Incluye las {pack.cantidadFotos} fotos + {pack.chances} chances
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-olney-gold font-mono select-all">
            {formatCurrency(pack.precio)}
          </div>
        </div>

        {/* Bank & Account Details */}
        <div className="bg-olney-darker/60 rounded-2xl border border-dashed border-olney-border p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-olney-muted flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-olney-gold" />
              <span>Titular:</span>
            </span>
            <span className="font-bold text-white select-all">{bank.titular}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-olney-muted flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-olney-gold" />
              <span>CUIT:</span>
            </span>
            <span className="font-bold text-white select-all">{bank.cuit}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-olney-muted flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-olney-gold" />
              <span>Entidad:</span>
            </span>
            <span className="font-bold text-white">{bank.banco}</span>
          </div>
        </div>

        {/* Reassurance Notice */}
        <div className="mt-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-3.5 text-center">
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>¡Con la transferencia ya estás participando del sorteo!</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-300">
            Participás automáticamente con tu número de transferencia bancaria.
          </p>
        </div>
      </div>
    </section>
  );
};
