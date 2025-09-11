import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import WelcomeSection from '../../components/common/WelcomeSection';
import AboutSection from '../../components/common/AboutSection';
import EducationSection from '../../components/common/EducationSection';
import TechStackSection from '../../components/common/TechStackSection';

const Home = () => {
  useDocumentTitle("Josh Chau");

  return (
    <>
      <Helmet>
        <title>Josh Chau</title>
        <meta name="description" content="Josh Chau personal website home page." />
      </Helmet>
      
      <div fluid>
        <WelcomeSection />
        <AboutSection />
        <EducationSection />
        <TechStackSection />
      </div>
    </>
  );
};

export default Home;
