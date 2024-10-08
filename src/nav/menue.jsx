import React, { useState } from 'react';
import "./menue.css";
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import {AnimatePresence, motion} from 'framer-motion'
import unilag_logo from './uilaglogo.png';

const Menue_Bar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };
  const closeNavbar = () => {
    setNavbarActive(false);
  };
  const resources = [
    { link: '/', name: 'Home', classname: 'li', id: 1 },
    { link: '/articles', name: 'Articles', classname: 'li', id: 2 },
    { link: '/#projects', name: 'Projects', classname: 'li', id: 3 },
    { link: '/services', name: 'Services', classname: 'li', id: 4 },
    { link: '/about', name: 'About Me', classname: 'li', id: 5 },
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    }
  };

  return (
    <>
      <div className='menuebar_alt'>
        <div className='logos'>
          <h1 className='kingsley'>Kingsley</h1>
        </div>
        <ul className="hover-box-list">
          {resources.map((rec) => (
            <li key={rec.id}>
              <Link className={rec.classname} to={rec.link}>
                {rec.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div id='small_menuebar'>
        <h1 className='kingsley'>Kingsley</h1>
        <motion.div 
          onClick={toggleNavbar} 
          className='menu-icon'
          whileTap={{ scale: 0.9 }}
        >
          <Menu />
        </motion.div>
      </div>
      <AnimatePresence>
        {navbarActive && (
          <motion.div 
            className="dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ display: navbarActive ? 'block' : 'none' }}
          >
            <motion.ul className='dropdown_ul'>
              {resources.map((rec) => (
                <motion.li key={rec.id} variants={itemVariants}>
                  <Link 
                    className={rec.classname} 
                    to={rec.link} 
                    onClick={closeNavbar}
                  >
                    {rec.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="dropdown-logo"
              variants={itemVariants}
            >
              <img src={unilag_logo} alt="Unilag Logo" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Menue_Bar };
