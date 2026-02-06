import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import FormStepper from './FormStepper';

describe('FormStepper', () => {
  describe('GIVEN the FormStepper is rendered', () => {
    it('THEN it should display the stepper at step 1', () => {
      // GIVEN
      render(<FormStepper />);

      // THEN
      expect(
        screen.getByRole('heading', { name: /^Étape 1/, level: 2 }),
      ).toBeInTheDocument();
      expect(screen.getByText('Étape 2')).toBeInTheDocument();
    });

    it('THEN it should display the previous and next buttons', () => {
      // GIVEN
      render(<FormStepper />);

      // THEN
      expect(
        screen.getByRole('button', { name: 'Précédent' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Étape Suivante' }),
      ).toBeInTheDocument();
    });

    it('THEN it should display the step 1 content', () => {
      // GIVEN
      render(<FormStepper />);

      // THEN
      expect(screen.getByRole('group')).toBeInTheDocument();
      expect(
        screen.getByRole('radio', { name: 'Label radio' }),
      ).toBeInTheDocument();
    });
  });

  describe('GIVEN the user is on step 1', () => {
    describe('WHEN the user clicks on "Étape Suivante" without selecting an option', () => {
      it('THEN it should display a validation error', async () => {
        // GIVEN
        const user = userEvent.setup();
        render(<FormStepper />);

        // WHEN
        await user.click(
          screen.getByRole('button', { name: 'Étape Suivante' }),
        );

        // THEN
        expect(
          screen.getByText('Veuillez sélectionner une option'),
        ).toBeInTheDocument();
      });

      it('THEN it should remain on step 1', async () => {
        // GIVEN
        const user = userEvent.setup();
        render(<FormStepper />);

        // WHEN
        await user.click(
          screen.getByRole('button', { name: 'Étape Suivante' }),
        );

        // THEN
        expect(
          screen.getByRole('heading', { name: 'Étape 1', level: 1 }),
        ).toBeInTheDocument();
      });
    });

    describe('WHEN the user selects a radio option and clicks "Étape Suivante"', () => {
      it('THEN it should advance to step 2', async () => {
        // GIVEN
        const user = userEvent.setup();
        render(<FormStepper />);

        // WHEN
        await user.click(screen.getByRole('radio', { name: 'Label radio' }));
        await user.click(
          screen.getByRole('button', { name: 'Étape Suivante' }),
        );

        // THEN
        expect(
          // The step title also includes the step number, so we use a regex to match it
          screen.getByRole('heading', { name: /^Étape 2/, level: 2 }),
        ).toBeInTheDocument();
      });
    });

    describe('WHEN the user clicks on "Précédent"', () => {
      it('THEN it should stay on step 1 (cannot go below step 1)', async () => {
        // GIVEN
        const user = userEvent.setup();
        render(<FormStepper />);

        // WHEN
        await user.click(screen.getByRole('button', { name: 'Précédent' }));

        // THEN
        expect(
          screen.getByRole('heading', { name: 'Étape 1', level: 1 }),
        ).toBeInTheDocument();
      });
    });
  });

  describe('GIVEN the user is on step 2', () => {
    describe('WHEN the user clicks on "Précédent"', () => {
      it('THEN it should go back to step 1', async () => {
        // GIVEN
        const user = userEvent.setup();
        render(<FormStepper />);

        // Advance to step 2
        await user.click(screen.getByRole('radio', { name: 'Label radio' }));
        await user.click(
          screen.getByRole('button', { name: 'Étape Suivante' }),
        );
        expect(
          // The step title also includes the step number, so we use a regex to match it
          screen.getByRole('heading', { name: /^Étape 2/, level: 2 }),
        ).toBeInTheDocument();

        // WHEN
        await user.click(screen.getByRole('button', { name: 'Précédent' }));
        // THEN
        expect(
          screen.getByRole('heading', { name: 'Étape 1', level: 1 }),
        ).toBeInTheDocument();
      });
    });
  });
});
