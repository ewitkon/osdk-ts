export interface MockProject {
  $apiName: string;
  $primaryKey: string;
  id: string;
  name: string;
  description: string;
  tasks: MockTask[];
}

export interface MockTask {
  $apiName: string;
  $primaryKey: string;
  id: string;
  title: string;
  description: string;
}

const projects: MockProject[] = [
  {
    $apiName: "MockProject",
    $primaryKey: "1",
    id: "1",
    name: "Fake Project",
    description: "This is a fake description",
    tasks: [
      {
        $apiName: "MockTask",
        $primaryKey: "1",
        id: "1",
        title: "Try to",
        description: "task description 1",
      },
      {
        $apiName: "MockTask",
        $primaryKey: "2",
        id: "2",
        title: "Implement this",
        description: "task description 2",
      },
      {
        $apiName: "MockTask",
        $primaryKey: "3",
        id: "3",
        title: "With the Ontology SDK!",
        description: "task description 3",
      },
    ],
  },
  {
    $apiName: "MockProject",
    $primaryKey: "2",
    id: "2",
    name: "Yet Another Fake Project",
    description: "This is another fake description",
    tasks: [
      {
        $apiName: "MockTask",
        $primaryKey: "4",
        id: "4",
        title: "More tasks here",
        description: "More task description",
      },
    ],
  },
];

async function delay(): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(), 500 + Math.random() * 1000)
  );
}

// Good enough random id for mocks
function randomId(): string {
  return `${Math.floor(Math.random() * 2 ** 31)}`;
}

async function getProjects(): Promise<MockProject[]> {
  await delay();
  const result = [...projects];
  result.sort((p1, p2) => p1.name.localeCompare(p2.name));
  return result;
}

async function createProject({
  name,
  description = "",
}: {
  name: string;
  description?: string;
}): Promise<MockProject["$primaryKey"]> {
  await delay();
  const id = randomId();
  projects.push({
    $apiName: "MockProject",
    $primaryKey: id,
    id,
    name,
    description,
    tasks: [],
  });
  return id;
}

async function deleteProject(id: string): Promise<void> {
  await delay();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx !== -1) {
    projects.splice(idx, 1);
  }
}

async function createTask({
  title,
  description = "",
  projectId,
}: {
  title: string;
  description?: string;
  projectId: string;
}): Promise<MockTask["$primaryKey"]> {
  await delay();
  const project = projects.find((p) => p.id === projectId);
  if (project == null) {
    throw new Error(`Project ${projectId} not found!`);
  }
  const id = randomId();
  project.tasks.unshift({
    $apiName: "MockTask",
    $primaryKey: id,
    id,
    title,
    description,
  });
  return id;
}

async function deleteTask(id: string): Promise<void> {
  await delay();
  for (const project of projects) {
    const idx = project.tasks.findIndex((t) => t.id === id);
    if (idx !== -1) {
      project.tasks.splice(idx, 1);
    }
  }
}

const Mocks = {
  getProjects,
  createProject,
  deleteProject,
  createTask,
  deleteTask,
};

export default Mocks;