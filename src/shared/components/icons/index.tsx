import {ArrowRight} from "./directional/arrow-right.directional";
import {ChevronLeft} from "./directional/chevron-left.directional";
import {ChevronRight} from "./directional/chevron-right.directional";
import {Isotipo} from "./isotipo/isotipo";
import {Pet} from "./other/pet.other";
import {Vet} from "./other/vet.other";
import {Bird} from "./other/bird.other";
import {Cat} from "./other/cat.other";
import {Dog} from "./other/dog.other";
import {Sheep} from "./other/sheep.other";

export {ArrowRight} from "./directional/arrow-right.directional";

export {Bird} from "./other/bird.other";

export {Cat} from "./other/cat.other";

export {Dog} from "./other/dog.other";

export {Sheep} from "./other/sheep.other";

export {ChevronLeft} from "./directional/chevron-left.directional";

export {ChevronRight} from "./directional/chevron-right.directional";

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
