import Image from 'next/image';
import wineLogo from 'images/wine-logo.svg';
import { DefaultButton } from 'styles';
import Link from 'next/link';

function WineLogo() {
  return (
    <DefaultButton>
      <Link href="/">
        <span>
          <Image src={wineLogo} alt="Wine" data-testid="logo" />
        </span>
      </Link>
    </DefaultButton>
  );
}

export default WineLogo;
