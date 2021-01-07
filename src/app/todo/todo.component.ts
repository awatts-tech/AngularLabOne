import { Component, OnInit } from '@angular/core';

interface Todo{
  task: string;
  completed: boolean;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public Todos: Todo[];
 
  // input: string = "Add your to-do";
  
  constructor() {

    this.Todos = [
      {task: 'fold clothes', completed: true},
      {task: 'put clothes in dresser', completed: true},
      {task: 'relax', completed: true},
      {task: 'try to pet cat', completed: false},
      {task: 'pet dog', completed: true},
      {task: 'be awesome', completed: true},
    ];
   }

  ngOnInit(): void {
  }

}
