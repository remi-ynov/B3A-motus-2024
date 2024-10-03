import React from 'react';

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="text-5xl text-center my-12">
      { text }
    </h1>
  );
};

export default Title;
