function displayTime() {
    let curentDate = new Date();
    let hours = curentDate.getHours();
    let minutes = curentDate.getMinutes();
    let fullTime = hours + ":" + minutes;

    document.getElementById("time").innerHTML = fullTime;
}
setInterval(displayTime, 10);

function fun_c(){
    let a = document.getElementById("fon1").value.length 
    document.getElementById("fon1").value = document.getElementById("fon1").value.slice(0,a-1)     
}

function fun_AC(){
    let answer = document.getElementById("fon1");
    answer.value = ""
}

function insert(num) {
    document.getElementById("fon1").value += num
}

function equal() {
    let exp = document.getElementById("fon1").value;
    if(exp) {
        document.getElementById("fon1").value = eval(exp)
    }
}