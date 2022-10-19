
import { Button, Heading, Input } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export const BMIPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [bmi, setBmi] = useState("");
  const [bmiHistory, setBmiHistory] = useState([]);
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("http://localhost:8080/user/create", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          height,
          weight,
      }),
      });
      const data = await res.json();
      if (data.error) {
      setError(data.error);
      setLoading(false);
      } else {
      setBmi(data.bmi);
      setLoading(false);
      }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/user/`)
      .then((res) => res.json())
      .then((data) => {
        setBmiHistory(data);
      });
  }, []);


  return (
    <>
      <MainDivWrapper>
        <InnerDivContainer >
            <Heading>Calculate BMI</Heading>
            <form onSubmit={handleSubmit}>
              <FormWrapper>
            <Input
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <Input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
                Calculate
            </Button>
            </FormWrapper>
            </form>
            <p>
            Your BMI is {bmi}
            </p>
            <p>
            Your BMI History is {bmiHistory}
            </p>
        </InnerDivContainer>
        </MainDivWrapper>
    </>
  )
}



const MainDivWrapper=styled.div`
height:fit-content;
width:70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const InnerDivContainer=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
padding: 2rem;
border-radius: 10px;
`;


const FormWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem;
border-radius: 10px;
`;

