"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAbuse = void 0;
const logAbuse = (ip, reason) => {
    console.warn(`[ABUSE] ${ip} - ${reason} - ${new Date().toISOString()}`);
};
exports.logAbuse = logAbuse;
