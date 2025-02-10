# JS-Learning


const apiUrl = "http://localhost:3001/tasks";
 

// Fetch & Display Tasks
async function fetchTasks(filter = "all") {
    try {
        let res = await fetch(apiUrl);
        if (!res.ok) throw new Error('Failed to fetch tasks');
        let tasks = await res.json();

        // Apply filtering
        if (filter !== "all") {
            tasks = tasks.filter(task => task.status === filter);
        }

        document.getElementById("taskList").innerHTML = tasks.map(task =>
            `<li id="task-${task.id}">
                ${task.id}. ${task.title} - <b>${task.status}</b> 
                <button onclick="editTask(${task.id})">✏️ Edit</button>
                <button onclick="toggleStatus(${task.id}, '${task.status}')">🔄 Toggle</button>
                <button onclick="deleteTask(${task.id})">🗑️ Delete</button>
            </li>`
        ).join('');
    } catch (error) {
        console.error(error);
        alert('Error fetching tasks');
    }
}

// Add Task (POST)
async function addTask() {
    let taskTitle = document.getElementById("taskInput").value.trim();
    if (!taskTitle) {
        alert("Task cannot be empty!");
        return;
    }

    try {
        let newTask = {   title: taskTitle, status: "pending" };
        
        let res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });

        if (!res.ok) throw new Error('Failed to add task');

        document.getElementById("taskInput").value = ""; // Clear input
        fetchTasks(); // Refresh the task list
    } catch (error) {
        console.error(error);
        alert('Error adding task');
    }
}

// Edit Task (PATCH)
async function editTask(id) {
    console.log(id);
    try {
        let task = await fetch(`${apiUrl}/${id}`).then(res => res.json());
        let newTitle = prompt("Enter new title:", task.title);
        
        if (!newTitle || newTitle.trim() === "") return;

        let res = await fetch(`${apiUrl}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle.trim() })
        });

        if (!res.ok) throw new Error('Failed to update task');

        fetchTasks();
    } catch (error) {
        console.error(error);
        alert('Error editing task');
    }
}

// Toggle Task Status (PATCH)
async function toggleStatus(id, currentStatus) {
    console.log(id);

    let newStatus = currentStatus === "pending" ? "completed" : "pending";
    
    try {
        let res = await fetch(`${apiUrl}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
        });

        if (!res.ok) throw new Error('Failed to toggle task status');

        fetchTasks();
    } catch (error) {
        console.error(error);
        alert('Error toggling task status');
    }
}

// Delete Task (DELETE)
async function deleteTask(id) {
    console.log(id);

    try {
        let res = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

        if (!res.ok) throw new Error('Failed to delete task');

        fetchTasks();
    } catch (error) {
        console.error(error);
        alert('Error deleting task');
    }
}

// Filter Tasks
function filterTasks(status) {
    fetchTasks(status);
}

// Initial Fetch
fetchTasks();
