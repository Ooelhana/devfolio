import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCertificates = ({ certificates }) => {
  if (!certificates.length) return null;

  return (
    <Section title="Certificates">
      {certificates.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionCertificates;
