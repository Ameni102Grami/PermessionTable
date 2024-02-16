"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
const LockOpen_1 = __importDefault(require("@mui/icons-material/LockOpen"));
const material_1 = require("@mui/material");
function CheckboxComponent({ checked, model, action, permissions, getAssignPermission, disabled }) {
    var _a;
    const [checking, setChecking] = (0, react_1.useState)(checked);
    const [showSkeleton, setShowSkeleton] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    (0, react_1.useEffect)(() => {
        setChecking(checked);
    }, [checked]);
    const id = (_a = model.toString()) === null || _a === void 0 ? void 0 : _a.concat('_').concat(action.toString());
    function removeDuplicatesWithSameId(array) {
        const seenIds = new Set();
        return array.filter((item) => {
            const id = item === null || item === void 0 ? void 0 : item.id;
            if (!seenIds.has(id)) {
                seenIds.add(id);
                return true;
            }
            return false;
        });
    }
    const userPermissions = permissions
        ? permissions === null || permissions === void 0 ? void 0 : permissions.map((el) => ({
            id: el,
            checkingState: true
        }))
        : [];
    const handleCheckRole = (checkingState) => {
        setChecking((value) => !value);
        getAssignPermission((prev) => {
            let combinedPermissions = [...prev, ...userPermissions];
            combinedPermissions = removeDuplicatesWithSameId(combinedPermissions);
            combinedPermissions = combinedPermissions.map((el) => {
                if (el.id === id) {
                    return Object.assign(Object.assign({}, el), { checkingState: checkingState });
                }
                return el;
            });
            const idExists = combinedPermissions.some((el) => el.id === id);
            if (!idExists) {
                combinedPermissions.push({ id, checkingState });
            }
            return combinedPermissions;
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, showSkeleton ? (react_1.default.createElement(material_1.Skeleton, { animation: "wave", variant: "text" })) : (react_1.default.createElement(material_1.Checkbox, { disabled: disabled, checked: checking === null || checking === undefined ? false : checking, onChange: (e) => {
            handleCheckRole(e.target.checked);
        }, icon: react_1.default.createElement(Lock_1.default, null), checkedIcon: react_1.default.createElement(LockOpen_1.default, null) }))));
}
exports.default = CheckboxComponent;
//# sourceMappingURL=CheckBoxComponent.js.map