import React, { useState, useEffect } from 'react';
import LeadCaptureModal from './LeadCaptureModal';
import { VisitorTracker } from './VisitorTracker';

const LeadCaptureSystem: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [trigger, setTrigger] = useState<'page-load' | 'exit-intent' | 'time-spent' | 'scroll' | 'manual'>('manual');
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const modalShown = sessionStorage.getItem('markfix_modal_shown');
    if (modalShown) {
      setHasShownModal(true);
      return;
    }

    const tracker = VisitorTracker.getInstance();
    
    // Time-based trigger (30 seconds)
    const timeTimer = setTimeout(() => {
      if (!hasShownModal && !modalOpen) {
        setTrigger('time-spent');
        setModalOpen(true);
        setHasShownModal(true);
        sessionStorage.setItem('markfix_modal_shown', 'true');
      }
    }, 30000);

    // Scroll-based trigger (70% scroll)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !hasShownModal && !modalOpen) {
        setTrigger('scroll');
        setModalOpen(true);
        setHasShownModal(true);
        sessionStorage.setItem('markfix_modal_shown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownModal && !modalOpen) {
        setTrigger('exit-intent');
        setModalOpen(true);
        setHasShownModal(true);
        sessionStorage.setItem('markfix_modal_shown', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeTimer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownModal, modalOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <LeadCaptureModal
      isOpen={modalOpen}
      onClose={handleCloseModal}
      trigger={trigger}
      offerType="free-consultation"
    />
  );
};

export default LeadCaptureSystem;