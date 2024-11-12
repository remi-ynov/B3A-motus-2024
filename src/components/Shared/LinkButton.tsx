import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    to: string;
    label: string;
}

const LinkButton: React.FC<Props> = ({ to, label }) => {
  return (
    <Link to={to} className="bg-blue-700 p-4 rounded-md text-white text-center">
        {label}
    </Link>
  );
};

export default LinkButton;
