import Logo from '../images/chi-logo.svg';

export default function Header() {
  return (
    <header>
      <a href='/'>
        <img className='logo' src={Logo} alt='Cameron Home Inspection Logo' />
      </a>
    </header>
  );
}
