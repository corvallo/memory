'use client';

import { I18nextProvider } from 'react-i18next';
import { Resource, createInstance } from 'i18next';
import initTranslations from 'apps/memory/i18n';
import { PropsWithChildren } from 'react';

export interface TranslationsProviderProps extends PropsWithChildren {
  locale: string;
  namespaces: string[];
  resources: Resource;
}
const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
  locale,
  namespaces,
  resources,
  children,
}) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
export default TranslationsProvider;
