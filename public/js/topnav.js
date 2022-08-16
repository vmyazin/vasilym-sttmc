/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/topnav.js ***!
  \********************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TopNav = /*#__PURE__*/function () {
  function TopNav() {
    _classCallCheck(this, TopNav);

    this.setUpTopNav();
    window.addEventListener('scroll', this.toggleOpaqueMenu.bind(this, -300));
  }

  _createClass(TopNav, [{
    key: "bodyEl",
    get: function get() {
      if (!this.bodyEl_) {
        this.bodyEl_ = document.querySelector('body');
      }

      return this.bodyEl_;
    }
  }, {
    key: "topNavEl",
    get: function get() {
      if (!this.topNavEl_) {
        this.topNavEl_ = document.getElementsByClassName("navbar")[0];
      }

      return this.topNavEl_;
    }
  }, {
    key: "toggleOpaqueMenu",
    value: function toggleOpaqueMenu(offsetFromTop) {
      var viewportOffset = this.bodyEl.getBoundingClientRect(); // these are relative to the viewport

      var top = viewportOffset.top;

      if (this.bodyEl.classList.contains('intro')) {
        if (top < offsetFromTop) {
          this.topNavEl.classList.add('opaque');
        } else {
          // this.topNavEl.style.removeProperty('opacity')
          this.topNavEl.classList.remove('opaque');
        }
      }
    }
  }, {
    key: "setUpTopNav",
    value: function setUpTopNav() {
      if (!this.bodyEl.classList.contains('intro')) {
        this.topNavEl.classList.add('opaque');
      }
    }
  }]);

  return TopNav;
}();

document.addEventListener('DOMContentLoaded', init);

function init() {
  new TopNav();
}
/******/ })()
;