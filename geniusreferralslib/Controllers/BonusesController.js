/**
  * GeniusReferralsLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('GeniusReferralsLib')
    .factory('BonusesController', ['$q', 'Configuration', 'HttpClient', 'APIHelper',
        function($q, Configuration, HttpClient, APIHelper) {
            return {
                /**
                 * Get the list of bonuses for a given account.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {int|null} page    Optional parameter: Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result.
                 * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10), threshold (100)
                 * @param {string|null} filter    Optional parameter: Allowed fields: name, lastname, email, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah'
                 * @param {string|null} sort    Optional parameter: Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date'
                 *
                 * @return {promise<mixed>}
                 */
                getBonuses: function (accountSlug, page, limit, filter, sort) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
                    });

                    // Process query parameters
                    _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                        "page": page,
                        "limit": limit,
                        "filter": filter,
                        "sort": sort
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "GET",
                        queryUrl: _queryUrl,
                        headers: _headers,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Make an attempt to give a bonus for to the advocate's referrer. The system processes the given advocate (referral) and creates a bonus for the advocate's referrer if is needed. All restrictions set on the campaigns for this account will be check out before giving the bonus to the advocate's referrer.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {BonusesForm} bonusesForm    Required parameter: The body of the request
                 *
                 * @return {promise<mixed>}
                 */
                postBonuses: function (accountSlug, bonusesForm) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "content-type": "application/json; charset=utf-8",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // Remove null values
                    APIHelper.cleanObject(bonusesForm);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        body: bonusesForm
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Check if there is a bonus to be given to the advocate. Allows the clients to check if there is a bonus to be given, it simulates the behaivor of a POST request to /accounts/{account_slug}/bonuses resource. This resource is idempotent.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {string} advocateToken    Required parameter: The referral's token. Usually the one that completed the purchase, or trigger an event.
                 * @param {string} reference    Required parameter: The reference number for this request. Usually the order_id, payment_id, or timestamp.
                 * @param {double} paymentAmount    Required parameter: The payment amount the referrals has made. Required for a percentage based campaign.
                 *
                 * @return {promise<binary>}
                 */
                getBonusesCheckup: function (accountSlug, advocateToken, reference, paymentAmount) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/checkup";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
                    });

                    // Process query parameters
                    _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                        "advocate_token": advocateToken,
                        "reference": reference,
                        "payment_amount": paymentAmount
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "GET",
                        queryUrl: _queryUrl,
                        headers: _headers,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Force the system to give a bonus to an advocate. The system will not take into account the restriccions specified on the campaigns.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {BonusesForm1} bonusForm    Required parameter: The body of the request
                 *
                 * @return {promise<mixed>}
                 */
                postBonusesForce: function (accountSlug, bonusForm) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/force";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "content-type": "application/json; charset=utf-8",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // Remove null values
                    APIHelper.cleanObject(bonusForm);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        body: bonusForm
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Get a bonus request trace.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {int} traceId    Required parameter: The trace id
                 *
                 * @return {promise<mixed>}
                 */
                getBonusesTrace: function (accountSlug, traceId) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/traces/{trace_id}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "trace_id": traceId
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "GET",
                        queryUrl: _queryUrl,
                        headers: _headers,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Delete a bonus
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {int} bonusId    Required parameter: The bonus id
                 *
                 * @return {promise<void>}
                 */
                deleteBonus: function (accountSlug, bonusId) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/{bonus_id}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "bonus_id": bonusId
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "DELETE",
                        queryUrl: _queryUrl,
                        headers: _headers,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Get a bonus by a given id.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {int} bonusId    Required parameter: The bonus id
                 *
                 * @return {promise<mixed>}
                 */
                getBonus: function (accountSlug, bonusId) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/{bonus_id}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "bonus_id": bonusId
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "GET",
                        queryUrl: _queryUrl,
                        headers: _headers,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                },
                /**
                 * Get the list of bonuses traces (audit trail). Every time the system tries to give a bonus the an advocate a new trace is created.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {int|null} page    Optional parameter: Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result.
                 * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10), threshold (100)
                 * @param {string|null} filter    Optional parameter: Allowed fields: reference, result, bonus_amount, advocate_token, advocate_referrer_token, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah'
                 * @param {string|null} sort    Optional parameter: Allowed fields: created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date'
                 *
                 * @return {promise<mixed>}
                 */
                getBonusesTraces: function (accountSlug, page, limit, filter, sort) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/bonuses/traces";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
                    });

                    // Process query parameters
                    _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                        "page": page,
                        "limit": limit,
                        "filter": filter,
                        "sort": sort
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "accept": "application/json",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "GET",
                        queryUrl: _queryUrl,
                        headers: _headers,
                    };
                    
                    var _response = HttpClient(_config);
                    
                    //process response
                    _response.then(function (_result) {
                        var _strResult =_result.body;
                        _result.body = JSON.parse(_strResult);
                        _deffered.resolve(_result);
                    }, function(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code == 401) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "You are not authenticated", errorCode: 401, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 403) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "User not authorized to perform the operation", errorCode: 403, errorResponse: _result.message}, _result.getContext()));
                        } else if (_result.code == 404) {
                            _deffered.reject(APIHelper.appendContext({errorMessage: "Resource not found", errorCode: 404, errorResponse: _result.message}, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message}, _result.getContext()));
                        }
                    });
                    
                    return _deffered.promise;
                }
            }
        }
    ]);

}(angular));