jQuery('#form').validate({
	rules:{
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:6
		},
		name:"required",
		confirmPassword: {
			required: true,
			equalTo: "#password"
		}
	},
	messages:{
		FirstName:"Please Enter your First Name",
		LastName:"Please Enter your Last Name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},
		confirmPassword:{
			required:"enter your confirm password",
			equalTo: "Passwords do not match"
		}
	},
	submitHandler:function(form){
		form.submit();
	}
});


function increase(){
    var element=document.getElementById('increment Text');
    var value=element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('increment Text').innerHTML=value;
}

