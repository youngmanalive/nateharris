import React from 'react';

const Section = ({ title, children }) => (
  <section>
    {title && <h3>{title}</h3>}
    {children}
  </section>
);

export default Section;
