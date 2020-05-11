"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = `
.chrome-tabs {
  box-sizing: border-box;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  height: 46px;
  padding: 8px 3px 4px 3px;
  background: #dee1e6;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
}
.chrome-tabs * {
  box-sizing: inherit;
  font: inherit;
}
.chrome-tabs .chrome-tabs-content {
  position: relative;
  width: calc(100% - 100px);
  height: 100%;
}
.chrome-tabs .chrome-tabs-content-add {
  width: 28px;
  line-height: 28px;
  position: absolute;
  top: 10px;
  text-align: center;
  font-size: 14px;
  left: 0px;
  cursor: pointer;
  border-radius: 50%;
  background: #f2f2f2;
  transition: color 0.5s linear, background 0.5s linear;

}
.chrome-tabs .chrome-tabs-content-add svg {
  margin: 7px auto;
  vertical-align: top;
}
.chrome-tabs .chrome-tabs-content-add:hover {
  color: #296aef;
  background: #fff;
}
.chrome-tabs .chrome-tab {
  position: absolute;
  left: 0;
  height: 36px;
  width: 240px;
  border: 0;
  margin: 0;
  z-index: 1;
  pointer-events: none;
}
.chrome-tabs .chrome-tab,
.chrome-tabs .chrome-tab * {
  user-select: none;
  cursor: default;
}
.chrome-tabs .chrome-tab .chrome-tab-dividers {
  position: absolute;
  top: 7px;
  bottom: 7px;
  left: var(--tab-content-margin);
  right: var(--tab-content-margin);
}
.chrome-tabs .chrome-tab .chrome-tab-dividers,
.chrome-tabs .chrome-tab .chrome-tab-dividers::before,
.chrome-tabs .chrome-tab .chrome-tab-dividers::after {
  pointer-events: none;
}
.chrome-tabs .chrome-tab .chrome-tab-dividers::before,
.chrome-tabs .chrome-tab .chrome-tab-dividers::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #a9adb0;
  opacity: 1;
  transition: opacity 0.2s ease;
}
.chrome-tabs .chrome-tab .chrome-tab-dividers::before {
  left: 0;
}
.chrome-tabs .chrome-tab .chrome-tab-dividers::after {
  right: 0;
}
.chrome-tabs .chrome-tab:first-child .chrome-tab-dividers::before,
.chrome-tabs .chrome-tab:last-child .chrome-tab-dividers::after {
  opacity: 0;
}
.chrome-tabs .chrome-tab .chrome-tab-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
.chrome-tabs .chrome-tab .chrome-tab-background > svg {
  width: 100%;
  height: 100%;
}
.chrome-tabs .chrome-tab .chrome-tab-background > svg .chrome-tab-geometry {
  fill: #f4f5f6;
}
.chrome-tabs .chrome-tab[active] {
  z-index: 5;
}
.chrome-tabs .chrome-tab[active] .chrome-tab-background > svg .chrome-tab-geometry {
  fill: #fff;
}
.chrome-tabs .chrome-tab:not([active]) .chrome-tab-background {
  transition: opacity 0.2s ease;
  opacity: 0;
}
@media (hover: hover) {
  .chrome-tabs .chrome-tab:not([active]):hover {
    z-index: 2;
  }
  .chrome-tabs .chrome-tab:not([active]):hover .chrome-tab-background {
    opacity: 1;
  }
}
.chrome-tabs .chrome-tab.chrome-tab-was-just-added {
  top: 10px;
  animation: chrome-tab-was-just-added 120ms forwards ease-in-out;
}
.chrome-tabs .chrome-tab .chrome-tab-content {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: var(--tab-content-margin);
  right: var(--tab-content-margin);
  padding: 9px 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  pointer-events: all;
}
.chrome-tabs .chrome-tab[is-mini] .chrome-tab-content {
  padding-left: 2px;
  padding-right: 2px;
}
.chrome-tabs .chrome-tab .chrome-tab-favicon {
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  height: 16px;
  width: 16px;
  background-size: 16px;
  margin-left: 4px;
}
.chrome-tabs .chrome-tab[is-small] .chrome-tab-favicon {
  margin-left: 0;
}
.chrome-tabs .chrome-tab[is-mini]:not([active]) .chrome-tab-favicon {
  margin-left: auto;
  margin-right: auto;
}
.chrome-tabs .chrome-tab[is-mini][active] .chrome-tab-favicon {
  display: none;
}
.chrome-tabs .chrome-tab .chrome-tab-title {
  flex: 1;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 4px;
  color: #5f6368;
  -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 calc(100% - 24px), transparent);
  mask-image: linear-gradient(90deg, #000 0%, #000 calc(100% - 24px), transparent);
}
.chrome-tabs .chrome-tab[is-small] .chrome-tab-title {
  margin-left: 0;
}
.chrome-tabs .chrome-tab .chrome-tab-favicon + .chrome-tab-title,
.chrome-tabs .chrome-tab[is-small] .chrome-tab-favicon + .chrome-tab-title {
  margin-left: 8px;
}
.chrome-tabs .chrome-tab[is-smaller] .chrome-tab-favicon + .chrome-tab-title,
.chrome-tabs .chrome-tab[is-mini] .chrome-tab-title {
  display: none;
}
.chrome-tabs .chrome-tab[active] .chrome-tab-title {
  color: #45474a;
}
.chrome-tabs .chrome-tab .chrome-tab-drag-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.chrome-tabs .chrome-tab .chrome-tab-close {
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path stroke='rgba(0, 0, 0, .65)' stroke-linecap='square' stroke-width='1.5' d='M0 0 L8 8 M8 0 L0 8'></path></svg>");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 8px 8px;
}
@media (hover: hover) {
  .chrome-tabs .chrome-tab .chrome-tab-close:hover {
    background-color: #e8eaed;
  }
  .chrome-tabs .chrome-tab .chrome-tab-close:hover:active {
    background-color: #dadce0;
  }
}
@media not all and (hover: hover) {
  .chrome-tabs .chrome-tab .chrome-tab-close:active {
    background-color: #dadce0;
  }
}
@media (hover: hover) {
  .chrome-tabs .chrome-tab:not([active]) .chrome-tab-close:not(:hover):not(:active) {
    opacity: 0.8;
  }
}
.chrome-tabs .chrome-tab[is-smaller] .chrome-tab-close {
  margin-left: auto;
}
.chrome-tabs .chrome-tab[is-mini]:not([active]) .chrome-tab-close {
  display: none;
}
.chrome-tabs .chrome-tab[is-mini][active] .chrome-tab-close {
  margin-left: auto;
  margin-right: auto;
}
@-moz-keyframes chrome-tab-was-just-added {
  to {
    top: 0;
  }
}
@-webkit-keyframes chrome-tab-was-just-added {
  to {
    top: 0;
  }
}
@-o-keyframes chrome-tab-was-just-added {
  to {
    top: 0;
  }
}
@keyframes chrome-tab-was-just-added {
  to {
    top: 0;
  }
}
.chrome-tabs.chrome-tabs-is-sorting .chrome-tab:not(.chrome-tab-is-dragging),
.chrome-tabs:not(.chrome-tabs-is-sorting) .chrome-tab.chrome-tab-was-just-dragged {
  transition: transform 120ms ease-in-out;
}
.chrome-tabs .chrome-tabs-bottom-bar {
  position: absolute;
  bottom: 0;
  height: 4px;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
}
.chrome-tabs-optional-shadow-below-bottom-bar {
  position: relative;
  height: 1px;
  width: 100%;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1' viewBox='0 0 1 1'><rect x='0' y='0' width='1' height='1' fill='rgba(0, 0, 0, .17)'></rect></svg>");
  background-size: 1px 1px;
  background-repeat: repeat-x;
  background-position: 0% 0%;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {
  .chrome-tabs-optional-shadow-below-bottom-bar {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='2' height='2' viewBox='0 0 2 2'><rect x='0' y='0' width='2' height='1' fill='rgba(0, 0, 0, .27)'></rect></svg>");
  }
}
`;