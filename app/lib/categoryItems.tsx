import { ChefHat, Globe, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
  name: string;
  tittle: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "template",
    tittle: "Template",
    image: <Globe />
  },
  {
    id: 1,
    name: "uikit",
    tittle: "UI Kit",
    image: <ChefHat />
  },
  {
    id: 2,
    name: "icon",
    tittle: "Icon",
    image: <PartyPopper />
  },
];
