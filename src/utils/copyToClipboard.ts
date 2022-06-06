const copyToClipboard = (text: string, callback: () => void) => {
	navigator.clipboard.writeText(text).then(callback);
};

export default copyToClipboard;
