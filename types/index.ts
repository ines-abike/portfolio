export interface ProjectCardProps {
    title: string;
    desc: string;
    demo: string;
    github: string;
    figma: string;
    preview: string
  }

  export interface ServicesProps {
    number: string;
    title: string;
    description: string;
  }

  export interface Project {
    id: number;
    title: string;
    preview: string;
    desc: string;
    demo: string;
    github: string;
    figma: string;
}

export interface NavItemProps {
    label: string;
    href?: string;
}

export interface LogoProps {
    isScrolled: boolean;
}

export interface ActionButtonProps {
    isScrolled: boolean;
}