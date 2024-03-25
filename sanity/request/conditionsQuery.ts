import { groq } from 'next-sanity';

export const conditionsQuery = groq`*[_type=="conditions"]{_id,title,description}`;
