import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private _count = new BehaviorSubject<number>(0);
  count$ = this._count.asObservable();

  count: number = 0; 

  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  addToCart(user_id: number, id_prod: number): Observable<any> {
    const url = `${this.apiUrl}addtopanier/${user_id}/${id_prod}`;
    return this.http.post(url, {});
  }
  getcount(): number {
    return this._count.value;
  }

  incrementCount() {
    this._count.next(this._count.value + 1);
  }
 


 
  increment() {
    this._count.next(this._count.value + 1);
  }

  
  decrement() {
    if (this._count.value > 0) {
      this._count.next(this._count.value - 1);
    }
  }
  // Méthode pour obtenir le nombre d'articles dans le panier
  getCount(): number {
    return this._count.value;
  }


  articles = [
    { id: 1, name: 'Set of 6 round bowls', price: 20, ref: 'BS1' },
    // Ajoutez d'autres articles ici
  ];



  getArticleById(id: number) {
    return this.articles.find(article => article.id === id);
  }

}
