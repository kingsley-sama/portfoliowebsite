import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
const HorizontalScroll = ({ direction = 'right', speed = 0.1 }) => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    let animationFrameId;

    const startScrolling = () => {
      if (!isHovering) {
        if (direction === 'right') {
          scrollAmount += speed;
          if (scrollAmount >= 50) {
            scrollAmount = 0;
          }
        } else {
          scrollAmount -= speed;
          if (scrollAmount <= -50) {
            scrollAmount = 0;
          }
        }
        scrollContainer.style.transform = `translate3d(${-scrollAmount}%, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(startScrolling);
    };

    startScrolling();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed, isHovering]);

  // Image data array containing all images
  const imageData = [
    { src: "/img/pythonista.jpeg", alt: "python" },
    { src: "/img/morereact.png", alt: "react" },
    { src: "/img/cforweb.png", alt: "c" },
    { src: "/img/git.png", alt: "git" },
    { src: "/img/noded.png", alt: "node" },
    { src: "/img/django.png", alt: "django" },
    { src: "/img/emacsy.png", alt: "lisp" },
    { src: "/img/sql.png", alt: "sql" },
    { src: "/img/puppet.jpg", alt: "puppet" },
    { src: "/img/nginx.png", alt: "nginx" },
    { src: "/img/pytho_flask.png", alt: "flask" },
    { src: "/img/atlacian.png", alt: "atlacian" },
    { src: "/img/slack.jpg", alt: "slack" },
    { src: "/img/discord.jpeg", alt: "discord" },
  ];

  // Double the image array to create a seamless loop
  const doubledImageData = [...imageData, ...imageData];

  return (
    <div 
      className="scroll-container" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={scrollContainerRef} className="scroll-content">
        <div className="header78_image-list">
          {doubledImageData.map((image, index) => (
            <div key={index} className="header78_image-wrapper">
              <img src={image.src} alt={image.alt} className="header78_image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

gsap.registerPlugin(ScrollTrigger);
const TechStacks = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const techLists = container.querySelectorAll('.tech-stack-list');
    
    // Set initial states
    gsap.set(techLists, { y: -60, opacity: 0 });
    techLists.forEach(list => {
      const listItems = list.querySelectorAll('.tech-stack-item');
      const heading = list.querySelector('.tech-stacks-subheading');
      gsap.set([heading, ...listItems], { y: -60, opacity: 0 });
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top 60%",
      onEnter: () => {
        // First animate the ULs
        gsap.to(techLists, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1, // Delay between each UL
          onComplete: () => {
            // Then animate the children of each UL
            techLists.forEach((list, index) => {
              const listItems = list.querySelectorAll('.tech-stack-item');
              const heading = list.querySelector('.tech-stacks-subheading');
              
              gsap.to(heading, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                delay: 0.1 // Small delay after UL animation
              });
              
              gsap.to(listItems, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.05,
                delay: 0.2 // Delay after heading animation
              });
            });
          }
        });
      },
      onLeaveBack: () => {
        // Reverse animation when scrolling up
        techLists.forEach(list => {
          const listItems = list.querySelectorAll('.tech-stack-item');
          const heading = list.querySelector('.tech-stacks-subheading');
          
          gsap.to([heading, ...listItems], {
            y: -60,
            opacity: 0,
            duration: 1,
            ease: "power4.in"
          });
        });
        
        gsap.to(techLists, {
          y: -60,
          opacity: 0,
          duration: 1,
          ease: "power4.in",
          stagger: 0.1
        });
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <h2 className="tech-stacks-heading">Tech Stacks</h2>
      <div className="tech-stacks-wrapper">
        {/* Frontend/UI */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Frontend/UI</h3>
          <li className="tech-stack-item">React.js</li>
          <li className="tech-stack-item">TypeScript</li>
          <li className="tech-stack-item">CSS/Sass</li>
          <li className="tech-stack-item">Tailwind CSS</li>
          <li className="tech-stack-item">Framer Motion</li>
        </ul>
        {/* Backend */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Backend</h3>
          <li className="tech-stack-item">Node.js</li>
          <li className="tech-stack-item">Express.js</li>
          <li className="tech-stack-item">MongoDB</li>
          <li className="tech-stack-item">Flask</li>
          <li className="tech-stack-item">PostgreSQL</li>
        </ul>
        {/* Deployment */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Deployment</h3>
          <li className="tech-stack-item">Docker</li>
          <li className="tech-stack-item">Jenkins</li>
          <li className="tech-stack-item">Nginx</li>
          <li className="tech-stack-item">GitHub Actions</li>
          <li className="tech-stack-item">AWS</li>
        </ul>
        {/* System Design */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">System Design</h3>
          <li className="tech-stack-item">Microservices</li>
          <li className="tech-stack-item">REST APIs</li>
          <li className="tech-stack-item">GraphQL</li>
          <li className="tech-stack-item">Load Balancing</li>
          <li className="tech-stack-item">Event-Driven Architecture</li>
        </ul>
      </div>
    </div>
  );}
const echStacks = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const techLists = container.querySelectorAll('.tech-stack-list');
    
    techLists.forEach((list) => {
      const listItems = list.querySelectorAll('.tech-stack-item');
      const heading = list.querySelector('.tech-stacks-subheading');
      
      gsap.set([heading, ...listItems], { y: -60, opacity: 0 });
      
      ScrollTrigger.create({
        trigger: list,
        start: "top 80%",
        onEnter: () => {
          gsap.to(heading, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
          });
          
          gsap.to(listItems, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.05
          });
        },
        onLeaveBack: () => {
          gsap.to([heading, ...listItems], {
            y: -60,
            opacity: 0,
            duration: 1,
            ease: "power4.in"
          });
        }
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <h2 className="tech-stacks-heading">Tech Stacks</h2>
      <div className="tech-stacks-wrapper">
        {/* Frontend/UI */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Frontend/UI</h3>
          <li className="tech-stack-item">React.js</li>
          <li className="tech-stack-item">TypeScript</li>
          <li className="tech-stack-item">CSS/Sass</li>
          <li className="tech-stack-item">Tailwind CSS</li>
          <li className="tech-stack-item">Framer Motion</li>
        </ul>
        {/* Backend */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Backend</h3>
          <li className="tech-stack-item">Node.js</li>
          <li className="tech-stack-item">Express.js</li>
          <li className="tech-stack-item">MongoDB</li>
          <li className="tech-stack-item">Flask</li>
          <li className="tech-stack-item">PostgreSQL</li>
        </ul>
        {/* Deployment */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">Deployment</h3>
          <li className="tech-stack-item">Docker</li>
          <li className="tech-stack-item">Jenkins</li>
          <li className="tech-stack-item">Nginx</li>
          <li className="tech-stack-item">GitHub Actions</li>
          <li className="tech-stack-item">AWS</li>
        </ul>
        {/* System Design */}
        <ul className="tech-stack-list">
          <h3 className="tech-stacks-subheading">System Design</h3>
          <li className="tech-stack-item">Microservices</li>
          <li className="tech-stack-item">REST APIs</li>
          <li className="tech-stack-item">GraphQL</li>
          <li className="tech-stack-item">Load Balancing</li>
          <li className="tech-stack-item">Event-Driven Architecture</li>
        </ul>
      </div>
    </div>
  );
};


// gsap.registerPlugin(ScrollTrigger);

// const TechStacks = () => {
//   const containerRef = useRef(null);
//   const stackRefs = useRef([]);
  
//   useEffect(() => {
//     const container = containerRef.current;
//     const stackLists = stackRefs.current;
    
//     gsap.set(stackLists, { y: 50, opacity: 0 });
    
//     stackLists.forEach((stack, index) => {
//       gsap.to(stack, {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: stack,
//           start: "top 80%",
//           toggleActions: "play none none reverse"
//         },
//         delay: index * 0.2
//       });
//     });
    
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !stackRefs.current.includes(el)) {
//       stackRefs.current.push(el);
//     }
//   };

//   return (
//     <div ref={containerRef}>
//       <h2 className="tech-stacks-heading">Tech Stacks</h2>
//       <div className="tech-stacks-wrapper">
//         {/* Frontend/UI */}
//         <ul ref={addToRefs} className="tech-stack-list">
//           <h3 className="tech-stacks-subheading">Frontend/UI</h3>
//           <li className="tech-stack-item">React.js</li>
//           <li className="tech-stack-item">TypeScript</li>
//           <li className="tech-stack-item">CSS/Sass</li>
//           <li className="tech-stack-item">Tailwind CSS</li>
//           <li className="tech-stack-item">Framer Motion</li>
//         </ul>
//         {/* Backend */}
//         <ul ref={addToRefs} className="tech-stack-list">
//           <h3 className="tech-stacks-subheading">Backend</h3>
//           <li className="tech-stack-item">Node.js</li>
//           <li className="tech-stack-item">Express.js</li>
//           <li className="tech-stack-item">MongoDB</li>
//           <li className="tech-stack-item">Flask</li>
//           <li className="tech-stack-item">PostgreSQL</li>
//         </ul>
//         {/* Deployment */}
//         <ul ref={addToRefs} className="tech-stack-list">
//           <h3 className="tech-stacks-subheading">Deployment</h3>
//           <li className="tech-stack-item">Docker</li>
//           <li className="tech-stack-item">Jenkins</li>
//           <li className="tech-stack-item">Nginx</li>
//           <li className="tech-stack-item">GitHub Actions</li>
//           <li className="tech-stack-item">AWS</li>
//         </ul>
//         {/* System Design */}
//         <ul ref={addToRefs} className="tech-stack-list">
//           <h3 className="tech-stacks-subheading">System Design</h3>
//           <li className="tech-stack-item">Microservices</li>
//           <li className="tech-stack-item">REST APIs</li>
//           <li className="tech-stack-item">GraphQL</li>
//           <li className="tech-stack-item">Load Balancing</li>
//           <li className="tech-stack-item">Event-Driven Architecture</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export {TechStacks};
