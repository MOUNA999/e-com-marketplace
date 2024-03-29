import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component_client/home/home.component';
import { AboutComponent } from './Component_client/about/about.component';
import { ProduitComponent } from './Component_Admin/produit/produit.component';
import { ContactComponent } from './Component_client/contact/contact.component';
import { WelcomComponent } from './Component_client/welcom/welcom.component';
import { HeaderComponent } from './Component_client/header/header.component';
import { FooterComponent } from './Component_client/footer/footer.component';
import { ConnecterComponent } from './Component_client/connecter/connecter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArtComponent } from './Component_client/art/art.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateAcountComponent } from './Component_client/create-acount/create-acount.component';
import { SearchInterfaceComponent } from './Component_client/search-interface/search-interface.component';
import { ProductsComponent } from './Component_client/products/products.component';
import { BowlsComponent } from './Component_client/bowls/bowls.component';
import { CuttingComponent } from './Component_client/cutting/cutting.component';
import { DecoTableComponent } from './Component_client/deco-table/deco-table.component';
import { KitchenComponent } from './Component_client/kitchen/kitchen.component';
import { ServingComponent } from './Component_client/serving/serving.component';
import { SpoonComponent } from './Component_client/spoon/spoon.component';
import { TableTopComponent } from './Component_client/table-top/table-top.component';
import { ListeComponent } from './Component_client/liste/liste.component';
import { OrderComponent } from './order/order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProductFormComponent } from './create-product-form/create-product-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './Component_Admin/admin/admin.component';
import { ClientComponent } from './Component_client/client/client.component';
import { ClientService } from './Services/client.service';
import { DataService } from './Services/service/data.service';
import { PanierService } from './Services/panier.service';
import { Client } from './Models/Client';
import { CategorieSerivceService } from './Services/categorie-serivce.service';
import { CartService } from './Services/cart.service';
import { MatTableModule } from  '@angular/material/table';
import { MatSortModule } from  '@angular/material/sort';
import { MatPaginatorModule } from  '@angular/material/paginator';
import { NgModalContentComponent } from './Component_client/ng-modal-content/ng-modal-content.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import{ToastrService} from 'ngx-toastr';
import { CartComponent } from './Component_client/cart/cart.component';
import { AuthService } from './services/auth.service';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoriesComponent } from './Component_Admin/categories/categories.component';
import { DetaillsComponent } from './detaills/detaills.component';
import { AuthGuard } from 'src/auth.guard';
//import { AuthGuard } from './auth.guard';
const appRoutes:Routes = [
  { path : '', component: HomeComponent},
  { path : 'admin', component: AdminComponent},
  { path : 'home', component: HomeComponent, canActivate:[AuthGuard]},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProduitComponent,
    ContactComponent,
    WelcomComponent,
    HeaderComponent,
    FooterComponent,
    ConnecterComponent,
    ArtComponent,
    CreateAcountComponent,
    SearchInterfaceComponent,
    ProductsComponent,
    BowlsComponent,
    CuttingComponent,
    DecoTableComponent,
    KitchenComponent,
    ServingComponent,
    SpoonComponent,
    TableTopComponent,
    ListeComponent,
    OrderComponent,
    CreateProductFormComponent,
    AdminComponent,
    ClientComponent,
    NgModalContentComponent,
    CartComponent,
    CategorieComponent,
    CategoriesComponent,
    DetaillsComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // Importez ToastrModule.forRoot() ici

  ],
  providers: [
    ClientService,
    DataService,
    PanierService,
    Client,
    ToastrService,
    CartService,
    AuthService,
CategorieSerivceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
