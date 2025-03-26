import React from 'react'

const Header = () => {
  return (
    <header>
     <h1>Get Things Done!</h1>
    </header>
  )
}
 /** here we are using props concept in which we can access content from parent(app.js) to child(heading.js). here props acts like an object in which the content in header component in app.js is stored */
/*const Header = (props) => {
  return (
    <header>
     <h1>{props.title}</h1>
     <h6>{props.subtitle}</h6>
    </header>
  )
}*/


export default Header