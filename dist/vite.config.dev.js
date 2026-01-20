"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vite = require("vite");

var _pluginReact = _interopRequireDefault(require("@vitejs/plugin-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://vite.dev
var _default = (0, _vite.defineConfig)({
  plugins: [(0, _pluginReact["default"])()],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000000
  },
  server: {
    port: 3000
  }
});

exports["default"] = _default;
//# sourceMappingURL=vite.config.dev.js.map
