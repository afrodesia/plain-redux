// Reducers

function counterReducer(state, action){

	if(typeof state === 'undefined'){
		return { count: 0 }
	}
	var nextState = {
		count: state.count
	}
	switch(action.type){
		case 'ADD':
			nextState.count = state.count + 1
			return nextState
			break;
		case 'MINUS':
			nextState.count = state.count - 1
			return nextState
			break;
		case 'RESET':
			nextState.count = 0
			return nextState		
		default:
			console.log('In Default')
			return state
	}
}
// STORE
function todoReducer(state, action){
	if(typeof state === 'undefined'){
		return { todos: [] }
	}
	var nextState = Object.assign({},state)

	
	switch(action.type){
		case 'NEW':
			nextState.todos.push(action.payload)
			return nextState
			break;
		case 'DELETE':
			nextState.todos.pop()
			return nextState
			break;
		case 'DELETEALL':
			nextState.todos = []
			return nextState
			break;		
		default:
			console.log('In Default')
			return state
	}

}


// var state = { count: 0 }
var store = Redux.createStore(todoReducer)
var counterEl = document.getElementById('counterReducer')
var todosInput = document.getElementById('todos')
var todosList = document.getElementById('todosList')

console.log(store)

function render(){

	console.log(store.getState())
	var state = store.getState()

	renderList(state)
	// counterEl.innerHTML = state.count.toString()
}
function renderList(state){
	todosList.innerHTML = '';
	for (var i = 0; i < state.todos.length; i++) {
		// var element = state.todos[i]
		var li = document.createElement('li')
		var todo = state.todos;
		li.innerHTML = todo.toString()
		todosList.appendChild(li)
	}
}

render()
store.subscribe(render)

// ACTIONS


document.getElementById('add')
	.addEventListener('click', function(){
	store.dispatch({ type: 'ADD'})
})
document.getElementById('minus')
	.addEventListener('click', function(){
	store.dispatch({ type: 'MINUS'})
})
document.getElementById('reset')
	.addEventListener('click', function(){
	store.dispatch({ type: 'RESET'})
})

document.getElementById('new')
	.addEventListener('click', function(){
	store.dispatch({ type: 'NEW', payload: todosInput.value })
})
document.getElementById('delete')
	.addEventListener('click', function(){
	store.dispatch({ type: 'DELETE'})
})
document.getElementById('delete-all')
	.addEventListener('click', function(){
	store.dispatch({ type: 'DELETEALL'})
})


