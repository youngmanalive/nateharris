import React from 'react';

const SKILLS = {
  languages: {
    headClass: 'classic-skills-head--blue',
    rows: [
      { name: 'JavaScript', filled: 5, note: 'HOT!!!', hot: true, blink: true },
      { name: 'TypeScript', filled: 5, note: 'HOT!!!', hot: true, blink: true },
      { name: 'Python', filled: 4, note: 'very good' },
      { name: 'PHP', filled: 3, note: 'it pays the bills' },
      { name: 'HTML / CSS', filled: 5, note: '(see this page)', italic: true },
    ],
  },
  frameworks: {
    headClass: 'classic-skills-head--green',
    rows: [
      { name: 'React', filled: 5, note: 'HOT!!!', hot: true, blink: true },
      { name: 'Django', filled: 4, note: 'very good' },
      { name: 'Laravel', filled: 3, note: 'knows my way around' },
      { name: 'MobX', filled: 4, note: 'observable everything' },
      { name: 'GraphQL', filled: 3, note: 'queries and mutations' },
    ],
  },
  tools: {
    headClass: 'classic-skills-head--orange',
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
    <span className="classic-bar-filled">{BLOCK.repeat(filled)}</span>
    {filled < 5 && (
      <span className="classic-bar-empty">{BLOCK.repeat(5 - filled)}</span>
    )}
  </>
);

const SkillNote = ({ row }) => {
  const className = row.hot ? 'classic-hot' : undefined;
  const blinkClass = row.blink ? 'classic-blink' : '';
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
  <table className="classic-skills-table">
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

export { SKILLS };
export default SkillsTable;
