import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../Models/produit';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = "http://localhost:8000/api";

  constructor(private httpClient:HttpClient) { }

  getArticles(){
    return this.httpClient.get<Produit[]>(`${this.apiUrl}/produit/get`);
  }
  getOneArticle( id:any ){
    return this.httpClient.get<Produit>(`${this.apiUrl}/article/${id}`);
  }
  deleteArticle( id:any ){
    return this.httpClient.delete(`${this.apiUrl}/deletearticle/${id}`);
  }
  persistArticle( data:any ){
    console.log(data);
    return this.httpClient.post(`${this.apiUrl}/addarticle`, data);
  }
  updateArticle( article:any ){
    return this.httpClient.put<Produit>(`${this.apiUrl}/updatearticle/${article.id}`, article);
  }

  getProductsByIds(ids: number[]) {
    return this.httpClient.get<any[]>(`${this.apiUrl}/products`).pipe(
      map(products => products.filter(product => ids.includes(product.id)))
    );
  }

 
  // Méthode pour récupérer les produits par catégorie
  getProductsByCategoryId(categoryId: number): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(`${this.apiUrl}/byCategory/${categoryId}`);
  }
 
}
