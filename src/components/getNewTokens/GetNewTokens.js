import React from 'react'

export default function GetNewTokens() {
    function handleClick() {
      window.localStorage.removeItem('token')
      window.location.href = "http://localhost:3000/";
    }
  return (
    <div>
       Token has expired
       <button onClick={handleClick}>Get new Token</button>
    </div>
  )
}
