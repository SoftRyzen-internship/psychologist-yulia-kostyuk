interface EducationItem {
  id: number;
  subTitle: string;
  description: string;
}

interface EducationData {
  title: string;
  education: EducationItem[];
}

export default EducationData;
