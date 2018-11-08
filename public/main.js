(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Yflix';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// firebase


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase)
            ],
            providers: [],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _home_home_profile_home_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home-profile/home-profile.component */ "./src/app/components/home/home-profile/home-profile.component.ts");
/* harmony import */ var _home_home_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.routing */ "./src/app/components/home/home.routing.ts");
/* harmony import */ var _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./highlight/highlight.component */ "./src/app/components/highlight/highlight.component.ts");
/* harmony import */ var _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sliders/sliders.component */ "./src/app/components/sliders/sliders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _home_home_routing__WEBPACK_IMPORTED_MODULE_8__["ProgramsRoutingModule"]
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _home_home_profile_home_profile_component__WEBPACK_IMPORTED_MODULE_7__["HomeProfileComponent"],
                _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_9__["HighlightComponent"],
                _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_10__["SlidersComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/highlight/highlight.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#highlight {\r\n    height: 800px;\r\n    /* background-color: red; */\r\n}\r\n\r\n.video-container {\r\n    height: 50vh;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .video-container {\r\n        height: 100%;\r\n    }\r\n}\r\n\r\nvideo {\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n/*** A E S T H E T I C S ***/\r\n\r\n/***************************/\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: #333;\r\n    color: white;\r\n}\r\n\r\n.video-container:after {\r\n    content: '';\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\nh1 {\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n    margin: 0 0 1rem;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-family: Futura, Helvetica, sans-serif;\r\n    font-size: 2.5vw !important;\r\n    position: absolute;\r\n    left: 50px;\r\n    top: 30%;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    h1 {\r\n        font-size: 22px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    h1 {\r\n        font-size: 75px;\r\n    }\r\n}\r\n\r\n.highlight-logo {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 3%;\r\n    width: 150px;\r\n}\r\n\r\n.callout {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\n.support {\r\n    position: fixed;\r\n    bottom: 60px;\r\n    right: 20px;\r\n    text-transform: uppercase;\r\n    font-size: 9px;\r\n    letter-spacing: 1px;\r\n    text-align: right;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\n.support a {\r\n    color: white;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n}\r\n\r\n.support a:before {\r\n    display: block;\r\n    position: absolute;\r\n    content: '';\r\n    bottom: -2px;\r\n    width: 0;\r\n    height: 1px;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    transition: .3s;\r\n}\r\n\r\n.support a:hover:before {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/highlight/highlight.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"highlight\">\r\n\r\n    <section class=\"video-container\">\r\n        <video src=\"/assets/videos/star-wars.mp4\" frameborder=\"0\" autoplay></video>\r\n        <div class=\"callout\">\r\n            <h1 style=\"color: white\">Starwars</h1>\r\n            <img class=\"highlight-logo\" src=\"https://vignette.wikia.nocookie.net/joke-battles/images/8/85/Star-Wars-Logo-psd35718.png/revision/latest?cb=20160225173505\"\r\n                alt=\"\">\r\n        </div>\r\n        <div class=\"support\">\r\n            <a href=\"http://caniuse.com/#search=object-fit\">Browser Support</a><br>\r\n            <a href=\"https://github.com/jonathantneal/fitie\">Need to support IE &amp; Edge?</a>\r\n        </div>\r\n    </section>\r\n\r\n</div>\r\n\r\n<!-- https://player.vimeo.com/video/213322023 -->"

/***/ }),

/***/ "./src/app/components/highlight/highlight.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.ts ***!
  \*************************************************************/
/*! exports provided: HighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightComponent", function() { return HighlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightComponent = /** @class */ (function () {
    function HighlightComponent() {
    }
    HighlightComponent.prototype.ngOnInit = function () {
    };
    HighlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-highlight',
            template: __webpack_require__(/*! ./highlight.component.html */ "./src/app/components/highlight/highlight.component.html"),
            styles: [__webpack_require__(/*! ./highlight.component.css */ "./src/app/components/highlight/highlight.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HighlightComponent);
    return HighlightComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home-profile/home-profile.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/home-profile/home-profile.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-profile {\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/home/home-profile/home-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/home-profile/home-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-highlight></app-highlight>\n\n<app-sliders></app-sliders>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home-profile/home-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/home-profile/home-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: HomeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeProfileComponent", function() { return HomeProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeProfileComponent = /** @class */ (function () {
    function HomeProfileComponent(route) {
        this.route = route;
    }
    HomeProfileComponent.prototype.ngOnInit = function () {
        this.profileId = this.route.snapshot.params['id'];
        if (this.profileId) {
            console.log('Welcome !', this.profileId);
        }
    };
    HomeProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-profile',
            template: __webpack_require__(/*! ./home-profile.component.html */ "./src/app/components/home/home-profile/home-profile.component.html"),
            styles: [__webpack_require__(/*! ./home-profile.component.css */ "./src/app/components/home/home-profile/home-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeProfileComponent);
    return HomeProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".netflix {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.netflix>div {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    transition: -webkit-transform .5s ease-in;\r\n    transition: transform .5s ease-in;\r\n    transition: transform .5s ease-in, -webkit-transform .5s ease-in;\r\n    box-shadow: 5px 0 50px #333;\r\n}\r\n\r\n.netflix>div.layout-1 {\r\n    background: #F5F5F1;\r\n    z-index: 3;\r\n    transition-delay: .65s;\r\n}\r\n\r\n.netflix>div.layout-1 img {\r\n    position: absolute;\r\n    width: 40vw;\r\n    height: auto;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate3d(-50%, -50%, 0);\r\n    transform: translate3d(-50%, -50%, 0);\r\n    transition: -webkit-transform .5s ease-in;\r\n    transition: transform .5s ease-in;\r\n    transition: transform .5s ease-in, -webkit-transform .5s ease-in;\r\n    transition-delay: 0;\r\n}\r\n\r\n.netflix>div.layout-2 {\r\n    background: #221E21;\r\n    z-index: 2;\r\n    transition-delay: .45s;\r\n}\r\n\r\n.netflix>div.layout-3 {\r\n    background: #D30018;\r\n    z-index: 1;\r\n    transition-delay: .3s;\r\n}\r\n\r\n.netflix:hover>div {\r\n    -webkit-transform: translate3d(-110%, 0, 0);\r\n    transform: translate3d(-110%, 0, 0);\r\n}\r\n\r\n.netflix:hover>div.layout-1 {\r\n    transition-delay: .3s;\r\n}\r\n\r\n.netflix:hover>div.layout-1 img {\r\n    -webkit-transform: translate(-100%, -50%, 0);\r\n    transform: translate(-100%, -50%, 0);\r\n}\r\n\r\n.netflix:hover>div.layout-2 {\r\n    transition-delay: .45s;\r\n}\r\n\r\n.netflix:hover>div.layout-3 {\r\n    transition-delay: .65s;\r\n}\r\n\r\n/* profile */\r\n\r\n#profiles {\r\n    position: absolute;\r\n    width: 40vw;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate3d(-50%, -50%, 0);\r\n    transform: translate3d(-50%, -50%, 0);\r\n    transition: -webkit-transform .5s ease-in;\r\n    transition: transform .5s ease-in;\r\n    transition: transform .5s ease-in, -webkit-transform .5s ease-in;\r\n    transition-delay: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.profile {\r\n    padding: 10px;\r\n}\r\n\r\n.profile:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.thumb {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\n.name {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"netflix\">\n  <div class=\"layout-1\">\n    <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/netflix-logo.png\" />\n  </div>\n  <div class=\"layout-2\">\n  </div>\n  <div class=\"layout-3\">\n  </div>\n</div>\n\n<div id=\"profiles\">\n\n  <div class=\"profile\" *ngFor=\"let profile of profiles\" (click)=\"openProfile(profile)\">\n    <img class=\"thumb\" [src]=\"profile.img\">\n    <p class=\"name\">{{ profile.name }} </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.profiles = [
            {
                id: 1,
                name: 'francois',
                img: 'https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif'
            },
            {
                id: 2,
                name: 'caroline',
                img: 'https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif'
            },
            {
                id: 3,
                name: 'pierre',
                img: 'https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif'
            },
            {
                id: 3,
                name: 'add',
                img: 'https://static.dbca.wa.gov.au/static/libs/uswds/0.12.1/img/plus-alt.svg'
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openProfile = function (profile) {
        console.log('openProfile', profile);
        var url = 'home/' + profile.id;
        this.router.navigate([url]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/components/home/home.routing.ts ***!
  \*************************************************/
/*! exports provided: ProgramsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsRoutingModule", function() { return ProgramsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _home_profile_home_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-profile/home-profile.component */ "./src/app/components/home/home-profile/home-profile.component.ts");
/* harmony import */ var _app_core_services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/authentification/authentification.guard */ "./src/app/core/services/authentification/authentification.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_app_core_services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_3__["AuthentificationGuard"]] },
    { path: ':id', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_app_core_services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_3__["AuthentificationGuard"]] },
    { path: 'home/:id', component: _home_profile_home_profile_component__WEBPACK_IMPORTED_MODULE_2__["HomeProfileComponent"], canActivate: [_app_core_services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_3__["AuthentificationGuard"]] }
];
var ProgramsRoutingModule = /** @class */ (function () {
    function ProgramsRoutingModule() {
    }
    ProgramsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ProgramsRoutingModule);
    return ProgramsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 100%;\r\n    background-color: #2c3338;\r\n    color: #606468 !important;\r\n}\r\n\r\n.grid {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 320px;\r\n    max-width: 20rem;\r\n    width: 90%;\r\n}\r\n\r\n.hidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n}\r\n\r\n.icons {\r\n    display: none;\r\n}\r\n\r\n.icon {\r\n    display: inline-block;\r\n    fill: #606468;\r\n    font-size: 16px;\r\n    font-size: 1rem;\r\n    height: 1em;\r\n    vertical-align: middle;\r\n    width: 1em;\r\n}\r\n\r\na {\r\n    color: #eee;\r\n    outline: 0;\r\n    text-decoration: none;\r\n}\r\n\r\na:focus,\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\ninput {\r\n    background-image: none;\r\n    border: 0;\r\n    color: inherit;\r\n    font: inherit;\r\n    margin: 0;\r\n    outline: 0;\r\n    padding: 0;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.signin-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.google-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.form {\r\n    margin: -14px;\r\n    margin: -0.875rem;\r\n}\r\n\r\n.form input[type='password'],\r\n.form input[type='text'],\r\n.form .signin-btn {\r\n    width: 100%;\r\n}\r\n\r\n.google-btn {\r\n    width: 100%;\r\n}\r\n\r\n.field {\r\n    display: flex;\r\n    margin: 14px;\r\n    margin: 0.875rem;\r\n}\r\n\r\n.form__input {\r\n    flex: 1;\r\n}\r\n\r\n.login {\r\n    color: #eee;\r\n}\r\n\r\n.login label,\r\n.login input[type='text'],\r\n.login input[type='password'],\r\n.login .google-btn,\r\n.login .signin-btn {\r\n    border-radius: 0.25rem;\r\n    padding: 16px;\r\n    padding: 1rem;\r\n}\r\n\r\n.login label {\r\n    background-color: #363b41;\r\n    border-bottom-right-radius: 0;\r\n    border-top-right-radius: 0;\r\n    padding-left: 20px;\r\n    padding-left: 1.25rem;\r\n    padding-right: 20px;\r\n    padding-right: 1.25rem;\r\n}\r\n\r\n.login input[type='password'],\r\n.login input[type='text'] {\r\n    background-color: #3b4148;\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 0;\r\n}\r\n\r\n.login input[type='password']:focus,\r\n.login input[type='password']:hover,\r\n.login input[type='text']:focus,\r\n.login input[type='text']:hover {\r\n    background-color: #434a52;\r\n}\r\n\r\n.login .signin-btn {\r\n    background-color: #ea4c88;\r\n    color: #eee;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.login .signin-btn:focus,\r\n.login .signin-btn:hover {\r\n    background-color: #d44179;\r\n}\r\n\r\n.login .google-btn {\r\n    background-color: #2828a7;\r\n    color: #eee;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.login .google-btn:focus,\r\n.login .google-btn:hover {\r\n    background-color: #354bb7;\r\n}\r\n\r\np {\r\n    margin-bottom: 24px;\r\n    margin-bottom: 1.5rem;\r\n    margin-top: 24px;\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n.text-center {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"align\">\n  <div class=\"grid\">\n    <form action=\"https://httpbin.org/post\" method=\"POST\" class=\"form login\">\n      <div class=\"field\"><label for=\"login__username\"><svg class=\"icon\">\n            <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#user\"></use>\n          </svg><span class=\"hidden\">Nom d'utilisateur</span></label>\n        <input id=\"login__username\" type=\"text\" name=\"username\" class=\"form__input\" placeholder=\"Nom d'utilisateur\"\n          required></div>\n      <div class=\"field\"><label for=\"login__password\"><svg class=\"icon\">\n            <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#lock\"></use>\n          </svg><span class=\"hidden\">Mot de passe</span></label><input id=\"login__password\" type=\"password\" name=\"password\"\n          class=\"form__input\" placeholder=\"Mot de passe\" required></div>\n      <div class=\"field\"><input class=\"signin-btn\" type=\"submit\" value=\"Se connecter\"></div>\n      <div class=\"field\" (click)=\"auth.googleLogin()\"><input class=\"google-btn text-center\" value=\"Se connecter avec Google\"></div>\n    </form>\n    <p class=\"text-center\">Pas de compte ? <a href=\"#\">En créer un !</a><svg class=\"icon\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#arrow-right\"></use>\n      </svg></p>\n  </div><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icons\">\n    <symbol id=\"arrow-right\" viewBox=\"0 0 1792 1792\">\n      <path d=\"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z\" />\n    </symbol>\n    <symbol id=\"lock\" viewBox=\"0 0 1792 1792\">\n      <path d=\"M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z\" />\n    </symbol>\n    <symbol id=\"user\" viewBox=\"0 0 1792 1792\">\n      <path d=\"M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z\" />\n    </symbol>\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/authentification/authentification.service */ "./src/app/core/services/authentification/authentification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (user) {
            console.log('user', user);
            if (user) {
                _this.router.navigateByUrl('/');
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_core_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sliders/sliders.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sliders/sliders.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sliders {\r\n    height: 1000px;\r\n    background-color: blue\r\n}"

/***/ }),

/***/ "./src/app/components/sliders/sliders.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sliders/sliders.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sliders\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/sliders/sliders.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sliders/sliders.component.ts ***!
  \*********************************************************/
/*! exports provided: SlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersComponent", function() { return SlidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlidersComponent = /** @class */ (function () {
    function SlidersComponent() {
    }
    SlidersComponent.prototype.ngOnInit = function () {
    };
    SlidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sliders',
            template: __webpack_require__(/*! ./sliders.component.html */ "./src/app/components/sliders/sliders.component.html"),
            styles: [__webpack_require__(/*! ./sliders.component.css */ "./src/app/components/sliders/sliders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlidersComponent);
    return SlidersComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user | async; then authenticated else guest\">\n  <!-- template will replace this div -->\n</div>\n\n\n<!-- User NOT logged in -->\n<ng-template #guest>\n  <h3>Howdy, GUEST</h3>\n  <p>Login to get started...</p>\n\n  <button (click)=\"auth.googleLogin()\">\n    <i class=\"fa fa-google\"></i> Connect Google\n  </button>\n\n</ng-template>\n\n\n<!-- User logged in -->\n<ng-template #authenticated>\n  <div *ngIf=\"auth.user | async as user\">\n    <h3>Howdy, {{ user.displayName }}</h3>\n    <img [src]=\"user.photoURL\">\n    <p>UID: {{ user.uid }}</p>\n    <p>Favorite Color: {{ user?.favoriteColor }} </p>\n    <button (click)=\"auth.signOut()\">Logout</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/authentification/authentification.service */ "./src/app/core/services/authentification/authentification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_app_core_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/authentification/authentification.guard */ "./src/app/core/services/authentification/authentification.guard.ts");
/* harmony import */ var _services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authentification/authentification.service */ "./src/app/core/services/authentification/authentification.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ? firebase







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                // ? firebase
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            providers: [
                _services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_8__["AuthentificationService"],
                _services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_7__["AuthentificationGuard"],
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n    height: 400px;\r\n    background-color: darkcyan;\r\n}"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n\n</div>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\r\n    height: 60px;\r\n    background-color: purple;\r\n}\r\n\r\n/* dropdown */\r\n\r\n.dropdown {\r\n    position: absolute;\r\n    align-items: right;\r\n    right: 20px;\r\n    top: 10px;\r\n}\r\n\r\n.dropdown-btn {\r\n    width: 40px;\r\n    height: 40px;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    right: 0px;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 20;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <a href=\"\">Yflix</a>\n\n  <div *ngIf=\"auth.user | async as user\" class=\"dropdown\">\n    <img class=\"dropdown-btn\" [src]=\"user.photoURL\">\n    <div class=\"dropdown-content\">\n      <a (click)=\"openProfile()\">Profile</a>\n      <a (click)=\"disconnect()\">Déconnexion</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentification/authentification.service */ "./src/app/core/services/authentification/authentification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openProfile = function () {
        this.router.navigateByUrl('/profile');
    };
    HeaderComponent.prototype.disconnect = function () {
        this.auth.signOut();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_1__["AuthentificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/services/authentification/authentification.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/services/authentification/authentification.guard.ts ***!
  \**************************************************************************/
/*! exports provided: AuthentificationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationGuard", function() { return AuthentificationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/authentification/authentification.service */ "./src/app/core/services/authentification/authentification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthentificationGuard = /** @class */ (function () {
    function AuthentificationGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthentificationGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthentificationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services_authentification_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthentificationGuard);
    return AuthentificationGuard;
}());



/***/ }),

/***/ "./src/app/core/services/authentification/authentification.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/services/authentification/authentification.service.ts ***!
  \****************************************************************************/
/*! exports provided: AuthentificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationService", function() { return AuthentificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthentificationService = /** @class */ (function () {
    function AuthentificationService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    AuthentificationService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        console.log('provider', provider);
        return this.oAuthLogin(provider);
    };
    AuthentificationService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthentificationService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    };
    AuthentificationService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthentificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthentificationService);
    return AuthentificationService;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _core_services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/authentification/authentification.guard */ "./src/app/core/services/authentification/authentification.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// ? components




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full', canActivate: [_core_services_authentification_authentification_guard__WEBPACK_IMPORTED_MODULE_3__["AuthentificationGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' },
    { path: 'profile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], pathMatch: 'full' },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCpec_zRWlaKBJRvBF0LIXmGjzeC27YWts',
        authDomain: 'ynov-yflix.firebaseapp.com',
        databaseURL: 'https://ynov-yflix.firebaseio.com',
        projectId: 'ynov-yflix',
        storageBucket: 'ynov-yflix.appspot.com',
        messagingSenderId: '56207161340'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projets\Yflix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map