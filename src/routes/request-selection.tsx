import { fr } from '@codegouvfr/react-dsfr';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/request-selection')({
  component: RequestSelection,
});

function RequestSelection() {
  const [value, setValue] = useState<'one' | 'two' | 'three' | undefined>(
    undefined,
  );

  const onRequestSelected = (newValue: 'one' | 'two' | 'three' | undefined) => {
    setValue(newValue);
  };

  return (
    <div className={fr.cx('fr-mt-8v', 'fr-mb-8v')}>
      <h2 className={fr.cx('fr-toggle--border-bottom')}>
        {' '}
        Quel est le motif de votre demande ?{' '}
      </h2>
      <RadioButtons
        legend="Choisissez un motif"
        options={[
          {
            label: "Je demande la fabrication d'un titre de permis de conduire",
            hintText: 'Texte de description additionnel',
            nativeInputProps: {
              checked: value === 'one',
              onChange: () => onRequestSelected('one'),
            },
          },
          {
            label:
              "Je demande la modification d'un titre de permis de conduire",
            hintText: 'Texte de description additionnel',

            nativeInputProps: {
              checked: value === 'two',
              onChange: () => onRequestSelected('two'),
            },
          },
          {
            label:
              "Je demande la perte, le vol ou la détérioration d'un titre de permis de conduire",
            hintText: 'Texte de description additionnel',

            nativeInputProps: {
              checked: value === 'three',
              onChange: () => onRequestSelected('three'),
            },
          },
        ]}
      />
    </div>
  );
}
