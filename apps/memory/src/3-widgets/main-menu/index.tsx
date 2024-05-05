import { PropsWithChildren } from 'react';
import Container from './ui/container';

const MainMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      MainMenu
      {children}
    </Container>
  );
};
export default MainMenu;
