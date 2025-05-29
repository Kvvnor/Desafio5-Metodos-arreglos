
const inputTodo = document.getElementById('inputTodo');
const btnAdd = document.querySelector('.btn-add');
const tableTodo = document.getElementById('tableTodo');
const tbody = tableTodo.querySelector('tbody');

let lastCorrelativeID = 3;

const todoList = [
    {
        id: 1,
        dataId: Date.now() + 1,
        name: 'Análisis de mercado',
        completed: false
    },
    {
        id: 2,
        dataId: Date.now() + 2,
        name: 'Ejecutar el plan de marketing',
        completed: false
    },
    {
        id: 3,
        dataId: Date.now() + 3,
        name: 'Revisar el presupuesto del proyecto',
        completed: false
    }
];


