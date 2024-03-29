import { Component , OnInit, Output, EventEmitter } from '@angular/core';

import { Produit } from 'src/app/Models/produit';
import { PanierService } from '../../Services/panier.service';
@Component({
  selector: 'app-spoon',
  templateUrl: './spoon.component.html',
  styleUrls: ['./spoon.component.css']
})
export class SpoonComponent {

  p: any; 
  imagesUrls: string[] = [
    'assets/img/socciete/p38.png',
    'assets/img/socciete/p21.png',
    'assets/img/socciete/p5.png',



    // Ajoutez autant d'URLs que nécessaire
  ]; 

  toggleColor(link: string) {
    this.resetColors(); // Réinitialise toutes les couleurs
    switch (link) {
  
      case 'panier':
        this.isPanierClicked = true;
        break;

    }
  }

  resetColors() {

    this.isPanierClicked = false;

  }

  isPanierClicked: boolean = false;
  isImageVisible: boolean = false;

  toggleImage(): void {
    this.isImageVisible = !this.isImageVisible;
  }
  isFullscreen: boolean = false;

  currentImageUrl: string = '';
  fullscreenImage: string = '';

  toggleFullscreen(imageUrl: string): void {
    this.isFullscreen = !this.isFullscreen;
    this.currentImageUrl = imageUrl;
  }

  userId: number = 0; // Initialiser l'ID utilisateur à 0

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    // Code d'initialisation ou de récupération de l'ID utilisateur si nécessaire
  }

  addToCart() {
    // Récupérez l'ID de l'utilisateur, l'ID du produit, le prix et la quantité du produit à partir de votre modèle ou de toute autre source
    const user_id = 1; // Exemple, vous devrez récupérer l'ID de l'utilisateur de manière appropriée
    const id_prod = 2; // Exemple, vous devrez récupérer l'ID du produit de manière appropriée
    const prixItems = 50; // Exemple, vous devrez récupérer le prix du produit de manière appropriée
    const qteItems = 1; // Exemple, vous devrez récupérer la quantité du produit de manière appropriée

    this.panierService.addToCart(user_id, id_prod)
    .subscribe(
        response => {
            console.log('Produit ajouté au panier avec succès !');
            // Traitez la réponse comme nécessaire
        },
        error => {
            console.error('Une erreur s\'est produite : ', error);
            // Traitez l'erreur comme nécessaire
        }
    );
}


  // Fonction pour décrémenter du panier
  decrement() {
    this.panierService.decrement(); // Utilisez votre méthode de décrémentation du service de panier
  }

  products: Produit[] = [];
  productOrders : any[]= [];

  @Output() productAdded = new EventEmitter();


}


