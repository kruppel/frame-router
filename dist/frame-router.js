(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.frameRouter = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  if (Router.hasOwnProperty('default')) {
    Router = Router['default'];
  }

  function _onClick(e) {
    var href = e.target.href;

    if (!href) {
      return;
    }

    href = href.replace(window.location.origin, '');

    if (href.charAt(0) !== '/') {
      return;
    }

    this.updateURL(href);
    e.preventDefault();
  }

  function _onPopState(e) {
    this.updateURL(e.state);
  }

  function FrameRouter(handlers) {
    Router.call(this);

    this.handlers = handlers;
  }

  FrameRouter.prototype = Object.create(Router.prototype);
  FrameRouter.prototype.constructor = FrameRouter;

  FrameRouter.prototype.listen = function () {
    this._onClick = _onClick.bind(this);
    this._onPopState = _onPopState.bind(this);

    window.addEventListener('click', this._onClick, true);
    window.addEventListener('popstate', this._onPopState, true);
  };

  FrameRouter.prototype.unlisten = function () {
    window.removeEventListener('click', this._onClick, true);
    window.removeEventListener('popstate', this._onPopState, true);

    this._onClick = this._onPopState = null;
  };

  FrameRouter.prototype.updateURL = function (url) {
    window.history.pushState(null, document.title, url);
  };

  FrameRouter.prototype.getHandler = function (name) {
    return this.handlers[name];
  };

  module.exports = FrameRouter;
});