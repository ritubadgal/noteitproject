import "./style.css";
import { FaPlusCircle } from "react-icons/fa";
import "../../../../components/modal/NotesCreatorModal.js";
import NotesCreatorModal from "../../../../components/modal/NotesCreatorModal.js";
import { useState } from "react";
function MainPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="MainPageBaseContainer">
      <div className="MainPageTitleContainer">
        <div className="mainPageTitleIconButton">
          <FaPlusCircle size={40} onClick={() => setShowModal(true)} />
          {showModal && (
            <NotesCreatorModal closeModal={() => setShowModal(false)} />
          )}
        </div>
      </div>
      <div className="MainPageNotesContainer">
        <div className="MainPageSaveContainer"></div>
      </div>
    </div>
  );
}
export default MainPage;
