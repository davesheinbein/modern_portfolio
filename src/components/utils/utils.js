// Communal utility functions for the app
import jobpositions from './jobpositions.json';
import endorsementsData from './endorsementsdata.json';
// import certifications from './certifications.json';

export function getRandomJob() {
	if (
		!Array.isArray(jobpositions) ||
		jobpositions.length === 0
	)
		return null;
	const idx = Math.floor(
		Math.random() * jobpositions.length
	);
	return jobpositions[idx];
}

export function getShuffledEndorsements() {
	const arr = [...endorsementsData];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

/**
 * Typing animation utility for simulating typing effect on text.
 * @param {string} text - The text to type out.
 * @param {function} setTyped - State setter for the typed text.
 * @param {function} onComplete - Callback when typing is done.
 * @param {number} [speed=40] - Typing speed in ms per character.
 */
export function typeText(
	text,
	setTyped,
	onComplete,
	speed = 40
) {
	let idx = 0;
	setTyped('');
	function typeNext() {
		if (idx < text.length) {
			setTyped((prev) => prev + text[idx]);
			idx++;
			setTimeout(typeNext, speed);
		} else if (onComplete) {
			onComplete();
		}
	}
	typeNext();
}

/**
 * Paginate an array in a circular fashion.
 * @param {Array} arr - The array to paginate.
 * @param {number} startIdx - The starting index.
 * @param {number} count - Number of items per page.
 * @returns {Array} - The paginated items.
 */
export function getPaginatedItems(arr, startIdx, count) {
	if (!Array.isArray(arr) || arr.length === 0 || count <= 0)
		return [];
	const result = [];
	for (let i = 0; i < count; i++) {
		result.push(arr[(startIdx + i) % arr.length]);
	}
	return result;
}

/**
 * Find an image object by name from a list.
 * @param {Array} imgList - List of image objects with a 'name' property.
 * @param {string} targetImageName - The image name to find.
 * @returns {object|null} - The image object or null if not found.
 */
export function findImageByName(imgList, targetImageName) {
	if (!Array.isArray(imgList) || !targetImageName)
		return null;
	return (
		imgList.find(
			(img) => img && img.name === targetImageName
		) || null
	);
}
