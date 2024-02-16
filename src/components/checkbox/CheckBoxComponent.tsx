import React, { useEffect, useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Checkbox, Skeleton } from '@mui/material';

type CheckboxComponentProps = {
    checked: boolean | null;
    model: string | number;
    action: string | number;
    disabled: boolean;
    getAssignPermission: Function;
    showSkeleton: boolean;
    permissions: string[] | undefined;
};

export default function CheckboxComponent({ checked, model, action, permissions, getAssignPermission, disabled }: CheckboxComponentProps) {
    const [checking, setChecking] = useState(checked);
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setChecking(checked);
    }, [checked]);
    const id = model.toString()?.concat('_').concat(action.toString());
    function removeDuplicatesWithSameId(array: any[]): any[] {
        const seenIds: Set<string> = new Set();

        return array.filter((item) => {
            const id = item?.id;

            if (!seenIds.has(id)) {
                seenIds.add(id);
                return true;
            }

            return false;
        });
    }
    const userPermissions = permissions
        ? permissions?.map((el) => ({
              id: el,
              checkingState: true
          }))
        : [];
    const handleCheckRole = (checkingState: boolean) => {
        setChecking((value) => !value);
        getAssignPermission((prev: { id: string; checkingState: boolean }[]) => {
            let combinedPermissions = [...prev, ...userPermissions];

            combinedPermissions = removeDuplicatesWithSameId(combinedPermissions);

            combinedPermissions = combinedPermissions.map((el) => {
                if (el.id === id) {
                    return { ...el, checkingState: checkingState };
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
    return (
        <>
            {showSkeleton ? (
                <Skeleton animation="wave" variant="text" />
            ) : (
                <Checkbox
                    disabled={disabled}
                    checked={checking === null || checking === undefined ? false : checking}
                    onChange={(e) => {
                        handleCheckRole(e.target.checked);
                    }}
                    icon={<LockIcon />}
                    checkedIcon={<LockOpenIcon />}
                />
            )}
        </>
    );
}
