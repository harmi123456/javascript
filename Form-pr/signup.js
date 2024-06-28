
$(document).ready(function() {
    $(".form").submit(function(event) {

        event.preventDefault()

        $("#err").text("Your Form has been submitted...")
        $("#err").css("color","Red")
        
        let name = $("#user").val()
        let ch_name = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/

        if(name === "") {
            $("#err").text("please Enter the name")
        } else if(!ch_name.test(name)) {
            $("#err").text("Please Enter Valid name")
        }

        let email = $("#email").val()
        let rjmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(email === ""){
            $("#err").text("Please Enter Email id")
        } else if(!rjmail.test(email)){
            $("#err").text("Enter valid mail id")
        }

        let pass = $("#password").val()
        let ch_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

        if(pass === "") {
            $("#err").text("Please Enter Your Password")
        } else if(!ch_pass.test(pass)) {
            $("#err").text("Please Enter Strong Password ")
        }

        let confirm = $("#confirm").val()

        if(confirm === ""){
            $("#err").text("Confirm Your Password")
        } else if(confirm !== pass) {
            $("#err").text("Entered Password Doesn't Match with your Password")
        }
    })
})
