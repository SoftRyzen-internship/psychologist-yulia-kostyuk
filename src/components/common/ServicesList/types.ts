export type Service = {
  _id: string;
  title: string;
  location: string;
  card: Cards[];
};

export type Cards = {
  _key: string;
  subtitle: string;
  description?: string;
};
