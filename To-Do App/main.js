
var clearTodos = document.getElementById('clear');
var todoList = document.querySelector("ul");          //variables containing references to the emelemnts in the html page
var formField = document.querySelector('form');
var input = document.getElementById('user-todo');

// var todosArray = localSorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')): [];         //declare array to hold todos

//localStorage.setItem('todos', JSON.stringify(todosArray));  //local storage needs a string.

//var storage = JSON.parse(localStorage.getItem('todos'));



clearTodos.addEventListener('click', function(){   //listens for a click on the 'clear' button
 while(todoList.firstChild){                        //while there is something in the list then
   todoList.removeChild(todoList.firstChild);      //remove the child
 }
 //localStorage.clear();
});

formField.addEventListener('submit', function(e){    //listens for a return key press and contains a function
 e.preventDefault(); //prevents the page from being refreshed every time the user hits return

//  todosArray.push(input.value);    //push onto array
 //localStorage.setItem('todos', JSON.stringify(todosArray));

 todoMaker(input.value);                             //calls the todoMaker function and passes the value from the input
 input.value = '';                                   //clears input field
})

var todoMaker = function(text){                      //todo maker function
 var todo = document.createElement('li');           //create element
 todo.textContent = text;                          //set the text
 todoList.appendChild(todo);                        //append to the todoList element
}

//for(var i=0; i<storage.length;i++){   populates the list with todos from storage
 //todoMaker(storage[i]);
//}
