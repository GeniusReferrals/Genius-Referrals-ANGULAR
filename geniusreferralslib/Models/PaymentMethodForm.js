/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of PaymentMethodForm
 *
 * @constructor
 */
angular.module('GeniusReferralsLib')
    .factory('PaymentMethodForm', ['BaseModel', 'PaymentMethod',
        function (BaseModel, PaymentMethod) {
            var PaymentMethodForm = function (obj) {
                if (!obj) {
                    this.advocatePaymentMethod = null;
        
                    // Append to variable dictionary
                    this._variableDict['advocatePaymentMethod'] = 'advocate_payment_method';
                } else {
                    this.advocatePaymentMethod = new PaymentMethod(obj.advocate_payment_method);
            
                    // Append to variable dictionary
                    this._variableDict['advocatePaymentMethod'] = 'advocate_payment_method';
                }
            }
    
            PaymentMethodForm.prototype = new BaseModel();
            PaymentMethodForm.prototype.constructor = PaymentMethodForm;
        
            /**
             * The payment methods wrapper
             *
             * @return {PaymentMethod}
             */
            PaymentMethodForm.prototype.getAdvocatePaymentMethod = function () {
                return this.advocatePaymentMethod;
            };
        
            /**
             * Setter for AdvocatePaymentMethod
             * 
             * @param {PaymentMethod} value 
             */
            PaymentMethodForm.prototype.setAdvocatePaymentMethod = function (value) {
                this.advocatePaymentMethod = value;
            };
        
            return PaymentMethodForm;
        }
    ]);

}(angular));
