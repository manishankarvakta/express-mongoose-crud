const updateUser = document.querySelector("#update");


updateUser.addEventListener('submit', (event)=>{
	event.preventDefault();
    const data = serializeForm("#update");
	const URI = `http://localhost:3000/api/users?${data.id}`;
	console.log(data.id)
	console.log(data)
	fetch(`http://localhost:3000/api/users?id=${data.id}`, {
		method: 'PUT', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
	},
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(user => {
		console.log('Success:', user);
	})
	.catch((error) => {
		console.error('Error:', error);
	}); 


})

const serializeForm = (selector) => {
	const output = {};
	const form = document.querySelector(selector);
	[...form.querySelectorAll('input, textarea, select')].map((el) => {
		switch (el.localName) {
			case 'input':
			case 'textarea':
				output[el.getAttribute('name')] = (el.getAttribute('type') === 'checkbox') ? el.checked : el.value;
				break;
			case 'select':
				output[el.getAttribute('name')] = [...el.querySelectorAll('option')].map((option) => {
					if (option.selected) {
						return option.value;
					}
				}).filter((v) => {
					if (v) {
						return v;
					}
				});
				break;
		}
	});
	return output;
};