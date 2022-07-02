import Link from 'next/link';

function NavPageButton({ text, href }: { text: string, href: string }) {
  return (
    <Link href={href}>
      <p data-testid={`${text}-nav-page-button`}>{ text }</p>
    </Link>
  );
}

export default NavPageButton;
