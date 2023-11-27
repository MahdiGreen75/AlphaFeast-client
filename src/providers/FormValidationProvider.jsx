/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FormValidationContext = createContext(null);

const FormValidationProvider = ({children}) => {
    const [validataion, setValidation] = useState("");

    return (
        <FormValidationContext.Provider value={[validataion, setValidation]}>
            {children}
        </FormValidationContext.Provider>
    );
};

export default FormValidationProvider;