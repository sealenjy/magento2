/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Customer/js/customer-data'
], function (customerData) {
    'use strict';

    var cartData = customerData.get('cart');

    if (cartData().items && cartData().items.length !== 0) {
        customerData.reload(['cart'], false);
    }
});
