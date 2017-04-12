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
		default:
			console.log('In Default')
			return state
	}

}




var state = { count: 0 }
var store = Redux.createStore(counter)
var counterEl = document.getElementById('counterReducer')
console.log(store)

function render(){
	console.log('In Render')
	console.log(store.getState())
	var state = store.getState()
	counterEl.innerHTML = state.count.toString()
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
	store.dispatch({ type: 'NEW', payload: })
})
document.getElementById('delete')
	.addEventListener('click', function(){
	store.dispatch({ type: 'DELETE'})
})
document.getElementById('delete-all')
	.addEventListener('click', function(){
	store.dispatch({ type: 'DELETEALL'})
})
