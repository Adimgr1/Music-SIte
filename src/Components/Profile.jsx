import "../CSS/Profile.css";
export default function Profile(prop) {
  return (
    <>
      <div className={prop.selectedPage=="Profile"?"profile-div profile-selected-after":"profile-div profile-selected-before"}>
        <p>
          {
            JSON.parse(localStorage.getItem("user"))[
              JSON.parse(localStorage.getItem("selected"))[0]
            ].name
          }
        </p>
        <p>
          {
            JSON.parse(localStorage.getItem("user"))[
              JSON.parse(localStorage.getItem("selected"))[0]
            ].email
          }
        </p>
        <p>
          User: 
          {
            JSON.parse(localStorage.getItem("user"))[
              JSON.parse(localStorage.getItem("selected"))[0]
            ].users[[
               JSON.parse(localStorage.getItem("selected"))[1]
             ]].name
          }
        </p>
      </div>
    </>
  );
}
