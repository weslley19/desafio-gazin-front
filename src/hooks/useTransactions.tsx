import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Developer {
  name: string,
  sexo: string,
  age: number,
  hobby: string,
  birthdate: string
}

type DeveloperInput = Omit<Developer, 'id' | 'createdAt'>;

interface DeveloperProviderProps {
  children: ReactNode;
}

interface DeveloperContextData {
  developers: Developer[];
  createDeveloper: (developer: DeveloperInput) => Promise<void>;
}

export const DeveloperContext = createContext<DeveloperContextData>(
  {} as DeveloperContextData
);

export function DeveloperProvider({ children }: DeveloperProviderProps) {
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    api.get('developers')
      .then((response: any) => {
        setDevelopers(response.data.transactions)
      })
  }, []);

  const createDeveloper = async (DevelopersInput: DeveloperInput) => {
    const response: any = await api.post('/developers', {
      ...DevelopersInput,
    });

    const { developer }: any = response.data;

    setDevelopers([
      ...developers,
      developer
    ]);
  }

  return (
    <DeveloperContext.Provider value={{ developers, createDeveloper }}>
      {children}
    </DeveloperContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(DeveloperContext);

  return context;
}
