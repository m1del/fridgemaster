export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username='Username required';
    }

    if(!values.email){
        errors.email='Email required';
    }
    
    if(!values.password){
        errors.password='Password is required';
    }else if(values.password.length < 8) {
        errors.password='Password needs to be 8 characters or more';
    }

    if(!values.password2){
        errors.password2='Please confirm password';
    } else if(values.password2 !== values.password){
        errors.password2='Passwords do not match';
    }
    return errors;
}