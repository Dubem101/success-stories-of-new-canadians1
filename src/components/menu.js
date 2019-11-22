import React from 'react'
import { Link } from "gatsby"

const Menu = () => (
    <div style = {{
        paddingTop: '10px',
        background: 'f4f4f4',
    }}>
    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
    }}>
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stories/">Stories</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/subscribe/">Subscribe</Link></li>
        <li><Link to="/">Contact</Link></li>
    </ul>

    </div>
)

export default Menu;
