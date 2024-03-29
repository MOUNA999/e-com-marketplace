import { Component,OnInit } from '@angular/core';
import { DataService } from '../../Services/service/data.service';
import { Produit } from '../../Models/produit';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { NgModalContentComponent } from '../../Component_client/ng-modal-content/ng-modal-content.component';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produits:any;
  produit: Produit = new Produit();
  showForm: boolean = false;
  selectedProduct: any;
  
   constructor(private dataService:DataService,private modalService: NgbModal){}
  
  ngOnInit():void{
   this.getProduitData();
  }
  
  getProduitData(){
    this.dataService.getData().subscribe(res=> {
  this.produits=res;
    } );
  }
  
  deleteData(id: number){ 
     this.dataService.deleteData(id).subscribe(res=> {
    this.getProduitData();
      } );
    }
    
    insertData(){
      this.dataService.insertData(this.produit).subscribe(res=> {
        this.getProduitData();
        this.showForm = false; // Masquer le formulaire après l'ajout
      } )
    }

    openUpdateModal(produit: any) {
      const options: NgbModalOptions = { size: 'lg' };
      const modalRef = this.modalService.open(NgModalContentComponent, options);
      modalRef.componentInstance.produit = { ...produit };
      modalRef.result.then(
        (result) => {
          // Logique après la fermeture de la modal (par exemple, recharger les données)
          this.getProduitData();
        },
        (reason) => {
          // Logique si la modal est fermée de manière inattendue (par exemple, appuyer sur Échap)
        }
      );
    }
    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        this.produit.image = file; // Stockez le fichier dans la propriété Image_Produit
      }
    }
    toggleForm() {
      this.showForm = !this.showForm; // Inverser la visibilité du formulaire
    }
    openCreateModal() {
      const options: NgbModalOptions = { size: 'lg' };
      const modalRef = this.modalService.open(NgModalContentComponent, options);
      modalRef.componentInstance.produit = new Produit(); // Initialiser pour la création
      modalRef.result.then(
        (result) => {
          // Logique après la fermeture de la modal (par exemple, recharger les données)
          this.getProduitData();
        },
        (reason) => {
          // Logique si la modal est fermée de manière inattendue (par exemple, appuyer sur Échap)
        }
      );
    }

    
}
