import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className='nav'>
            {/* add check to see if user is logged in if logged in display logout otherwise display login */}
            <li>
                <button href='#login'
                onClick={(handlePageChange('Login'))}
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}> Login
                </button>
            </li>
            <li>
                <a href='#logout'
                onClick={(handlePageChange('Logout'))}
                className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}> Logout
                </a>
            </li>
            <li>
                <a href='#home'
                onClick={(handlePageChange('Home'))}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}> Home
                </a>
            </li>
        </ul>
    )
}