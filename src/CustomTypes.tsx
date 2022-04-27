import { MouseEventHandler, PropsWithChildren, ReactElement, ValidationMap, WeakValidationMap } from "react"

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

export type StoreButtonProps = {
    buttonStyle: string,
    content: any,
    showOnMobile?: boolean,
    buttonAction?: Function,
    label?: string
}

export interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}

export type ProductItemProps = {
    status: string,
    id: number,
    productImage: string,
    reviewsCount: number,
    name: string,
    price: number,
    discount: number,
    isNewProducts?: boolean,
    isUseFetch?: boolean
}

export type CatlogItemHorizontalProps = {
    status: string,
    productImage: string,
    model: string,
    name: string,
    price: number,
    discount: number,
    specs: Spec[],
    reviewsCount: number,
    id: number,
    isUseFetch?: boolean
}

export type RoundButtonProps = {
    content: any,
    buttonAction?: Function,
    itemId?: number
}

export type TurnOverButtonProps = {
    type: string,
    buttonAction?: Function
}

export type AdvantagesSectionProps = {
    isBackground: boolean
}

export type CompaniesSectionProps = {
    isInMenu?: boolean
}

export type AboutUsBlockProps = {
    icon?: string,
    title: string,
    description: ReactElement<any, any>,
    image: string
}

export type PageTitleProps = {
    isCatalogPage?: boolean,
    isProductPage?: boolean,
    isCheckoutPage?: boolean,
    title: string
}

export type BreadcrumbsProps = {
    category?: Category | undefined,
}

export type ProductsSectionProps = {
    id: number,
    banner: string,
    name: string
}

export type TopMenuNavigationProps = {
    categories: Category[],
    isOpenSearchPannel: boolean,
}

export type TopMenuSearchProps = {
    isOpenSearchPannel: boolean,
    handleOpenSearchPannel?: MouseEventHandler<HTMLButtonElement>
}