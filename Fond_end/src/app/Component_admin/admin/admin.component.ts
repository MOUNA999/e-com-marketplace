import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showClients: boolean = false;
  showProducts: boolean = false;
  showCategories: boolean = false;
  showOrders: boolean = false; // Déclarer la propriété showOrders
  showDashboard: boolean = false; // Déclarer la propriété showDashboard

  loadClients() {
    this.showClients = true;
    this.showProducts = false;
    this.showCategories = false;
    this.showOrders = false; // Mettre à jour les propriétés
    this.showDashboard = false; // Mettre à jour les propriétés
  }

  loadProducts() {
    this.showClients = false;
    this.showProducts = true;
    this.showCategories = false;
    this.showOrders = false; // Mettre à jour les propriétés
    this.showDashboard = false; // Mettre à jour les propriétés
  }
  loadCategories() {
    this.showClients = false;
    this.showProducts = false;
    this.showCategories = true;
    this.showOrders = false; // Mettre à jour les propriétés
    this.showDashboard = false; // Mettre à jour les propriétés
  }

  loadOrders() {
    this.showClients = false;
    this.showProducts = false;
    this.showCategories = false;
    this.showOrders = true; // Mettre à jour les propriétés
    this.showDashboard = false; // Mettre à jour les propriétés
  }

  loadDashboard() {
    this.showClients = false;
    this.showProducts = false;
    this.showCategories = false;
    this.showOrders = false; // Mettre à jour les propriétés
    this.showDashboard = true; // Mettre à jour les propriétés
  }
}
