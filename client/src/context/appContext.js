import React, { useState, useReducer, useContext } from 'react'

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '',
    alertType: '',
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    return (
        <AppContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useAppContext, initialState }