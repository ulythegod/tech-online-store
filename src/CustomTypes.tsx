export type FillersInterface = {
    categoriesIds: number[],
    defaultCategoriesIds: number[],
    prices: Price[],
    defaultPrices: Price[],
    name: string,
    sortField: string,
    currentPage: number,
    perPageItems: number
}

export type CatalogProductsResult = {
    products: Product[],
    startIndex: number,
    endIndex: number,
    overallAmount: number
}

export interface ProductState {
    products: Product[],
    code: number,
    message: string,
    status: string
}

export interface Photo {
    id: number,
    url: string
}

export interface Detail {
    id: number,
    name: string
}

export interface Spec {
    id: number,
    spec: string,
    value: string
}

export interface Product {
    id: number,
    published_at: string,
    created_at: string,
    updated_at: string,
    category: Category,
    name: string,
    price: string,
    photo: Photo[],
    details: Detail[],
    specs: Spec[]
}

export interface Price {
    id: number,
    name: string,
    segmentValues: number[]
}

export interface PricesState {
    prices: Price[],
    code: number,
    message: string,
    status: string
}

export interface CategoriesState {
    categories: Category[],
    code: number,
    message: string,
    status: string
}

export interface Image {
    id: number,
    url: string
}

export interface Category {
    id: number,
    subCategories: Category[],
    parent: Category | null,
    name: string,
    created_at: string,
    updated_at: string,
    image: Image
}

export interface Price {
    id: number,
    name: string,
    segmentValues: number[]
}
