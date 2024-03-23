import { PortableTextBlock } from 'sanity';

export type Condition = {
  _id: string;
  _type: string;
  title: PortableTextBlock[];
  description: PortableTextBlock[];
};
