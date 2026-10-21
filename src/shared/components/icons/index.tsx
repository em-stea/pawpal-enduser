import {ArrowRight} from "./directional/arrow-right";
import {ChevronLeft} from "./directional/chevron-left";
import {ChevronRight} from "./directional/chevron-right";
import {Isotipo} from "./isotipo/isotipo";
import {Pet} from "./other/pet";
import {Vet} from "./other/vet";
import {Bird} from "./other/bird";
import {Cat} from "./other/cat";
import {Dog} from "./other/dog";
import {Sheep} from "./other/sheep";
import {Google} from "./other/google";

export {ArrowRight} from "./directional/arrow-right";

export {Bird} from "./other/bird";

export {Cat} from "./other/cat";

export {Dog} from "./other/dog";

export {Sheep} from "./other/sheep";

export {ChevronLeft} from "./directional/chevron-left";

export {ChevronRight} from "./directional/chevron-right";

export {Google} from "./other/google";

const IconsType = {
  directional: {
    arrowRight: ArrowRight,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
  },
  isotipo: {
    isotipo: Isotipo,
  },
  other: {
    pet: Pet,
    vet: Vet,
    bird: Bird,
    cat: Cat,
    dog: Dog,
    sheep: Sheep,
    google: Google,
  },
};

interface IconsProps {
  className?: string;
}

export const Icons = ({className}: IconsProps) => {
  return (
    <>
      {Object.entries(IconsType).map(([category, icons]) => (
        <div key={category} className="my-8 flex flex-col gap-2">
          <h3 className="border-b border-black/20 text-base font-medium tracking-wider uppercase">
            {category}
          </h3>
          <div className="flex flex-row gap-4 align-middle">
            {Object.entries(icons).map(([name, Icon]) => (
              <Icon key={name} className={className} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
