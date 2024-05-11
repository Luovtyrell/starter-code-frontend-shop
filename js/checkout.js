function validate() {
	let error = 0
	const fields = ['fName', 'fLastN', 'fEmail', 'fPassword', 'fPhone', 'fAddress']
	const abecedarioRegex = /^[a-zA-Z]+$/
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/

	fields.forEach(formItem => {
		const field = document.getElementById(formItem)
		switch (formItem) {
			case 'fName':
			case 'fLastN':
				if (!abecedarioRegex.test(field.value)) {
					error++
					field.classList.add('is-invalid')
				} else {
					field.classList.remove('is-invalid')
				}
				break;
			case 'fEmail':
				if (!emailRegex.test(field.value)) {
					error++
					field.classList.add('is-invalid')
				} else {
					field.classList.remove('is-invalid')
				}
				break;
			case 'fPassword':
				if (!passwordRegex.test(field.value)) {
					error++
					field.classList.add('is-invalid')
				} else {
					field.classList.remove('is-invalid')
				}
				break;
			case 'fPhone':
				if (isNaN(field.value) || field.value.length < 9) {
					error++
					field.classList.add('is-invalid')
				} else {
					field.classList.remove('is-invalid')
				}
				break;
			default:
				if (field.value === "" || field.value.length < 3) {
					error++
					field.classList.add("is-invalid")
				} else {
					field.classList.remove("is-invalid")
				}
		}
	})

	if (error > 0) {
		alert("Error")
		return false
	} else {
		alert("OK")
		return true
	}
}
