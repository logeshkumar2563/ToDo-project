function add(){
    var input = document.getElementById("todoinput");
    var text = input.value.trim();
    if(text !==""){
        var li = document.createElement("li");
        li.textContent =text;
        var btn =document.createElement("button");
        btn.textContent="delete";
        btn.classList.add("deletebtn");
        btn.onclick = function(){
            li.remove();
        };
li.appendChild(btn);
document.getElementById("todolist").appendChild(li);
input.value="";
    }
}