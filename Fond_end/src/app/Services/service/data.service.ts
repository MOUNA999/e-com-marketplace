import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataService {



//Gestion de produit --------Début------------------
constructor(private httpClient:HttpClient) { }

getData(){
  return this.httpClient.get('http://127.0.0.1:8000/api/produit/get');
}

deleteData(id: number){
  return this.httpClient.delete('http://127.0.0.1:8000/api/produit/delete/'+id);
}
insertData(data: any) {
  
return this.httpClient.post('http://127.0.0.1:8000/api/produit/post', data);
}

updateData(id: number, data: any) {
  return this.httpClient.put('http://127.0.0.1:8000/api/produit/update/' + id, data);
}

registerClient(data:any){
  return this.httpClient.post('http://127.0.0.1:8000/api/inscription', data);
}
login(data:any){
  return this.httpClient.post('http://127.0.0.1:8000/api/connexion' , data);
}
//Gestion de produit --------Fin------------------






}
