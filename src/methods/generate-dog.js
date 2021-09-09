export const generateDog = ({ name, age, isPedigree }) => {
	return `Name: ${name}, Age: ${age}, Pedigree: ${isPedigree ? 'Yes' : 'No'}`
}

export default generateDog
