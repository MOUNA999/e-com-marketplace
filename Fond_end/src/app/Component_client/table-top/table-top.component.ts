import { Component } from '@angular/core';
import { PanierService } from '../../Services/panier.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.css']
})
export class TableTopComponent {
  isPanierClicked: boolean = false;

  imagesUrls: string[] = [
    'assets/img/socciete/p9.png',
    'assets/img/socciete/p11.png',
    'assets/img/socciete/p14.png',
    'assets/img/socciete/p20.png',
    'assets/img/socciete/p16.png',
    'assets/img/socciete/p30.png',
    'assets/img/socciete/p27.png',
    'assets/img/nov-img/oval.png',
    'assets/img/nov-img/s6.png',
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


  // Fonction pour décrémenter du panier
  decrement() {
    this.panierService.decrement(); // Utilisez votre méthode de décrémentation du service de panier
  }

  userId: number = 0; // Initialiser l'ID utilisateur à 0

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    // Code d'initialisation ou de récupération de l'ID utilisateur si nécessaire
  }

  addToCart() {
    this.userId++; // Incrémenter l'ID utilisateur
    const id_prod = 2; // Exemple : ID du produit
    const prixItems = 50; // Exemple : prix du produit
    const qteItems = 1; // Exemple : quantité du produit

    this.panierService.addToCart(this.userId, id_prod)
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

  

}
