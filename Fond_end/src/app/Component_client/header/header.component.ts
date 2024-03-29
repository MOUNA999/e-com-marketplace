import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { PanierService } from '../../Services/panier.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHomeClicked: boolean = false;
  isAboutClicked: boolean = false;
  isProductsClicked: boolean = false;
  isPanierClicked: boolean = false;
  isContactClicked: boolean = false;

  toggleColor(link: string) {
    this.resetColors(); // Réinitialise toutes les couleurs
    switch (link) {
      case 'home':
        this.isHomeClicked = true;
        break;
      case 'about':
        this.isAboutClicked = true;
        break;
      case 'products':
        this.isProductsClicked = true;
        break;
      case 'panier':
        this.isPanierClicked = true;
        break;
      case 'contact':
        this.isContactClicked = true;
        break;
      default:
        break;
    }
  }

  resetColors() {
    this.isHomeClicked = false;
    this.isAboutClicked = false;
    this.isProductsClicked = false;
    this.isPanierClicked = false;
    this.isContactClicked = false;
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  count: number = 0;
  countSubscription!: Subscription; // Déclarer la propriété comme nullable


  constructor(private panierService: PanierService, private router: Router, public cartService: CartService) { }

  ngOnInit(): void {
    this.countSubscription = this.panierService.count$.subscribe(count => {
      this.count = count; // Mettre à jour la valeur du panier lorsqu'elle change
    });
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe(); // Se désabonner lors de la destruction du composant
  }
  scroll(id: any) {
    let el = document.getElementById(id);
    console.log(id);
    el!.scrollIntoView();
  }

}




