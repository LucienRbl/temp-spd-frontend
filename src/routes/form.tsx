import { createFileRoute } from '@tanstack/react-router';

import FormStepper from '@/components/FormStepper';

export const Route = createFileRoute('/form')({
  component: FormStepper,
});
