function add() {
    var input = document.getElementById("todoinput");
    var text = input.value.trim(); // Removes leading/trailing spaces
    if (text !== "") {
        var li = document.createElement("li");
        li.textContent = text;
        
        var btn = document.createElement("button");
        btn.textContent = "delete";
        btn.classList.add("deletebtn");

        // Delete functionality
        btn.onclick = function () {
            li.remove();
        };

        li.appendChild(btn);
        document.getElementById("todolist").appendChild(li);

        // Clear input after adding item
        input.value = "";
    } else {
        alert("Please enter a valid task."); // Feedback for empty input
    }
}