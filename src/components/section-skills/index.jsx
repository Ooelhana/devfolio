import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionSkills = ({ skills }) => {
  if (!skills.length) return null;
  
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
