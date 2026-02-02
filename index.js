const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("incraseBtn");
const labelCount = document.getElementById("labelCount");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    document.getElementById("labelCount").textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    document.getElementById("labelCount").textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    document.getElementById("labelCount").textContent = count;
}
