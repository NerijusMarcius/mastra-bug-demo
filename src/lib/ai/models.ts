export type Model = {
  id: string;
  name: string;
  chef: string;
  chefSlug: string;
  providers: string[];
};

export const models: Model[] = [
  {
    id: 'anthropic/claude-haiku-4-5',
    name: 'Haiku 4.5',
    chef: 'Anthropic',
    chefSlug: 'anthropic',
    providers: ['anthropic'],
  },
  {
    id: "openai/gpt-4o",
    name: "OpenAI GPT-4o",
    chef: 'OpenAI',
    chefSlug: 'openai',
    providers: ['openai'],
  },
];

export const DEFAULT_MODEL: string = models[1].id;