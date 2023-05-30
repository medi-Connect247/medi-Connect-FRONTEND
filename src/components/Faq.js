import React, { useState } from 'react';
import "../pages/faq.css"

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3></h3>
        <span className={`icon ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{"we provide a lot of services for them"}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
