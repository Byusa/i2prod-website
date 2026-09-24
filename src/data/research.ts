import type { ResearchProject } from "@/types/research";

export const researchProjects: ResearchProject[] = [
  {
    slug: "orqa-llm-reasoning-operations-research",
    title:
      "Evaluating LLM Reasoning in the Operations Research Domain with ORQA",
    shortTitle: "ORQA",
    field: "Large Language Models · Operations Research",
    description:
      "Research introducing ORQA, an Operations Research Question Answering benchmark designed to evaluate the ability of large language models to reason through complex operations-research and mathematical-optimization problems.",
    authors: [
      "Mahdi Mostajabdaveh",
      "Timothy T. Yu",
      "Samarendra Chandan Bindu Dash",
      "Rindranirina Ramamonjison",
      "Jabo Serge Byusa",
      "Giuseppe Carenini",
      "Zirui Zhou",
      "Yong Zhang",
    ],
    methods: [
      "LLM Evaluation",
      "Operations Research",
      "Reasoning",
      "Benchmarking",
      "Optimization",
    ],
    venue: "AAAI Conference on Artificial Intelligence (AAAI-25)",
    year: 2025,
    status: "Peer Reviewed",
    doi: "10.1609/aaai.v39i23.34673",
    links: [
      {
        label: "AAAI",
        url: "https://ojs.aaai.org/index.php/AAAI/article/view/34673",
      },
      {
        label: "arXiv",
        url: "https://arxiv.org/abs/2412.17874",
      },
    ],
    featured: true,
  },

  {
    slug: "smartaps-tool-augmented-llms",
    title: "SMARTAPS: Tool-augmented LLMs for Operations Management",
    shortTitle: "SMARTAPS",
    field: "AI Agents · Operations Management",
    description:
      "Research combining large language models with operations-research tools to create a conversational Advanced Planning System for querying plans, counterfactual reasoning, recommendations and scenario analysis.",
    authors: [
      "Timothy Tin Long Yu",
      "Mahdi Mostajabdaveh",
      "Jabo Serge Byusa",
      "Rindra Ramamonjison",
      "Giuseppe Carenini",
      "Kun Mao",
      "Zirui Zhou",
      "Yong Zhang",
    ],
    methods: [
      "Tool-Augmented LLMs",
      "AI Agents",
      "Operations Research",
      "Planning",
      "Optimization",
    ],
    venue: "arXiv / CoRR",
    year: 2025,
    status: "Preprint",
    doi: "10.48550/arXiv.2507.17927",
    links: [
      {
        label: "arXiv",
        url: "https://arxiv.org/abs/2507.17927",
      },
    ],
    featured: true,
  },

  {
    slug: "ai-insulin-resistance",
    title:
      "Artificial Intelligence Approaches to Type 2 Diabetes and Insulin Resistance",
    shortTitle: "AI for Insulin Resistance",
    field: "Applied Artificial Intelligence · Healthcare",
    description:
      "Research comparing deep learning, gradient-boosted machine learning and agentic LLM approaches for understanding and predicting insulin resistance using population health data.",
    methods: [
      "Deep Learning",
      "LightGBM",
      "Agentic LLM",
      "SHAP",
      "Explainable AI",
    ],
    dataset: "NHANES 2021–2023",
    year: 2026,
    status: "Research",
    featured: true,
  },
];