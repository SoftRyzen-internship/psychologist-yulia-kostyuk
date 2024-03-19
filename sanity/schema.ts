import { type SchemaTypeDefinition } from 'sanity';
import services from './schemas/services';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services],
};
