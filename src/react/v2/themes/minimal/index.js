import React from 'react';
import { useApp } from '../../context';

const _trackEvent = (eventName, properties = {}) => {
  window.gtag?.('event', eventName, properties);
};

const MAIL = ['com', 'il.', '.sf@gma', 'harris', 'nathan'].reverse().join('');

const Link = ({ children, ...props }) => (
  <a className="action" target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const Section = ({ title, children }) => (
  <section>
    {title && <h3>{title}</h3>}
    {children}
  </section>
);

const Minimal = () => {
  const { visible } = useApp();

  return (
    <div className="minimal">
      <div className="app-inner">
        <header>
          <h1>nate harris</h1>
          <h2>software engineer</h2>
        </header>
        <main>
          <Section title="about">
            <p>
              i am a software engineer based in pennsylvania. i build and
              maintain web applications, focusing on product-facing experiences
              and feature architecture.
            </p>
          </Section>
          <Section title="work">
            <p>
              i primarily work in react and modern frontend systems, building
              fast, reliable, and accessible interfaces. i collaborate closely
              with product and design to shape and deliver features from idea to
              production across the stack.
            </p>
          </Section>
          <Section title="info">
            <ul>
              <li>
                <Link href="https://github.com/youngmanalive">github</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/nathanharris-sf/">
                  linkedin
                </Link>
              </li>
              {visible && (
                <li>
                  <Link href={`mailto:${MAIL}`}>{MAIL}</Link>
                </li>
              )}
            </ul>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default Minimal;
