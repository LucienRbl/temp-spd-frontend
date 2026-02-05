import { fr, type FrIconClassName } from '@codegouvfr/react-dsfr';
import { Button as DsfrButton } from '@codegouvfr/react-dsfr/Button';
import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header';
import { useState } from 'react';

export default function Header() {
  const [userInfo] = useState({
    name: 'John Doe',
    isVerified: true,
    code: '12 345 678',
  });

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
        title: '',
        'aria-label': 'France titre - Agence nationale des titres sécurisés',
      }}
      operatorLogo={{
        alt: 'Accueil - France titre - Agence nationale des titres sécurisés',
        imgUrl: 'src/assets/media/Logo_France_Titres.svg',
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
          )}
          style={{
            fontWeight: 500,
            color: fr.colors.decisions.text.default.grey.default,
            borderLeft: `1px solid #E5E5E5`,
            paddingLeft: '1rem',
          }}
        >
          Compte n° {userInfo.code}
        </span>,
        <DsfrButton
          linkProps={{ href: 'https://moncompte.ants.gouv.fr/mon_espace' }}
          priority="tertiary"
        >
          Mon compte
        </DsfrButton>,
      ]}
    />
  );
}
