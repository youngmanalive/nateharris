import React, { useEffect, useState } from 'react';

const CodeSandbox = ({ src, title, id }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading />}
      <iframe
        hidden={loading}
        className="codesandbox"
        onLoad={() => setLoading(false)}
        title={title || id}
        src={src}
      />
    </>
  );
};

export default CodeSandbox;

const Loading = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      <i>loading codesandbox{'.'.repeat(dots)}</i>
    </p>
  );
};
