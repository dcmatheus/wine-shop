import Link from 'next/link';
import ProfileIcon from 'images/user.svg';
import Image from 'next/image';
import { DefaultButton } from 'styles';

function ProfileButton() {
  return (
    <DefaultButton type="button">
      <Link href="/perfil">
        <Image src={ProfileIcon} alt="Perfil" data-testid="profile-button" />
      </Link>
    </DefaultButton>
  );
}

export default ProfileButton;
