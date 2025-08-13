export type CosmeticCategory =
  | 'BB Cream'
  | 'Blush'
  | 'Bronzer'
  | 'CC Cream'
  | 'Cleanser'
  | 'Concealer'
  | 'Contour'
  | 'Exfoliator'
  | 'Eye Shadow'
  | 'Eyeliner'
  | 'Face Mask'
  | 'Face Oil'
  | 'Foundation'
  | 'Highlighter'
  | 'Lip Gloss'
  | 'Lip Liner'
  | 'Lipstick'
  | 'Makeup Remover'
  | 'Mascara'
  | 'Moisturizer'
  | 'Powder'
  | 'Primer'
  | 'Serum'
  | 'Setting Spray';

export type Cosmetic = {
  Product_Name: string;
  Brand: string;
  Category: CosmeticCategory;
  Usage_Frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Occasional';
  Price_USD: number;
  Rating: number;
  Number_of_Reviews: number;
  Product_Size: string;
  Skin_Type: 'Normal' | 'Dry' | 'Oily' | 'Combination' | 'Sensitive';
  Gender_Target: 'Female' | 'Male' | 'Unisex';
  Packaging_Type: string;
  Main_Ingredient: string;
  Cruelty_Free: boolean;
  Country_of_Origin: string;
  id: number;
};
