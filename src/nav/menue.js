import React, { useState } from 'react';
import "./menue.css"
import { Link, useNavigate } from 'react-router-dom';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import alx_logo from "./Untitled.png"
import unilag_logo from './uilaglogo.png'
import { Menu } from '@mui/icons-material';
const DropDownMenu = () => {
  return (
    <div className="dropdown__wrapper">
      <div className="dropdown">
        <ul className="list-items-with-description">
          <li>
            <div className="item-title">
              <h3>Previews</h3>
              <p>Zero config, more innovation</p>
            </div>
          </li>
          <li>
            <div className="item-title">
              <h3>Infrastructure</h3>
              <p>Always fast always online</p>
            </div>
          </li>
          <li>
            <div className="item-title">
              <h3>Next js</h3>
              <p>The native Next.js platform</p>
            </div>
          </li>
          <li>
            <div className="item-title">
              <h3>Edge Functions</h3>
              <p>Dynamic pages, static speed</p>
            </div>

          </li>
          <li>
            <div className="item-title">
              <h3>Analytics</h3>
              <p>Real-time insights, peak performance</p>
            </div>
          </li>
          <li>
            <div className="item-title">
              <h3>Storage</h3>
              <p>Serverless storage for frontend</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Menue_Bar = ({toggle}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };
  const set_style = () => {
    const style = { fontSize: '30px', fontWeight: 'bold', transition: "0.5s ease-in", color: 'grey' }
    {/*if (toggle) { return (<ClearTwoToneIcon style={style} />) } else { null }*/}
  }
  const image_style = {
    width: '50px',
    height: '40px',
    objectFit: 'contain'
  }
  const resources = [
    {
      img: null,
      link: '/',
      name: 'Home',
      classname: 'li',
      id: 1
    },
    {
      img: '/img/Screenshot_from_2022-10-09_12-35-09-removebg-preview.png',
      link: '/articles',
      name: 'Articles',
      classname: 'li',
      id: 2
    },
    {
      img: '/img/doge-removebg-preview.png',
      link: '/#projects',
      name: 'Projects',
      classname: 'li',
      id: 3
    },
    {
      img: '/milo-removebg-preview.png',
      link: '/services',
      name: 'Services',
      classname: 'li',
      id: 4
    },
    {
      img: '/milo-removebg-preview.png',
      link: '/about',
      name: 'About Me',
      classname: 'li',
      id: 5
    },
  ]
  const menu_size = () => {
    return (
      true ?
        { height: '80vh', position: "fixed", top: '0', width: '100vw', minWidth: "320px" } :
        { height: '0', position: 'fixed', width: '100vw' }
    )
  }
  return (
    <>
      <div className='menuebar_alt'  >
        <div className='logos'>
          <img src={alx_logo} alt={alx_logo}></img>
          <img src={unilag_logo} alt={unilag_logo}></img>

        </div>
        <ul>
          {
            resources.map((rec) => {
              return (
                <li key={rec.id}><a className={rec.classname} key={rec.id} href={rec.link}>
                  {rec.name}
                </a></li>
              )
            })
          }
        </ul>

      </div>

      <div id='small_menuebar'  >

        <div>
          <div onClick={toggleNavbar} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.3)', background: 'transparent' }}>
            <Menu toggled={isOpen} toggle={setOpen}  />
          </div>
          <div className={`dropdown${navbarActive ? ' open' : ''}`}>

            <ul className='dropdown_ul'>
              {
                resources.map((rec) => {
                  return (
                    <li key={rec.id}><Link className={rec.classname} key={rec.id} to={rec.link}>
                      {rec.name}
                    </Link></li>
                  )
                })
              }
            </ul>
            <div>
              <img src={alx_logo} alt={alx_logo}></img>
              <img src={unilag_logo} alt={unilag_logo}></img>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}
export { Menue_Bar }
