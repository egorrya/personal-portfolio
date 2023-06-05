import { useEffect, useState } from 'react';

interface FileState {
	loading: boolean;
	error: unknown;
	file: string | null;
}

const useFile = (filePath: string): FileState => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>(null);
	const [file, setFile] = useState<string | null>(null);

	useEffect(() => {
		const fetchFile = async () => {
			try {
				const response = await import(`../${filePath}`);
				setFile(response.default);
			} catch (err) {
				setError(err as unknown);
			} finally {
				setLoading(false);
			}
		};

		fetchFile();
	}, [filePath]);

	return {
		loading,
		error,
		file,
	};
};

export default useFile;
