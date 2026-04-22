import React from 'react';
import { Computer, Floppy } from './icons';
import Sidebar from './sidebar';
import Content from './content';

const LETTERS = 'NATE HARRIS';
const Nbsp = <>&nbsp;</>;
const Name = () => (
  <>
    {LETTERS.split('').map((letter, index) => (
      <span key={index}>{letter === ' ' ? Nbsp : letter}</span>
    ))}
  </>
);

const Classic = () => (
  <div className="classic">
    {/* HEADER */}
    <table className="classic-header" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="classic-header-icon">
            <Computer size={48} />
            <br />
            <Floppy size={36} />
          </td>
          <td style={{ textAlign: 'center' }}>
            <h1>
              <Name />
            </h1>
            <div className="classic-header-subtitle">
              <b>
                <i>{'~~~ SENIOR SOFTWARE ENGINEER ~~~'}</i>
              </b>
            </div>
          </td>
          <td className="classic-header-icon">
            <Computer size={48} />
            <br />
            <Floppy size={36} />
          </td>
        </tr>
      </tbody>
    </table>

    <div className="classic-marquee classic-header-welcome">
      <div className="classic-marquee-text">
        {'~*~*~*~ '}Welcome to my <i>NEW</i> website!!!{' ~*~*~*~ '}
        Enjoy your stay!{' ~*~*~*~'}
      </div>
    </div>

    <hr />

    {/* MAIN LAYOUT */}
    <table className="classic-layout" cellPadding="8" cellSpacing="0">
      <tbody>
        <tr>
          <Sidebar />
          <Content />
        </tr>
      </tbody>
    </table>

    <hr />

    {/* FOOTER */}
    <div className="classic-marquee">
      <div className="classic-marquee-text classic-marquee-text--reverse classic-footer-copyright">
        {' ~ '}Copyright &copy; 2026 Nate Harris. All Rights Reserved.{' ~ '}
      </div>
    </div>

    <br />

    <div>
      <span className="classic-rainbow-badge">Powered by HarrisTech</span>
    </div>

    <br />

    <div className="classic-footer-ornament">
      *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
    </div>
  </div>
);

export default Classic;
