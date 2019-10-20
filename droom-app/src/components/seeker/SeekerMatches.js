import React, { useState, useEffect } from "react";
import axios from "axios";

function SeekerMatches(props) {
  //   const user = Number(props.match.params.id);

  //   console.log(userInfo);
  const [userData, setSetUserData] = useState({});
  console.log(props.userInfo);
  useEffect(() => {
    axios
      //   .get(
      //     `https://droom-pt-bw.herokuapp.com/match/seeker/${
      //       userData.user_id
      //     }/match/job/${1}
      //       `
      //   )
      .get(
        `https://droom-pt-bw.herokuapp.com/match/seeker/${userData.user_id}/match/job/${userData.user_id}
          `
      )
      .then(res => {
        // console.log(res);
        setSetUserData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userData]);

  //   console.log(userData);
  return <div>Congrats {userData.name} It's a match!</div>;
}

export default SeekerMatches;
