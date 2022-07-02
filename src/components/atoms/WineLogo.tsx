import Image from 'next/image';
import wineLogo from 'images/wine-logo.svg';

function WineLogo() {
  return (
    <Image src={wineLogo} alt="Wine" />
  );
}

export default WineLogo;
