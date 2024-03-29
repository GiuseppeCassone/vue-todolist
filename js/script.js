// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto :temporale_nuvola_e_pioggia:, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)



const { createApp } = Vue;
        
createApp({
    data() {
        return {
            
            newTodo: "",

            todolist: [
                {
                    text: "Andare a fare la spesa",
                    done: false,
                },
                {
                    text: "Passare in farmacia",
                    done: true,
                },
                {
                    text: "Pagare le bollette",
                    done: false,
                },
                {
                    text: "Completare l'esercizio di Boolean",
                    done: true,
                },
                {
                    text: "Andare a giocare a D&D",
                    done: false,
                },
                
            ],
            
        }
    },

    methods: {
// Funzione che permette di eliminare un elemento della lista al click della "X"
        deleteTodo(toDoIndex){
            this.todolist.splice(toDoIndex, 1);
        },

// Funzione che permette di aggiungere un compito al click del bottone aggiungi
        addTodo(){
            this.todolist.push({ text: this.newTodo, done: false});
            this.newTodo = "";
        },

// Funzione che cambia il valore di .done al click
        invertTodo(currentTodo){
            if(currentTodo.done == false){
                currentTodo.done = true;
            } else{
                currentTodo.done = false;
            }
        }
    }
}).mount("#app");