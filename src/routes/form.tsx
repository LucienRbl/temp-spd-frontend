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

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 7));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const stepComponent = () => {
    switch (currentStep) {
      case 1:
        return <StepFixture />;
      default:
        return <p>Contenu de l’étape {currentStep} ...</p>;
    }
  };

  return (
    <div className={fr.cx('fr-px-25v')}>
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
        <h1 className="fr-mt-6v">Étape {currentStep}</h1>
        {stepComponent()}
        {currentStep < 7 ? (
          <DsfrButton
            onClick={handleNextStep}
            iconId="fr-icon-arrow-right-line"
            iconPosition="right"
          >
            Étape Suivante
          </DsfrButton>
        ) : null}
      </div>
    </div>
  );
}
