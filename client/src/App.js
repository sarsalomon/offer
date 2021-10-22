import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = observer( ()=>{ 
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading){
    return <Spinner animation={"grow"}/>
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    <BrowserRouter>
      {user.isAuth?
        <NavBar/>
      :
        <div/>
      }
      <AppRouter/>
      {user.isAuth?
        <Footer/>
      :
        <div/>
      }
    </BrowserRouter>
      <button onClick={() => themeToggler()}>Change Theme</button>
    </StyledApp>
  </ThemeProvider>
  );
})

export default App;