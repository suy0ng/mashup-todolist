import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .task-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todos) => !todos.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-kr',{
    year:'numeric',
    month:'narrow',
    day:'numeric'
  })
  const dayName = today.toLocaleDateString('ko-kr',{weekday:'long'});
  return (
    <TodoHeadBlock>
      <h1>{ dateString }</h1>
      <div className="day">{dayName}</div>
      <div className="task-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
