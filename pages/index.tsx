import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";
import Script from "next/script";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-TCJW3FJ" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E83JP7R87D"
        id="google-tagmanager"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E83JP7R87D');`,
        }}
        strategy="afterInteractive"
      />
      <Flex
        w="100%"
        h="100%"
        id="around-button"
        justify="center"
        align="center"
      >
        <Button onClick={() => setIsModalOpen(true)} />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content="modal content"
          title="title"
        />
      </Flex>
    </>
  );
};

export default Home;
