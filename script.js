function check(){


let tr = ""
let clickInput1 = Number(document.getElementById("firstInput").value)
document.getElementById("numberXy").innerText = clickInput1;
// let clickInput2 = Number(document.getElementById("secondInput").value)
// document.getElementById("numberXyz").innerText = clickInput2;

        console.log("LOOP START")
        for(let i=1; i <= 10; i++){
            // tr += "<tr><td>2</td><td>x</td>" + "<td>" + i + "</td><td>=</td>" + "<td>" + 2 * i +"</td></tr>"
            tr += `<tr><td id="numberXyz">${document.getElementById("numberXy").innerText = clickInput1}</td><td>x</td><td >${i}</td><td>=</td><td>${document.getElementById("numberXy").innerText = clickInput1 * i}</td></tr>`
        }
        
        document.getElementById("mathTable").innerHTML = tr
        console.log("LOOP END" , tr)


        // ${i}
    }
    function checkreload(){
    document.location.reload()
    }