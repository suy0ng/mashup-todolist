import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

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
        <TodoList/>
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
