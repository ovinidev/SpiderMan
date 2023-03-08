import { HStack } from '@chakra-ui/react';
import { Link } from './Link';

export const Navigation = () => {
	return (
		<HStack spacing="8" as="nav">
			<Link>Home</Link>
			<Link>Story</Link>
			<Link>Wallpapers</Link>
			<Link color="red.light">#beyourself</Link>
		</HStack>
	);
};
