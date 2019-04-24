import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

/* GET*  Hace la peticion a la url, y devuelve una respuesta observable, la cual nos subscribiremos desde el componente*/
  getAllApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
      return this.http.get<Task[]>(url);

  }

  getOneTask(id: string){
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<Task>(url)
  }

 /* POST*   */
  createTask(task: Task){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.post(url, task);
  }

  updateTask(task: Task){
    const url = `https://jsonplaceholder.typicode.com/posts/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(id:string){
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete(url);
  }


}
