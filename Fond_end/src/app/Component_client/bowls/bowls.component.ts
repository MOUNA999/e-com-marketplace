import { Component,OnInit } from '@angular/core';
import { PanierService } from '../../Services/panier.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-bowls',
  templateUrl: './bowls.component.html',
  styleUrls: ['./bowls.component.css']
})
export class BowlsComponent {

  isPanierClicked: boolean = false;
  imagesUrls: string[] = [
    'assets/img/nov-img/bowl.png',
    'assets/img/socciete/p16.png',
    'assets/img/nov-img/plat.png',

    // Ajoutez autant d'URLs que nécessaire
  ];  
 
  produits = [
    { 
      imageUrl: 'assets/img/nov-img/bowl.png',
      nom: 'Set of 6 round bowls',
      taille: 'SIZE: 6 to 16 cm',
      reference: 'REF: BS1'
    },
    { 
      imageUrl: 'assets/img/socciete/p16.png',
      nom: 'Small bowl',
      taille: 'SIZE: 8 to 18 cm',
      reference: 'REF: SM'
    },
    { 
      imageUrl: 'assets/img/nov-img/plat.png',
      nom: 'Salima Mixed Bowl',
      taille: 'SIZE:SIZE: 30 cm',
      reference: 'REF: SMB'
    },
  ]

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
 
  userId: number = 0; // Initialiser l'ID utilisateur à 0

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService, public authService: AuthService, private panierService: PanierService) { }



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
  imageDirectory = "http://localhost:8000/images/articles/";

  id!: number;
  private sub: any;
  article!: any;
  categorie!: any;
  similar_article: Produit[] = [];


  redirectToCard(produit: any) {
    this.router.navigate(['/card'], { state: { produit } });
  }
  ngOnInit(): void {
    this.similar_article.length = 0;
  
  }




  scroll(id: string){
    let el = document.getElementById(id);
    console.log(id);
    el!.scrollIntoView();
  }
}
