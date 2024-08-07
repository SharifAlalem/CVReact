import { ReactElement } from 'react';

export interface ArrayOfSteps {
  id: number;
  icon: ReactElement;
  active: boolean;
}

export interface StepsContext {
  steps: ArrayOfSteps[],
  setSteps: Function
}
