import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className="hidden lg:block">
      <div className="flex w-fit gap-10 mx-auto font-medium py-4 uppercase text-black">
        <Link className="relative nav_link" href="#">
          Home
        </Link>
        <Link className="relative nav_link" href="#">
          Men
        </Link>
        <Link className="relative nav_link" href="#">
          Women
        </Link>
        <Link className="relative nav_link" href="#">
          Kids
        </Link>
        <Link className="relative nav_link" href="#">
          Home & Living
        </Link>
        <Link className="relative nav_link" href="#">
          Electronics
        </Link>
        <Link className="relative nav_link" href="#">
          Beauty
        </Link>
      </div>
    </div>
  );
}

export default NavBar
