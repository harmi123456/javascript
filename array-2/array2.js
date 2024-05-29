  //Question - 1

    let size_1 = document.getElementById("in1").value
    let arr_1 = []
        for(let i=1; i<=size_1; i++){
            let num = prompt("Enter number :");
            document.getElementById("ans1").innerHTML += i+ "Number is : "+num+ "<br>"
            arr_1.push(num)
        }
        document.getElementById("ans1").innerHTML += "<br> Double of All elemenet is : "

        let fun_1 = arr_1.map((element_1) => {
            return element_1 * 2
        })
        document.getElementById("ans1").innerHTML += fun_1 


    //Question - 2

    let size_2 = document.getElementById("in2").value
    let arr_2 = []
     for(let i=1; i<=size_2; i++){
        let num_2 = prompt("Enter age :");
        document.getElementById("ans2").innerHTML += i+ "Number is : "+num_2+ "<br>"
        arr_2.push(num_2)
     }
     document.getElementById("ans2").innerHTML += "<br> age above 18 are : "

     let fun_2 = arr_2.filter((element_2) => {
        return element_2 >= 18
     })

     document.getElementById("ans2").innerHTML += fun_2