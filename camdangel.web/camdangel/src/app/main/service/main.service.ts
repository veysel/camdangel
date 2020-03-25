import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MenuModel } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private DataApiUrl: string = "https://localhost:5001/";

  constructor(
    private http: HttpClient
  ) { }

  public GetMenu() {
    return this.http.get<Array<MenuModel>>(this.DataApiUrl + "Menu");
  }
}