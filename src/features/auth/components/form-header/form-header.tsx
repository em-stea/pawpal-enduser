import {Heading} from "@/shared/components/heading/heading";
import {Logo} from "@/shared/components/logo/logo";
import {Text} from "@/shared/components/text/text";

interface FormHeaderProps {
  title: string;
  description: string;
}

export const FormHeader = ({title, description}: FormHeaderProps) => {
  return (
    <div className="mb-3 flex flex-col items-center justify-center">
      <Logo />
      <Heading className="pt-6 pb-4" variant="title.2">
        {title}
      </Heading>
      <Text className="w-75 pb-2 text-center lg:w-full" variant="body.1">
        {description}
      </Text>
    </div>
  );
};
