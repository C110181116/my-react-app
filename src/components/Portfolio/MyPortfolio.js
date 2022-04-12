import React from 'react'
import './Portfolio.css'
import {Link} from 'react-router-dom'

function MyPortfolio() {
  return (
    <div className="portfolio-container">
        <header>My Portfolio</header>
        <div className="link-container">
            <Link to="/LoginForm">
                <input type="button" value="LoginForm"/>
            </Link>
            <a className="portfolio-link" href='http://localhost:3000/TodoList'>
                <input type="button" value="TodoList"/>
            </a>
            <a className="portfolio-link" href='http://localhost:3000/Calculator'>
                <input type="button" value="Calculator"/>
            </a>
            <a className="portfolio-link" href='http://localhost:3000/ImgUpload'>
                <input type="button" value="ImgUpload"/>
            </a>
        </div>
    </div>
  )
}

export default MyPortfolio