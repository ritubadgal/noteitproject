function NewNotesPage() {
  return (
    <div className="notesPageBaseContainer">
      <div className="notesPageContainer"></div>
    </div>
    // import {RotatingLines} from "react-loader-spinner";
    // export default function ProfilePage() {
    //     const [isLoading , setIsLoading]=useState(true);
    //     const [userData,setUserData]=useState(null);
    //     useEffect(()=>{
    //         getProfileData();
    //     }, []);
    //     const getProfileData =() => {
    //         setTimeout(() => {
    //             setIsLoading(true);
    //             get(ref(database, `users/${localStorage.getItem("uid")}`)).then((snapshot) =>{
    //                 setUserData(snapshot.val());
    //                 console.log("Data Get Done", JSON.stringify(snapshot.val()));
    //             }
    //            );
    //            setIsLoading(false);
    //         }, );
    //     };
    // return(
    //     <div className="profilePageBaseContainer">
    //         <h1>PROFILE</h1>
    //         <div className="profileDataContainer">
    //             {isLoading ?(
    //                 <RotatingLines />
    //             ):(
    //                 <div>{JSON.stringify(userData.uid)}</div>
                
    //             )}
    //             <button></button>
    //         </div>
    //     </div>
    // );
       
    // }
  );
}
