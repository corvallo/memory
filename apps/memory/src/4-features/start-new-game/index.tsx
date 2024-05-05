import { Button } from '@ui-kit';
import { useServerTranslation } from 'apps/memory/i18n';
import Link from 'next/link';

const StartNewGame: React.FC = async () => {
  const { t } = await useServerTranslation('common');
  return (
    <Link href="/game">
      <Button color="blue" size="lg">
        {t('start')}
      </Button>
    </Link>
  );
};
export default StartNewGame;
