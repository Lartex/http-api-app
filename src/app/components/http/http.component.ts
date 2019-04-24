import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html'
})
export class HttpComponent implements OnInit {

  private dataApi = null;


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    //this.getAllApi();
    //this.getOneTask();


  }

  //Se subscribe al observable getAllApi, y asi obtiene los datos que hemos solicitado mediante http, la data tendra los datos.
  getAllApi(){
    this._httpService.getAllApi()
      .subscribe(data => console.log(data));
  }

  getOneTask(){
    this._httpService.getOneTask('1')
    .subscribe(data => console.log(data));
  }

  createTask(){
    const task = {
      "userId": '300',
      "id": '250',
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "completed": true
    };

    this._httpService.createTask(task)
      .subscribe(data => console.log(data))
  }

  updateTask(){
    const task = {
      "userId": '2',
      "id": '2',
      "title": "MODIFICADO",
      "completed": true
    };

    this._httpService.updateTask(task)
      .subscribe(data => console.log(data))


  }

  deleteTask(){
    this._httpService.deleteTask('2')
    .subscribe(data => console.log(data));
  }


}

