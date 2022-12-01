var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { AsyncBoundary } from '@suspensive/react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
const BaseQueryAsyncBoundary = forwardRef((_a, resetRef) => {
    var { onReset } = _a, props = __rest(_a, ["onReset"]);
    return (_jsx(QueryErrorResetBoundary, { children: ({ reset }) => (_jsx(AsyncBoundary, Object.assign({}, props, { onReset: () => {
                onReset === null || onReset === void 0 ? void 0 : onReset();
                reset();
            }, ref: resetRef }))) }));
});
const CSROnlyQueryAsyncBoundary = forwardRef((_a, resetRef) => {
    var { onReset } = _a, props = __rest(_a, ["onReset"]);
    return (_jsx(QueryErrorResetBoundary, { children: ({ reset }) => (_jsx(AsyncBoundary.CSROnly, Object.assign({}, props, { onReset: () => {
                onReset === null || onReset === void 0 ? void 0 : onReset();
                reset();
            }, ref: resetRef }))) }));
});
export const QueryAsyncBoundary = BaseQueryAsyncBoundary;
QueryAsyncBoundary.CSROnly = CSROnlyQueryAsyncBoundary;
//# sourceMappingURL=QueryAsyncBoundary.js.map