import { useState } from 'react';
import { DeveloperProvider } from './hooks/useTransactions';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewDeveloperModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewDeveloperModalOpen, setIsNewDeveloperModalOpen] = useState(false);

  const handleOpenNewDeveloperModal = () => {
    setIsNewDeveloperModalOpen(true);
  }

  const handleCloseNewDeveloperModal = () => {
    setIsNewDeveloperModalOpen(false);
  }

  return (
    <DeveloperProvider>
      <Header onOpenNewDeveloperModal={handleOpenNewDeveloperModal} />
      <Dashboard />

      <NewDeveloperModal
        isOpen={isNewDeveloperModalOpen}
        onRequestClose={handleCloseNewDeveloperModal}
      />

      <GlobalStyle />
    </DeveloperProvider>
  );
}
