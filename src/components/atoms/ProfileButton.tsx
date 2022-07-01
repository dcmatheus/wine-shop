import Link from 'next/link';
import ProfileIcon from 'images/user.svg';

function ProfileButton() {
  return (
    <Link href="/user">
      <object data={ProfileIcon} type="image/svg+xml">Perfil</object>
    </Link>
  );
}

export default ProfileButton;
