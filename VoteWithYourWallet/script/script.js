function increment(){
    var element=document.getElementById('vote');
    var value=element.innerHTML;

    ++value;
    console.log(value);
    document.getElementById('vote').innerHTML=value;
}

jQuery('#frm').validate({
	rules:{
		name:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		},
	},messages:{
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
			required:"enter yor confirm password",
			
		}
	},
	submitHandler:function(form){
		form.submit();
	}
});

