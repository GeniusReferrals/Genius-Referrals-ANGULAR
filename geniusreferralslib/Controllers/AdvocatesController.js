/**
  * GeniusReferralsLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('GeniusReferralsLib')
    .factory('AdvocatesController', ['$q', 'Configuration', 'HttpClient', 'APIHelper',
        function($q, Configuration, HttpClient, APIHelper) {
            return {
                /**
                 * Delete an advocate
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {string} advocateToken    Required parameter: The advocate's token
                 *
                 * @return {promise<void>}
                 */
                deleteAdvocate: function (accountSlug, advocateToken) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates/{advocate_token}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "advocate_token": advocateToken
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
                 * Update an advocate.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {string} advocateToken    Required parameter: The advocate's token
                 * @param {AdvocateForm} advocateForm    Required parameter: The body of the request
                 *
                 * @return {promise<void>}
                 */
                putAdvocate: function (accountSlug, advocateToken, advocateForm) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates/{advocate_token}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "advocate_token": advocateToken
                    });

                    //validate and preprocess url
                    var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                    
                    // prepare headers
                    var _headers = {
                        "content-type": "application/json; charset=utf-8",
                        "Content-Type": Configuration.contentType,
                        "X-Auth-Token": Configuration.xAuthToken
                    };

                    // Remove null values
                    APIHelper.cleanObject(advocateForm);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "PUT",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        body: advocateForm
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
                 * Create a new advocate.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {AdvocateForm} advocateForm    Required parameter: The body of the request
                 *
                 * @return {promise<mixed>}
                 */
                postAdvocate: function (accountSlug, advocateForm) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates";
                    
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
                    APIHelper.cleanObject(advocateForm);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "POST",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        body: advocateForm
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
                 * Get an advocate by a given token.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {string} advocateToken    Required parameter: The advocate's token
                 *
                 * @return {promise<mixed>}
                 */
                getAdvocate: function (accountSlug, advocateToken) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates/{advocate_token}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "advocate_token": advocateToken
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
                 * Delete all advocates
                 * @param {string} accountSlug    Required parameter: The account identifier
                 *
                 * @return {promise<void>}
                 */
                deleteAdvocates: function (accountSlug) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
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
                 * Get the list of advocates
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {int|null} page    Optional parameter: Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result.
                 * @param {int|null} limit    Optional parameter: Maximum number of results to return in the response. Default (10), threshold (100)
                 * @param {string|null} filter    Optional parameter: Allowed fields: name, lastname, email, advocate_token, bonus_exchange_method_slug, campaign_slug, can_refer, is_referral, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah'
                 * @param {string|null} sort    Optional parameter: Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date'
                 *
                 * @return {promise<mixed>}
                 */
                getAdvocates: function (accountSlug, page, limit, filter, sort) {
                    // Assign default values
                    page = page || 1;
                    limit = limit || 10;

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug
                    });

                    // Process query parameters
                    _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                        "page": (null != page) ? page : 1,
                        "limit": (null != limit) ? limit : 10,
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
                 * Update partial elements of an advocate.
                 * @param {string} accountSlug    Required parameter: The account identifier
                 * @param {string} advocateToken    Required parameter: The advocate's token
                 * @param {array} advocatePatchForm    Required parameter: The body of the request
                 *
                 * @return {promise<mixed>}
                 */
                patchAdvocate: function (accountSlug, advocateToken, advocatePatchForm) {

                    //Create promise to return
                    var _deffered = $q.defer();
                    
                    //prepare query string for API call
                    var _baseUri = Configuration.BASEURI
                    var _queryBuilder = _baseUri + "/accounts/{account_slug}/advocates/{advocate_token}";
                    
                    // Process template parameters
                    _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                        "account_slug": accountSlug,
                        "advocate_token": advocateToken
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
                    APIHelper.cleanObject(advocatePatchForm);

                    // prepare and invoke the API call request to fetch the response
                    var _config = {
                        method: "PATCH",
                        queryUrl: _queryUrl,
                        headers: _headers,
                        body: advocatePatchForm
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