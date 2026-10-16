import {Bird} from "@/shared/components/icons/other/bird.other";
import {Cat} from "@/shared/components/icons/other/cat.other";
import {Dog} from "@/shared/components/icons/other/dog.other";
import {Sheep} from "@/shared/components/icons/other/sheep.other";

interface CareCoverageOption {
  label: string;
  icon: React.ReactNode;
  value: string;
}

export const CARE_COVERAGE_OPTIONS: CareCoverageOption[] = [
  {
    icon: <Dog className="size-5" />,
    label: "Caninos",
    value: "caninos",
  },
  {icon: <Cat className="size-5" />, label: "Felinos", value: "felinos"},
  {icon: <Bird className="size-5" />, label: "Exóticos", value: "exoticos"},
  {icon: <Sheep className="size-5" />, label: "De Granja", value: "granja"},
];
