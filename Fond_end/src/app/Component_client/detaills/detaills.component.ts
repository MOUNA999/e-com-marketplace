import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
import { Produit } from '../Models/produit';
import { PanierService } from '../Services/panier.service';
@Component({
  selector: 'app-detaills',
  templateUrl: './detaills.component.html',
  styleUrls: ['./detaills.component.css']
})
export class DetaillsComponent implements OnInit{

  imageDirectory = "http://localhost:8000/images/articles/";

  id!: number;
  private sub: any;
  article!: any;
  categorie!: any;
  similar_article: Produit[] = [];

  constructor(private route: ActivatedRoute, private articleService: ArticleService, public authService: AuthService,private panierService: PanierService) { }

  ngOnInit(): void {
    this.similar_article.length = 0;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.find_article_by_id();
    })
  }
  find_article_by_id() {
    this.articleService.getOneArticle(this.id).subscribe(article => {
      console.log(article);
      this.article = article;
      this.article = this.article.article; // <-- Réassignation ici, probablement à corriger
      this.categorie = this.article.categorie_id;
      this.getSimilarArticle();
    })
}

  getSimilarArticle() {
    this.articleService.getArticles().subscribe(Articles => {
      this.similar_article.length = 0
      for (var art of Object.values(Articles)) {
        if (art.categorie_id == this.categorie && art.nom != this.article.nomArticle)
          this.similar_article.push(art);
        // console.log(" ------------  the similar article  - - - - - - -")
        // console.log(this.similar_article)
      }
    })
  }
  scroll(id: string){
    let el = document.getElementById(id);
    console.log(id);
    el!.scrollIntoView();
  }
  userId: number = 0;
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
