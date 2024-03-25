export interface Value {
  id?: number;
  name?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}

export interface ValueItemProps {
  value: Value;
}
