import React from 'react';
import { Computer, Envelope, Globe } from './icons';
import Shop from './shop';

const Content = () => (
  <td className="classic-content">
    {/* ABOUT */}
    <a name="about" />
    <p className="classic-body">
      Hi there!! My name is Nate and this is my homepage. I am a software
      engineer and I like to build things.
    </p>
    <h2 className="classic-section-title classic-section-title--navy">
      <Computer size={20} /> About Me
    </h2>
    <table className="classic-about-table">
      <tbody>
        <tr>
          <td>
            <b>
              <u>Name:</u>
            </b>{' '}
            Nate Harris
            <br />
            <b>
              <u>Location:</u>
            </b>{' '}
            Pennsylvania
            <br />
            <b>
              <u>Occupation:</u>
            </b>{' '}
            <span className="classic-color-orange">
              <i>Software Engineer</i>
            </span>
            <br />
            <b>
              <u>Hobbies:</u>
            </b>{' '}
            Coding, Carpentry, Vans, Being a Dad
            <br />
            <b>
              <u>Favorite Color:</u>
            </b>{' '}
            <span className="classic-color-green">Green</span>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />

    {/* LINKS */}
    <a name="links" />
    <h2 className="classic-section-title classic-section-title--purple">
      <Globe size={20} /> ~*~ My Links ~*~
    </h2>
    <ul className="classic-links">
      <li>
        <a
          href="https://github.com/youngmanalive"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>My GitHub</b>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nathanharris-sf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>LinkedIn</b>
        </a>
      </li>
      <li>
        <Envelope size={16} />{' '}
        <a href="mailto:nathanharris.sf@gmail.com">
          <b>Email Me!</b>
        </a>
      </li>
    </ul>

    <hr />

    {/* SHOP */}
    <Shop />
  </td>
);

export default Content;
