const updateUser = document.querySelector("#update");
const axios = require('axios');
const res = require('express/lib/response');

updateUser.addEventListener('submit', (event)=>{
    const data = serializeForm("#update");

    axios.put(`http://localhost:3000/api/update-user/${data.id}`, { data })
    .then(responce=>{

    })
    .catch(err=>{
        console.log(err)
    });

    event.preventDefault();


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