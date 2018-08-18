webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n\n/* Functions */\t\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n\n/* Container for flexboxes */\n* {\n  box-sizing: border-box;\n}\n\nsection {\n  display: -ms-flexbox;\n  display: flex;\n}\n\napp-content {\n  width: 70%;\n  height: auto;\n}\n\napp-menu {\n  width: 30%;\n  height: inheritance;\n  padding: 5px;\n  background-color: #00818a;\n  color: #404b69;\n  border-right: 2px solid #283149;\n  height: auto;\n}\n\n/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */\n@media (max-width: 650px) {\n  section {\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n\n  app-content {\n    width: 100%;\n  }\n\n  app-menu {\n    width: 100%;\n    height: 100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section>\n  <app-menu></app-menu>\n  <app-content></app-content>\n</section>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__languages__ = __webpack_require__("../../../../../src/app/languages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__languages__["a" /* Languages */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__movie_service__["a" /* MovieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n\n/* Functions */\t\narticle > fieldset > legend {\n  font-family: \"Fredericka the Great\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px #000;\n  font-size: 28px;\n  vertical-align: text-top;\n  text-align: center;\n  font-weight: bold;\n}\n\n.descriptionTitle {\n  font-family: \"Righteous\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px white;\n  font-size: 16px;\n  vertical-align: text-top;\n  text-align: left;\n}\n\n#divDescription {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #283149;\n  font-size: 14px;\n  vertical-align: text-top;\n  text-align: center;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n\n/* Style the content */\narticle {\n  background-color: #00818a;\n  padding: 5px;\n  width: 99%;\n  text-align: center;\n  display: table;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n#mainDivContent {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: -webkit-fill-available;\n  border-radius: 5px 10px 3px 7px;\n  display: table-cell;\n  vertical-align: middle;\n}\n\nfieldset {\n  border-color: #404b69;\n  border-radius: 5px 10px 3px 7px;\n}\n\n.descriptionContent {\n  width: auto;\n  padding-top: 5px;\n  border: 0px;\n  margin: 0px;\n  background-color: rgba(219, 237, 243, 0.6);\n}\n\n#divDescription {\n  border-radius: 5px 10px 3px 7px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n\n.descriptionText {\n  margin-top: 0px;\n  -ms-flex: 49%;\n  flex: 49%;\n  max-width: 49%;\n  padding: 0 10px;\n  font-weight: bold;\n  text-align: justify;\n}\n\n.imageDescription {\n  max-height: 360px;\n  max-width: 200px;\n  padding-right: 3px;\n  text-align: center;\n  margin-top: 0px;\n  -ms-flex: 45%;\n  flex: 45%;\n  max-width: 45%;\n  padding: 0 10px;\n  border-radius: 25px 20px 26px 27px;\n}\n\n.imageDescription:hover {\n  transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -o-transform: scale(1.5);\n  box-shadow: 1px 1px 20px #FFF;\n}\n\n.spacingDescription {\n  width: 30px;\n}\n\n.imgDescriptonBox {\n  text-align: center;\n  margin-top: 0px;\n  -ms-flex: 49%;\n  flex: 49%;\n  max-width: 49%;\n  padding: 0 4px;\n}\n\n#genrerBox {\n  list-style-type: none;\n  margin: 0;\n  padding: 5px;\n  overflow: hidden;\n}\n\n#genrerBox li {\n  font-family: \"Fredericka the Great\", cursive;\n  font-weight: bold;\n  color: #00818a;\n  float: left;\n  font-size: 16px;\n  padding-right: 10px;\n  text-shadow: 1px 1px #283149;\n}\n\n#genrerBox li:hover {\n  text-shadow: 1px 1px #283149;\n  transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -o-transform: scale(1.5);\n}\n\n#genrerBox li:first-child {\n  color: #283149;\n  font-size: 16px;\n  text-shadow: 0 0 #283149;\n}\n\n#genrerBox li:first-child:hover {\n  text-shadow: 0px 0px #283149;\n  transform: scale(1);\n  -moz-transform: scale(1);\n  -o-transform: scale(1);\n}\n\n.informationTitle {\n  font-family: \"Fredericka the Great\", cursive;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.companyLogo {\n  border-radius: 5px 10px 3px 7px;\n  text-align: center;\n  width: 100%;\n}\n\n.companyDescription {\n  margin-top: 0px;\n  -ms-flex: 100%;\n  flex: 100%;\n  max-width: 100%;\n  padding: 0 10px;\n  border-radius: 5px 10px 3px 7px;\n  text-align: justify;\n}\n\n.companyName {\n  color: #283149;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.companyNameDescription {\n  font-family: \"Fredericka the Great\", cursive;\n  font-weight: bold;\n  color: #00818a;\n  font-size: 14px;\n  text-shadow: 1px 1px #283149;\n}\n\n.companyDescription img {\n  max-width: 120px;\n  max-height: 250px;\n}\n\n.offer {\n  font-family: \"Righteous\", cursive;\n  color: #283149;\n  text-align: center;\n  font-size: 38px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\n   \t<fieldset *ngIf=\"movieSelected\">\n   \t\t<legend>{{movieSelected.title}}</legend>\n   \t\t<div id=\"mainDivContent\" [style.background]=\"'url('+ movieSelected.poster_path+')'\">\n   \t\t\t<fieldset class=\"descriptionContent\">\n   \t\t\t\t<div id=\"divDescription\">\n\t\t\t\t\t<div class=\"descriptionText\">\n\t\t\t\t\t\t<span class=\"descriptionTitle\">{{descriptionTitle}}</span>\n\t\t\t\t\t\t<p>{{movieSelected.overview}}</p>\n\t\t\t\t\t\t<ul id=\"genrerBox\" >\n\t\t\t\t\t\t\t<li>{{genresTitle}}</li>\n\t\t\t\t\t\t\t<li *ngFor=\"let genrer of movieSelected.movieDetail.genres\">{{genrer.name}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<span class=\"informationTitle\">Runtime: </span> <span>{{movieSelected.movieDetail.runtime}} minutes</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span class=\"informationTitle\">Release Date: </span> <span>{{movieSelected.movieDetail.release_date}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span class=\"informationTitle\">Original Language: </span> <span>{{movieSelected.movieDetail.original_language | languages}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span class=\"informationTitle\">Status: </span> <span>{{movieSelected.movieDetail.status}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span class=\"informationTitle\">Popularity: </span> <span>{{movieSelected.movieDetail.popularity}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span class=\"informationTitle\">Votes: </span> <span>{{movieSelected.movieDetail.vote_count}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span class=\"informationTitle\">Score: </span> <span>{{movieSelected.movieDetail.vote_average}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--<img class=\"imageDescription\" src={{movieSelected.poster_path}} alt=\"Image {{movieSelected.title}}\">-->\n\t\t\t\t\t<img class=\"imageDescription\" src={{movieSelected.backdrop_path}} alt=\"Image {{movieSelected.title}}\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div id=\"divDescription\">\n\t\t\t\t\t<div *ngFor=\"let company of movieSelected.movieDetail.production_companies\">\n\t\t\t\t\t\t<div class=\"companyDescription\">\n\t\t\t\t\t\t\t<span class=\"companyName\">Production Company: </span> <span class=\"companyNameDescription\">{{company.name}}</span>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<span class=\"companyName\">Original Country: </span> <span class=\"companyNameDescription\">{{company.origin_country}}</span>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<img src=\"{{company.logo_path}}\" alt=\"{{company.name}}\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let country of movieSelected.movieDetail.production_countries\">\n\t\t\t\t\t\t<div class=\"companyDescription\">\n\t\t\t\t\t\t\t<span class=\"companyName\">Production Country: </span> <span class=\"companyNameDescription\">{{country.name}}</span>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<span class=\"companyName\">Norma: </span> <span class=\"companyNameDescription\">{{country.iso_3166_1}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div id=\"divDescription\">\n\t\t\t\t\t<div  class=\"companyLogo\">\n\t\t\t\t\t\t<p class=\"offer\">{{movieSelected.movieDetail.tagline}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n   \t\t\t</fieldset>\n   \t\t</div>\n   \t</fieldset>\n</article>"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameters__ = __webpack_require__("../../../../../src/app/parameters.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = (function () {
    function ContentComponent(movieService) {
        this.movieService = movieService;
        this.descriptionTitle = "Description: ";
        this.productionTitle = "Production Details: ";
        this.genresTitle = "Genres: ";
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.contentMessage.subscribe(function (message) {
            _this.movieSelected = message;
            if (_this.movieSelected) {
                if (_this.movieSelected.movieDetail.backdrop_path)
                    _this.movieSelected.movieDetail.backdrop_path = _this.getBaseUrlPath(_this.movieSelected.movieDetail.backdrop_path);
                if (_this.movieSelected.movieDetail.belongs_to_collection) {
                    if (_this.movieSelected.movieDetail.belongs_to_collection.backdrop_path)
                        _this.movieSelected.movieDetail.belongs_to_collection.backdrop_path =
                            _this.getBaseUrlPath(_this.movieSelected.movieDetail.belongs_to_collection.backdrop_path);
                    if (_this.movieSelected.movieDetail.belongs_to_collection.poster_path)
                        _this.movieSelected.movieDetail.belongs_to_collection.poster_path =
                            _this.getBaseUrlPath(_this.movieSelected.movieDetail.belongs_to_collection.poster_path);
                }
                if (_this.movieSelected.movieDetail.poster_path)
                    _this.movieSelected.movieDetail.poster_path = _this.getBaseUrlPath(_this.movieSelected.movieDetail.poster_path);
                for (var _i = 0, _a = _this.movieSelected.movieDetail.production_companies; _i < _a.length; _i++) {
                    var productionCompany = _a[_i];
                    if (null != productionCompany.logo_path)
                        productionCompany.logo_path = _this.getBaseUrlPath(productionCompany.logo_path);
                }
            }
        });
    };
    ContentComponent.prototype.getBaseUrlPath = function (orginalPath) {
        if (orginalPath)
            orginalPath = __WEBPACK_IMPORTED_MODULE_2__parameters__["a" /* PARAMETERS */].IMG_URL_BASE + orginalPath;
        return orginalPath;
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n\n/* Functions */\t\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n\n/* Style the footer */\nfooter {\n  background-color: #dbedf3;\n  border-top: 2px solid #283149;\n  padding: 10px;\n  text-align: center;\n  color: #283149;\n  height: 70px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0 4px;\n  font-family: \"Fredericka the Great\", cursive;\n}\n\n.divFooter {\n  -ms-flex: 33%;\n  flex: 33%;\n  max-width: 32%;\n  padding: 4px 4px;\n  font-size: 14px;\n}\n\n.informationFooter {\n  font-family: \"Righteous\", cursive;\n  font-weight: bold;\n  font-size: 16px;\n  color: #404b69;\n}\n\n.informationFooter a {\n  text-decoration: none;\n}\n\n.informationFooter a:active {\n  color: #404b69;\n}\n\n.informationDescription {\n  color: #283149;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 950px) {\n  footer {\n    padding: 10px;\n    text-align: center;\n    height: 210px;\n  }\n\n  .divFooter {\n    -ms-flex: 100%;\n    flex: 100%;\n    max-width: 100%;\n    padding: 4px 4px;\n    font-size: 14px;\n    border-bottom: 1px #283149 solid;\n  }\n}\n@media only screen and (max-width: 650px) {\n  footer {\n    padding: 10px;\n    text-align: center;\n    height: 210px;\n  }\n\n  .divFooter {\n    -ms-flex: 100%;\n    flex: 100%;\n    max-width: 100%;\n    padding: 4px 4px;\n    font-size: 14px;\n    border-bottom: 1px #283149 solid;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"divFooter\">\n  \t<div><span class=\"informationDescription\">Created by:  </span><span class=\"informationFooter\">Gustavo Chavarro Ortiz</span></div>\n  \t<div><span class=\"informationDescription\">Github profile:  </span><span class=\"informationFooter\"><a href=\"https://github.com/gchavarro88/\">gchavarro88</a></span></div>\n  \t<div><span class=\"informationDescription\">email:  </span><span class=\"informationFooter\">gustavo.chavarro.or@gmail.com</span></div>\n  </div>\n  <div class=\"divFooter\">\n  \t<div><span class=\"informationDescription\">Page Information:  </span><span class=\"informationFooter\">Test to Cafeto Software</span></div>\n  \t<div><span class=\"informationDescription\">LinkedIn Profile:  </span><span class=\"informationFooter\"><a href=\"https://www.linkedin.com/in/gustavo-adolfo-chavarro-ortiz-6a143328/\">LinkedIn Gustavo</a></span></div>\n  \t<div><span class=\"informationDescription\">City:  </span><span class=\"informationFooter\">Medellín - Antioquia</span></div>\n  </div>\n  <div class=\"divFooter\">\n  \t<div><span class=\"informationDescription\">Source of Data:  </span><span class=\"informationFooter\"><a href=\"https://www.themoviedb.org/\">Themeviedb.org</a></span></div>\n  \t<div><span class=\"informationDescription\">API Source:  </span><span class=\"informationFooter\"><a href=\"https://developers.themoviedb.org/3\">API Version 3</a></span></div>\n  \t<div><span class=\"informationDescription\">Institute:  </span><span class=\"informationFooter\">Universidad Santiago de Cali</span></div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n\n/* Functions */\t\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n\n/* Style the header */\nheader {\n  padding: 30px;\n  text-align: center;\n  font-size: 35px;\n  color: #283149;\n  height: 70px;\n  border-bottom: 2px solid #404b69;\n  background-color: #00818a;\n  animation-name: headerAnimation;\n  animation-duration: 20s;\n  animation-delay: 1s;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: headerAnimation;\n  -webkit-animation-duration: 20s;\n  -webkit-animation-delay: 1s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-name: headerAnimation;\n  -moz-animation-duration: 20s;\n  -moz-animation-delay: 1s;\n  -moz-animation-iteration-count: infinite;\n}\n\n.divImg {\n  text-align: right;\n  width: 20%;\n  float: left;\n}\n\n.divH2 {\n  text-align: left;\n  width: 80%;\n  float: right;\n  height: 70px;\n}\n\nheader div img {\n  width: 120px;\n  margin-top: -5px;\n}\nheader div h2 {\n  font-size: 78px;\n  font-family: \"Fredericka the Great\", cursive;\n  margin-top: -5px;\n}\n\n@keyframes headerAnimation {\n  0% {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/collage.jpg")) + ") 0% 0% #dbedf3;\n    color: #283149;\n    text-shadow: 2px 2px 5px white;\n  }\n  25% {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/collage.jpg")) + ") 0% 25% #dbedf3;\n    color: #404b69;\n    text-shadow: 4px 4px 10px white;\n  }\n  50% {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/collage.jpg")) + ") 0% 50% #dbedf3;\n    color: #00818a;\n    text-shadow: 6px 6px 15px white;\n  }\n  75% {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/collage.jpg")) + ") 0% 75% main-color1;\n    color: #dbedf3;\n    text-shadow: 4px 4px 10px #283149;\n  }\n  100% {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/collage.jpg")) + ") 0% 100% #dbedf3;\n    color: #283149;\n    text-shadow: 2px 2px 5px white;\n  }\n}\n@media only screen and (max-width: 950px) {\n  .divH2 {\n    text-align: center;\n  }\n\n  header div img {\n    width: 90px;\n  }\n  header div h2 {\n    font-size: 48px;\n    font-family: \"Fredericka the Great\", cursive;\n  }\n}\n@media only screen and (max-width: 650px) {\n  .divH2 {\n    text-align: center;\n  }\n\n  header div img {\n    width: 60px;\n  }\n  header div h2 {\n    font-size: 28px;\n    font-family: \"Fredericka the Great\", cursive;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"divImg\"><img src=\"{{headerLogoPath}}\" alt=\"{{headerLogoAlt}}\"></div>\n  \t<div class=\"divH2\"><h2>{{headerTitle}}</h2></div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerTitle = "Movies API Consumer";
        this.headerLogoPath = "../assets/img/movieLogo.gif";
        this.headerLogoAlt = "Header Logo";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/languages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Languages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Languages = (function () {
    function Languages() {
    }
    Languages.prototype.transform = function (value) {
        var result = value;
        switch (value) {
            case "en":
                result = "English";
                break;
            case "es":
                result = "Spanish";
                break;
            case "it":
                result = "Italian";
                break;
            case "fr":
                result = "French";
                break;
            case "gr":
                result = "German";
                break;
            case "ja":
                result = "Japanese";
                break;
            case "hi":
                result = "Hindue";
                break;
            default:
                result = value;
                break;
        }
        return result;
    };
    return Languages;
}());
Languages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'languages'
    })
], Languages);

//# sourceMappingURL=languages.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n\n/* Functions */\t\n.titleMenu {\n  font-family: \"Fredericka the Great\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px #000;\n  font-size: 28px;\n  vertical-align: text-top;\n  text-align: center;\n  font-weight: bold;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n\n/* Style the navigation menu */\n#searchBox {\n  height: 70px;\n  vertical-align: middle;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 90%;\n}\n\n#moviesBox {\n  height: 48%;\n  text-align: center;\n}\n\n#search-box {\n  width: 90%;\n  border-radius: 10px 5px;\n  height: 30px;\n  color: #888;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  box-shadow: 1px 1px 4px #404b69;\n  padding-left: 20px;\n  margin-left: 20px;\n}\n\n#search-box:hover {\n  border-color: #dbedf3;\n  box-shadow: 1px 1px 4px #FFF;\n}\n\n.titleMenu {\n  margin-top: 5px;\n}\n\n.divMenu {\n  box-sizing: border-box;\n  margin-top: -5%;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n\n.tile {\n  height: 100%;\n  width: 100%;\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0px;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n/* Create four equal columns that sits next to each other */\n.column {\n  -ms-flex: 25%;\n  flex: 25%;\n  max-width: 25%;\n  padding: 0px;\n}\n\n.column img {\n  margin-top: 0px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.column img:hover {\n  transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -o-transform: scale(1.5);\n  border-radius: 5px 10px;\n}\n\n.column img:active {\n  box-shadow: 1px 1px 20px #FFF;\n}\n\n.titleRadio {\n  font-family: \"Fredericka the Great\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px #000;\n  font-size: 13px;\n  vertical-align: text-top;\n  text-align: center;\n  font-weight: bold;\n  padding-left: 10px;\n  /* HeroSearch private styles */\n}\n\n.search-result li {\n  border-bottom: 1px solid #283149;\n  border-left: 1px solid #283149;\n  border-right: 1px solid #283149;\n  width: 220px;\n  height: 20px;\n  padding: 5px;\n  background-color: #dbedf3;\n  cursor: pointer;\n  list-style-type: none;\n}\n\n.search-result li:hover {\n  background-color: #00818a;\n  font-weight: bold;\n}\n\n.search-result li span {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #283149;\n  font-size: 12px;\n}\n\nul.search-result {\n  display: block;\n  position: absolute;\n  top: 185px;\n  left: 130px;\n}\n\n@media only screen and (max-width: 950px) {\n  ul.search-result {\n    left: 40px;\n  }\n}\n@media only screen and (max-width: 650px) {\n  ul.search-result {\n    left: 120px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"searchBox\">\n\t<span class=\"titleRadio\">Movie</span>\n\t<input  #movieRadio name=\"radioSearch\" type=\"radio\" value=\"Movie\" (click)=\"setSearchParameter(movieRadio.value)\" checked>\n\t<span class=\"titleRadio\">Actor</span>\n\t<input  #actorRadio name=\"radioSearch\" type=\"radio\" value=\"Actor\" (click)=\"setSearchParameter(actorRadio.value)\">\n\t<input #searchBox id=\"search-box\" placeholder=\"{{searchBoxText}}\" [value]=\"searchInputValue\" (keyup)=\"search(searchBox.value)\"/>\n\t<ul class=\"search-result\" *ngIf=\"actorListSearch.length > 0\">\n\t\t<li *ngFor=\"let actor of actorListSearch\" (click)=\"findActorDetail(actor)\">\n\t      <span>{{actor.name}}</span>\n\t    </li>\n\t</ul>\n\t<ul class=\"search-result\" *ngIf=\"movieListSearch.length > 0\">\n\t\t<li *ngFor=\"let movie of movieListSearch\" (click)=\"findMovieDetail(movie)\">\n\t      <span>{{movie.title}}</span>\n\t    </li>\n\t</ul>\n</div>\n<div id=\"moviesBox\">\n\t<h4 class=\"titleMenu\">{{moviesTitle}}</h4>\n\t<div class=\"divMenu\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"column\" *ngFor=\"let movie of movieListTop\">\n\t\t\t\t<img src=\"{{movie.poster_path}}\" alt=\"{{movie.title}}\" class=\"tile\" (click)=\"getMovieDetailTop(movie)\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parameters__ = __webpack_require__("../../../../../src/app/parameters.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MOVIE_WORD = "Movie";
var MenuComponent = (function () {
    function MenuComponent(movieService) {
        this.movieService = movieService;
        this.searchBoxText = "Type movie name or actor name here, to start the search...";
        this.moviesTitle = "Movies Top";
        this.position = 0;
        this.searchParameter = "Movie";
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.movieListSearch = [];
        this.actorListSearch = [];
        this.searchInputValue = "";
    }
    MenuComponent.prototype.ngOnInit = function () {
        //this.movieService.currentMessage.subscribe(message => this.response = message);
        this.getMoviesListTop();
        this.searchActorOrMoviesName();
    };
    MenuComponent.prototype.getMoviesListTop = function () {
        var _this = this;
        this.movieService.getMoviesListTop().subscribe(function (result) {
            if (result) {
                _this.movieListTop = result.results.slice(0, 12);
                _this.movieListTop = _this.getImageMovieFullPath(_this.movieListTop);
                _this.getMovieDetailTop(_this.movieListTop[0]);
            }
        });
    };
    MenuComponent.prototype.getImageMovieFullPath = function (movies) {
        for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
            var movie = movies_1[_i];
            movie.poster_path = __WEBPACK_IMPORTED_MODULE_4__parameters__["a" /* PARAMETERS */].IMG_URL_BASE + movie.poster_path;
            movie.backdrop_path = __WEBPACK_IMPORTED_MODULE_4__parameters__["a" /* PARAMETERS */].IMG_URL_BASE + movie.backdrop_path;
        }
        return movies;
    };
    MenuComponent.prototype.getMovieDetailTop = function (movie) {
        var _this = this;
        if (movie) {
            this.movieSelected = movie;
            this.movieService.getMovieDetail(movie.id).subscribe(function (result) {
                if (result) {
                    _this.movieSelected.movieDetail = result;
                    _this.movieService.sendDetail(_this.movieSelected);
                }
            });
        }
    };
    MenuComponent.prototype.setSearchParameter = function (parameter) {
        this.searchParameter = parameter;
        this.actorListSearch = [];
        this.movieListSearch = [];
    };
    MenuComponent.prototype.search = function (term) {
        var _this = this;
        this.searchTerm.next(term);
        if (this.searchParameter == MOVIE_WORD) {
            this.resultMovieList.subscribe(function (result) {
                if (result) {
                    _this.movieListSearch = result.results;
                    _this.movieListTop = _this.movieListSearch.slice(0, 12);
                    _this.movieListTop = _this.getImageMovieFullPath(_this.movieListTop);
                    _this.getMovieDetailTop(_this.movieListTop[0]);
                }
            });
            this.actorListSearch = [];
        }
        else {
            this.resultActorList.subscribe(function (result) {
                if (result) {
                    _this.actorListSearch = result.results;
                    _this.movieListTop = [];
                    for (var _i = 0, _a = _this.actorListSearch; _i < _a.length; _i++) {
                        var actor = _a[_i];
                        console.log("Cantidad de peliculas " + _this.movieListTop.length);
                        if (_this.movieListTop.length < 12) {
                            if (_this.movieListTop.length == 0) {
                                _this.movieListTop = actor.known_for;
                                console.log(actor.known_for);
                            }
                            else {
                                _this.movieListTop = _this.movieListTop.concat(actor.known_for);
                            }
                        }
                        else {
                            break;
                        }
                    }
                    _this.movieListTop = _this.movieListTop.slice(0, 12);
                    _this.movieListTop = _this.getImageMovieFullPath(_this.movieListTop);
                    _this.getMovieDetailTop(_this.movieListTop[0]);
                }
            });
            this.movieListSearch = [];
        }
    };
    MenuComponent.prototype.searchActorOrMoviesName = function () {
        var _this = this;
        this.resultMovieList = this.searchTerm.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(200), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (term) { return _this.movieService.searchMovies(term); }));
        this.resultActorList = this.searchTerm.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(200), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (term) { return _this.movieService.searchActors(term); }));
    };
    MenuComponent.prototype.findMovieDetail = function (movie) {
        this.actorListSearch = [];
        this.movieListSearch = [];
        this.moviesTitle = "Others interesting movies...";
        this.searchInputValue = movie.title;
        this.getMovieDetailTop(movie);
    };
    MenuComponent.prototype.findActorDetail = function (actor) {
        this.actorListSearch = [];
        this.movieListSearch = [];
        this.moviesTitle = "Others interesting movies...";
        this.searchInputValue = actor.name;
        this.search(this.searchInputValue);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameters__ = __webpack_require__("../../../../../src/app/parameters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ID_MOVIE = "ID_MOVIE";
var VALUE = "VALUE";
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](this.movie);
        this.contentMessage = this.messageSource.asObservable();
    }
    MovieService.prototype.getMoviesListTop = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_2__parameters__["b" /* URL_LIST */].URL_MOVIES_TOP;
        return this.http.get(this.url);
    };
    MovieService.prototype.getMovieDetail = function (idMovie) {
        this.url = __WEBPACK_IMPORTED_MODULE_2__parameters__["b" /* URL_LIST */].URL_MOVIE_DETAIL;
        this.url = this.url.replace(ID_MOVIE, idMovie);
        return this.http.get(this.url);
    };
    MovieService.prototype.searchActors = function (value) {
        if (!value.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null);
        }
        this.url = __WEBPACK_IMPORTED_MODULE_2__parameters__["b" /* URL_LIST */].URL_SEARCH_ACTOR;
        this.url = this.url.replace(VALUE, value);
        return this.http.get(this.url);
    };
    MovieService.prototype.searchMovies = function (value) {
        if (!value.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(null);
        }
        this.url = __WEBPACK_IMPORTED_MODULE_2__parameters__["b" /* URL_LIST */].URL_SEARCH_MOVIE;
        this.url = this.url.replace(VALUE, value);
        return this.http.get(this.url);
    };
    MovieService.prototype.sendDetail = function (movie) {
        this.messageSource.next(movie);
    };
    return MovieService;
}());
MovieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MovieService);

var _a;
//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ "../../../../../src/app/parameters.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PARAMETERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL_LIST; });
var PARAMETERS = {
    API_KEY: 'api_key=2d3db1a828f2035f7cbb6d1b47b12aab',
    URL_BASE: 'https://api.themoviedb.org/3',
    LANGUAGE: 'language=en-US',
    SLASH: '/',
    QUESTION: '?',
    AMPERSAND: '&',
    IMG_URL_BASE: 'https://image.tmdb.org/t/p/original/'
};
var URL_LIST = {
    URL_MOVIES_TOP: 'https://api.themoviedb.org/3/movie/top_rated?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&page=1',
    URL_TVSHOW_TOP: 'https://api.themoviedb.org/3/tv/popular?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&page=1',
    URL_MOVIE_DETAIL: 'https://api.themoviedb.org/3/movie/ID_MOVIE?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US',
    URL_SEARCH_ACTOR: 'https://api.themoviedb.org/3/search/person?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&query=VALUE&page=1&include_adult=false',
    URL_SEARCH_MOVIE: 'https://api.themoviedb.org/3/search/movie?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&query=VALUE&page=1&include_adult=false'
};
//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ "../../../../../src/assets/img/collage.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "collage.ec934f6c53662fb6456c";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map