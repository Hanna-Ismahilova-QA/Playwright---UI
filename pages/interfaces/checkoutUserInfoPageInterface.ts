export interface BuyerInfoInterface {
    nameField: Locator,
    lastnameField: Locator,
    postalCodeField: Locator

    buyerInfo(name: string, lastname: string, postalCode: string): Promise<void>;
}

type Locator = any;

