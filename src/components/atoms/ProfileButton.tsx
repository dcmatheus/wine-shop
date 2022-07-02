import Link from 'next/link';
import ProfileIcon from 'images/user.svg';
import Image from 'next/image';

function ProfileButton() {
  return (
    <Link href="/user">
      <Image src={ProfileIcon} alt="Perfil" />
    </Link>
  );
}

export default ProfileButton;
