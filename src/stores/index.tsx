import { enableStaticRendering } from 'mobx-react';
import { createContext, useContext } from 'react';

import PokemonStore from './pokemonStore';
import ToastStore from './toastStore';

enableStaticRendering(typeof window === 'undefined');

let store: any = null;

const isServer = typeof window === 'undefined';

interface IContextProps {
  pokemonStore: PokemonStore;
  toastStore: ToastStore;
}

export const StoreContext = createContext<IContextProps>({} as IContextProps);

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
}

export const StoreProvider = ({ children, hydrationData }) => {
  const store = initializeStore(hydrationData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

function initializeStore(initialState: any = null) {
  if (isServer) {
    return {
      pokemonStore: new PokemonStore(),
      toastStore: new ToastStore(),
    };
  }

  if (store === null) {
    store = {
      pokemonStore: new PokemonStore(),
      toastStore: new ToastStore(),
    };
  }

  return store;
}
