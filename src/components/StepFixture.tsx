import { RadioButtons as DsfrRadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import { useEffect, useState } from 'react';
type Props = {
  triggerValidation: boolean;
  onValidated: (isValid: boolean) => void;
};

export default function StepFixture({ triggerValidation, onValidated }: Props) {
  const [value, setValue] = useState<1 | 2 | 3 | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (triggerValidation) {
      if (value) {
        setError(null);
        onValidated(true);
      } else {
        setError('Veuillez sélectionner une option');
        onValidated(false);
      }
    }
  }, [value, triggerValidation, onValidated]);

  return (
    <div>
      <h1 className="fr-mt-6v">Étape 1</h1>
      <DsfrRadioButtons
        legend="Légende pour l’ensemble de champs"
        name="radio"
        options={[
          {
            label: 'Label radio',
            nativeInputProps: {
              value: 1,
              checked: value === 1,
              onChange: () => setValue(1),
            },
          },
          {
            label: 'Label radio 2',
            nativeInputProps: {
              value: 2,
              checked: value === 2,
              onChange: () => setValue(2),
            },
          },
          {
            label: 'Label radio 3',
            nativeInputProps: {
              value: 3,
              checked: value === 3,
              onChange: () => setValue(3),
            },
          },
        ]}
        state={error ? 'error' : 'default'}
        stateRelatedMessage={error ?? undefined}
      />
    </div>
  );
}
