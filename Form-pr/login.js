$(document).ready(function() {
    $(".form").submit(function(event) {
        
        event.preventDefault()

        $("#err").text("Your Form Has Been SUbmitted")

        let user = $("#user").val()
        let user_valid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/

        if(user === ""){
            $("#err").text("Please Enter Name")
            $("#err").css("color","red")
        } else if(!user_valid.test(user)) {
            $("#err").text("Please Enter Valid name")
            $("#err").css("color","red")
        }

        let pass = $("#password").val()
        let pass_valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

        if(pass === ""){
            $("#err").text("Please Enter password")
            $("#err").css("color","red")
        } else if(!pass_valid.test(pass)) {
            $("#err").text("Please Enter Valid password")
            $("#err").css("color","red")
        }

    })
})