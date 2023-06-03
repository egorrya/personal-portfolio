import { useEffect, useState } from 'react';

interface ImageState {
	loading: boolean;
	error: unknown;
	image: string | null;
}

const useImage = (fileName: string): ImageState => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>(null);
	const [image, setImage] = useState<string | null>(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(`../assets/images/${fileName}`);
				setImage(response.default);
			} catch (err) {
				setError(err as unknown);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
	}, [fileName]);

	return {
		loading,
		error,
		image,
	};
};

export default useImage;
