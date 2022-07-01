import Link from 'next/link';

function NavPageButton({ text, href }: { text: string, href: string }) {
  return (
    <Link href={href}>
      { text }
    </Link>
  );
}

export default NavPageButton;
