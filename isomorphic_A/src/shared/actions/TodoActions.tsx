export function createTodo(text : string) {
  return {
    type: 'CREATE_TODO',
    text,
    date: Date.now()
  }
}
export function editTodo(id : number, text : string) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}
export function deleteTodo(id : number) {
  return {
    type: 'DELETE_TODO',
    id
  };
}
