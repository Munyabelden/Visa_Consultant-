import React, { useState } from 'react';
import Footer from './Footer';
import './styles/PermResidance.css';
import SpouseIcon from './images/Spouse.png';
import WorkIcon from './images/work.png';
import RefugeeIcon from './images/Refugees.png';
import BusinessIcon from './images/Business_icon.png';
import FinanceIcon from './images/finance.png';
import RelativeIcon from './images/Relative.png';
import RetirementIcon from './images/retirement.png';

const categories = [
  { id: 1, name: 'Spouse', icon: SpouseIcon, description: 'Permanent residency for spouses of South African citizens or permanent residents.' },
  { id: 2, name: 'Work', icon: WorkIcon, description: 'Permanent residency for individuals with work opportunities in South Africa.' },
  { id: 3, name: 'Relative', icon: RelativeIcon, description: 'For relatives of South African citizens or permanent residents.' },
  { id: 4, name: 'Retirement', icon: RetirementIcon, description: 'Permanent residency for retirees who want to settle in South Africa.' },
  { id: 5, name: 'Business', icon: BusinessIcon, description: 'For individuals seeking to establish or invest in a business in South Africa.' },
  { id: 6, name: 'Finance', icon: FinanceIcon, description: 'For individuals with sufficient financial resources to live in South Africa.' },
  { id: 7, name: 'Refugee', icon: RefugeeIcon, description: 'For individuals seeking permanent residency under refugee status.' }
];

const PermResidance = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (id) => {
    if (activeCategory === id) {
      setActiveCategory(null);
    } else {
      setActiveCategory(id);
    }
  };

  return (
    <>
    <div className="perm-residance-container">
      <h2>South African Permanent Resident Categories</h2>
      <p>
        Applying for permanent residency in South Africa entitles a foreigner to stay and reside in South Africa 
        and undertake a specified activity according to which category the permanent residency permit is issued under. 
        To be granted privileges of this nature requires navigating the correct legal channels and can become complicated at times.
      </p>
      <p>
        Gain peace of mind and dramatically increase your permit application success rate by letting SAvisas.com, 
        a division of immigration specialists Le Roux Attorney’s, handle your permit application while you sit back and relax.
      </p>
      <p>
        To start, simply select the permit option most applicable for your proposed stay from the options below 
        and complete our online permit application form. One of our qualified immigration lawyers will personally 
        handle your case.
      </p>

      <div className="categories-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleClick(category.id)}
          >
            <div className="icon-wrapper">
              <img src={category.icon} alt={`${category.name} icon`} loading="lazy" />
            </div>
            <h3>{category.name}</h3>
            <div className="description">
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PermResidance;
