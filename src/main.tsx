import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';
import { Link, RouterProvider, createRouter } from '@tanstack/react-router';
import type { LinkProps } from '@tanstack/react-router';
import { StrictMode } from 'react';
import type { JSX } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import { routeTree } from './routeTree.gen';

startReactDsfr({ defaultColorScheme: 'system', Link });

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: (props: LinkProps) => JSX.Element;
  }
}

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
