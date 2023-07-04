import { createContext, useContext } from "react";
import { ContextType } from "../types/Types";

export const Context = createContext<ContextType | null>(null)

export function useContextIsNull() {
    const context = useContext(Context)

    if(!context){
        throw new Error()
    }

    return context
}

