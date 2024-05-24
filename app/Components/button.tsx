
import React from 'react';
import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  text: string;

}

const Button: React.FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} >
        {text}
    </Link>
  );
};

export default Button;