import { fr, type FrIconClassName } from '@codegouvfr/react-dsfr';
import { Button as DsfrButton } from '@codegouvfr/react-dsfr/Button';
import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import { useState } from 'react';

const URL_ANTS = import.meta.env.VITE_URL_ANTS;

export default function Header() {
  const [userInfo] = useState({
    name: 'Lorraine HIPSEAUME',
    isVerified: true,
    code: '12 345 678',
  });

  const { isDark } = useIsDark();

  return (
    <DsfrHeader
      brandTop={
        <>
          RÉPUBLIQUE
          <br />
          FRANÇAISE
        </>
      }
      homeLinkProps={{
        href: 'https://moncompte.ants.gouv.fr/mon_espace',
        target: '_self',
        title: '',
        'aria-label': 'France titre - Agence nationale des titres sécurisés',
      }}
      operatorLogo={{
        alt: 'Accueil - France titre - Agence nationale des titres sécurisés',
        imgUrl: isDark
          ? 'src/assets/media/Logo_France_Titres_dark.svg'
          : 'src/assets/media/Logo_France_Titres.svg',
        orientation: 'horizontal',
      }}
      quickAccessItems={[
        {
          iconId: userInfo.isVerified
            ? ('fr-icon-ants-verified' as FrIconClassName)
            : 'fr-icon-user-fill',
          linkProps: { className: fr.cx('fr-btn--icon-right'), to: '/' },
          text: userInfo.name,
        },
        <span
          key="user-code"
          className={fr.cx(
            'fr-mt-1v',
            'fr-mb-1v',
            'fr-mr-2v',
            'fr-ml-0',
            'fr-text--sm',
            'fr-text--bold',
            'fr-pl-2w',
          )}
          style={{
            color: fr.colors.decisions.text.default.grey.default,
            borderLeft: `1px solid ${fr.colors.decisions.border.default.grey.default}`,
          }}
        >
          Compte n° {userInfo.code}
        </span>,
        <DsfrButton
          linkProps={{
            href: `${URL_ANTS}/mon_espace`,
            target: '_self',
          }}
          priority="tertiary"
        >
          Mon compte
        </DsfrButton>,
      ]}
    />
  );
}
