import { HStack } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { SocialIcon } from "./SocialIcon";

export const Social = () => {
  return (
    <HStack spacing="8" as="nav">
      <SocialIcon icon={<FaFacebookF />} link="/" />
      <SocialIcon icon={<FaInstagram />} link="/" />
      <SocialIcon icon={<FaYoutube />} link="/" />
      <SocialIcon icon={<FaLinkedin />} link="/" />
    </HStack>
  );
};
