import { ReactElement } from 'react';

export type ArrayOfSteps = {
  id: number;
  icon: ReactElement;
  active: boolean;
}

export type StepsContext = {
  steps: ArrayOfSteps[],
  setSteps: Function
}

export type FloatingIcons = {
  icon:  ReactElement;
}
