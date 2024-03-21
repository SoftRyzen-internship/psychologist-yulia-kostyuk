import { client } from '../lib/client';
import { conditionsQuery } from './conditionsQuery';

export async function getConditions() {
  const conditions = await client.fetch(conditionsQuery);
  return conditions;
}
