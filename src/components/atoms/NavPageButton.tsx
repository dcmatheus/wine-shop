import Link from 'next/link';
import { NavButton } from 'styles';
import { useRouter } from 'next/router';

function NavPageButton({ text, href }: { text: string, href: string }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <NavButton select={router.pathname === href} type="button" data-testid={`${text}-nav-page-button`}>{ text }</NavButton>
    </Link>
  );
}

export default NavPageButton;
