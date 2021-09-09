import { validateAndGenerate } from './methods'
import generateError from './methods/generate-error'

const list = document.querySelector('#dogs-list')
const errorMessage = document.querySelector('#error-message')

const handleSubmit = async event => {
	event.preventDefault()

	const nameInput = document.querySelector('input[name="name"]')
	const ageInput = document.querySelector('input[name="age"]')
	const pedigreeInput = document.querySelector('input[name="pedigree"]:checked')

	const input = {
		name: nameInput.value,
		age: +ageInput.value,
		isPedigree: pedigreeInput.value === 'true'
	}

	const validated = await validateAndGenerate(input)

	if (!validated) {
		return (errorMessage.innerHTML = generateError())
	}

	const newItem = document.createElement('li')
	const itemText = document.createTextNode(validated)
	newItem.appendChild(itemText)
	newItem.setAttribute('id', 'dog-item')

	list.appendChild(newItem)

	nameInput.value = ''
	ageInput.value = ''
	pedigreeInput.checked = false
}

;(() => {
	const form = document.querySelector('form')
	form.addEventListener('submit', handleSubmit)
})()
