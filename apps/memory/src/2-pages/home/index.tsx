import { Button } from '@ui-kit';
import StartNewGame from '~/memory/features/start-new-game';
import MainMenu from '~/memory/widgets/main-menu';

export default async function Index() {
  return (
    <>
      <MainMenu>
        <StartNewGame />
        <Button color="green" size="sm">
          Play with friend
        </Button>
      </MainMenu>
    </>
  );
}
