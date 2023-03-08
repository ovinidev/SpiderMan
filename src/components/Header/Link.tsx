import {
	Link as ChakraLink,
	LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LinkProps extends ChakraLinkProps {
	children: ReactNode;
}

export const Link = ({ children, ...rest }: LinkProps) => {
	return (
		<ChakraLink
			p="8px 16px"
			fontSize="1.125rem"
			fontWeight="400"
			textTransform="uppercase"
			position="relative"
			_after={{
				content: '""',
				transition: '.7s ease',

				display: 'block',
				position: 'absolute',
				top: '-40px',
				left: '50%',

				height: '0',
				width: '2px',
				background:
					'linear-gradient(100deg, rgba(233, 29, 34, 0) 0%, #e91d22 100%)',
			}}
			_hover={{
				_after: {
					height: '40px',
				},
			}}
			{...rest}
		>
			{children}
		</ChakraLink>
	);
};
