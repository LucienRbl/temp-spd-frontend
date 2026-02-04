import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';
import { Link, RouterProvider, createRouter } from '@tanstack/react-router';
import type { LinkProps } from '@tanstack/react-router';
import { StrictMode } from 'react';
import type { JSX } from 'react';
import ReactDOM from 'react-dom/client';

import { routeTree } from './routeTree.gen';
import './styles.css';

startReactDsfr({ defaultColorScheme: 'system', Link });

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: (props: LinkProps) => JSX.Element;
  }
}

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
