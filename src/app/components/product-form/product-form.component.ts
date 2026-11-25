import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  private readonly productService = inject(ProductService);

  @Output() productAdded = new EventEmitter<Product>();

  product: Product = {
    code: '',
    name: '',
    price: 0
  };

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.product.code.trim() || !this.product.name.trim() || this.product.price <= 0) {
      this.errorMessage = 'Uzupełnij kod, nazwę oraz cenę większą od 0.';
      return;
    }

    this.isSubmitting = true;

    const payload: Product = {
      code: this.product.code.trim(),
      name: this.product.name.trim(),
      price: Number(this.product.price)
    };

    this.productService.addProduct(payload).subscribe({
      next: (created) => {
        this.isSubmitting = false;
        this.successMessage = `Produkt dodano pomyślnie: ${created.name}`;
        this.product = { code: '', name: '', price: 0 };
        this.productAdded.emit(created);
      },
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'Błąd przy dodawaniu produktu.';
      }
    });
  }
}