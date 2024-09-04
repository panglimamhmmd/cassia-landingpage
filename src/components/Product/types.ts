import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  landSize : string,
  buildingSize  : string,
  bedrooms  : string,
  bathrooms  : string,
  UnitSize: string,
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  background?: string;
  decorSize?: string;
  decorTop?:string;
  decorBottom?:string;
  decorLeft?:string;
  decorRight?:string;
  decorRotate?:string;
  decorName?:string;
  image1:string;
  image2:string;
  image3:string;
}
