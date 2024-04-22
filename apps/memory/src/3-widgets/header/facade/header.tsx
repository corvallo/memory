import { Button } from '@ui-kit';
import { useServerTranslation } from 'apps/memory/i18n';
import Test from '../ui/test';

const Header: React.FC<{ locale: string }> = async ({ locale }) => {
  const { t } = await useServerTranslation(locale);
  return (
    <header className="flex flex-row items-center gap-2 h-12 md:h-16 shadow px-6 ">
      {/** TODO: LOGO */}
      {/** TODO: NAV */}
      <Button color="blue" size="sm">
        {t('welcome')}
      </Button>
    </header>
  );
};
export default Header;
