import { Component ,OnInit} from '@angular/core';
import { CategorieSerivceService } from 'src/app/Services/categorie-serivce.service';
import { Router } from '@angular/router'; // Importez Router depuis Angular
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any;

  constructor(private categorieService: CategorieSerivceService,private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }
  navigateToCategory(categoryName: string) {
    // Utilisez le Router pour naviguer vers le chemin approprié en fonction du nom de la catégorie
    switch (categoryName) {
      case 'Bowls':
        this.router.navigate(['products/Bowls']);
        break;
      case 'Kitchen Accessories':
        this.router.navigate(['products/kitchen_Accessories']);
        break;
        case 'Table Top':
        this.router.navigate(['products/Table_Top']);
        break;
      // Ajoutez d'autres cas pour d'autres catégories si nécessaire
      default:
        break;
    }
  }
}
