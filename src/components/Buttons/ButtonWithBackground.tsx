import { Link } from '@chakra-ui/react';

export const ButtonWithBackground = () => {
	return (
		<Link
			display="inline-block"
			padding="12px 32px"
			bg="linear-gradient(267.72deg, #F02A2F 0.88%, #EA1D22 100%)"
			borderRadius="3px"
			transform="skewX(-10deg)"
			textTransform="uppercase"
			position="relative"
			_after={{
				content: '""',
				transition: '0.5s ease',
				position: 'absolute',
				top: '-2px',
				left: '-2px',
				display: 'block',
				opacity: 0,
				borderTop: '3px solid #fff',
				borderLeft: '3px solid #fff',

				height: '70%',
				width: '40%',
			}}
			_before={{
				content: '""',
				transition: '0.5s ease',
				position: 'absolute',
				bottom: '-2px',
				right: '-2px',
				display: 'block',
				opacity: 0,
				borderBottom: '3px solid #fff',
				borderRight: '3px solid #fff',

				height: '70%',
				width: '40%',
			}}
			_hover={{
				_after: {
					opacity: 1,
				},
				_before: {
					opacity: 1,
				},
			}}
		>
			pre-order now
		</Link>
	);
};
