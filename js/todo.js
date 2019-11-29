function addToDo(event) {
    event.preventDefault();
    
    const todo = document.querySelector('#todo-items');
    const value = todo.value.trim();
    
    if (value.length > 0) {
    const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();
    
    const id = `todo-add-${hash}`;
    const template = document.querySelector('#todolist');
    const item = document.importNode(template.content, true);
    const label = item.querySelector('label[for]');
    const input = item.querySelector('#todo-add')
    const list = document.querySelector('#TODOLISTS');
    
    input.setAttribute('id', id);
    label.setAttribute('for', id);
    
    label.textContent = value;
    const db = window.localStorage;
    const itemValue = new XMLSerializer().serializeToString(item);
    db.setItem(id, itemValue);
    
    list.appendChild(item);
    }
    
    todo.value = '';
    } 
    function addStoredItems(item){
    const db = window.localStorage;
    const list = document.querySelector('#TODOLISTS');
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
    }
    function loadContent(){
    const db = window.localStorage;
    Object.keys(db).forEach(addStoredItems);
    Object.keys(db).forEach((item) => {
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
    });
    };
   
    function bindFuncToButton() {
    let button = document.querySelector('#button');
    button.addEventListener('click', addToDo );
    loadContent();
    }
    function checkBoxUpdate(cbox){
    if(cbox.checked){
    cbox.setAttribute('checked', cbox.checked);
    }
    else{
    cbox.removeAttribute('checked');
    }
    const itemValue = new XMLSerializer().serializeToString(cbox.parentNode);
    const id = cbox.id;
    window.localStorage.setItem(id, itemValue);
}

function remove(kaler){
kaler.preventDefault();
var as = kaler.currentTarget.parentNode.querySelector('input').id;
localStorage.removeItem(as);
const item = kaler.currentTarget.parentNode;
const list = item.parentNode;
list.removeChild(item);

}

var ani = document.getElementById("hkh");
 function animation(){
     ani.style.animation = "slidein 4s 2"
 }

 ani.addEventListener("animationstart", startfunction);
 ani.addEventListener("animationend", endfunction);

 function startfunction(){
    ani.style.backgroundColor = "yellow";
 }

 function endfunction(){
     ani.style.backgroundColor = "green";
 }


    bindFuncToButton();