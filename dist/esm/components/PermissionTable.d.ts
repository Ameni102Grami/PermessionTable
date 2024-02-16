import React from 'react';
type Props = {
    actions: string[];
    entities: string[];
    permissionsAsString: string[] | undefined;
    superAdminPermissions?: string[];
    isGroupPermissions?: boolean;
    status: string;
    editGroupPermission?: boolean;
    handleReturnCheckedPermissions: Function;
    permissions: any;
    userOrGroupPermissions: string[] | undefined;
};
declare const PermissionTable: (props: Props) => React.JSX.Element;
export default PermissionTable;
