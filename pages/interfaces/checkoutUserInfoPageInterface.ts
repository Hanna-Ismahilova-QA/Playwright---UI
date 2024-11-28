export interface BuyerInfoInterface {
    nameField: Locator,
    lastnameField: Locator,
    postalCodeField: Locator

    buyerInfo(name: string, lastname: string, postalCode: string): Promise<void>;

    resetBuyerInfo(): Promise<boolean>;
}

type Locator = any;

