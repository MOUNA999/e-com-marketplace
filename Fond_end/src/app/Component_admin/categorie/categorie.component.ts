import { Component,OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Produit } from 'src/app/Models/produit';
import { ActivatedRoute } from '@angular/router';
import { CategorieSerivceService } from 'src/app/Services/categorie-serivce.service';
import { Categorie } from '../Models/categorie';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categories: any;
  showForm = false;
  editForm = false;

  Categorie: Categorie = {
    nomCategorie: '',
    user_id: 1
  }

  constructor(private categorieService: CategorieSerivceService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe(reponse => {
      this.categories = reponse;
      for( let categorie of this.categories){
        categorie.created_at = new Date( categorie.created_at ).toISOString().slice(0, 16).replace('T', ' ');
      }   
    })
  }
  deleteCategorie(id: any) {
    this.categorieService.deleteCategorie(id).subscribe(reponse => {
      this.getCategories();
    })
  }
  persistCategorie() {
    this.categorieService.persistCategorie(this.Categorie).subscribe((categorie) => {
      this.categories = [categorie, ...this.categories];
      this.resetCategorie();
      this.showForm = false;
    })
  }
  resetCategorie() {
    this.Categorie = {
      nomCategorie: '',
      user_id: 1
    }
    this.showForm = false;
  }
  editCategorie(categorie: Categorie) {
    this.Categorie = categorie;
    this.editForm = true;
  }
  updateCategorie() {
    this.categorieService.updateCategorie(this.Categorie).subscribe((categorie) => {
      this.resetCategorie();
      this.editForm = false;
      this.showForm = false;
    })
  }
}
