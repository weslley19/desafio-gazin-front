import { useState } from 'react';
import { DeveloperProvider } from './hooks/useDevelopers';
import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewDeveloperModal } from './components/NewDeveloperModal';
import { EditDeveloperModal } from './components/EditDeveloperModal';
import { ViewDeveloperModal } from './components/viewDeveloperModal';

import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewDeveloperModalOpen, setIsNewDeveloperModalOpen] = useState(false);
  const [isEditDeveloperModalOpen, setIsEditDeveloperModalOpen] = useState(false);
  const [isViewDeveloperModalOpen, setIsViewDeveloperModalOpen] = useState(false);

  const handleOpenNewDeveloperModal = () => {
    setIsNewDeveloperModalOpen(true);
  }

  const handleCloseNewDeveloperModal = () => {
    setIsNewDeveloperModalOpen(false);
  }

  const handleOpenEditDeveloperModal = () => {
    setIsEditDeveloperModalOpen(true);
  }

  const handleCloseEditDeveloperModal = () => {
    setIsEditDeveloperModalOpen(false);
  }

  const handleOpenViewDeveloperModal = () => {
    setIsViewDeveloperModalOpen(true);
  }

  const handleCloseViewDeveloperModal = () => {
    setIsViewDeveloperModalOpen(false);
  }

  return (
    <DeveloperProvider>
      <ToastContainer autoClose={3000} />

      <Header onOpenNewDeveloperModal={handleOpenNewDeveloperModal} />
      <Dashboard onOpenEditDeveloperModal={handleOpenEditDeveloperModal} onOpenViewDeveloperModal={handleOpenViewDeveloperModal} />

      <NewDeveloperModal
        isOpen={isNewDeveloperModalOpen}
        onRequestClose={handleCloseNewDeveloperModal}
      />

      <EditDeveloperModal
        isOpen={isEditDeveloperModalOpen}
        onRequestClose={handleCloseEditDeveloperModal}
      />

      <ViewDeveloperModal
        isOpen={isViewDeveloperModalOpen}
        onRequestClose={handleCloseViewDeveloperModal}
      />

      <GlobalStyle />
    </DeveloperProvider>
  );
}
