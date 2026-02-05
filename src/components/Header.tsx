import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header';

export default function Header() {
  return (
    <DsfrHeader
      brandTop="République Française"
      homeLinkProps={{ to: '/', title: 'Accueil ANTS' }}
      operatorLogo={{
        alt: '[TO DO] Logo de france titre',
        imgUrl: 'static/media/placeholder.16x9.3d46f94c.png',
        orientation: 'horizontal',
      }}
      quickAccessItems={[
        {
          iconId: 'fr-icon-home-4-line',
          linkProps: { to: '/' },
          text: 'Accueil',
        },
      ]}
      navigation={[
        {
          linkProps: {
            to: '/request-selection',
          },
          text: 'Nouvelle demande',
        },
        {
          isActive: true,
          linkProps: {
            href: '#',
            target: '_self',
          },
          text: 'accès direct',
        },
        {
          linkProps: {
            href: '#',
            target: '_self',
          },
          text: 'accès direct',
        },
        {
          linkProps: {
            href: '#',
            target: '_self',
          },
          text: 'accès direct',
        },
      ]}
    />
  );
}
