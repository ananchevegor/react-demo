import logo from './logo.svg';
import './App.css';
import TablePacient from './modules/TablePacient';
import Exercises from './modules/Exercises';
import ChangeDataDoctor from './modules/ChangeDataDoctor';
import Results from './modules/Results';
import ModalComponent from './modules/Modal';
import { useState } from "react";
import ChangeDataPacient from './modules/ChangeDataPacient';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      
      <div className="flex-container">
      <div className="flex-item">
        <TablePacient/>
        <div>
          <button onClick={openModal}>Открыть вопросы</button>
          <ModalComponent isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="flex-item"><Exercises/></div>
      <div className="flex-item"><p>doctor</p><ChangeDataDoctor/></div>
      <div className="flex-item"><Results/></div>
      <div className="flex-item"><p>pacient</p> <ChangeDataPacient/></div>
      
    </div>
    </div>
  );
}

export default App;
