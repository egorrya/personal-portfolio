import { useEffect, useState } from 'react';

interface VideoState {
	loading: boolean;
	error: unknown;
	video: string | null;
}

const useVideo = (fileName: string): VideoState => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>(null);
	const [video, setVideo] = useState<string | null>(null);

	useEffect(() => {
		const fetchVideo = async () => {
			try {
				const response = await import(`../assets/videos/${fileName}`);
				setVideo(response.default);
			} catch (err) {
				setError(err as unknown);
			} finally {
				setLoading(false);
			}
		};

		fetchVideo();
	}, [fileName]);

	return {
		loading,
		error,
		video,
	};
};

export default useVideo;
