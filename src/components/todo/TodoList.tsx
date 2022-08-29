import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styled from "styled-components"
const ListWrapper=styled.div`
overflow-y: scroll;
display: grid;
grid-template-columns: 30% 30% 30%;
grid-template-rows: 100px 100px 100px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
margin-top: 50px;
width: 60%;
height: 500px;
justify-content: space-between;
align-items: center;
column-gap: 20px;
row-gap: 30px;
padding: 10px;
.div1{
  background-color: black;
  color: white;
  text-align: center;
}
`
export const TodoList = () => {
  const todo = useSelector((state: RootState) => state.todo.todo);

  return (

    <ListWrapper>
      {todo.map((todo, i) => (
        <div key={i} className="div1">
          <h3 >{todo}</h3>
        </div>
      ))}
      
    </ListWrapper>
   
  );
};
