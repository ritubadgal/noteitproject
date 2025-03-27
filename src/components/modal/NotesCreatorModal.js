import React, { useState } from "react";
import "./style.css";
import { Database, ref, push } from "firebase/database";
import ReactQuill from "react-quill";
import { database } from "../../Firebase";
export const NotesCreatorModal = ({ closeModal }) => {
  const [notesTitle, setNotesTitle] = useState("");
  const [buttonText, setButtonText] = useState("");
  const handleSave = async () => {
    if (notesTitle == "") {
      alert("Please fill the fields");
    } else {
      setButtonText("Please wait..");
      await push(ref(database, `users/${localStorage.getItem("uid")}/notes`), {
        title: notesTitle,
      });
      console.log("Notes:", { notesTitle });
      closeModal();
      setButtonText("Save Notes");
    }
  };

  return (
    <div className="modalBaseContainer">
      <div className="modalContentContainer">
        <h2>Create New Notes</h2>
        <label>Title:</label>
        <input
          type="text"
          value={notesTitle}
          onChange={(e) => setNotesTitle(e.target.value)}
          placeholder="Enter your title"
        />
        <button onClick={handleSave}>Save Notes</button>
        <button onClick={closeModal} className="closeButton">
          cancel
        </button>
      </div>
    </div>
  );
};
export default NotesCreatorModal;
