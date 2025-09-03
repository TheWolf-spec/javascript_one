const taskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const alertDiv = document.getElementById('alert');

function addNewTaskElement(texto_li){
    const liItem = document.createElement('li');
    liItem.textContent= texto_li;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent= 'X';
    deleteBtn.classList.add('delete-btn');
    liItem.appendChild(deleteBtn);

    const marcar = document.createElement('input');
    marcar.type = 'checkbox';
    marcar.classList.add('complete-checkbox');
    liItem.appendChild(marcar);

    return liItem;
};


addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() === ''){
        console.log('No se puede agregar una tarea vacia');
        alertDiv.textContent = "No se puede agregar una tarea vacia";
        alertDiv.style.color = 'red';
        
    }else{
        alertDiv.textContent = "";
        const liTask  = addNewTaskElement(taskInput.value);
        taskList.appendChild(liTask);

    }
});

taskList.addEventListener('click',(event) => {
    // (event) => { ... }: Esta es una función flecha (arrow function) que define qué hacer
    // cuando el click ocurre.
    // El objeto event (o e) contiene mucha información sobre el evento que acaba de ocurrir:
    //      dónde se hizo clic, qué tecla se presionó (si fuera un evento de teclado), etc. Es como un reporte detallado del evento.
    //¿Qué significa esto en conjunto? Estamos diciendo:
    // "Escucha todos los clics que ocurran en cualquier parte dentro de la lista de tareas (taskList).
    // Cuando un clic suceda, ejecuta esta función, y dame toda la información del clic en el objeto
    // event."
    if (event.target.classList.contains('delete-btn')){
    // event.target:
    // Esta es la propiedad más crucial aquí. Dentro del objeto event,
    // event.target se refiere al elemento HTML específico en el que se hizo clic.
    // Si haces clic en el texto de una tarea, event.target será el <span> que contiene el texto
    // (o el <li> si el texto no está en un <span>).
    // Si haces clic en el botón "X", event.target será ese botón "X" específico.

    // .classList:
    // Es una propiedad de los elementos HTML que te da acceso a una lista de todas las clases CSS
    // aplicadas a ese elemento.

    // .contains('delete-btn'):
    // Es un método de classList que devuelve true si la lista de clases del elemento contiene
    // la clase 'delete-btn', y false en caso contrario.
    
    // ¿Qué significa esto en conjunto? Estamos preguntando:
    // "El elemento específico en el que se hizo clic, ¿tiene la clase 'delete-btn'?"

    // Este es el corazón de la delegación de eventos:
    // En lugar de poner un escuchador en cada botón "X" individualmente
    // (lo cual sería ineficiente si tienes muchas tareas o si las tareas se añaden dinámicamente),
    // ponemos un solo escuchador en el padre (taskList). Cuando ocurre un clic,
    // verificamos si el clic realmente se hizo en uno de nuestros botones de eliminación.
        const liRemove = event.target.parentElement;
        taskList.removeChild(liRemove);
    };
    if (event.target.classList.contains('complete-checkbox') && (event.target.type == 'checkbox')){
        const liMarcado = event.target.parentElement;

        liMarcado.classList.toggle('completed');
        // Esta es la parte clave. El método .toggle() de classList es muy útil:
        // Si el <li> no tiene la clase completed, .toggle() se la añade.
        // Si el <li> ya tiene la clase completed, .toggle() se la quita.
        // Esto permite que el mismo código marque y desmarque la tarea.
    };
});
