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
import LifePartnerIcon from './images/LifePartner.png';
import CrewIcon from './images/Crew.png';
import HealthcareIcon from './images/Healthcare.png';
import StudyIcon from './images/Study.png';
import CorporateIcon from './images/Corporate.png';
import VisitorsIcon from './images/Visitors.png';
import TreatyIcon from './images/Treaty.png';
import ExchangeIcon from './images/Exchange.png';
import VolunteerIcon from './images/Volunteer.png';

const categories = [
  { id: 1, name: 'Spouse Visa', icon: SpouseIcon, description: 'Temporary visa for spouses of South African citizens or residents.' },
  { id: 2, name: 'Work Visa', icon: WorkIcon, description: 'Temporary visa for individuals seeking employment in South Africa.' },
  { id: 3, name: 'Relative Visa', icon: RelativeIcon, description: 'Temporary visa for relatives of South African citizens or residents.' },
  { id: 4, name: 'Retirement Visa', icon: RetirementIcon, description: 'Temporary visa for retirees wishing to live in South Africa.' },
  { id: 5, name: 'Business Visa', icon: BusinessIcon, description: 'For those seeking to establish or invest in a business in South Africa.' },
  { id: 6, name: 'Finance Visa', icon: FinanceIcon, description: 'Temporary visa for individuals with sufficient financial resources.' },
  { id: 7, name: 'Refugee Visa', icon: RefugeeIcon, description: 'Temporary visa for individuals under refugee status.' },
  { id: 8, name: 'Life Partner Visa', icon: LifePartnerIcon, description: 'For life partners of South African citizens or residents.' },
  { id: 9, name: 'Crew Visa', icon: CrewIcon, description: 'Temporary visa for crew members working in South Africa.' },
  { id: 10, name: 'Healthcare Visa', icon: HealthcareIcon, description: 'For individuals seeking medical care in South Africa.' },
  { id: 11, name: 'Study Visa', icon: StudyIcon, description: 'Temporary visa for individuals studying in South Africa.' },
  { id: 12, name: 'Corporate Visa', icon: CorporateIcon, description: 'For corporations employing a number of foreign workers.' },
  { id: 13, name: 'Visitors Visa', icon: VisitorsIcon, description: 'Temporary visa for short visits to South Africa.' },
  { id: 14, name: 'Treaty Visa', icon: TreatyIcon, description: 'Visa for individuals under international treaties.' },
  { id: 15, name: 'Exchange Visa', icon: ExchangeIcon, description: 'Visa for participation in exchange programs.' },
  { id: 16, name: 'Volunteer Visa', icon: VolunteerIcon, description: 'Temporary visa for volunteers working in South Africa.' },
];

const TempVisa = () => {
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
      <div className="perm-residance-container"> {/* Reuse the same container styles */}
        <h2>South African Visa Categories</h2>
        <p>
          Applying for a temporary stay Visa can be a tough and stressful experience even for the most seasoned 
          of travellers, and with thousands of applications filed daily, your application may not always be the biggest priority.
        </p>
        <p>
          Gain peace of mind and dramatically increase your visa application success rate by letting SAvisas.com, 
          a division of immigration specialists Le Roux Attorney’s, handle your visa application while you sit back, relax, and focus on other travel arrangements.
        </p>
        <p>
          To start, simply select the visa option most applicable for your proposed stay from the options below 
          and complete our online visa application form. One of our qualified immigration lawyers will personally 
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
                <img src={category.icon} alt={`${category.name} icon`} />
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

export default TempVisa;
