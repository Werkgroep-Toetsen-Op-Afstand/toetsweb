/**
 * Convert an existing SVG element to a base64 encoded PNG image
 * @param svg The SVG element to convert
 * @param width The width of the PNG image
 * @param height The height of the PNG image
 * @returns A base64 encoded PNG image
 */
export const SvgToPng = async (svg: Element, width = 1024, height = 1024) => {
	// Convert existing SVG to string version
	const serializedSvg = new XMLSerializer().serializeToString(svg)

	// Create a new image and set the source to the serialized SVG
	const img = new Image();
	img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(serializedSvg)}`;

	// Create a promise and wait for the image to load
	await new Promise((resolve, reject) => {
		img.onload = resolve;
		img.onerror = reject;
	});

	// Create a new canvas with the specified width and height
	const canvas = document.createElement("canvas");
	[canvas.width, canvas.height] = [width, height];

	// Draw the image on the canvas
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Could not get 2d context");
	ctx.drawImage(img, 0, 0, width, height);

	// Return the canvas as a image
	return canvas.toDataURL("image/png");
}