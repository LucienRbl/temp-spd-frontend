import { TanStackDevtools } from '@tanstack/react-devtools';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { userInfoFixture } from '@/main';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header userInfo={userInfoFixture} />
      <div className="fr-container">
        <Outlet />
      </div>
      <Footer />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
});
