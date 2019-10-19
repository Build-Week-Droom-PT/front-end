import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

function CompanyProfile(props) {
  console.log(props);
  // const [returnedListings, setReturnedListings] = useState({});
  const [dummyData, setDummyData] = useState([
    {
      id: 2,
      name: "Mind-Corp",
      location: "Austin, TX",
      description: "something",
      user_id: 1
    },
    {
      id: 2,
      name: "Mind",
      location: "Chicago, IL",
      description: "something",
      user_id: 2
    }
  ]);
  //   console.log(`hello from seekerprofile ${dummyData[0].name}`);
  const userData = dummyData.find(
    user => user.id === Number(props.match.params.id)
  );
  //   });
  const [variable, setVariable] = useState("");

  useEffect(() => {
    setVariable("listings");
    console.log(variable);
    axios
      .get(`https://droom-pt-bw.herokuapp.com/${variable}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [variable]);
  return (
    <div>
      {/* <SeekerHeader data={userData} /> */}
      <h1>{userData.name}</h1>
    </div>
  );
}

const CompanyProfileWithRouter = withRouter(CompanyProfile);

export default CompanyProfileWithRouter;
