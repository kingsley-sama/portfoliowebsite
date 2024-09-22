import React from 'react';
import "./style.css"

const ProjectItem = ({ data }) => {
    return (
        <div className="project-item-unique">
            <div className="project-item-unique__header">
                <span className="project-item-unique__number">02 | ODERASBM.COM</span>
              <div className="project-item-unique__icon"></div>
            </div>
            <div className="project-item-unique__content">
                <div className="project-item-unique__image">
                </div>
                <div className="project-item-unique__details">
                    <h2 className="project-item-unique__title"><div className="project-item-unique__icon"></div> PARTY RENTALS</h2>
                    <p className="project-item-unique__description">
                        USER CENTERED BOOKING PLATFORM<br />
                        WRITTEN WITH REACTJS, FASTAPI,<br />
                        PYTHON, MYSQL.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className='grid'>
      <div className='one'></div>
      <div className='two'></div>
      <div className='three'></div>
      <div className='four'></div>
    </div>
  );
};

export { ProductCard };
