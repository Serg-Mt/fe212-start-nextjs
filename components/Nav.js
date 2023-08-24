import Link from 'next/link';
import css from './Nav.module.css';

const pages = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/users', name: 'Users' },
  { href: '/info', name: 'test FetchUser' },
  { href: '/table', name: 'users table' },
];

export default function Nav() {
  return <nav className={css.nav}>
    <ul>
      {pages.map(({ href, name }) => <li key={href}><Link href={href}>{name}</Link></li>)}
    </ul>
  </nav >;
}