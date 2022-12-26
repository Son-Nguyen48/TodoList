window.addEventListener("load", () => {
  const form = document.querySelector(".new-task-form");
  const taskTitleInput = document.querySelector("#title-task-name");
  const taskStatusInput = document.querySelector("#status-task");
  const taskCreatedTimeInput = document.querySelector("#created-task-time");
  const list_Task = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitleValue = taskTitleInput.value;
    const taskStatusValue = taskStatusInput.value;
    const taskCreatedTimeValue = taskCreatedTimeInput.value;

    const task = document.createElement("div");
    task.classList.add("task");
    //create content element
    const task_content = document.createElement("div");
    task_content.classList.add("content");

    const task_title = document.createElement("div");
    task_title.classList.add("title");

    const task_status = document.createElement("div");
    task_status.classList.add("status");

    const task_created = document.createElement("div");
    task_created.classList.add("created");
    //create actions element
    const task_actions = document.createElement("div");
    task_actions.classList.add("actions");

    const edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerText = "Edit";
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerText = "Delete";

    const task_input_title = document.createElement("input");
    task_input_title.type = "text";
    task_input_title.classList.add("text");
    task_input_title.value = taskTitleValue;
    task_input_title.setAttribute("readonly", "readonly");

    const task_input_status = document.createElement("input");
    task_input_status.type = "text";
    task_input_status.classList.add("text");
    task_input_status.value = taskStatusValue;
    task_input_status.setAttribute("readonly", "readonly");

    const task_input_created = document.createElement("input");
    task_input_created.type = "text";
    task_input_created.classList.add("text");
    task_input_created.value = taskCreatedTimeValue;
    task_input_created.setAttribute("readonly", "readonly");

    task_content.appendChild(task_title);
    task_content.appendChild(task_status);
    task_content.appendChild(task_created);
    task_content.appendChild(task_input_title);
    task_content.appendChild(task_input_status);
    task_content.appendChild(task_input_created);

    task_actions.appendChild(edit_button);
    task_actions.appendChild(delete_button);

    task.appendChild(task_content);
    task.appendChild(task_actions);

    list_Task.appendChild(task);

    edit_button.addEventListener("click", () => {
      if (edit_button.innerText.toLowerCase() == "edit") {
        task_input_title.removeAttribute("readonly");
        task_input_status.removeAttribute("readonly");
        task_input_created.removeAttribute("readonly");
        task_input_title.focus();
        task_input_status.focus();
        task_input_created.focus();
        edit_button.innerText = "Save";
      } else {
        task_input_title.setAttribute("readonly", "readonly");
        task_input_status.setAttribute("readonly", "readonly");
        task_input_created.setAttribute("readonly", "readonly");
        edit_button.innerText = "Edit";
      }
    });

    delete_button.addEventListener("click", () => {
      list_Task.removeChild(task);
    });
  });
});
