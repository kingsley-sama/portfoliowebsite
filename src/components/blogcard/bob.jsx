import React from 'react';
import "./bob.css";
import ALX_cert from './images/17-short-specializations-certificate-kingsley-okpo.png';
import GIT_cert from './images/admin-river-image__1_.png'

const ArticleSample =()=>{
    const certifications = [
      {
        name: "ALX Software Engineering",
        date: "15/11/2024",
        image: ALX_cert
      },
      {
        name: "GitHub Administration",
        date: "10/09/2024",
        image: GIT_cert
      }
    ]
    return (
      certifications.map(certificate => (
        <div className='article_parent' key={certificate.name}>
          <div className='article_banner' style={{ backgroundImage: `url(${certificate.image})` }}>
            <div id='overlay'>
              <button>View</button>
            </div>
          </div>
          <div className='article_text'>
            <p>{certificate.name}</p>
            <p>{certificate.date}</p>
          </div>
        </div>
      ))
    );
}

export default ArticleSample;
