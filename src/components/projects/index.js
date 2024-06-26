import React, { useState, useRef, useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './style.css'; // Import your CSS file

const Cards = () => {
    const bankAccountsRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
  
    useEffect(() => {
      const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - bankAccountsRef.current.offsetLeft);
        setStartY(e.pageY - bankAccountsRef.current.offsetTop);
        setScrollLeft(bankAccountsRef.current.scrollLeft);
        setScrollTop(bankAccountsRef.current.scrollTop);
        bankAccountsRef.current.style.cursor = 'grabbing';
      };
  
      const handleMouseLeave = () => {
        if (isDragging) {
          setIsDragging(false);
          bankAccountsRef.current.style.cursor = 'grab';
        }
      };
  
      const handleMouseUp = () => {
        if (isDragging) {
          setIsDragging(false);
          bankAccountsRef.current.style.cursor = 'grab';
        }
      };
  
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - bankAccountsRef.current.offsetLeft;
        const y = e.pageY - bankAccountsRef.current.offsetTop;
        const walkX = (x - startX) * 1;
        const walkY = (y - startY) * 1;
        bankAccountsRef.current.scrollLeft = scrollLeft - walkX;
        bankAccountsRef.current.scrollTop = scrollTop - walkY;
      };
  
      const currentRef = bankAccountsRef.current;
      if (currentRef) {
        currentRef.addEventListener('mousedown', handleMouseDown);
        currentRef.addEventListener('mouseleave', handleMouseLeave);
        currentRef.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
      }
  
      return () => {
        const currentRef = bankAccountsRef.current;
        if (currentRef) {
          currentRef.removeEventListener('mousedown', handleMouseDown);
          currentRef.removeEventListener('mouseleave', handleMouseLeave);
          currentRef.removeEventListener('mouseup', handleMouseUp);
        }
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [isDragging, startX, startY, scrollLeft, scrollTop]);
  
    useEffect(() => {
      const currentRef = bankAccountsRef.current;
      const handleWheel = (e) => {
      };
  
      if (currentRef) {
        currentRef.addEventListener('wheel', handleWheel);
  
        return () => {
          currentRef.removeEventListener('wheel', handleWheel);
        };
      }
    }, []);
  
    const handleScrollLeft = () => {
      bankAccountsRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth',
      });
    };
    return (
        <div id="bank-accounts" className="bank-accounts"  ref={bankAccountsRef}>
            <article className="card">
                <div className='card-background'>
                    <img src="/projects_images/Oderasbm.png" alt="oderasbm" />
                </div>
                <div className='content'>
                    <h1>Educational Learning Platform</h1>
                  <p>
                    Creating a SaaS for Oderasbm, an innovative Nigerian educational service, delivering excellent
                    learning experiences nationwide.
                        <a href="#" title="Squarespace">Oderasbm</a> 
                      
                    </p>
                </div>
                <div className="action-bottom-bar">
                    <a href="#">
                        View More information Here
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
            <article className="card">
                <div className='card-background'>
                    <img src="projects_images/odomirentals.png" alt="odomiterentals" />
                </div>
                <div className='content'>
                    <h1>Odomite Rentals</h1>
                  <p>
                    This top-performing U.S.-based e-commerce service excels in
                    managing client needs and orders. They boast a perfect 5-star rating on
                    Google, driven by their exceptional client onboarding process.
                     <a href="#" title="Squarespace">OdomiteRentals</a> 
                    </p>
                </div>
                <div className="action-bottom-bar">
                    <a href="#">
                        View Webste here
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
            <article className="card">
                <div className='card-background'>
                    <img src="projects_images/OrionShell.png" alt="orion shell" />
                </div>
                <div className='content'>
                    <h1>Orion Shell</h1>
                  <p>
                    I'm developing a custom Linux shell in C and have a functional build available on
                    GitHub. I'm seeking developers to contribute and help make this open-source project a success.
                    </p>
                </div>     
                <div className="action-bottom-bar">
                    <a href="#">
                        Get source code on Github
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
            <article className="card">
                <div className='card-background'>
                    <img src="projects_images/virtual_learn.png" alt="virtual_learn" />
                </div>
                <div className='content'>
                    <h1>Virtual Learn</h1>
                    <p>
                      An AI-powered React learning platform that enhances student learning and integrates a community for
                      content filtering.
                    </p>
                </div>
                <div className="action-bottom-bar">
                    <a href="#">
                      View The mvp here
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
        </div>
    );
};

export default Cards;
