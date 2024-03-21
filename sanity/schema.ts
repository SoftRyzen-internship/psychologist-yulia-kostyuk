import { type SchemaTypeDefinition } from 'sanity';
import services from './schemas/services';
import conditions from './schemas/conditions';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, conditions],
};
