import React from 'react';

import { SelectSingleContext } from './SelectSingleContext';
import { SelectSingleContextValue } from './types';

/** Hook to access the [[SelectSingleContext]]. */
export function useSelectSingle(): SelectSingleContextValue {
  const context = React.useContext(SelectSingleContext);
  if (!context) {
    throw new Error(
      'useSelectSingle must be used within a SelectSingleProvider'
    );
  }
  return context;
}
