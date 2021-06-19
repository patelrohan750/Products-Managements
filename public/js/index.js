$('#registerForm').validate({
	rules: {
		name: {
			required: true,
			minlength: 3
		},
		email: {
			required: true,
			email: true
		},
		password: {
			required: true,
			minlength: 5
		},
		cpassword: {
			required: true,
			minlength: 5,
			equalTo: '#password'
		}
	},
	messages: {
		name: {
			minlength: 'your name at least 3 character'
		},
		email: {
			email: 'please Enter Valid Email'
		},
		password: {
			minlength: 'your password at least 5 character'
		},
		cpassword: {
			minlength: 'your password at least 5 character',
			equalTo: 'please Enter same password as above'
		}
	}
});
