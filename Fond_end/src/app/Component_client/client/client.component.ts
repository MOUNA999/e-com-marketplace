import { Component , OnInit } from '@angular/core';
import { ClientService } from '../../Services/client.service';
import { Client } from '../../Models/Client';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent  {
  users:any;
  
  produit = new Client() ;
  showForm: boolean = false;
  selectedProduct: any;
  
   constructor(private dataService:ClientService){}
  
  ngOnInit():void{
   this.getProduitData();
  }
  
  getProduitData(){
    this.dataService.getData().subscribe(res=> {
  this.users=res;
    } );
  }
}
