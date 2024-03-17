import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Jarrett Delaney</h1>
      <nav>
        <ul>
          <li className={currentPage === 'About' ? 'navActive' : ''} onClick={() => handlePageChange('About')}>About Me</li>
          <li className={currentPage === 'Portfolio' ? 'navActive' : ''} onClick={() => handlePageChange('Portfolio')}>Portfolio</li>
          <li className={currentPage === 'Contact' ? 'navActive' : ''} onClick={() => handlePageChange('Contact')}>Contact</li>
          <li className={currentPage === 'Resume' ? 'navActive' : ''} onClick={() => handlePageChange('Resume')}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
