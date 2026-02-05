import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer as DsfrFooter } from '@codegouvfr/react-dsfr/Footer';

const URL_MON_COMPTE_ANTS = import.meta.env.VITE_URL_MON_COMPTE_ANTS;

export default function Footer() {
  return (
    <footer id="fr-footer" className="fr-footer" role="contentinfo">
      <FooterLinkList />
      <DsfrFooter
        id="fr-footer-inner"
        accessibility="fully compliant"
        brandTop={
          <>
            RÉPUBLIQUE
            <br />
            FRANÇAISE
          </>
        }
        homeLinkProps={{
          title: 'Accueil ANTS',
          href: `${URL_MON_COMPTE_ANTS}/mon_espace`,
          'aria-label': 'France titre - Agence nationale des titres sécurisés',
        }}
        bottomItems={[headerFooterDisplayItem]}
        contentDescription={
          <>
            Ce site est édité par{' '}
            <a href="https://ants.gouv.fr/" target="_blank" rel="noreferrer">
              France Titres
            </a>
          </>
        }
        operatorLogo={{
          alt: 'Accueil - France titre - Agence nationale des titres sécurisés',
          imgUrl: '/src/assets/media/Logo_France_Titres.svg',
          orientation: 'horizontal',
        }}
        accessibilityLinkProps={{
          href: 'https://ants.gouv.fr/accessibilite-des-demarches-en-ligne-et-des-applications-mobiles',
          'aria-label':
            "En savoir plus sur l'accessibilité des démarches en ligne et des applications mobiles",
        }}
      />
    </footer>
  );
}

const linkListData = [
  {
    categoryName: "Besoin d'aide pour cette démarche en ligne ?",
    links: [
      {
        href: 'https://immatriculation.ants.gouv.fr/services-et-formulaires/carte-des-points-numeriques',
        'aria-label':
          'Trouver la France Services ou le point numérique le plus proche de chez vous - ouvre une nouvelle fenêtre',
        text: 'Trouver la France Services ou le point numérique le plus proche de chez vous',
      },
      {
        href: 'https://autoecole.ants.gouv.fr/aide-et-contact',
        'aria-label':
          "Consulter notre Foire Aux Questions (FAQ) ou contacter l'ANTS - ouvre une nouvelle fenêtre",
        text: "Consulter notre Foire Aux Questions (FAQ) ou contacter l'ANTS",
      },
      {
        href: 'https://autoecole.ants.gouv.fr/lexique',
        'aria-label':
          'Consulter notre lexique « permis de conduire » - ouvre une nouvelle fenêtre',
        text: 'Consulter notre lexique « permis de conduire »',
      },
    ],
  },
  {
    categoryName: "Besoin d'information ?",
    links: [
      {
        href: 'https://permisdeconduire.ants.gouv.fr/',
        'aria-label':
          "Toute l'information sur les démarches de permis de conduire - ouvre une nouvelle fenêtre",
        text: "Toute l'information sur les démarches de permis de conduire",
      },
      {
        href: 'https://autoecole.ants.gouv.fr/',
        'aria-label':
          "Toute l'information dédiée aux professionnels des auto écoles et CSSR - ouvre une nouvelle fenêtre",
        text: "Toute l'information dédiée aux professionnels des auto écoles et CSSR",
      },
    ],
  },
];

function FooterLinkList() {
  return (
    <div className="fr-footer__top">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters">
          {linkListData.map((column, columnIndex) => (
            <div
              key={`fr-footer__top-cat-${columnIndex}`}
              className="fr-col-12 fr-col-sm-6"
            >
              <h2 className="fr-footer__top-cat">{column.categoryName}</h2>
              <ul className="fr-footer__top-list">
                {column.links.map((link, linkIndex) => (
                  <li key={`fr-footer__top-link-${linkIndex}`}>
                    <a
                      className="fr-footer__top-link"
                      href={link.href}
                      aria-label={link['aria-label']}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
