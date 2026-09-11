export interface Task {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
  steps?: TaskStep[];
}

export interface TaskStep {
  id: string;
  label: string;
  done: boolean;
}