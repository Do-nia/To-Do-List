var projectValue;
var count = 0;
function add() {
    projectValue = document.getElementById("btn").value;
    var myP = document.createElement("p");
    myP.appendChild(document.createTextNode(projectValue));
    document.getElementById("id2").append(myP);
    myP.setAttribute("draggable", "true");
    myP.setAttribute("ondragstart", "drag(event)");
    myP.setAttribute("id", count++);
    localStorage.setItem("name", projectValue);
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}
function drop(ev) {
    var area = ev.target;
    console.log(ev.dataTransfer.getData("text"));
    var id = ev.dataTransfer.getData("text");
    area.append(document.getElementById(id))
}
function allowDrag(ev) {
    ev.preventDefault();
}
function stopProp(e) {
    e.stopPropagation()
}