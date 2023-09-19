import { Project, ProjectStatus } from "../models/project.js";

// Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listners: Listener<T>[] = [];

  public addListner(listnerFn: Listener<T>) {
    this.listners.push(listnerFn);
  }
}

// Project State Management
export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance(): ProjectState {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  public addProject(
    title: string,
    description: string,
    numOfPeople: number
  ): void {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListners();
  }

  public moveProject(projectId: string, newStatus: ProjectStatus): void {
    const project = this.projects.find((proj) => proj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListners();
    }
  }

  private updateListners() {
    for (const listnerFn of this.listners) {
      listnerFn(this.projects.slice());
    }
  }
}

// Singleton
export const projectState = ProjectState.getInstance();
