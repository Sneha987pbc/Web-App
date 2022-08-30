let count = 0;

function save(){
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    // console.log(title,description);
    let task=document.createElement("div");
    task.setAttribute("class", "todo-note");
    let contentWrapper = document.createElement("div");
    contentWrapper.setAttribute("class", "content-wrapper");
    let heading=document.createElement("h1");
    let paragraph=document.createElement("p");

    let text=document.createTextNode(title);
    heading.appendChild(text);

    text=document.createTextNode(description);
    paragraph.appendChild(text);
    // paragraph.appendChild(text);

    contentWrapper.appendChild(heading);
    contentWrapper.appendChild(paragraph);

    task.appendChild(contentWrapper);

    let right=document.getElementById("right");
    right.appendChild(task);

    // BUTTON
    let cut=document.createElement("button");
    cut.innerHTML = `<img src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" height="50" width="50"/>`;
   
    // Object.assign(cut.style,cutting);
    cut.setAttribute("id","button"+count);
    cut.setAttribute("class", "delete-note")
    cut.setAttribute("onclick","deleteNote(this.id)");
    // cut.style.border-radius="6px";
    task.appendChild(cut);
    count++;
   
}
function deleteNote(id){
    // console.log("hello");
    // console.log(id);
    let button=document.getElementById(id);
    // console.log(button);
    // console.log(button.parentElement);
    let parent=button.parentElement;
    parent.style.display="none";


}

