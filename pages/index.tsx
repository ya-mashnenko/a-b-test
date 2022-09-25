import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Flex w="100%" h="100%" id="around-button" justify="center" align="center">
      <Button onClick={() => setIsModalOpen(true)} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content="modal content"
        title="title"
      />
    </Flex>
  );
};

export default Home;
