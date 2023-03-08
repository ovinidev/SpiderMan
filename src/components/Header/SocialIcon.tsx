import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SocialIconProps {
	icon: ReactNode;
	link: string;
}

export const SocialIcon = ({ icon, link }: SocialIconProps) => {
	return (
		<Link
			color="#F8FBFF"
			fontSize="2rem"
			href={link}
			target="_blank"
			transition="color .5s ease"
			_hover={{
				color: 'red.light',
			}}
		>
			{icon}
		</Link>
	);
};
