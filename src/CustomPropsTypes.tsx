import { Category, Spec } from "CustomTypes"
import { MouseEventHandler, ReactElement } from "react"

export type StoreButtonProps = {
    buttonStyle: string,
    content: any,
    showOnMobile?: boolean,
    buttonAction?: Function,
    label?: string
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

export type FooterMenuItemProps = {
    name: string,
    id?: number,
    isContacts?: boolean,
    items: ReactElement<any, any>
}

export type CatalogProductsListProps = {
    view: string,
    productsItems: any []
}

export type TopMenuBasketProps = {
    basketItems?: ReactElement<any, any>[]
}

export type SmallBasketItemProps = {
    amount: number,
    imagePath: string,
    name: string,
    id: number,
    handleProductRemoved: Function
}

export type TopMenuItemProps = {
    renderHoverMenu: ReactElement<any, any>,
    id: number,
    isHidden: boolean,
    text: string,
    link: string
}

export type HoverMenuProps = {
    categoryId: number,
    subCategories: Category[],
    label?: string
}

export type MultilevelMenuProps = {
    subCategories: Category[]
}

export type MultilevelMenuItemProps = {
    level: number,
    id: number,
    name: string
}

export type FormItemTextProps = {
    label?: string,
    required: boolean,
    type: string,
    placeholder: string,
    id?: string,
    pattern?: string,
    mask?: string,
    isNarrow?: boolean
}