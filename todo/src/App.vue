<template>
  <div class="content">
      <h1>Todo Uygulaması </h1>

      <form @submit.prevent="addTodo">

 <div class="field">
  <label class="label">TODO</label>
  <div class="control">
    <input v-model="todo"  class="input" type="text" placeholder="Not Gir">
  </div>
  <h1>{{todo}}</h1>
  
  <button type="submit" class="button is-warning">Ekle</button>
</div>

      </form>
      <div v-for="todo in todos" :key="todo.id" class="card my-5 mx-5">
  
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        
      </div>
      <div class="media-content">
        <p   class="title is-4">{{todo.content}}</p>
        <p class="subtitle is-6">{{todo.done}}</p>
      </div>
    </div>

    
  </div>
</div>
     

  </div>



  
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const todo =ref('')
        const todos =ref([])

        function addTodo(){
            todos.value.push({
                done:false,
                content: todo.value,
            })
            todo.value=''      //submit yaptıktan sonra texti sıfırlar
        }
        function done(todo){
            todo.done=!todo.done
        }
        return{
            todo,
            todos,
            addTodo,
        }
    },
}
</script>

<style>
.done{
    text-decoration: line-through;
}
</style>
