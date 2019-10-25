// import React, { useState, useContext, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
// import { Link } from "react-router-dom"

// import { UserData } from "../../contexts/UserData";
// import LogOut from "../Forms/LogOut";

// export default function SeekerHeader({ match }) {
//   const [ user, setUser ] = useState({});

//   useEffect(() => {
//     axiosWithAuth()
//       .get("/users")
//       .then(res => {
//         console.log(res.data);
//         setUser(res.data)
//       })
//       .catch( err => {
//         console.log(err)
//       })
//   }, [])


//   return (
//     <div>
//       <div>
//         {user.map((item, id) => <div key={id}><Link to ={{
//             pathname: `${match.url}/${item.id}`
//         }}>{item.name}</Link> </div>)}
//       </div>

//       <Route path={`${match.path}/:id`} />
//     </div>

    // <UserData.Provider value={user}>
      // <div className="header-container">
      //    <div className="nav-styling">
      //      <div className="nav-container">
      //        <h1 className="header-message">
      //          {user.name ? `Welcome ${user.name}` : ""}
      //        </h1>
      //        <div className="button-container">
      //          <button className="profile-button">
      //            <Link className="link" to={`/seekers/${id}`}>
      //              Home
      //            </Link>
      //          </button>
      //          <button className="profile-button">
      //            <Link className="link" to={`/matched/seeker/${user.id}`}>
      //              Matches
      //           </Link>
      //          </button>
      //          <button className="profile-button">
      //            <Link className="link" to={`/matched/seeker/${user.id}`}>
      //              Jobs
      //           </Link>
      //          </button>
      //          <LogOut/>
      //        </div>
      //      </div>
      //    </div>
      //    {/* <PrivateRoute exact path="/matched/" component={SeekerMatches} /> */}
      // </div>
    // </UserData.Provider>
//   )
  
// }


















import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import useHttp from "./Hooks/http";
import PrivateRoute from "../private/PrivateRoute";
import SeekerMatches from "./SeekerMatches";
import LogOut from "../Forms/LogOut";

const SeekerHeader = props => {
  const id = props.location.pathname;
  console.log(props.location.pathname);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { isLoadng, data, error, sendRequest } = useHttp();
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/${id}`;

    sendRequest(proxy + url, "SEND");
  }, [sendRequest, id]);
  console.log(id);

  if (data) {
    console.log(data.id);
    console.log(data);
    return (
      <div className="header-container">
        <div className="nav-styling">
          <div className="nav-container">
            <h1 className="header-message">
              {data.name ? `Welcome ${data.name}` : ""}
            </h1>
            <div className="button-container">
              <button className="profile-button">
                <Link className="link" to={`/seekers/${data.id}`}>
                  Home
                </Link>
              </button>
              <button className="profile-button">
                <Link className="link" to={`/matched/seeker/${data.id}`}>
                  Matches
                </Link>
              </button>
              <button className="profile-button">
                <Link className="link" to={`/matched/seeker/${data.id}`}>
                  Jobs
                </Link>
              </button>
              <LogOut/>
            </div>
          </div>
        </div>
        <PrivateRoute exact path="/matched/" component={SeekerMatches} />
      </div>
    );
  } else {
    return <span>No Header</span>;
  }
};

export default withRouter(SeekerHeader);


