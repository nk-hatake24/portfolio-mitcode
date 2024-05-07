import React from 'react'
import { Link}  from "react-router-dom";

import Menu from "../component/Menu"

function NoPages() {
  return (
    <div style={{background: '#222', height: '100vh', alignItems: 'center', justifyContent:' center'}}>
      <h2>404 pages not found</h2>
      <p> <Link to="/">go to home</Link></p>
    </div>
  )
}

export default NoPages