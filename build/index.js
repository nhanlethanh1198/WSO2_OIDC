"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("@/config");
const app = express();
app.listen(config_1.config.PORT, () => console.log(`Listening on port ${config_1.config.PORT}`));
//# sourceMappingURL=index.js.map