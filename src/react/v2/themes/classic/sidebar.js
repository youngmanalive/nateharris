import React from 'react';
import { Computer, Floppy, Cone } from './icons';

const MIDI_BUTTONS = ['|<', '<<', '>', '||', '>>', '>|'];

const Sidebar = () => (
  <td className="classic-sidebar">
    <div style={{ textAlign: 'center', marginBottom: 8 }}>
      <Computer size={32} />
    </div>

    <b className="classic-sidebar-heading">
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
    <a href="#shop">Skill Shop</a>
    <br />
    <br />

    <hr />

    <div className="classic-sidebar-section">
      <div className="classic-blink classic-blink--offset">
        <Cone size={30} />
        <Cone size={40} />
        <Cone size={30} />
      </div>
      <br />
      <div className="classic-under-construction">
        <b>UNDER CONSTRUCTION!</b>
      </div>
      <div className="classic-under-construction-note">Check back soon!</div>
    </div>

    <hr />

    <div className="classic-ad">
      <div className="classic-ad-label">- advertisement -</div>
      <div className="classic-ad-headline classic-blink">
        *** YOU WON!!! ***
      </div>
      <div className="classic-ad-body">
        You are the <b>1,000,000th</b>
        <br />
        visitor to this page!!
      </div>
      <div className="classic-ad-button">
        CLICK HERE to
        <br />
        claim your FREE
        <br />
        eBook!!!
      </div>
      <div className="classic-ad-disclaimer">no credit card required*</div>
    </div>

    <hr />

    <div style={{ textAlign: 'center' }}>
      <Floppy size={28} />
      <br />
      <span className="classic-favorites">
        Save this page
        <br />
        to your favorites!
      </span>
    </div>

    <hr />

    <div className="classic-midi">
      <div className="classic-midi-label">
        <b>Now Playing:</b>
      </div>
      <div className="classic-midi-display">engineering_mix_pt_3.mid</div>
      <div className="classic-midi-controls">
        {MIDI_BUTTONS.map((label) => (
          <div key={label} className="classic-midi-btn">
            {label}
          </div>
        ))}
      </div>
      <div className="classic-midi-volume">Vol: [||||||||&middot;&middot;]</div>
    </div>

    <hr />
  </td>
);

export default Sidebar;
