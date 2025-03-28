export const projects: Project[] = [
  {
    title: 'Ka Wo\'s Website',
    description: 'Personal website built using Docusaurus 🦖',
    preview: '/img/project/blog.png',
    website: 'https://www.kawofong.com',
    source: 'https://github.com/kawofong/web',
    tags: ['open_source', 'react', 'favorite'],
    type: 'web',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'open_source' | 'react' | 'python' | 'google_cloud' | 'azure' | 'ai'

export type ProjectType = 'web' | 'product' | 'developer'

export const projectTypeMap = {
  product: '💫 Products',
  web: '🖥️ Web applications',
  developer: '👨🏻‍💻 Developer tools',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: 'Favorite',
    description: 'Personal favorites!',
    color: '#e9669e',
  },
  open_source: {
    label: 'Open source',
    description: 'Building software for the community.',
    color: '#39ca30',
  },
  react: {
    label: 'React',
    description: 'Built with React.',
    color: '#dfd545',
  },
  python: {
    label: 'Python',
    description: 'Built with Python.',
    color: '#a44fb7',
  },
  google_cloud: {
    label: 'Google Cloud',
    description: 'Built with Google Cloud.',
    color: '#8c2f00',
  },
  azure: {
    label: 'Azure',
    description: 'Built with Microsoft Azure.',
    color: '#12affa',
  },
  ai: {
    label: 'Artificial intelligence',
    description: 'Includes artificial intelligence and machine learning features.',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
