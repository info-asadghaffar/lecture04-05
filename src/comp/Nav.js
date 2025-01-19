import React from 'react'

function Nav({name,age}) {
  return (
    <div>
        This is NavBar
        <h3 style={{background:"black",color:"white"}}>Your Name is {name} and Your Age is {age}</h3>
    </div>
  )
}

export default Nav;