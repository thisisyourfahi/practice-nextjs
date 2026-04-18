'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = <>
    <li><Link className={`${pathname === '/users' ? 'text-primary' : ''}`} href={'/users'}>Users</Link></li>
    <li><Link className={`${pathname === '/posts' ? 'text-primary' : ''}`} href={'/posts'}>Posts</Link></li>
    <li><Link className={`${pathname === '/comments' ? 'text-primary' : ''}`} href={'/comments'}>Comments</Link></li>
  </>

  return (
    <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <Link href={'/'}>
            <button className="btn btn-ghost text-xl">Home</button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <input type="text" placeholder="Search" className="input input-bordered w-64 lg:w-auto" />
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;