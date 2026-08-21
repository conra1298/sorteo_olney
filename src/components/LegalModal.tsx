import React from 'react';
import { X, Scale } from 'lucide-react';
import { SorteoConfig } from '../types/sorteo';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'bases' | 'terminos';
  setActiveTab: (tab: 'bases' | 'terminos') => void;
  config: SorteoConfig;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  config,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-olney-panel border-2 border-olney-border shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-olney-muted hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Tabs */}
        <div className="mb-4 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-5 h-5 text-olney-red" />
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
              Marco Legal y Regulatorio
            </h3>
          </div>

          <div className="flex items-center gap-2 border-b border-olney-border pt-2">
            <button
              onClick={() => setActiveTab('bases')}
              className={`pb-2 px-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                activeTab === 'bases'
                  ? 'border-olney-red text-white'
                  : 'border-transparent text-olney-muted hover:text-white'
              }`}
            >
              Bases y Condiciones del Sorteo
            </button>
            <button
              onClick={() => setActiveTab('terminos')}
              className={`pb-2 px-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                activeTab === 'terminos'
                  ? 'border-olney-red text-white'
                  : 'border-transparent text-olney-muted hover:text-white'
              }`}
            >
              Términos de Compra Digital
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {activeTab === 'bases' ? (
            <div className="space-y-4">
              <div className="bg-olney-darker p-3.5 rounded-xl border border-olney-border text-xs text-olney-muted">
                <strong className="text-white block mb-1">1. ORGANIZADOR Y ALCANCE</strong>
                El presente sorteo promocional es organizado por <strong>{config.empresa.razonSocial}</strong> (CUIT: {config.empresa.cuit}), con domicilio legal en {config.empresa.direccion}, {config.empresa.ciudad}. Válido para toda la República Argentina.
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  2. PREMIO DEL SORTEO
                </h4>
                <p>
                  El premio consiste en un <strong>{config.premio.titulo}</strong> ({config.premio.subtitulo}). Incluye 4 neumáticos 0km a elección del ganador para vehículos particulares/camionetas. Incluye envío bonificado a todo el país o colocación y balanceo en taller Olney Córdoba Capital. No canjeable por dinero en efectivo salvo expresa disposición del Organizador.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  3. MECANISMO DE PARTICIPACIÓN
                </h4>
                <p>
                  Los participantes obtendrán chances mediante la adquisición voluntaria de Packs de Fotografías Digitales Off-Road en el sitio web oficial, o a través de la vía de <strong>participación gratuita sin obligación de compra</strong>, conforme al régimen legal vigente.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  4. FECHA Y REALIZACIÓN DEL SORTEO
                </h4>
                <p>
                  El sorteo se llevará a cabo el día <strong>{config.premio.fechaSorteo}</strong> en transmisión pública y en vivo a través de la cuenta oficial de Instagram <strong>{config.empresa.instagramHandle}</strong> con veeduría y registro digital.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  5. NOTIFICACIÓN Y ENTREGA DEL PREMIO
                </h4>
                <p>
                  El ganador será contactado a través de los datos de contacto suministrados (WhatsApp / Email / Teléfono). Tendrá un plazo de 10 días hábiles para acreditar identidad mediante DNI original. La entrega del premio se coordinará en un plazo máximo de 30 días corridos.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  6. PROTECCIÓN DE DATOS PERSONALES
                </h4>
                <p>
                  Los datos recabados serán tratados conforme a la Ley 25.326 de Protección de los Datos Personales de la República Argentina y no serán transferidos a terceros.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-olney-darker p-3.5 rounded-xl border border-olney-border text-xs text-olney-muted">
                <strong className="text-white block mb-1">CONDICIONES DE VENTA DE CONTENIDO DIGITAL</strong>
                La compra de packs de fotos corresponde a la adquisición de archivos digitales fotográficos en alta resolución bajo licencia de uso personal no comercial.
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  1. ENTREGA INMEDIATA
                </h4>
                <p>
                  El acceso a la descarga de los archivos digitales queda habilitado de forma inmediata tras completar el procedimiento de confirmación de transferencia.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  2. POLÍTICA DE REEMBOLSO Y REVOCACIÓN
                </h4>
                <p>
                  Tratándose de contenido digital de descarga y consumo instantáneo, una vez efectuada la descarga del material no opera el derecho de revocación, salvo fallas técnicas imputables al Organizador que impidan el acceso a los archivos adquiridos.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                  3. PROPIEDAD INTELECTUAL
                </h4>
                <p>
                  Todos los derechos de propiedad intelectual, marcas, logotipos y fotografías contenidas en los packs pertenecen a {config.empresa.nombre}. Queda prohibida su reventa o redistribución comercial no autorizada.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-olney-border flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl font-black text-xs uppercase tracking-wider bg-olney-red hover:bg-olney-red-dark text-white transition-colors cursor-pointer"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
