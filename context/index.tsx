import { useState, useEffect, createContext, useContext } from "react";
import firebase from "init/clientApp";
import initialUser from "./initialUser";
import user from "interfaces/user";
import fetchUser from "services/fetchUser";
import app from "interfaces/app";
import useProjects from "hooks/useProjects";
import useStacks from "hooks/useStacks";
import useTools from "hooks/useTools";
import Control from "./Control";

export const UserContext = createContext<app>({
  user: initialUser,
  loadingUser: false,
  userError: null,
  projects: [],
  loadingProject: false,
  stacks: [],
  loadingStack: false,
  tools: [],
  loadingTool: false,
  projectError: null,
  stackError: null,
  toolError: null,
});

export default function UserContextComp({ children }: { children: any }) {
  const [user, setUser] = useState<user>(initialUser);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState<Error | null>(null);
  const {
    projects,
    loading: loadingProject,
    error: projectError,
  } = useProjects(user.uid);
  const {
    stacks,
    loading: loadingStack,
    error: stackError,
  } = useStacks(user.uid);
  const { tools, loading: loadingTool, error: toolError } = useTools(user.uid);

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const { uid, displayName, email, photoURL } = user;
          fetchUser(uid, { uid, displayName, email, photoURL }, setUser);
        } else setUser(initialUser);
      } catch (error) {
        setUserError(error as Error);
      } finally {
        setLoadingUser(false);
      }
    });

    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loadingUser,
        userError,
        projects,
        loadingProject,
        stacks,
        loadingStack,
        tools,
        loadingTool,
        projectError,
        stackError,
        toolError,
      }}
    >
      <Control loading={loadingUser} userId={user?.uid}>
        {children}
      </Control>
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
