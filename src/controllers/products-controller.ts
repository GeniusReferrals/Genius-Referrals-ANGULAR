import { GRClient } from '../gr-client';
import { ProductForm } from '../models/product-form';
import { VariantForm } from '../models/variant-form';
import { VariantPatchForm } from '../models/variant-patch-form';
import { PriceForm } from '../models/price-form';

export class ProductsController {
  constructor(private client: GRClient) {}

  getProducts(accountSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/products`, { page, limit });
  }

  getProduct(accountSlug: string, productSlug: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/products/${productSlug}`);
  }

  createProduct(accountSlug: string, productForm: ProductForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/products`, { product: productForm });
  }

  updateProduct(accountSlug: string, productSlug: string, productForm: ProductForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/products/${productSlug}`, { product: productForm });
  }

  deleteProduct(accountSlug: string, productSlug: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/products/${productSlug}`);
  }

  getProductVariants(accountSlug: string, productSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/products/${productSlug}/variants`, { page, limit });
  }

  createProductVariant(accountSlug: string, productSlug: string, variantForm: VariantForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/products/${productSlug}/variants`, { variant: variantForm });
  }

  patchProductVariant(accountSlug: string, productSlug: string, variantId: string, variantPatchForm: VariantPatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/products/${productSlug}/variants/${variantId}`, variantPatchForm);
  }

  deleteProductVariant(accountSlug: string, productSlug: string, variantId: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/products/${productSlug}/variants/${variantId}`);
  }

  patchProductVariantPrice(accountSlug: string, productSlug: string, variantId: string, currencyCode: string, priceForm: PriceForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/products/${productSlug}/variants/${variantId}/prices/${currencyCode}`, priceForm);
  }
}