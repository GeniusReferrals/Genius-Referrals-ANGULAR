/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of RedemptionRequestForm
 *
 * @constructor
 */
angular.module('GeniusReferralsLib')
    .factory('RedemptionRequestForm', ['BaseModel', 'RedemptionRequest',
        function (BaseModel, RedemptionRequest) {
            var RedemptionRequestForm = function (obj) {
                if (!obj) {
                    this.redemptionRequest = null;
        
                    // Append to variable dictionary
                    this._variableDict['redemptionRequest'] = 'redemption_request';
                } else {
                    this.redemptionRequest = new RedemptionRequest(obj.redemption_request);
            
                    // Append to variable dictionary
                    this._variableDict['redemptionRequest'] = 'redemption_request';
                }
            }
    
            RedemptionRequestForm.prototype = new BaseModel();
            RedemptionRequestForm.prototype.constructor = RedemptionRequestForm;
        
            /**
             * The redemption request's wrapper
             *
             * @return {RedemptionRequest}
             */
            RedemptionRequestForm.prototype.getRedemptionRequest = function () {
                return this.redemptionRequest;
            };
        
            /**
             * Setter for RedemptionRequest
             * 
             * @param {RedemptionRequest} value 
             */
            RedemptionRequestForm.prototype.setRedemptionRequest = function (value) {
                this.redemptionRequest = value;
            };
        
            return RedemptionRequestForm;
        }
    ]);

}(angular));
