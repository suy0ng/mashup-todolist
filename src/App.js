import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }`;
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;
