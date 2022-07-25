import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { breakOne, breakTwo } from "../responsive";
import {useState} from"react"
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector} from "react-redux"
const Container = styled.div`
  height: 100vh;
`;
const Disapear = styled.div`
  ${breakTwo({ display: "none" })}
`;
const Main = styled.main`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./images/HikingBackground.jpg"), rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 40%;
  max-width: 400px;
  ${breakOne({ width: "90%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: lighter;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  cursor: pointer;
  margin: 20px 0;
  &:disabled{
    color:teal;
    cursor:not-allowed;
  }
`;
const Link = styled.a`
  font-size: 14px;
  margin: 3px;
  width: 100%;
  cursor: pointer;
  text-decoration: underline;
`;
const Error = styled.span`
color:red;
width:100%;
margin:10px 0px;
`;

export default function Login() {
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")
  const dispatch = useDispatch();
  const{isFetching,error} = useSelector(state=> state.user)
  const handleClick = (e)=> {
    e.preventDefault()
    login(dispatch,{username,password})
    console.log("test",isFetching)
  }
  return (
    <Container>
      <Disapear>
        <Navbar />
      </Disapear>
      <Main>
        <Wrapper>
          <Title>Login</Title>
          <Form>
            <Input type="text" placeholder="Email / Username" onChange = {(e)=>setUsername(e.target.value)}/>
            <Input type="password" placeholder="Password" onChange = {(e)=>setPassword(e.target.value)} />
            {error && <Error>Something went wrong</Error>}
            <Button onClick = {handleClick} disabled = {isFetching}>Login</Button>
            <Link>Forgot Username / Password</Link>
            <Link>Create Account</Link>
          </Form>
        </Wrapper>
      </Main>
      <Disapear>
        <Footer />
      </Disapear>
    </Container>
  );
}
