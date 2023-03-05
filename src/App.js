import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }`;
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>안녕하세요</TodoTemplate>
    </>
  );
}

export default App;
