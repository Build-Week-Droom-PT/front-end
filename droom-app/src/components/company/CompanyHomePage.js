import React, { useState, useEffect } from "react";
import axios from 'axios'
import { withRouter } from "react-router";
import styled from "styled-components";
import LogOut from "../Forms/LogOut";


export default function CompanyHomePage(props) {

  const [companyData, setCompanyData] = useState([])

  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`GET to /companies/:user_id (${id})`)
      .then((response) => {
        setCompanyData(response.data)
      })
      .catch( err => {
        console.log('Error:', err)
      })
  }, [props.match.params.id])

  const CardStyling = styled.div`
    width: 75%;
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #e1e6f9;
    margin: 3% auto;
    justify-content: space-between;
    align-self: flex-start;
    width: 30vw;
    min-height: 50vh;
    max-width: 1024px;
    // margin: 0, 60%, 0, 0;
    background: #f1f3fd;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(44, 58, 127, 0.33),
      0 15px 12px rgba(44, 58, 127, 0.22);
    color: #383c4f;
    font-size: 1.6rem;
  `;
  const CardCentering = styled.div`
    border: 1px solid green;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  `;

  const onClickHandler = e => {
    e.preventDefault();
  };

  if (companyData) {
    const { name, location, description, user_id } = props.companyData
    
    return (
      <div>
        <CardCentering>
          <CardStyling key={id}>

            <h3>{name}</h3>

            <h3>Current Location</h3>
            <h4>{location}</h4>

            <h3>About Me</h3>
            <h4>{description}</h4>

          </CardStyling>
        </CardCentering>

        <LogOut />

      </div>
    );
  } else {
    return <span>No Profile</span>;
  }
}