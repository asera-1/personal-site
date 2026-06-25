interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Flowent',
    description: `AI-powered speaking practice for university language programs. Built on LLMs and voice AI, grounded in second-language-acquisition research. First institutional contract with the Universität Osnabrück Language Centre, plus native iOS and Android apps with a spaced-repetition engine.`,
    href: 'https://getflowent.com',
    // imgSrc: '/static/images/flowent.png',
  },
  {
    title: 'GPT-from-Scratch: Shakespeare Language Model',
    description: `A decoder-only Transformer built from scratch: BPE tokenizer, training loop, and evaluation. Improved perplexity from 126 to 83 through model and data-pipeline design.`,
    href: 'https://github.com/asera-1/gpt-from-scratch',
    // imgSrc: '/static/images/gpt.png',
  },
  {
    title: 'Demand Forecasting (Prophet, XGBoost)',
    description: `Time-series demand prediction with VisioLab and Universität Osnabrück: preprocessing, cross-validation, hierarchical reconciliation, and deployment via FastAPI REST endpoints.`,
    // href: '',
  },
  {
    title: 'Enterprise Network & Security Emulation',
    description: `Multi-branch enterprise network with a spine-leaf data center and an end-to-end MPLS service-provider core (OSPF, MP-BGP, VRF, HSRP), built in EVE-NG. B.Eng. graduation project.`,
    href: 'https://github.com/asera-1/Bachelor-Graduation-Project-',
  },
]

export default projectsData
