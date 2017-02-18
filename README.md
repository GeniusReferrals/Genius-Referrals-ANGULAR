# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/)

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `geniusreferralslib` folder inside the scripts folder.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Genius%20Referrals-Angular&projectName=GeniusReferralsLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Genius%20Referrals-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
    var app = angular.module('myApp', []);
    app.controller('testController', function($scope) 
    {

    });
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Angular Project</title>
		<script></script>
	</head>

	<body>
	</body>

	</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Genius%20Referrals-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
	<script src="scripts/angular.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
	<head>
		...
		<!-- Helper files -->
		<script src="scripts/geniusreferralslib/Configuration.js"></script>
		<script src="scripts/geniusreferralslib/APIHelper.js"></script>
		<script src="scripts/geniusreferralslib/Http/Client/HttpContext.js"></script>
		<script src="scripts/geniusreferralslib/Http/Client/RequestClient.js"></script>
		<script src="scripts/geniusreferralslib/Http/Request/HttpRequest.js"></script>
		<script src="scripts/geniusreferralslib/Http/Response/HttpResponse.js"></script>

		<!-- API Controllers -->
        <script src="scripts/geniusreferralslib/Controllers/RootsController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/AuthenticationsController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/AdvocatesController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/AccountsController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/ReportsController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/ReferralsController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/RedemptionRequestsController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/BonusesController.js"></script>
        <script src="scripts/geniusreferralslib/Controllers/CampaignsController.js"></script>


		<!-- Models -->
        <script src="scripts/geniusreferralslib/Models/BaseModel.js"></script>
        <script src="scripts/geniusreferralslib/Models/Advocate.js"></script>
        <script src="scripts/geniusreferralslib/Models/AdvocateForm.js"></script>
        <script src="scripts/geniusreferralslib/Models/AdvocatePatchForm.js"></script>
        <script src="scripts/geniusreferralslib/Models/Bonuses.js"></script>
        <script src="scripts/geniusreferralslib/Models/BonusesForm.js"></script>
        <script src="scripts/geniusreferralslib/Models/ForceBonuses.js"></script>
        <script src="scripts/geniusreferralslib/Models/ForceBonusesForm.js"></script>
        <script src="scripts/geniusreferralslib/Models/RedemptionRequest.js"></script>
        <script src="scripts/geniusreferralslib/Models/RedemptionRequestForm.js"></script>
        <script src="scripts/geniusreferralslib/Models/Referral.js"></script>
        <script src="scripts/geniusreferralslib/Models/ReferralForm.js"></script>
        <script src="scripts/geniusreferralslib/Models/PaymentMethod.js"></script>
        <script src="scripts/geniusreferralslib/Models/PaymentMethodForm.js"></script>

		...
	</head>
```
> The Configuration.js file should be imported before the other files.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
	<head>
		...
		<script src="scripts/app.js"></script>
	</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
	<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
	...
	<body ng-app="myApp">
		<div ng-controller="testController">
			...
		</div>
		...
	</body>
	...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
    var app = angular.module('myApp', ['GeniusReferralsLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [RootsController](#roots_controller)
* [AuthenticationsController](#authentications_controller)
* [AdvocatesController](#advocates_controller)
* [AccountsController](#accounts_controller)
* [ReportsController](#reports_controller)
* [ReferralsController](#referrals_controller)
* [RedemptionRequestsController](#redemption_requests_controller)
* [BonusesController](#bonuses_controller)
* [CampaignsController](#campaigns_controller)

### <a name="roots_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RootsController") RootsController

#### Get singleton instance

The singleton instance of the ``` RootsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, RootsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_root"></a>![Method: ](https://apidocs.io/img/method.png ".RootsController.getRoot") getRoot

> The root of the API


```javascript
function getRoot()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, RootsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = RootsController.getRoot();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="authentications_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationsController") AuthenticationsController

#### Get singleton instance

The singleton instance of the ``` AuthenticationsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AuthenticationsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_authentication"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationsController.getAuthentication") getAuthentication

> Allow clients to test authentication on Genius Referrals platform.


```javascript
function getAuthentication()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, AuthenticationsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = AuthenticationsController.getAuthentication();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="advocates_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AdvocatesController") AdvocatesController

#### Get singleton instance

The singleton instance of the ``` AdvocatesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="delete_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.deleteAdvocate") deleteAdvocate

> Delete an advocate


```javascript
function deleteAdvocate(accountSlug, advocateToken)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;


		var result = AdvocatesController.deleteAdvocate(accountSlug, advocateToken);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="put_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.putAdvocate") putAdvocate

> Update an advocate.


```javascript
function putAdvocate(accountSlug, advocateToken, advocateForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocateForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocateForm = new AdvocateForm({"key":"value"});


		var result = AdvocatesController.putAdvocate(accountSlug, advocateToken, advocateForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="post_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.postAdvocate") postAdvocate

> Create a new advocate.


```javascript
function postAdvocate(accountSlug, advocateForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateForm = new AdvocateForm({"key":"value"});


		var result = AdvocatesController.postAdvocate(accountSlug, advocateForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getAdvocate") getAdvocate

> Get an advocate by a given token.


```javascript
function getAdvocate(accountSlug, advocateToken)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;


		var result = AdvocatesController.getAdvocate(accountSlug, advocateToken);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="delete_advocates"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.deleteAdvocates") deleteAdvocates

> Delete all advocates


```javascript
function deleteAdvocates(accountSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;


		var result = AdvocatesController.deleteAdvocates(accountSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_advocates"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getAdvocates") getAdvocates

> Get the list of advocates


```javascript
function getAdvocates(accountSlug, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name, lastname, email, advocate_token, bonus_exchange_method_slug, campaign_slug, can_refer, is_referral, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = AdvocatesController.getAdvocates(accountSlug, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="patch_advocate"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.patchAdvocate") patchAdvocate

> Update partial elements of an advocate.


```javascript
function patchAdvocate(accountSlug, advocateToken, advocatePatchForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocatePatchForm |  ``` Required ```  ``` Collection ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocatePatchForm = [{"key":"value"}].map(function(elem) {
        return new Advocate Patch Form(elem);
    });


		var result = AdvocatesController.patchAdvocate(accountSlug, advocateToken, advocatePatchForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_share_links"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getShareLinks") getShareLinks

> Get the advocates share links. These are the links that advocates use to share your services online.  Share links are wrapped per campaign and widget package.


```javascript
function getShareLinks(accountSlug, advocateToken)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;


		var result = AdvocatesController.getShareLinks(accountSlug, advocateToken);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="put_payment_method"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.putPaymentMethod") putPaymentMethod

> Update a payment method.


```javascript
function putPaymentMethod(accountSlug, advocateToken, advocatePaymentMethodId, advocatePaymentMethodForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The advocate's token |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocatePaymentMethodId |  ``` Required ```  | The payment method's identifier |
| advocatePaymentMethodForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocatePaymentMethodId = 132;
    var advocatePaymentMethodForm = new PaymentMethodForm({"key":"value"});


		var result = AdvocatesController.putPaymentMethod(accountSlug, advocateToken, advocatePaymentMethodId, advocatePaymentMethodForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_payment_method"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getPaymentMethod") getPaymentMethod

> Get an advocate's payment method


```javascript
function getPaymentMethod(accountSlug, advocateToken, advocatePaymentMethodId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocatePaymentMethodId |  ``` Required ```  | The payment method's identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocatePaymentMethodId = 132;


		var result = AdvocatesController.getPaymentMethod(accountSlug, advocateToken, advocatePaymentMethodId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="post_payment_method"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.postPaymentMethod") postPaymentMethod

> Create a new payment method.


```javascript
function postPaymentMethod(accountSlug, advocateToken, advocatePaymentMethodForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| advocatePaymentMethodForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var advocatePaymentMethodForm = new PaymentMethodForm({"key":"value"});


		var result = AdvocatesController.postPaymentMethod(accountSlug, advocateToken, advocatePaymentMethodForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonus_redemption_method"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getBonusRedemptionMethod") getBonusRedemptionMethod

> Get bonuses redemption method.


```javascript
function getBonusRedemptionMethod(bonusesRedemptionMethodSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| bonusesRedemptionMethodSlug |  ``` Required ```  | The bonus redemption method's identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var bonusesRedemptionMethodSlug = bonuses_redemption_method_slug;


		var result = AdvocatesController.getBonusRedemptionMethod(bonusesRedemptionMethodSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonus_redemption_methods"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getBonusRedemptionMethods") getBonusRedemptionMethods

> Get bonuses redemption methods.


```javascript
function getBonusRedemptionMethods()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = AdvocatesController.getBonusRedemptionMethods();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_currencies"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getCurrencies") getCurrencies

> Get currencies.


```javascript
function getCurrencies()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = AdvocatesController.getCurrencies();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_currency"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getCurrency") getCurrency

> Get a currency.


```javascript
function getCurrency(code)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| code |  ``` Required ```  | The currency's code |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var code = "code";


		var result = AdvocatesController.getCurrency(code);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_payment_methods"></a>![Method: ](https://apidocs.io/img/method.png ".AdvocatesController.getPaymentMethods") getPaymentMethods

> Get the advocate's payment methods.


```javascript
function getPaymentMethods(accountSlug, advocateToken, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: username, is_active. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: username, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort=last_name\|first_name\|-hire_date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AdvocatesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = AdvocatesController.getPaymentMethods(accountSlug, advocateToken, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="accounts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountsController") AccountsController

#### Get singleton instance

The singleton instance of the ``` AccountsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, AccountsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccount") getAccount

> Get an account by a given slug.


```javascript
function getAccount(accountSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AccountsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;


		var result = AccountsController.getAccount(accountSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccounts") getAccounts

> Get the list of accounts.


```javascript
function getAccounts(page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort=last_name\|first_name\|-hire_date |



#### Example Usage

```javascript


	app.controller("testController", function($scope, AccountsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = AccountsController.getAccounts(page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="reports_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ReportsController") ReportsController

#### Get singleton instance

The singleton instance of the ``` ReportsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_referrals_summary_per_origin"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getReferralsSummaryPerOrigin") getReferralsSummaryPerOrigin

> Get referrals summary per referral origin.


```javascript
function getReferralsSummaryPerOrigin(advocateToken)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var advocateToken = advocate_token;


		var result = ReportsController.getReferralsSummaryPerOrigin(advocateToken);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonuses_summary_per_origin"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getBonusesSummaryPerOrigin") getBonusesSummaryPerOrigin

> Get bonuses summary per referral origin.


```javascript
function getBonusesSummaryPerOrigin(advocateToken)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| advocateToken |  ``` Required ```  | The advocate's token |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var advocateToken = advocate_token;


		var result = ReportsController.getBonusesSummaryPerOrigin(advocateToken);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_top_advocates"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getTopAdvocates") getTopAdvocates

> Get top 10 advocates.


```javascript
function getTopAdvocates(accountSlug, campaignSlug, limit, from, to)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10) |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var limit = 132;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");


		var result = ReportsController.getTopAdvocates(accountSlug, campaignSlug, limit, from, to);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_share_daily_participation"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getShareDailyParticipation") getShareDailyParticipation

> Get share daily participation.


```javascript
function getShareDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate's token |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");


		var result = ReportsController.getShareDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_referral_daily_participation"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getReferralDailyParticipation") getReferralDailyParticipation

> Get referral daily participation.


```javascript
function getReferralDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate's token |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");


		var result = ReportsController.getReferralDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_click_daily_participation"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getClickDailyParticipation") getClickDailyParticipation

> Get click daily participation.


```javascript
function getClickDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate's token |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");


		var result = ReportsController.getClickDailyParticipation(accountSlug, campaignSlug, advocateToken, from, to);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonuses_daily_given"></a>![Method: ](https://apidocs.io/img/method.png ".ReportsController.getBonusesDailyGiven") getBonusesDailyGiven

> Get bonuses daily given.


```javascript
function getBonusesDailyGiven(accountSlug, campaignSlug, advocateToken, from, to)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Optional ```  | The account identifier |
| campaignSlug |  ``` Optional ```  | The campaign identifier |
| advocateToken |  ``` Optional ```  | The advocate identifier |
| from |  ``` Optional ```  | The datetime were the range of the search starts |
| to |  ``` Optional ```  | The datetime were the range of the search stops |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReportsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;
    var advocateToken = advocate_token;
    var from = date("D M d, Y G:i");
    var to = date("D M d, Y G:i");


		var result = ReportsController.getBonusesDailyGiven(accountSlug, campaignSlug, advocateToken, from, to);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="referrals_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ReferralsController") ReferralsController

#### Get singleton instance

The singleton instance of the ``` ReferralsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_referral_origin"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferralOrigin") getReferralOrigin

> Get a referral origin by a given slug.


```javascript
function getReferralOrigin(referralOriginSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| referralOriginSlug |  ``` Required ```  | The referral origin identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var referralOriginSlug = referral_origin_slug;


		var result = ReferralsController.getReferralOrigin(referralOriginSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_referral_origins"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferralOrigins") getReferralOrigins

> Get referral origins. This is needed when creating (POST) a new referral, as referral_origin_slug refers to one of this origins.


```javascript
function getReferralOrigins()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = ReferralsController.getReferralOrigins();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferral") getReferral

> Get a referral by a given id.


```javascript
function getReferral(accountSlug, advocateToken, referralId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralId |  ``` Required ```  | The referral id |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralId = referral_id;


		var result = ReferralsController.getReferral(accountSlug, advocateToken, referralId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="delete_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.deleteReferral") deleteReferral

> Delete a referral.


```javascript
function deleteReferral(accountSlug, advocateToken, referralId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralId |  ``` Required ```  | The referral identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralId = referral_id;


		var result = ReferralsController.deleteReferral(accountSlug, advocateToken, referralId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="post_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.postReferral") postReferral

> Create a new referral.


```javascript
function postReferral(accountSlug, advocateToken, referralForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralForm = new ReferralForm({"key":"value"});


		var result = ReferralsController.postReferral(accountSlug, advocateToken, referralForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="put_referral"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.putReferral") putReferral

> Update a referral.


```javascript
function putReferral(accountSlug, advocateToken, referralId, referralForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| referralId |  ``` Required ```  | The referral id |
| referralForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var referralId = referral_id;
    var referralForm = new ReferralForm({"key":"value"});


		var result = ReferralsController.putReferral(accountSlug, advocateToken, referralId, referralForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_referrals"></a>![Method: ](https://apidocs.io/img/method.png ".ReferralsController.getReferrals") getReferrals

> Get the list of referrals for a given advocate.


```javascript
function getReferrals(accountSlug, advocateToken, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The advocate's token |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: url, referral_origin_slug, created. Use the following delimiters to build your filters params. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ReferralsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = ReferralsController.getReferrals(accountSlug, advocateToken, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="redemption_requests_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RedemptionRequestsController") RedemptionRequestsController

#### Get singleton instance

The singleton instance of the ``` RedemptionRequestsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_redemption_request_status"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestStatus") getRedemptionRequestStatus

> Get a redemption request status.


```javascript
function getRedemptionRequestStatus(redemptionRequestStatusSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| redemptionRequestStatusSlug |  ``` Required ```  | The redemption request status identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var redemptionRequestStatusSlug = redemption_request_status_slug;


		var result = RedemptionRequestsController.getRedemptionRequestStatus(redemptionRequestStatusSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_redemption_request_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestStatuses") getRedemptionRequestStatuses

> Get redemption request statuses.


```javascript
function getRedemptionRequestStatuses()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = RedemptionRequestsController.getRedemptionRequestStatuses();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_redemption_request_action"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestAction") getRedemptionRequestAction

> Get a redemption request action.


```javascript
function getRedemptionRequestAction(redemptionRequestActionSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| redemptionRequestActionSlug |  ``` Required ```  | The redemption request action identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var redemptionRequestActionSlug = redemption_request_action_slug;


		var result = RedemptionRequestsController.getRedemptionRequestAction(redemptionRequestActionSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_redemption_request_actions"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequestActions") getRedemptionRequestActions

> Get redemption request actions.


```javascript
function getRedemptionRequestActions()
```

#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	

		var result = RedemptionRequestsController.getRedemptionRequestActions();
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="patch_redemption_request"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.patchRedemptionRequest") patchRedemptionRequest

> Redeem a redemption request. After the redemption request is created it needs to be redeemed. This will deduct the amount of the advocate unclaimed balance and move the request to the completed state.


```javascript
function patchRedemptionRequest(accountSlug, redemptionRequestId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| redemptionRequestId |  ``` Required ```  | The redemption request id |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var redemptionRequestId = 132;


		var result = RedemptionRequestsController.patchRedemptionRequest(accountSlug, redemptionRequestId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="post_redemption_request"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.postRedemptionRequest") postRedemptionRequest

> Create a redemption request.


```javascript
function postRedemptionRequest(accountSlug, redemptionRequestForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| redemptionRequestForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var redemptionRequestForm = new RedemptionRequestForm({"key":"value"});


		var result = RedemptionRequestsController.postRedemptionRequest(accountSlug, redemptionRequestForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_redemption_request"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequest") getRedemptionRequest

> Get a redemption request by a given id.


```javascript
function getRedemptionRequest(accountSlug, redemptionRequestId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| redemptionRequestId |  ``` Required ```  | The redemption request identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var redemptionRequestId = redemption_request_id;


		var result = RedemptionRequestsController.getRedemptionRequest(accountSlug, redemptionRequestId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_redemption_requests"></a>![Method: ](https://apidocs.io/img/method.png ".RedemptionRequestsController.getRedemptionRequests") getRedemptionRequests

> Get the list of redemption requests.


```javascript
function getRedemptionRequests(accountSlug, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: redemption_request_id, name, lastname, email, request_status_slug, request_action_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript


	app.controller("testController", function($scope, RedemptionRequestsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = RedemptionRequestsController.getRedemptionRequests(accountSlug, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="bonuses_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BonusesController") BonusesController

#### Get singleton instance

The singleton instance of the ``` BonusesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_bonuses"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonuses") getBonuses

> Get the list of bonuses for a given account.


```javascript
function getBonuses(accountSlug, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name, lastname, email, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: name, lastname, email, created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = BonusesController.getBonuses(accountSlug, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="post_bonus"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.postBonus") postBonus

> Make an attempt to give a bonus for to the advocate's referrer. The system processes the given advocate (referral) and creates a bonus for the advocate's referrer if is needed. All restrictions set on the campaigns for this account will be check out before giving the bonus to the advocate's referrer.


```javascript
function postBonus(accountSlug, bonusesForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusesForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var bonusesForm = new BonusesForm({"key":"value"});


		var result = BonusesController.postBonus(accountSlug, bonusesForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonus_checkup"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonusCheckup") getBonusCheckup

> Check if there is a bonus to be given to the advocate. Allows the clients to check if there is a bonus to be given, it simulates the behaivor of a POST request to /accounts/{account_slug}/bonuses resource. This resource is idempotent.


```javascript
function getBonusCheckup(accountSlug, advocateToken, reference, paymentAmount)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| advocateToken |  ``` Required ```  | The referral's token. Usually the one that completed the purchase, or trigger an event. |
| reference |  ``` Required ```  | The reference number for this request. Usually the order_id, payment_id, or timestamp. |
| paymentAmount |  ``` Required ```  | The payment amount the referrals has made. Required for a percentage based campaign. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController, $http,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var advocateToken = advocate_token;
    var reference = "reference";
    var paymentAmount = 132.655736781962;


		$http.get().then(function(successData){
            file = successData;
            var result = BonusesController.getBonusCheckup(accountSlug, advocateToken, reference, paymentAmount);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```



#### <a name="post_force_bonus"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.postForceBonus") postForceBonus

> Force the system to give a bonus to an advocate. The system will not take into account the restriccions specified on the campaigns.


```javascript
function postForceBonus(accountSlug, bonusForm)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusForm |  ``` Required ```  | The body of the request |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var bonusForm = new ForceBonusesForm({"key":"value"});


		var result = BonusesController.postForceBonus(accountSlug, bonusForm);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonus_trace"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonusTrace") getBonusTrace

> Get a bonus request trace.


```javascript
function getBonusTrace(accountSlug, traceId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| traceId |  ``` Required ```  | The trace id |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var traceId = 132;


		var result = BonusesController.getBonusTrace(accountSlug, traceId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="delete_bonus"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.deleteBonus") deleteBonus

> Delete a bonus


```javascript
function deleteBonus(accountSlug, bonusId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusId |  ``` Required ```  | The bonus id |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var bonusId = 132;


		var result = BonusesController.deleteBonus(accountSlug, bonusId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonus"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonus") getBonus

> Get a bonus by a given id.


```javascript
function getBonus(accountSlug, bonusId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| bonusId |  ``` Required ```  | The bonus id |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var bonusId = 132;


		var result = BonusesController.getBonus(accountSlug, bonusId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_bonus_traces"></a>![Method: ](https://apidocs.io/img/method.png ".BonusesController.getBonusTraces") getBonusTraces

> Get the list of bonuses traces (audit trail). Every time the system tries to give a bonus the an advocate a new trace is created.


```javascript
function getBonusTraces(accountSlug, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: reference, result, bonus_amount, advocate_token, advocate_referrer_token, campaign_slug, from, to, created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: created. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BonusesController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var page = 132;
    var limit = 132;
    var filter = "filter";
    var sort = "sort";


		var result = BonusesController.getBonusTraces(accountSlug, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="campaigns_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CampaignsController") CampaignsController

#### Get singleton instance

The singleton instance of the ``` CampaignsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CampaignsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	});
```

#### <a name="get_campaign"></a>![Method: ](https://apidocs.io/img/method.png ".CampaignsController.getCampaign") getCampaign

> Get a campaign by a given slug.


```javascript
function getCampaign(accountSlug, campaignSlug)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| campaignSlug |  ``` Required ```  | The campaign identifier |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CampaignsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var campaignSlug = campaign_slug;


		var result = CampaignsController.getCampaign(accountSlug, campaignSlug);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



#### <a name="get_campaigns"></a>![Method: ](https://apidocs.io/img/method.png ".CampaignsController.getCampaigns") getCampaigns

> Get the list of campaings for a given account.


```javascript
function getCampaigns(accountSlug, page, limit, filter, sort)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountSlug |  ``` Required ```  | The account identifier |
| page |  ``` Optional ```  ``` DefaultValue ```  | Page number, e.g. 1 would start at the first result, and 10 would start at the tenth result. |
| limit |  ``` Optional ```  ``` DefaultValue ```  | Maximum number of results to return in the response. Default (10), threshold (100) |
| filter |  ``` Optional ```  | Allowed fields: name, description, start_date, end_date, is_active (true\|false), created. Use the following delimiters to build your filters params. The vertical bar ('\|') to separate individual filter phrases and a double colon ('::') to separate the names and values. The delimiter of the double colon (':') separates the property name from the comparison value, enabling the comparison value to contain spaces. Example: www.example.com/users?filter='name::todd\|city::denver\|title::grand poobah' |
| sort |  ``` Optional ```  | Allowed fields: campaign_slug, created, start_date, end_date, is_active. Use sort query-string parameter that contains a delimited set of property names. For each property name, sort in ascending order, and for each property prefixed with a dash ('-') sort in descending order. Separate each property name with a vertical bar ('\|'), which is consistent with the separation of the name\|value pairs in filtering, above. For example, if we want to retrieve users in order of their last name (ascending), first name (ascending) and hire date (descending), the request might look like this www.example.com/users?sort='last_name\|first_name\|-hire_date' |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CampaignsController,Advocate,AdvocateForm,AdvocatePatchForm,Bonuses,BonusesForm,ForceBonuses,ForceBonusesForm,RedemptionRequest,RedemptionRequestForm,Referral,ReferralForm,PaymentMethod,PaymentMethodForm){
	    var accountSlug = account_slug;
    var page = 90;
    var limit = 90;
    var filter = "filter";
    var sort = "sort";


		var result = CampaignsController.getCampaigns(accountSlug, page, limit, filter, sort);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



