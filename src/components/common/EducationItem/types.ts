export interface EducationItemProps {
  item: {
    id: number;
    subTitle: string;
    description: string;
  };
  index: number;
  isLast: boolean;
}

export interface EducationProps {
  educationData: {
    title: string;
    education: {
      id: number;
      subTitle: string;
      description: string;
    }[];
  };
}
