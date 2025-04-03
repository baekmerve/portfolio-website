export type SelectedPage = 'home' | 'about' | 'projects' | 'contact'

export type Project = {
  id: number
  tag: string[]
  image: string
  title: string
  description: string
  github: string
  notion: string
  demo?: string
  stack: ProjectStack[]
}

export type ProjectStack = {
  name: string
}

export type SkillType = {
  name: string
  image: string
  directionLeft: boolean
}

export type DataState = {
  failMessage: string
  successMessage: string
  errors: {
    sender?: string[]
    email?: string[]
    content?: string[]
  }
}

export type NavLinkType = {
  navLinks: { title: string; path: string }[]
}
