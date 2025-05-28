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
