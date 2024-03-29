import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent {
  @Output() productCreated = new EventEmitter<any>();

  newProduct = {
    nom: '',
    reference: '', // Modifiez 'référence' en 'reference'
    prix: '',
    image: '',
    qt_stock: '',
    dimension: ''
  };

  constructor() { }

  onSubmit() {
    this.productCreated.emit(this.newProduct);
    // Réinitialisez les valeurs du formulaire après la soumission
    this.newProduct = {
      nom: '',
      reference: '',
      prix: '',
      image: '',
      qt_stock: '',
      dimension: ''
    };
  }
}
