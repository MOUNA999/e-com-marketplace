import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component_client/header/header.component';
import { HomeComponent } from './Component_client/home/home.component';
import { AboutComponent } from './Component_client/about/about.component';
import { ContactComponent } from './Component_client/contact/contact.component';
import { ArtComponent } from './Component_client/art/art.component';
import { ProductsComponent } from './Component_client/products/products.component';
import { ConnecterComponent } from './Component_client/connecter/connecter.component';
import { CreateAcountComponent } from './Component_client/create-acount/create-acount.component';
import { SearchInterfaceComponent } from './Component_client/search-interface/search-interface.component';
import { BowlsComponent } from './Component_client/bowls/bowls.component';
import { CuttingComponent } from './Component_client/cutting/cutting.component';
import { DecoTableComponent } from './Component_client/deco-table/deco-table.component';
import { KitchenComponent } from './Component_client/kitchen/kitchen.component';
import { ServingComponent } from './Component_client/serving/serving.component';
import { SpoonComponent } from './Component_client/spoon/spoon.component';
import { TableTopComponent } from './Component_client/table-top/table-top.component';
import { PanierService } from './Services/panier.service';
import { ProduitComponent } from './Component_Admin/produit/produit.component';
import { ClientComponent } from './Component_client/client/client.component';
import { CartComponent } from './Component_client/cart/cart.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoriesComponent } from './Component_Admin/categories/categories.component';
import { DetaillsComponent } from './detaills/detaills.component';
import { AdminComponent } from './Component_Admin/admin/admin.component';
const routes: Routes = [
  {path:' ',component:HeaderComponent},
  {path:'admin', component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'art',component:ArtComponent},
  {path:'login',component:ConnecterComponent},
  {path:'create_acount',component:CreateAcountComponent},
  {path:'search',component:SearchInterfaceComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/Bowls',component:BowlsComponent},
  {path:'products/cutting_Board',component:CuttingComponent},
  {path:'products/Deco_Table',component:DecoTableComponent},
  {path:'products/kitchen_Accessories',component:KitchenComponent},
  {path:'products/serving_platters',component:ServingComponent},
  {path:'products/spoon',component:SpoonComponent},
  {path:'products/Table_Top',component:TableTopComponent},
  
  {path:'panier/service',component:PanierService },
  {path:'admin/Produit',component:ProduitComponent },
  {path:'admin/Client',component:ClientComponent },
  {path:'admin',component:AdminComponent },
  { path: "cart", component: CartComponent },
  { path: "categorie", component: CategorieComponent },
  { path: "dettails/:id", component: DetaillsComponent },
  
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
