import { fr } from '@codegouvfr/react-dsfr';
import { Button as DsfrButton } from '@codegouvfr/react-dsfr/Button';
import { Stepper as DsfrStepper } from '@codegouvfr/react-dsfr/Stepper';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import StepFixture from '@/components/StepFixture';

export const Route = createFileRoute('/form')({
  component: Form,
});

function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [triggerValidation, setTriggerValidation] = useState(false);

  const handleNextStep = () => {
    setTriggerValidation(true);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const onValidated = (isValid: boolean) => {
    setTriggerValidation(false); // reset trigger
    if (isValid) setCurrentStep((prev) => prev + 1);
    else console.warn('Validation failed!');
  };

  const stepComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepFixture
            triggerValidation={triggerValidation}
            onValidated={onValidated}
          />
        );
      default:
        return <p>Contenu de l’étape {currentStep} ...</p>;
    }
  };

  return (
    <div className={fr.cx('fr-px-25v', 'fr-mt-10v')}>
      <div
        className={fr.cx(
          'fr-px-3v',
          'fr-py-1v',
          'fr-mb-4v',
          'fr-text--sm',
          'fr-text--regular',
        )}
        style={{
          width: 'fit-content',
          backgroundColor:
            fr.colors.decisions.background.contrast.purpleGlycine.default,
          color: fr.colors.decisions.text.actionHigh.purpleGlycine.default,
        }}
      >
        {' '}
        Titre de la démarche en cours présent sur chacune des pages
      </div>
      <DsfrStepper
        currentStep={currentStep}
        nextTitle={`Étape ${currentStep + 1}`}
        stepCount={7}
        title={`Étape ${currentStep}`}
        className="fr-mb-1Ov"
      />
      <div className={fr.cx('fr-mb-4w', 'fr-px-25v')}>
        <DsfrButton
          onClick={handlePreviousStep}
          iconId="fr-icon-arrow-left-line"
          iconPosition="left"
          priority="tertiary no outline"
          className="previous-button"
        >
          Précédent
        </DsfrButton>
        {stepComponent()}
        {currentStep < 7 ? (
          <DsfrButton
            onClick={handleNextStep}
            iconId="fr-icon-arrow-right-line"
            iconPosition="right"
            className={fr.cx('fr-mt-8v')}
          >
            Étape Suivante
          </DsfrButton>
        ) : null}
      </div>
    </div>
  );
}
