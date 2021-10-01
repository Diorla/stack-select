import { useState, useEffect, createContext, useContext } from "react";
import firebase from "init/clientApp";
import initialUser from "./initialUser";
import user from "interfaces/user";
import fetchUser from "services/fetchUser";
import app from "interfaces/app";
import fetchProjects from "services/fetchProjects";
import project from "interfaces/project";
import stack from "interfaces/stack";
import fetchStacks from "services/fetchStacks";
import tool from "interfaces/tool";
import fetchTools from "services/fetchTools";

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
  userStackError: null,
  toolError: null,
});

export default function UserContextComp({ children }: { children: any }) {
  const [user, setUser] = useState<user>(initialUser);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState<Error | null>(null);
  const [projects, setProjects] = useState<project[]>([]);
  const [loadingProject, setLoadingProject] = useState(true);
  const [projectError, setProjectError] = useState<Error | null>(null);
  const [stacks, setStacks] = useState<stack[]>([]);
  const [loadingStack, setLoadingStack] = useState(true);
  const [userStackError, setStackError] = useState<Error | null>(null);
  const [tools, setTools] = useState<tool[]>([]);
  const [loadingTool, setLoadingTool] = useState(true);
  const [toolError, setToolError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const { uid, displayName, email, photoURL } = user;
          fetchUser(uid, { uid, displayName, email, photoURL }, setUser);
          fetchProjects(uid, (projects) => {
            setProjects(projects);
            setLoadingProject(false);
          }).catch((err) => setProjectError(err));
          fetchStacks(uid, (stacks) => {
            setStacks(stacks);
            setLoadingStack(false);
          }).catch((err) => setStackError(err));
          fetchTools(uid, (tools) => {
            setTools(tools);
            setLoadingTool(false);
          }).catch((err) => setToolError(err));
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
        userStackError,
        toolError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
