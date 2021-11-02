import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ADD_NEW_DEVELOPER,
  REMOVE_DEVELOPER,
  // REMOVE_DEVELOPER,
  UPDATE_DEVELOPER,
  // LOGOUT,
  SYSTEM_INSTABILITY
} from '../constants/messages';

import { api } from '../services/api';

import 'react-toastify/dist/ReactToastify.css';

interface Developer {
  id: number,
  name: string,
  sexo: string,
  age: number,
  hobby: string,
  birthdate: string,
  createdAt: string,
  updatedAt: string,
  active: boolean,
}

type DeveloperInput = Omit<Developer, 'id' | 'createdAt' | 'updatedAt' | 'active'>;
type DeveloperEdit = Omit<Developer, 'id' | 'createdAt' | 'updatedAt'>;
type DeveloperDelete = Omit<Developer, 'name' | 'sexo' | 'age' | 'hobby' | 'birthdate' | 'createdAt' | 'updatedAt' | 'active'>;
type DeveloperInfo = Omit<Developer, 'name' | 'sexo' | 'age' | 'hobby' | 'birthdate' | 'createdAt' | 'updatedAt' | 'active'>;

interface DeveloperProviderProps {
  children: ReactNode;
}

interface DeveloperContextData {
  developers: Developer[];
  developer: Developer;
  createDeveloper: (developer: DeveloperInput) => Promise<void>;
  editDeveloper: (developer: DeveloperEdit) => Promise<void>;
  deleteDeveloper: (developer: DeveloperDelete) => Promise<void>;
  findDeveloperId: (developer: DeveloperInfo) => Promise<void>;
}

export const DeveloperContext = createContext<DeveloperContextData>(
  {} as DeveloperContextData
);

export function DeveloperProvider({ children }: DeveloperProviderProps) {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [developer, setDeveloper] = useState<Developer>({} as Developer);

  const getDevelopers = () => {
    api.get('developers/')
      .then((response: any) => {
        setDevelopers(response.data)
      });
  }

  useEffect(() => {
    getDevelopers();
  }, []);

  const findDeveloperId = async (DeveloperId: DeveloperInfo) => {
    const response: any = await api.get(`/developers/${DeveloperId}`);

    setDeveloper(
      response.data
    );
  }

  const editDeveloper = async (DeveloperEdit: DeveloperEdit) => {
    const response = await api.put(`/developers/${developer.id}/`, {
      ...DeveloperEdit
    });

    if (response.status !== 200) {
      toast.error(SYSTEM_INSTABILITY, { theme: 'colored' });
      return;
    }

    if (response.status === 200) {
      toast.success(UPDATE_DEVELOPER, { theme: 'colored' });
    }

    getDevelopers();
  }

  const createDeveloper = async (DevelopersInput: DeveloperInput) => {
    const response: any = await api.post('/developers/', {
      ...DevelopersInput,
      createdAt: new Date(),
      updatedAt: new Date(),
      active: true,
    });

    if (response.status !== 201) {
      toast.error(SYSTEM_INSTABILITY, { theme: 'colored' });
      return;
    }

    const developer = response.data;

    setDevelopers([
      ...developers,
      developer
    ]);

    if (response.status === 201) {
      toast.success(ADD_NEW_DEVELOPER, { theme: 'colored' });
    }
  }

  const deleteDeveloper = async (DevelopersDelete: DeveloperDelete) => {
    const response: any = await api.delete(`developers/${DevelopersDelete}/`);

    if (response.status === 204) {
      toast.success(REMOVE_DEVELOPER, { theme: 'colored' });
    } else {
      toast.error(SYSTEM_INSTABILITY, { theme: 'colored' });
      return;
    }

    getDevelopers();
  }

  return (
    <DeveloperContext.Provider value={{ developers, developer, createDeveloper, editDeveloper, deleteDeveloper, findDeveloperId }}>
      {children}
    </DeveloperContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(DeveloperContext);

  return context;
}
