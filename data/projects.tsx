export const projects: Project[] = [
  {
    title: 'Ka Wo\'s Website',
    description: 'Personal website built using Docusaurus 🦖',
    preview: '/img/project/web.png',
    website: 'https://www.kawofong.com',
    source: 'https://github.com/kawofong/web',
    tags: ['react', 'favorite'],
    type: 'open source',
  },
  {
    title: 'Multi-agent Gen AI platform',
    description: 'Powers Gen AI applications for a financial institution, processing 1.7M tokens per second',
    preview: '/img/project/loan.jpeg',
    website: '',
    tags: ['favorite', 'python', 'ai', 'google_cloud', 'postgres'],
    type: 'enterprise',
  },
  {
    title: 'Compliance SaaS',
    description: 'Prepare customized compliance documents under 15 minutes using ReAct agents.',
    preview: '/img/project/iso.jpg',
    website: 'https://www.vissibl.ai/',
    tags: ['favorite', 'react', 'python', 'ai', 'google_cloud', 'firebase'],
    type: 'product',
  },
  {
    title: 'AutoML accelerator',
    description: 'Packaged accelerator for building predictive maintenance models',
    preview: '/img/project/automl.jpg',
    website: 'https://cloud.google.com/blog/topics/manufacturing/ai-for-increased-asset-utilization-and-production',
    source: 'https://github.com/GoogleCloudPlatform/mfg-ml-examples',
    tags: ['favorite', 'python', 'ai', 'google_cloud'],
    type: 'enterprise',
  },
  {
    title: 'MLOps for manufacturers',
    description: 'End-to-end delivery of ML models for manufacturers',
    preview: '/img/project/mlops.jpg',
    website: 'https://www.googlecloudcommunity.com/gc/Community-Blogs/A-comprehensive-guide-to-MLOps-with-Intelligent-Products/ba-p/800793',
    tags: ['favorite', 'python', 'ai', 'google_cloud'],
    type: 'enterprise',
  },
  {
    title: 'Connected elevator platform',
    description: 'Multi-tenant SaaS platform, serving millions of connected elevators across US',
    preview: '/img/project/elevator.webp',
    website: 'https://www.cio.com/article/401381/otis-takes-the-smart-elevator-to-new-heights.html',
    tags: ['azure'],
    type: 'enterprise',
  },
  {
    title: 'Azure knowledge mining',
    description: 'Accelerator for building knowledge mining systems on Azure',
    preview: '/img/project/knowledge.webp',
    website: 'https://github.com/kawofong/azure-knowledge-mining',
    source: 'https://github.com/kawofong/azure-knowledge-mining',
    tags: ['python', 'terraform', 'azure'],
    type: 'enterprise',
  },
  {
    title: 'API Connect',
    description: 'Security modules for developers to build APIs',
    preview: '/img/project/api.webp',
    website: 'https://www.ibm.com/products/api-connect',
    tags: ['cpp', 'nodejs'],
    type: 'product',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'ai'
  | 'angular'
  | 'azure'
  | 'cpp'
  | 'google_cloud'
  | 'firebase'
  | 'nodejs'
  | 'postgres'
  | 'python'
  | 'react'
  | 'terraform'

export type ProjectType =
  | 'enterprise'
  | 'open source'
  | 'product'

export const projectTypeMap = {
  enterprise: '🏢 Enterprise solutions',
  oss: '📖 Open source',
  product: '🖥️ Products',
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
  ai: {
    label: 'Artificial intelligence',
    description: 'Built with artificial intelligence and machine learning features.',
    color: '#39ca30',
  },
  angular: {
    label: 'Angular',
    description: 'Built with Angular framework.',
    color: '#df3641',
  },
  azure: {
    label: 'Azure',
    description: 'Built with Microsoft Azure.',
    color: '#12affa',
  },
  cpp: {
    label: 'C++',
    description: 'Built with C++',
    color: '#48fb86',
  },
  google_cloud: {
    label: 'Google Cloud',
    description: 'Built with Google Cloud.',
    color: '#8c2f00',
  },
  firebase: {
    label: 'Firebase',
    description: 'Built with Google Firebase.',
    color: '#FF9100',
  },
  nodejs: {
    label: 'Node.js',
    description: 'Built with Node.js',
    color: '#58116b',
  },
  postgres: {
    label: 'Postgres',
    description: 'Built with Postgres',
    color: '#5979ac',
  },
  python: {
    label: 'Python',
    description: 'Built with Python.',
    color: '#a44fb7',
  },
  react: {
    label: 'React',
    description: 'Built with React.',
    color: '#dfd545',
  },
  terraform: {
    label: 'Terraform',
    description: 'Built with Terraform.',
    color: '#40067a',
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
