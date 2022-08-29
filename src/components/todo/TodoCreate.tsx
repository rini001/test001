import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import styled from "styled-components";
const ModalWrapper = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100% ;
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
 
`;
const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 10px;
  border: 1px solid #888;
  width: 30%; 
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  input {
    width: 70%;
    height: 120px;
  }
  .btn1{
    background-color: black;
    color:white;
    border:0px;
    width:20%;
    height: 50px;
    font-size: large;
  }
`;
interface Props {
  open: boolean;
  setOpen: any;
}
export const TodoCreate: React.FC<Props> = ({ open, setOpen }) => {
  const [value, setvalue] = useState("");

  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    setvalue(event.target.value);
  };
  const addNewTodo = () => {
    dispatch(addTodo(value));
    setOpen(!open)
    setvalue("");
  };

  if (!open) return null;
  return (
    <ModalWrapper>
      <ModalContent>
        <div style={{display:"flex",justifyContent:"right",alignItems:"right", width:"100%"}}>
          <button onClick={() => setOpen(!open)}>X</button>
        </div>
        <input type="text" value={value} onChange={handleChange} placeholder="Start Typing..." />
        <button className="btn1" onClick={addNewTodo} >
         SAVE
        </button>
      </ModalContent>
    </ModalWrapper>
  );
};
