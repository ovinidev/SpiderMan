import { Flex, HStack, Image } from '@chakra-ui/react';
import { animationFromTop } from '../../animations/animateOnRender';
import { CONTAINER_SIZE } from '../../constants/containersSize';
import { Navigation } from './Navigation';
import { Social } from './Social';

export const Header = () => {
	return (
		<Flex
			animation={animationFromTop}
			as="header"
			w="100%"
			maxW={CONTAINER_SIZE}
			pt="4rem"
			justify="space-between"
			px="16px"
		>
			<HStack spacing="16">
				<Image src="/logo.svg" h="4.6rem" />

				<Navigation />
			</HStack>

			<Social />
		</Flex>
	);
};
