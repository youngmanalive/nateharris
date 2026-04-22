import React from 'react';
import { Computer, Floppy, Envelope, Cone, Globe, StarClip } from './icons';

const MIDI_BUTTONS = ['|<', '<<', '>', '||', '>>', '>|'];

const SKILLS = {
  languages: {
    headClass: 'retro-skills-head--blue',
    rows: [
      { name: 'JavaScript', filled: 5, note: 'HOT!!!', hot: true, blink: true },
      { name: 'TypeScript', filled: 5, note: 'HOT!!!', hot: true, blink: true },
      { name: 'Python', filled: 4, note: 'very good' },
      { name: 'PHP', filled: 3, note: 'it pays the bills' },
      { name: 'HTML / CSS', filled: 5, note: '(see this page)', italic: true },
    ],
  },
  frameworks: {
    headClass: 'retro-skills-head--green',
    rows: [
      { name: 'React', filled: 5, note: 'HOT!!!', hot: true, blink: true },
      { name: 'Django', filled: 4, note: 'very good' },
      { name: 'Laravel', filled: 3, note: 'knows my way around' },
      { name: 'MobX', filled: 4, note: 'observable everything' },
      { name: 'GraphQL', filled: 3, note: 'queries and mutations' },
    ],
  },
  tools: {
    headClass: 'retro-skills-head--orange',
    rows: [
      { name: 'Webpack', filled: 4, note: 'custom plugins and everything' },
      { name: 'Node.js', filled: 4, note: 'full stack baby' },
      { name: 'Git', filled: 5, note: 'rebase with confidence' },
      { name: 'Canvas API', filled: 4, note: 'made a paint app' },
      { name: 'Table-Based Layouts', filled: 5, note: 'obviously', bold: true },
    ],
  },
};

const BLOCK = '\u2588';

const SkillBar = ({ filled }) => (
  <>
    <span className="retro-bar-filled">{BLOCK.repeat(filled)}</span>
    {filled < 5 && (
      <span className="retro-bar-empty">{BLOCK.repeat(5 - filled)}</span>
    )}
  </>
);

const SkillNote = ({ row }) => {
  const className = row.hot ? 'retro-hot' : undefined;
  const blinkClass = row.blink ? 'retro-blink' : '';
  const content = row.italic ? (
    <i>{row.note}</i>
  ) : row.bold ? (
    <b>{row.note}</b>
  ) : (
    row.note
  );

  return (
    <td className={blinkClass}>
      {className ? <span className={className}>{content}</span> : content}
    </td>
  );
};

const SkillsTable = ({ headClass, rows }) => (
  <table className="retro-skills-table">
    <thead className={headClass}>
      <tr>
        <th>Skill</th>
        <th>Level</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.name}>
          <td>{row.name}</td>
          <td>
            <SkillBar filled={row.filled} />
          </td>
          <SkillNote row={row} />
        </tr>
      ))}
    </tbody>
  </table>
);

const THOUGHTS = [
  {
    date: '3/15/2026',
    text: `Finally got around to updating this page. I know I said I would do it
      months ago but I have been really busy with work and stuff. Anyway check out
      the new layout!! Pretty cool right? I figured out how to use tables for columns.`,
  },
  {
    date: '3/01/2026',
    text: 'Been thinking about getting another van. My wife says no but I think she will come around.',
    link: {
      href: 'mailto:nathanharris.sf@gmail.com',
      text: 'email me',
      after: ' if you have any good van leads.',
    },
  },
  {
    date: '2/14/2026',
    text: 'Happy Valentines Day to everyone out there on the World Wide Web!! Remember to tell someone you appreciate them today.',
  },
  {
    date: '1/01/2026',
    text: 'Happy New Year!!! This is going to be my year. I can feel it. New years resolution: update my website more often. Starting... now.',
  },
];

const Sidebar = () => (
  <td className="retro-sidebar">
    <div style={{ textAlign: 'center', marginBottom: 8 }}>
      <Computer size={32} />
    </div>

    <b className="retro-sidebar-heading">
      <u>Navigation</u>
    </b>
    <br />
    <br />
    {'>> '}
    <a href="#about">About Me</a>
    <br />
    {'>> '}
    <a href="#links">My Links</a>
    <br />
    {'>> '}
    <a href="#skills">My Skills</a>
    <br />
    {'>> '}
    <a href="#thoughts">Thoughts</a>
    <br />
    <br />

    <hr />

    <div className="retro-sidebar-section">
      <Cone size={24} />
      <br />
      <div className="retro-under-construction">
        <b>UNDER CONSTRUCTION!</b>
      </div>
      <div className="retro-under-construction-note">Check back soon!</div>
    </div>

    <hr />

    <div className="retro-ad">
      <div className="retro-ad-label">- advertisement -</div>
      <div className="retro-ad-headline retro-blink">*** YOU WON!!! ***</div>
      <div className="retro-ad-body">
        You are the <b>1,000,000th</b>
        <br />
        visitor to this page!!
      </div>
      <div className="retro-ad-button">
        CLICK HERE to
        <br />
        claim your FREE
        <br />
        eBook!!!
      </div>
      <div className="retro-ad-disclaimer">no credit card required*</div>
    </div>

    <hr />

    <div style={{ textAlign: 'center' }}>
      <Floppy size={28} />
      <br />
      <span className="retro-favorites">
        Save this page
        <br />
        to your favorites!
      </span>
    </div>

    <hr />

    <div className="retro-midi">
      <div className="retro-midi-label">
        <b>Now Playing:</b>
      </div>
      <div className="retro-midi-display">engineering_mix_pt_3.mid</div>
      <div className="retro-midi-controls">
        {MIDI_BUTTONS.map((label) => (
          <div key={label} className="retro-midi-btn">
            {label}
          </div>
        ))}
      </div>
      <div className="retro-midi-volume">Vol: [||||||||&middot;&middot;]</div>
    </div>

    <hr />
  </td>
);

const Content = () => (
  <td className="retro-content">
    {/* ABOUT */}
    <a name="about" />
    <h2 className="retro-section-title retro-section-title--navy">
      <Computer size={20} /> About Me
    </h2>
    <table className="retro-about-table">
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
            <span className="retro-color-orange">
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
            <span className="retro-color-green">Green</span>
          </td>
        </tr>
      </tbody>
    </table>

    <p className="retro-body">
      Hi there!! My name is Nate and this is my homepage. I am a software
      engineer and I like to build things. I live in Pennsylvania with my
      family. When I am not writing code I am probably working on something in
      the garage or thinking about vans.
    </p>
    <p className="retro-body">I have been working with web tech since 2018.</p>

    <hr />

    {/* LINKS */}
    <a name="links" />
    <h2 className="retro-section-title retro-section-title--purple">
      <Globe size={20} /> ~*~ My Links ~*~
    </h2>
    <ul className="retro-links">
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

    {/* SKILLS */}
    <a name="skills" />
    <h2 className="retro-section-title retro-section-title--maroon">
      <Floppy size={20} /> What I Know
    </h2>
    <p className="retro-skills-subtitle">
      Building stuff for the web since 2018
    </p>

    <b className="retro-skills-category">
      <u>Languages</u>
    </b>
    <SkillsTable {...SKILLS.languages} />

    <b className="retro-skills-category">
      <u>Frameworks &amp; Libraries</u>
    </b>
    <SkillsTable {...SKILLS.frameworks} />

    <b className="retro-skills-category">
      <u>Tools &amp; Other</u>
    </b>
    <SkillsTable {...SKILLS.tools} />

    <hr />

    {/* THOUGHTS */}
    <a name="thoughts" />
    <h2 className="retro-section-title retro-section-title--teal">
      <StarClip size={20} /> Thoughts &amp; Updates
    </h2>
    {THOUGHTS.map((entry) => (
      <p key={entry.date} className="retro-body">
        <span className="retro-entry-date">{entry.date}</span>
        {' - '}
        {entry.text}
        {entry.link && (
          <>
            {' '}
            <a href={entry.link.href}>{entry.link.text}</a>
            {entry.link.after}
          </>
        )}
      </p>
    ))}
  </td>
);

const Retro = () => (
  <div className="retro">
    {/* HEADER */}
    <table className="retro-header" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="retro-header-icon">
            <Computer size={48} />
            <br />
            <Floppy size={36} />
          </td>
          <td style={{ textAlign: 'center' }}>
            <h1>NATE HARRIS</h1>
            <div className="retro-header-subtitle">
              <b>
                <i>{'~~~ SENIOR SOFTWARE ENGINEER ~~~'}</i>
              </b>
            </div>
          </td>
          <td className="retro-header-icon">
            <Computer size={48} />
            <br />
            <Floppy size={36} />
          </td>
        </tr>
      </tbody>
    </table>

    <div className="retro-marquee retro-header-welcome">
      <div className="retro-marquee-text">
        {'~*~*~*~ '}Welcome to my <i>NEW</i> website!!!{' ~*~*~*~ '}
        Enjoy your stay!{' ~*~*~*~'}
      </div>
    </div>

    <hr />

    {/* MAIN LAYOUT */}
    <table className="retro-layout" cellPadding="8" cellSpacing="0">
      <tbody>
        <tr>
          <Sidebar />
          <Content />
        </tr>
      </tbody>
    </table>

    <hr />

    {/* FOOTER */}
    <div className="retro-marquee">
      <div className="retro-marquee-text retro-marquee-text--reverse retro-footer-copyright">
        {' ~ '}Copyright &copy; 2026 Nate Harris. All Rights Reserved.{' ~ '}
      </div>
    </div>

    <br />

    <div>
      <span className="retro-rainbow-badge">
        Powered by Harris Technologies
      </span>
    </div>

    <br />

    <div className="retro-footer-ornament">
      *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
    </div>
  </div>
);

export default Retro;
