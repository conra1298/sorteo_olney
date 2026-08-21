import { useState } from 'react';
import { Header } from './components/Header';
import { PrizeShowcase } from './components/PrizeShowcase';
import { PackSelector } from './components/PackSelector';
import { TransferSection } from './components/TransferSection';
import { ReceiptUpload } from './components/ReceiptUpload';
import { SuccessView } from './components/SuccessView';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { FreeEntryModal } from './components/FreeEntryModal';
import { sorteoConfig } from './config/sorteoConfig';
import { smoothScrollTo } from './utils/formatters';

export function App() {
  const [selectedPackId, setSelectedPackId] = useState<string | null>('pack-2');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<'bases' | 'terminos'>('bases');
  const [freeEntryModalOpen, setFreeEntryModalOpen] = useState<boolean>(false);

  const selectedPack = sorteoConfig.packs.find((p) => p.id === selectedPackId) || sorteoConfig.packs[1];

  const handleSelectPack = (packId: string) => {
    setSelectedPackId(packId);
    setIsSuccess(false);
  };

  const handleReceiptSuccess = (_file: File) => {
    setIsSuccess(true);
    setTimeout(() => {
      smoothScrollTo('success-section');
    }, 100);
  };

  const handleReset = () => {
    setIsSuccess(false);
    smoothScrollTo('packs-section');
  };

  const handleOpenLegal = (tab: 'bases' | 'terminos') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleOpenGratis = () => {
    setFreeEntryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-olney-dark text-white font-sans bg-tread-pattern relative">
      {/* Background Ambience Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-olney-red/10 blur-[130px] pointer-events-none -z-10" />

      {/* Main App Content */}
      <main className="flex-1 w-full pb-10">
        {/* Header with Logo, Hero, Legal Links */}
        <Header
          config={sorteoConfig}
          onOpenLegal={handleOpenLegal}
          onOpenGratis={handleOpenGratis}
        />

        {/* Prize Showcase Card */}
        <PrizeShowcase prize={sorteoConfig.premio} />

        {/* Packs Selector */}
        <PackSelector
          packs={sorteoConfig.packs}
          selectedPackId={selectedPackId}
          onSelectPack={handleSelectPack}
        />

        {/* Flow: Success View vs. Transfer & Receipt Flow */}
        {isSuccess ? (
          <SuccessView pack={selectedPack} onReset={handleReset} />
        ) : (
          <>
            {/* Step 2: Transfer Bank Details */}
            {selectedPack && (
              <TransferSection pack={selectedPack} bank={sorteoConfig.banco} />
            )}

            {/* Step 3: Receipt Upload & Download Button */}
            {selectedPack && (
              <ReceiptUpload pack={selectedPack} onSuccess={handleReceiptSuccess} />
            )}
          </>
        )}

        {/* FAQs */}
        <FaqSection faqs={sorteoConfig.faqs} />
      </main>

      {/* Footer */}
      <Footer
        config={sorteoConfig}
        onOpenLegal={handleOpenLegal}
        onOpenGratis={handleOpenGratis}
      />

      {/* Legal Modal (Bases y Condiciones / Términos) */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        activeTab={legalModalTab}
        setActiveTab={setLegalModalTab}
        config={sorteoConfig}
      />

      {/* Free Entry Modal (Sin obligación de compra) */}
      <FreeEntryModal
        isOpen={freeEntryModalOpen}
        onClose={() => setFreeEntryModalOpen(false)}
        config={sorteoConfig}
      />
    </div>
  );
}

export default App;
