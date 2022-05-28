const hexToRgba = (hex: string = '#000000', alpha: number = 1): string => {
	const [r, g, b] = (hex.match(/\w\w/g) || []).map((x) => parseInt(x, 16));
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default hexToRgba;
