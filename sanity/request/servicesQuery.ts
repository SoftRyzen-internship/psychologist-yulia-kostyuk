import { groq } from 'next-sanity';

export const serviceQuery = groq`*[_type=="services"]{
  _id,
  title,
  location,
  card,
}`;
