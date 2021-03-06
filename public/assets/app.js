var app;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/public/index.js":
/*!****************************!*\
  !*** ./js/public/index.js ***!
  \****************************/
/***/ (() => {

document.querySelectorAll(".kredit").forEach(function (form) {
  // console.log(loginForm.cred.value);
  form.querySelector(".btn").onclick = function () {
    var formData = {
      cred: form.cred.value,
      sroc: form.sroc.value,
      aim: form.vidKredit.value,
      email: form.email.value,
      zp: form.zp.value
    };
    fetch("/index/calc", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(formData)
    }).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (JSON.stringify(res.status) == 200) {
        alert("\u0432\u0430\u0448 \u0435\u0436\u0435\u043C\u0435\u0441\u0435\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0451\u0436 \u0431\u0443\u0434\u0435\u0442 = ".concat(JSON.stringify(res.plat), " \u0440")); // document.location.href = '/index/user';

        fetch("/index/user", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            email: form.email.value,
            aim: form.vidKredit.value,
            sroc: form.sroc.value,
            cred: form.cred.value
          })
        }).then(function (response) {
          return response.json();
        }).then(function (res) {
          document.location.href = "/index/user".concat(form.email.value);
        }); // document.location.reload();
      } else {
        alert("Что-то пошло не так");
        document.location.reload();
      }
    }); // console.log(formData);
  }; // console.log(formData);

});

/***/ }),

/***/ "./js/public/login.js":
/*!****************************!*\
  !*** ./js/public/login.js ***!
  \****************************/
/***/ (() => {

document.querySelectorAll(".autorez").forEach(function (form) {
  form.querySelectorAll(".login").forEach(function (login) {
    login.querySelector(".btnEnterOne").onclick = function (event) {
      event.preventDefault();
      form.querySelector(".enter").classList.toggle("enter_active");
      form.querySelector(".login").classList.toggle("login_active");
    };

    login.querySelector(".btnLogin").onclick = function (event) {
      event.preventDefault();
      login.querySelectorAll(".login-form").forEach(function (loginForm) {
        var pas;

        if (loginForm.password.value == loginForm.repassword.value) {
          pas = loginForm.password.value;
          var formData = {
            mail: loginForm.login.value,
            lastName: loginForm.lastName.value,
            firstName: loginForm.firstName.value,
            patronymic: loginForm.patronymic.value,
            password: pas,
            telephone: loginForm.telephone.value,
            series: loginForm.series.value,
            number: loginForm.number.value
          };
          fetch("/regis", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData)
          }).then(function (res) {
            if (res.status == 200) {
              alert("Операция завершина успешно");
              document.location.href = '/index';
            } else {
              alert("Что-то пошло не так");
              document.location.reload();
            }
          });
        } else {
          alert("пароли не совподают!");
          location.reload();
          return;
        }
      });
    };
  });
  form.querySelectorAll(".enter").forEach(function (login) {
    login.querySelector(".btnLoginOne").onclick = function (event) {
      event.preventDefault();
      form.querySelector(".enter").classList.toggle("enter_active");
      form.querySelector(".login").classList.toggle("login_active");
    };

    login.querySelector(".btnEnter").onclick = function (event) {
      event.preventDefault(); // alert(1);

      login.querySelectorAll(".enter-form").forEach(function (enterForm) {
        var formData = {
          mail: enterForm.login.value,
          password: enterForm.password.value
        };
        fetch("/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(formData)
        }).then(function (res) {
          if (res.status == 200) {
            alert("Операция завершина успешно");
            document.location.href = '/index';
          } else {
            alert("Что-то пошло не так");
            document.location.reload();
          }
        });
      });
    };
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./js/public/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./js/public/login.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./js/public/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_1__);


})();

app = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=app.js.map