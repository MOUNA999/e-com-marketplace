import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { PanierService } from '../../Services/panier.service';
import { Produit } from 'src/app/Models/produit';
import { CategorieSerivceService } from 'src/app/Services/categorie-serivce.service';
@Component({
  selector: 'app-cutting',
  templateUrl: './cutting.component.html',
  styleUrls: ['./cutting.component.css']
})
export class CuttingComponent implements OnInit{
  imageDirectory = "http://localhost:8000/images/articles/";

  
  articles: Produit[] = [];
  what_we_seartc: Produit[] = [];
  categories: any;
  emp: any;
  last_article: Produit[] = [];
  searchTerm: any;
  constructor(private articleService: ArticleService, private categorieService: CategorieSerivceService, private route: ActivatedRoute, private panierService: PanierService) { }


  ngOnInit(): void {
    this.getArticles();
    this.getCategories();
    //   search  
    this.emp = this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params;
        this.what_we_seartc = this.articles.filter(article => article.nom.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        console.log("what we sear before : ")
        console.log(this.what_we_seartc);
        if (this.what_we_seartc.length == 0) {
          this.getArticles()
          console.log("what we no result : ")
          console.log(this.what_we_seartc);
        }
      }
      else {
        this.getArticles()
        console.log("on a pas chercher ")
        console.log(this.what_we_seartc)

      }
    })
  }

  getArticles() {
    this.articleService.getArticles().subscribe(reponse => {
      this.articles = reponse;
      this.what_we_seartc = this.articles;
      this.last_article[0] = reponse[reponse.length - 3]
      this.last_article[1] = reponse[reponse.length - 2]
      this.last_article[2] = reponse[reponse.length - 1]
    })
  }
  getCategories() {
    this.categorieService.getCategories().subscribe(reponse => {
      this.categories = reponse;
    })
  }
  scroll(id: any){
    let el = document.getElementById(id);
    console.log(id);
    el!.scrollIntoView();
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
  
}

