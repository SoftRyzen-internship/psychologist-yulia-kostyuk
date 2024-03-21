import { client } from '../lib/client';
import { serviceQuery } from './servicesQuery';

export async function getServices() {
  const services = await client.fetch(serviceQuery);
  return services;
}
