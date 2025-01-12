import React, {Context, useContext} from "react";

export const ProviderContainer = {
    ///place for provider el
}

//For classes components with Consumer
export type DIContainerType = typeof ProviderContainer;
export const DIContext = React.createContext<Partial<DIContainerType>>(ProviderContainer);

//For functionality component
export const useInjection = (): DIContainerType => {
    return useContext(DIContext) as DIContainerType;
};