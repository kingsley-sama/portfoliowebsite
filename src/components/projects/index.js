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
                    <img src="" alt="background" />
                </div>
                <div className='content'>
                    <h1>Use a pre-integrated platform</h1>
                    <p>
                        Explore our directory to find out-of-the-box 
                        solutions that connect with Stripe, such as 
                        <a href="#" title="Squarespace">Squarespace</a> 
                        and <a href="#" title="Lightspeed">Lightspeed</a>.
                    </p>
                </div>
                <div className="action-bottom-bar">
                    <a href="#">
                        Set Directory
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
            <article className="card">
                <div className='card-background'>
                    <img src="" alt="background" />
                </div>
                <div className='content'>
                    <h1>Use a pre-integrated platform</h1>
                    <p>
                        Explore our directory to find out-of-the-box 
                        solutions that connect with Stripe, such as 
                        <a href="#" title="Squarespace">Squarespace</a> 
                        and <a href="#" title="Lightspeed">Lightspeed</a>.
                    </p>
                </div>
                <div className="action-bottom-bar">
                    <a href="#">
                        Set Directory
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
            <article className="card">
                <div className='card-background'>
                    <img src="assets/card-2.png" alt="background" />
                </div>
                <div className='content'>
                    <h1>Build with Stripe-certified experts</h1>
                    <p>
                        Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.
                    </p>
                </div>     
                <div className="action-bottom-bar">
                    <a href="#">
                        Find Experts
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
            <article className="card">
                <div className='card-background'>
                    <img src="assets/card-3.png" alt="background" />
                </div>
                <div className='content'>
                    <h1>Try our no-code products</h1>
                    <p>
                        Create an <a href="#" title="Invoice">invoice</a> or share a <a href="#" title="Payment link">payment link</a> directly from your Dashboard to start generating revenue in minutes – no code required. 
                    </p>
                </div>
                <div className="action-bottom-bar">
                    <a href="#">
                        Explore no-code 
                        <ChevronRightIcon className="chevron" />
                        <ArrowForwardIcon className="arrow" />
                    </a>
                </div>
            </article>
        </div>
    );
};

export default Cards;
