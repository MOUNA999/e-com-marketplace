import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../Models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieSerivceService {
  apiUrl = "http://localhost:8000/api";

  constructor(private httpClient:HttpClient) { }

  getCategories(){
    return this.httpClient.get<Categorie[]>(`${this.apiUrl}/categories`);
  }
  deleteCategorie( id:any ){
    return this.httpClient.delete(`${this.apiUrl}/deletecategorie/${id}`);
  }
  persistCategorie( data:any ){
    return this.httpClient.post<Categorie>(`${this.apiUrl}/addcategorie`, data);
  }
  updateCategorie( categorie:any ){
    return this.httpClient.put<Categorie>(`${this.apiUrl}/updatecategorie/${categorie.id}`, categorie);
  }

}
