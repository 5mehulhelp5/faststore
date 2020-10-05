/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type AddToCartMutationMutationVariables = Exact<{
  items: Maybe<Array<Maybe<Vtex_ItemInput>>>
  marketingData: Maybe<Vtex_MarketingDataInput>
}>

export type AddToCartMutationMutation = {
  addToCart: {
    id: string
    canEditData: boolean
    loggedIn: boolean
    userProfileId: Maybe<string>
    userType: Maybe<Vtex_UserType>
    value: number
    allowManualPrice: Maybe<boolean>
    items: Array<{
      parentAssemblyBinding: Maybe<string>
      sellingPriceWithAssemblies: Maybe<number>
      availability: Maybe<string>
      detailUrl: Maybe<string>
      id: string
      listPrice: Maybe<number>
      manualPrice: Maybe<number>
      measurementUnit: Maybe<string>
      name: Maybe<string>
      price: Maybe<number>
      productCategories: Maybe<any>
      productCategoryIds: Maybe<string>
      productRefId: Maybe<string>
      productId: Maybe<string>
      quantity: number
      seller: Maybe<string>
      sellingPrice: Maybe<number>
      skuName: Maybe<string>
      unitMultiplier: Maybe<number>
      uniqueId: string
      refId: Maybe<string>
      additionalInfo: Maybe<{ brandName: Maybe<string> }>
      attachments: Array<{ name: Maybe<string>; content: Maybe<any> }>
      attachmentOfferings: Array<{
        name: Maybe<string>
        required: Maybe<boolean>
        schema: Maybe<any>
      }>
      bundleItems: Array<{
        availability: Maybe<string>
        detailUrl: Maybe<string>
        id: string
        listPrice: Maybe<number>
        measurementUnit: Maybe<string>
        name: Maybe<string>
        price: Maybe<number>
        productCategories: Maybe<any>
        productCategoryIds: Maybe<string>
        productRefId: Maybe<string>
        productId: Maybe<string>
        quantity: number
        seller: Maybe<string>
        sellingPrice: Maybe<number>
        skuName: Maybe<string>
        unitMultiplier: Maybe<number>
        uniqueId: string
        refId: Maybe<string>
        additionalInfo: Maybe<{ brandName: Maybe<string> }>
        attachments: Array<{ name: Maybe<string>; content: Maybe<any> }>
        attachmentOfferings: Array<{
          name: Maybe<string>
          required: Maybe<boolean>
          schema: Maybe<any>
        }>
        imageUrls: Maybe<{ at1x: string; at2x: string; at3x: string }>
        offerings: Array<{
          id: string
          name: string
          price: number
          type: string
          attachmentOfferings: Array<{
            name: Maybe<string>
            required: Maybe<boolean>
            schema: Maybe<any>
          }>
        }>
        skuSpecifications: Array<{
          fieldName: Maybe<string>
          fieldValues: Array<Maybe<string>>
        }>
      }>
      options: Maybe<
        Array<
          Maybe<{
            assemblyId: string
            id: Maybe<string>
            quantity: Maybe<number>
            seller: Maybe<string>
            inputValues: Maybe<any>
            options: Maybe<
              Array<{
                assemblyId: string
                id: Maybe<string>
                quantity: Maybe<number>
                seller: Maybe<string>
                inputValues: Maybe<any>
                options: Maybe<
                  Array<{
                    assemblyId: string
                    id: Maybe<string>
                    quantity: Maybe<number>
                    seller: Maybe<string>
                    inputValues: Maybe<any>
                  }>
                >
              }>
            >
          }>
        >
      >
      imageUrls: Maybe<{ at1x: string; at2x: string; at3x: string }>
      offerings: Array<{
        id: string
        name: string
        price: number
        type: string
        attachmentOfferings: Array<{
          name: Maybe<string>
          required: Maybe<boolean>
          schema: Maybe<any>
        }>
      }>
      skuSpecifications: Array<{
        fieldName: Maybe<string>
        fieldValues: Array<Maybe<string>>
      }>
    }>
    marketingData: {
      coupon: Maybe<string>
      utmCampaign: Maybe<string>
      utmMedium: Maybe<string>
      utmSource: Maybe<string>
      utmiCampaign: Maybe<string>
      utmiPart: Maybe<string>
      utmiPage: Maybe<string>
    }
    totalizers: Array<Maybe<{ id: string; name: Maybe<string>; value: number }>>
    shipping: {
      countries: Maybe<Array<Maybe<string>>>
      isValid: boolean
      availableAddresses: Maybe<
        Array<
          Maybe<{
            addressId: Maybe<string>
            addressType: Maybe<Vtex_AddressType>
            city: Maybe<string>
            complement: Maybe<string>
            country: Maybe<string>
            neighborhood: Maybe<string>
            number: Maybe<string>
            postalCode: Maybe<string>
            receiverName: Maybe<string>
            reference: Maybe<string>
            state: Maybe<string>
            street: Maybe<string>
            isDisposable: Maybe<boolean>
          }>
        >
      >
      selectedAddress: Maybe<{
        addressId: Maybe<string>
        addressType: Maybe<Vtex_AddressType>
        city: Maybe<string>
        complement: Maybe<string>
        country: Maybe<string>
        neighborhood: Maybe<string>
        number: Maybe<string>
        postalCode: Maybe<string>
        receiverName: Maybe<string>
        reference: Maybe<string>
        state: Maybe<string>
        street: Maybe<string>
        isDisposable: Maybe<boolean>
      }>
      deliveryOptions: Maybe<
        Array<
          Maybe<{
            id: Maybe<string>
            price: Maybe<number>
            estimate: Maybe<string>
            isSelected: Maybe<boolean>
          }>
        >
      >
    }
    paymentData: {
      isValid: boolean
      paymentSystems: Array<{
        id: string
        name: string
        groupName: string
        stringId: string
        requiresDocument: boolean
        isCustom: boolean
        description: Maybe<string>
        requiresAuthentication: Maybe<boolean>
        dueDate: Maybe<string>
        validator: Maybe<{
          regex: Maybe<string>
          mask: Maybe<string>
          cardCodeRegex: Maybe<string>
          cardCodeMask: Maybe<string>
          weights: Maybe<Array<Maybe<number>>>
          useCvv: Maybe<boolean>
          useExpirationDate: Maybe<boolean>
          useCardHolderName: Maybe<boolean>
          useBillingAddress: Maybe<boolean>
        }>
      }>
      payments: Array<{
        paymentSystem: Maybe<string>
        bin: Maybe<string>
        accountId: Maybe<string>
        tokenId: Maybe<string>
        installments: Maybe<number>
        referenceValue: Maybe<number>
        value: Maybe<number>
      }>
      installmentOptions: Array<{
        paymentSystem: string
        installments: Array<{
          count: number
          hasInterestRate: Maybe<boolean>
          interestRate: Maybe<number>
          value: Maybe<number>
          total: number
        }>
      }>
      availableAccounts: Array<{
        accountId: string
        paymentSystem: string
        paymentSystemName: string
        cardNumber: string
        bin: string
      }>
    }
    clientProfileData: Maybe<{
      email: Maybe<string>
      firstName: Maybe<string>
      lastName: Maybe<string>
      document: Maybe<string>
      documentType: Maybe<string>
      phone: Maybe<string>
      isValid: boolean
    }>
    clientPreferencesData: Maybe<{
      locale: Maybe<string>
      optInNewsletter: Maybe<boolean>
    }>
    messages: {
      couponMessages: Array<Maybe<{ code: Maybe<string> }>>
      generalMessages: Array<
        Maybe<{
          code: Maybe<string>
          text: Maybe<string>
          status: Maybe<string>
        }>
      >
    }
  }
}

// Query Related Code

export const AddToCartMutation = {
  query:
    'mutation AddToCartMutation($items: [VTEX_ItemInput], $marketingData: VTEX_MarketingDataInput) {\n  addToCart(items: $items, marketingData: $marketingData) {\n    id\n    items {\n      additionalInfo {\n        brandName\n      }\n      attachments {\n        name\n        content\n      }\n      attachmentOfferings {\n        name\n        required\n        schema\n      }\n      bundleItems {\n        additionalInfo {\n          brandName\n        }\n        attachments {\n          name\n          content\n        }\n        attachmentOfferings {\n          name\n          required\n          schema\n        }\n        availability\n        detailUrl\n        id\n        imageUrls {\n          at1x\n          at2x\n          at3x\n        }\n        listPrice\n        measurementUnit\n        name\n        offerings {\n          id\n          name\n          price\n          type\n          attachmentOfferings {\n            name\n            required\n            schema\n          }\n        }\n        price\n        productCategories\n        productCategoryIds\n        productRefId\n        productId\n        quantity\n        seller\n        sellingPrice\n        skuName\n        skuSpecifications {\n          fieldName\n          fieldValues\n        }\n        unitMultiplier\n        uniqueId\n        refId\n      }\n      parentAssemblyBinding\n      sellingPriceWithAssemblies\n      options {\n        assemblyId\n        id\n        quantity\n        seller\n        inputValues\n        options {\n          assemblyId\n          id\n          quantity\n          seller\n          inputValues\n          options {\n            assemblyId\n            id\n            quantity\n            seller\n            inputValues\n          }\n        }\n      }\n      availability\n      detailUrl\n      id\n      imageUrls {\n        at1x\n        at2x\n        at3x\n      }\n      listPrice\n      manualPrice\n      measurementUnit\n      name\n      offerings {\n        id\n        name\n        price\n        type\n        attachmentOfferings {\n          name\n          required\n          schema\n        }\n      }\n      price\n      productCategories\n      productCategoryIds\n      productRefId\n      productId\n      quantity\n      seller\n      sellingPrice\n      skuName\n      skuSpecifications {\n        fieldName\n        fieldValues\n      }\n      unitMultiplier\n      uniqueId\n      refId\n    }\n    canEditData\n    loggedIn\n    userProfileId\n    userType\n    marketingData {\n      coupon\n      utmCampaign\n      utmMedium\n      utmSource\n      utmiCampaign\n      utmiPart\n      utmiPage\n    }\n    totalizers {\n      id\n      name\n      value\n    }\n    shipping {\n      countries\n      availableAddresses {\n        addressId\n        addressType\n        city\n        complement\n        country\n        neighborhood\n        number\n        postalCode\n        receiverName\n        reference\n        state\n        street\n        isDisposable\n      }\n      selectedAddress {\n        addressId\n        addressType\n        city\n        complement\n        country\n        neighborhood\n        number\n        postalCode\n        receiverName\n        reference\n        state\n        street\n        isDisposable\n      }\n      deliveryOptions {\n        id\n        price\n        estimate\n        isSelected\n      }\n      isValid\n    }\n    paymentData {\n      paymentSystems {\n        id\n        name\n        groupName\n        validator {\n          regex\n          mask\n          cardCodeRegex\n          cardCodeMask\n          weights\n          useCvv\n          useExpirationDate\n          useCardHolderName\n          useBillingAddress\n        }\n        stringId\n        requiresDocument\n        isCustom\n        description\n        requiresAuthentication\n        dueDate\n      }\n      payments {\n        paymentSystem\n        bin\n        accountId\n        tokenId\n        installments\n        referenceValue\n        value\n      }\n      installmentOptions {\n        paymentSystem\n        installments {\n          count\n          hasInterestRate\n          interestRate\n          value\n          total\n        }\n      }\n      availableAccounts {\n        accountId\n        paymentSystem\n        paymentSystemName\n        cardNumber\n        bin\n      }\n      isValid\n    }\n    clientProfileData {\n      email\n      firstName\n      lastName\n      document\n      documentType\n      phone\n      isValid\n    }\n    clientPreferencesData {\n      locale\n      optInNewsletter\n    }\n    messages {\n      couponMessages {\n        code\n      }\n      generalMessages {\n        code\n        text\n        status\n      }\n    }\n    value\n    allowManualPrice\n  }\n}\n',
  sha256Hash:
    'd50b07a778fba303a8aab2606e8fbdd64abf4fb5f3baee234106a5d58ced4d91',
  operationName: 'AddToCartMutation',
}
