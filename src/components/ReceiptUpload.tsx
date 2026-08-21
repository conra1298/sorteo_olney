import React, { useState, useRef } from 'react';
import { UploadCloud, FileCheck2, Download, Image as ImageIcon, FileText, X } from 'lucide-react';
import { Pack } from '../types/sorteo';

interface ReceiptUploadProps {
  pack: Pack;
  onSuccess: (file: File) => void;
}

export const ReceiptUpload: React.FC<ReceiptUploadProps> = ({ pack, onSuccess }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleClearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      onSuccess(selectedFile);
    }
  };

  return (
    <section id="receipt-section" className="w-full max-w-2xl mx-auto px-4 sm:px-6 pb-8 animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-olney-panel border border-olney-border p-5 sm:p-8 shadow-xl"
      >
        <div className="text-center mb-5">
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            ¿Querés descargar tu pack de fotos?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-olney-muted max-w-md mx-auto">
            Adjuntá el comprobante de transferencia y descargás tu pack de {pack.cantidadFotos} fotos al instante.
          </p>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          id="comprobante"
          accept="image/*,application/pdf"
          className="sr-only"
          onChange={handleFileChange}
        />

        {/* Dropzone / Upload Box */}
        {!selectedFile ? (
          <label
            htmlFor="comprobante"
            className="group cursor-pointer flex flex-col items-center justify-center gap-3 p-6 sm:p-8 rounded-2xl border-2 border-dashed border-olney-border hover:border-olney-red/80 bg-olney-panel-alto hover:bg-olney-panel-hover transition-all duration-200 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-olney-darker flex items-center justify-center group-hover:scale-110 transition-transform">
              <UploadCloud className="w-7 h-7 text-olney-red group-hover:text-red-400" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-black text-white block">
                Adjuntar Comprobante de Transferencia
              </span>
              <span className="text-xs text-olney-muted mt-1 block">
                Captura de pantalla, foto o PDF (máx. 15MB)
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-olney-gold bg-olney-gold/10 px-3 py-1 rounded-full border border-olney-gold/20">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Tocar para seleccionar archivo</span>
            </span>
          </label>
        ) : (
          <div className="p-4 rounded-2xl bg-olney-panel-alto border-2 border-emerald-500/50 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Comprobante"
                  className="w-14 h-14 object-cover rounded-xl border border-olney-border shrink-0"
                />
              ) : (
                <div className="w-14 h-14 bg-olney-darker rounded-xl flex items-center justify-center border border-olney-border shrink-0">
                  <FileText className="w-6 h-6 text-olney-gold" />
                </div>
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Comprobante listo</span>
                </div>
                <p className="text-sm font-black text-white truncate">{selectedFile.name}</p>
                <span className="text-[11px] text-olney-muted">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClearFile}
              className="p-2 text-olney-muted hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Quitar archivo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Submit / Download Button */}
        <button
          type="submit"
          disabled={!selectedFile}
          className={`mt-5 w-full py-4 px-6 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
            selectedFile
              ? 'cursor-pointer bg-olney-red hover:bg-olney-red-dark text-white shadow-glow-red hover:shadow-lg active:scale-[0.99]'
              : 'cursor-not-allowed bg-white/5 text-olney-muted border border-olney-border/50'
          }`}
        >
          <Download className="w-5 h-5" />
          <span>Descargar Mi Pack de Fotos HD</span>
        </button>

        {/* Reassurance text */}
        <p className="mt-3 text-center text-[11px] text-olney-muted leading-relaxed">
          * Si ya transferiste y no deseás descargar las fotos en este momento, no te preocupes: tu participación en el sorteo ya quedó registrada automáticamente con tu transferencia.
        </p>
      </form>
    </section>
  );
};
