import Link from 'next/link'
import React from 'react'
import styled from "styled-components"
const NavigationWrapper=styled.nav`
display:flex;
width:100%;
column-gap:10px;
justify-content:center;
align-items:center;
background-color:black;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
h3{
  color:white;
  cursor:pointer;
}
`
export const Navbar = () => {
  return (
    <NavigationWrapper>
      <Link href='/'>
    <h3>Home</h3>
   </Link>
   <Link href='./counter'>
    <h3>Counter</h3>
   </Link>
   <Link href='./todos'>
   <h3>Todo</h3>
   </Link>
  </NavigationWrapper>
  )
}
