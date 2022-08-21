// validate code

    // return true - form is valid
    // return false - form is not valid
    function validate() {
        let flag = false;
        // name feild
        let name = $('.name-feild').val();
        if (name == "" || name == undefined) {
            $(".name-feild-msg").html("Name is required!").addClass("text-danger");
            f = false;
        }
        else{
            $(".name-feild-msg").removeClass("text-danger").addClass(".form-text");
            f = true;
        }

        // email validation
        let email = $('.email-feild').val();
        let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email == "" || email == undefined) {
            $(".email-feild-msg").html("Email is required!").addClass("text-danger");
            f = false;
        }
        else if (exp.test(email) == false) {
            $(".email-feild-msg").html("Invalid Email, email must contain @ , . (example@gmail.com) !").addClass("text-danger");
            f = false;
        }
        else{
            $(".email-feild-msg").removeClass("text-danger").addClass(".form-text");
            f = true;
        }

        // phone number validation
        let phone = $('.phone-feild').val();
        // let exp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (phone == "" || phone == undefined) {
            $(".phone-feild-msg").html("Phone number is required!").addClass("text-danger");
            f = false;
        }
        else if (phone.length != 10) {
            $(".phone-feild-msg").html("Phone Number length must be of 10 digit").addClass("text-danger");
            f = false;
        }
        else{
            $(".phone-feild-msg").removeClass("text-danger").addClass(".form-text");
            f = true;
        }

        return f;
    }