// context/DataContext.js
import React, { createContext, useContext, useState } from 'react';


const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(/* initial data */);

  // You can provide functions to update the data as needed

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
const AnotherContext = createContext('');

export function AnotherProvider({ children }) {
  const [anotherData, setAnotherData] = useState(/* initial anotherData */);
  // You can provide functions to update the anotherData as needed

  return (
    <AnotherContext.Provider value={{ anotherData, setAnotherData }}>
      {children}
    </AnotherContext.Provider>
  );
}

export function useAnother() {
  return useContext(AnotherContext);
}