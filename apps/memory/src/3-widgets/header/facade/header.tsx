import { Button } from '@ui-kit';

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center gap-2 h-12 md:h-16 shadow px-6 ">
      {/** TODO: LOGO */}
      {/** TODO: NAV */}
      <Button color="blue" size="sm">
        Inizia a giocare
      </Button>
    </header>
  );
};
export default Header;
