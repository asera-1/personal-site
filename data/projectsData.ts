interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Flowent',
    description: `An AI speaking practice platform for university language programs. It uses large language models and voice AI to give learners structured speaking practice, grounded in research on second language acquisition. We signed our first institutional contract with the Universität Osnabrück Language Centre and ship native iOS and Android apps. I lead product, engineering, sales, and fundraising.`,
    href: 'https://getflowent.com',
  },
  {
    title: 'GPT from Scratch: a small language model',
    description: `A decoder only Transformer language model built from scratch in PyTorch, including a BPE tokenizer, the training loop, and evaluation. By reworking the model and the data pipeline I brought validation perplexity down from 126 to 83.`,
    href: 'https://github.com/asera-1/gpt-from-scratch',
  },
  {
    title: 'Demand Forecasting',
    description: `A time series demand forecasting project with VisioLab and Universität Osnabrück. It covers data preprocessing, cross validation, hierarchical reconciliation across product levels, and deployment as REST endpoints with FastAPI. Built with Prophet and XGBoost.`,
  },
  {
    title: 'Enterprise Network and Security Emulation',
    description: `My B.Eng. graduation project. A multi branch enterprise network with a spine and leaf data center and an end to end MPLS service provider core, using OSPF, MP-BGP, VRF, and HSRP, built and tested in EVE-NG.`,
    href: 'https://github.com/asera-1/Bachelor-Graduation-Project-',
  },
]

export default projectsData
