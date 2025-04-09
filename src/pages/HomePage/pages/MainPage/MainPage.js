import "./style.css";
import { FaPlusCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import "../../../../components/modal/NotesCreatorModal.js";
import NotesCreatorModal from "../../../../components/modal/NotesCreatorModal.js";
import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { database } from "../../../../Firebase.js";
import CustomButton from "../../../../components/CustomButton/CustomButton.js";
import CustomInput from "../../../../components/CustomInput/CustomInput.js";
function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  useEffect(() => {
    getNotesData();
  }, []);

  const getNotesData = async () => {
    const uid = localStorage.getItem("uid");

    if (uid) {
      await onValue(ref(database, `users/${uid}/notes`), (snapshot) => {
        if (snapshot.exists()) {
          const dataKeys = Object.keys(snapshot.val());
          const demoData = [];
          dataKeys.forEach((item) => {
            console.log("For Each Item", snapshot.val()[`${item}`]);
            const noteObject = {
              key: item,
              title: snapshot.val()[`${item}`]["title"],
              content: snapshot.val()[`${item}`]["content"],
            };
            demoData.push(noteObject);
          });
          setNotesList(demoData);
        } else {
          setNotesList([]);
        }
      });
    }
  };

  const handleSaveNote = async () => {
    set(
      ref(
        database,
        `users/${localStorage.getItem("uid")}/notes/${noteContent.key}/content`
      ),
      noteContent.content
    );
  };

  return (
    <div className="MainPageBaseContainer">
      <div className="MainPageTitleContainer">
        <div>
          {notesList.length == 0 ? (
            <p>No Notes Found</p>
          ) : (
            <>
              <div className="searchBarContainer">
                <div className="searchInput">
                  <CustomInput
                    type="text"
                    placeholder={"Search your notes"}
                    Icon={IoSearchSharp}
                    size={30}
                    
                  />
                  
                </div>
              </div>
              {notesList.map((item) => {
                return <p onClick={() => setNoteContent(item)}>{item.title}</p>;
              })}
            </>
          )}
        </div>
        <div className="mainPageTitleIconButton">
          <FaPlusCircle size={40} onClick={() => setShowModal(true)} />
          {showModal && (
            <NotesCreatorModal closeModal={() => setShowModal(false)} />
          )}
        </div>
      </div>
      <div className="MainPageNotesContainer">
        <textarea
          value={noteContent.content}
          onChange={(e) =>
            setNoteContent((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
        ></textarea>
        <div className="MainPageSaveContainer">
          <CustomButton
            title="Save"
            backgroundColor="black"
            color="white"
            onClick={handleSaveNote}
          />
        </div>
      </div>
    </div>
  );
}
export default MainPage;
