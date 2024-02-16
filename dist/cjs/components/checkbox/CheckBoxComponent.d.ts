import React from 'react';
type CheckboxComponentProps = {
    checked: boolean | null;
    model: string | number;
    action: string | number;
    disabled: boolean;
    getAssignPermission: Function;
    showSkeleton: boolean;
    permissions: string[] | undefined;
};
export default function CheckboxComponent({ checked, model, action, permissions, getAssignPermission, disabled }: CheckboxComponentProps): React.JSX.Element;
export {};
