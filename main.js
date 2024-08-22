import "./src/scss/base.scss"

import "./src/icon-font/style.scss"

import { useDynamicAdapt } from "./src/libraries/dynamicAdapt/dynamicAdapt.js";
useDynamicAdapt();

import "simplebar";
import "simplebar/dist/simplebar.css";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

tippy("[data-tippy-content]");

import "./src/components/header/header.js"