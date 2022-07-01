import wineLogo from 'images/wine-logo.svg';

function WineLogo() {
  return (
    <object
      data={wineLogo}
      type="image/svg+xml"
    >
      Wine
    </object>
  );
}

export default WineLogo;
