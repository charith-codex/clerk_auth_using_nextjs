import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-cyan-950 rounded-b-xl">
      <div className="flex justify-between py-4 px-6">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className='flex items-center'>
          <Link href="/client">
            <li>Client Page</li>
          </Link>
        </div>
        <div className='flex gap-6 items-center'>
          <Link href="/sign-in">
            <li>Sign In</li>
          </Link>
          <Link href="/sign-up">
            <li>Sign Up</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
