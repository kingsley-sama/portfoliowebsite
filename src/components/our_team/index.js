import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MessageIcon from '@mui/icons-material/Message';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css'; // Import your CSS file

const Profile = ({image}) => {
    return (
        <div className="profile-wrapper">
            <div className="profile">
                <div className="profile-image">
                    <img
                      src={`/img/${image}`}
                        alt="Profile"
                    />
                </div>
                <ul className="social-icons">
                    <li>
                        <a href="#instagram" title="Instagram">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#twitter" title="Twitter">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#threads" title="Threads">
                            <MessageIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#linkedin" title="Linkedin">
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
                <div className="profile-name">
                    <h2>Melissa Taylor</h2>
                    <div className="profile-bio">
                        I'm a JavaScript full-stack engineer,
                        love working with <em>React</em> and <em>Node.js</em>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
