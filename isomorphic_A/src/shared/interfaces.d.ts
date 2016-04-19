interface IHelloFormProps {
	todos: any;
    createTodo(text : string) : any;
    deleteTodo(id : number) : any;
    editTodo(id : number, text : string) : any;
}