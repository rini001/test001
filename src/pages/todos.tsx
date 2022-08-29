import React, { useState } from "react";
import { TodoCreate } from "../components/todo/TodoCreate";
import { TodoList } from "../components/todo/TodoList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  .btn {
    background-color: black;
    color: white;
    border: none;
    font-size: 30px;
    padding: 20px 40px;
    cursor: pointer;
    transform: all 0.3s;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .btn:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -5px;
    left: -5px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transition: all 0.25s;
  }
  .btn:hover:before,
  button:hover:after {
    width: 104%;
    height: 110%;
  }
  .btn:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    transition: all 0.3s;
  }
`;
interface Props {
  text: string;
  open: boolean;
  setOpen: any;
}
const Todos: React.FC<Props> = ({ text, open, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const todo = useSelector((state: RootState) => state.todo.todo);
  // console.log(todo);
  return (
    <Wrapper>
      {text}
      <button className="btn" onClick={() => setIsOpen(true)}>
        CREATE TASK
      </button>
      <TodoCreate open={isOpen} setOpen={setIsOpen} />
      <TodoList />
      <h1>Pending Task : {todo.length}</h1>
    </Wrapper>
  );
};
export default Todos;
