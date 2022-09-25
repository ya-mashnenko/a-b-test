import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "./Button.d";

export const Button = ({ label = "Activate", onClick }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="purple" onClick={onClick}>
      {label}
    </ChakraButton>
  );
};
