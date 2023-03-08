import { Link } from '@chakra-ui/react';

export const ButtonOnlyBorder = () => {
	return (
		<Link
			display="inline-block"
			padding="12px 32px"
			borderRadius="3px"
			transform="skewX(-10deg)"
			textTransform="uppercase"
			border="2px solid #F02A2F"
			_after={{
				content: '""',
				position: 'absolute',
				transition: '0.5s ease',
				top: 0,
				left: 0,
				background: 'linear-gradient(267.72deg, #F02A2F 0.88%, #EA1D22 100%)',
				zIndex: -1,
				display: 'block',

				height: '100%',
				width: '0',
			}}
			_hover={{
				_after: {
					width: '100%',
				},
			}}
		>
			watch the teaser
		</Link>
	);
};
