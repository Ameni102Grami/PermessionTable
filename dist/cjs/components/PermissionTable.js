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
const material_1 = require("@mui/material");
const iconify_1 = __importDefault(require("./iconify"));
const CheckBoxComponent_1 = __importDefault(require("./checkbox/CheckBoxComponent"));
const PermissionTable = (props) => {
    var _a;
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [getChecked, setGetChecked] = (0, react_1.useState)([]);
    const { handleReturnCheckedPermissions, actions, userOrGroupPermissions, permissions, entities, permissionsAsString, status, editGroupPermission = true, isGroupPermissions } = props;
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };
    const returnCheckedPermissions = () => {
        handleReturnCheckedPermissions(getChecked);
    };
    (0, react_1.useEffect)(() => {
        setGetChecked(permissionsAsString
            ? permissionsAsString === null || permissionsAsString === void 0 ? void 0 : permissionsAsString.map((el) => ({
                id: el,
                checkingState: true
            }))
            : []);
    }, [status]);
    (0, react_1.useEffect)(() => {
        returnCheckedPermissions();
    }, [getChecked]);
    const isNotFound = !actions.length && !entities.length;
    return (react_1.default.createElement(material_1.TableContainer, { sx: { height: '700px' } },
        react_1.default.createElement(material_1.Table, { stickyHeader: true, "aria-label": "sticky table" },
            react_1.default.createElement(material_1.TableHead, null,
                react_1.default.createElement(material_1.TableRow, { sx: { width: '50px' } },
                    react_1.default.createElement(material_1.TableCell, { style: {
                            width: '50px!important',
                            border: '1.3px solid #e6e6e6',
                            overflow: 'hidden',
                            borderTopLeftRadius: '10px'
                        } },
                        react_1.default.createElement(material_1.Typography, { noWrap: true, variant: "subtitle2", align: "right" }, "Permissions"),
                        react_1.default.createElement(material_1.Divider, { style: { rotate: '50deg' } }),
                        react_1.default.createElement(material_1.Typography, { variant: "subtitle2", noWrap: true }, "Models"),
                        react_1.default.createElement(material_1.TextField, { value: inputValue, onChange: handleInputChange, sx: { width: '158px' }, size: "small", autoComplete: "off", placeholder: 'Search...', InputProps: {
                                startAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "start" },
                                    react_1.default.createElement(iconify_1.default, { icon: "eva:search-fill", sx: { color: 'text.disabled' } })))
                            } })), actions === null || actions === void 0 ? void 0 :
                    actions.map((column, columnIndex) => (react_1.default.createElement(material_1.TableCell, { key: column, align: "center", sx: {
                            width: 'fit-content !important',
                            border: '1px solid #e6e6e6',
                            textTransform: 'capitalize',
                            borderTopRightRadius: columnIndex === actions.length - 1 ? '10px' : 0
                        } }, column))))),
            react_1.default.createElement(material_1.TableBody, null, (_a = entities
                .filter((el) => { var _a; return (_a = el.toUpperCase()) === null || _a === void 0 ? void 0 : _a.includes(inputValue.toUpperCase()); })) === null || _a === void 0 ? void 0 :
                _a.map((row, rowIndex) => (react_1.default.createElement(material_1.TableRow, { hover: true, role: "checkbox", tabIndex: -1, key: row },
                    react_1.default.createElement(material_1.TableCell, { key: row, sx: {
                            position: 'sticky',
                            border: '1px solid #e6e6e6',
                            textTransform: 'capitalize',
                            borderBottomLeftRadius: rowIndex === entities.length - 1 ? '10px' : 0
                        } },
                        react_1.default.createElement(material_1.Typography, { variant: "subtitle1", noWrap: true }, row)), actions === null || actions === void 0 ? void 0 :
                    actions.map((column, columnIndex) => {
                        const hasPermission = permissions === null || permissions === void 0 ? void 0 : permissions.includes(`${row}_${column}`);
                        const isAllowed = !(hasPermission && ((isGroupPermissions && editGroupPermission) || !isGroupPermissions));
                        return (react_1.default.createElement(material_1.TableCell, { key: column, align: "center", style: {
                                width: 'fit-content',
                                border: '1px solid #e6e6e6',
                                borderBottomRightRadius: rowIndex === entities.length - 1 && columnIndex === actions.length - 1 ? '10px' : 0
                            } }, !['idle', 'loading'].includes(status) ? (react_1.default.createElement(CheckBoxComponent_1.default, { checked: permissionsAsString ? permissionsAsString === null || permissionsAsString === void 0 ? void 0 : permissionsAsString.includes(`${row}_${column}`) : false, disabled: isAllowed, model: row, action: column, getAssignPermission: setGetChecked, permissions: userOrGroupPermissions, showSkeleton: false })) : (react_1.default.createElement(material_1.Skeleton, { animation: "wave", variant: "text" }))));
                    })))),
                react_1.default.createElement(material_1.TableRow, null, isNotFound ? react_1.default.createElement(material_1.TableCell, { colSpan: 12 }, "No Data") : react_1.default.createElement(material_1.TableCell, { colSpan: 12, sx: { p: 0 } }))))));
};
exports.default = PermissionTable;
//# sourceMappingURL=PermissionTable.js.map