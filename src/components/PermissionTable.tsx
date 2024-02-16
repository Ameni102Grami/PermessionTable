import React, { useEffect, useState } from 'react';
import { Divider, InputAdornment, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Iconify from './iconify';
import CheckboxComponent from './checkbox/CheckBoxComponent';

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

const PermissionTable = (props: Props) => {
    const [inputValue, setInputValue] = useState('');
    const [getChecked, setGetChecked] = useState<{ id: string; checkingState: boolean }[]>([]);

    const { handleReturnCheckedPermissions, actions, userOrGroupPermissions, permissions, entities, permissionsAsString, status, editGroupPermission = true, isGroupPermissions } = props;
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const returnCheckedPermissions = () => {
        handleReturnCheckedPermissions(getChecked);
    };

    useEffect(() => {
        setGetChecked(
            permissionsAsString
                ? permissionsAsString?.map((el) => ({
                      id: el,
                      checkingState: true
                  }))
                : []
        );
    }, [status]);
    useEffect(() => {
        returnCheckedPermissions();
    }, [getChecked]);

    const isNotFound = !actions.length && !entities.length;
    return (
        <TableContainer sx={{ height: '700px' }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ width: '50px' }}>
                        <TableCell
                            style={{
                                width: '50px!important',
                                border: '1.3px solid #e6e6e6',
                                overflow: 'hidden',
                                borderTopLeftRadius: '10px'
                            }}
                        >
                            <Typography noWrap variant="subtitle2" align="right">
                                Permissions
                            </Typography>
                            <Divider style={{ rotate: '50deg' }} />
                            <Typography variant="subtitle2" noWrap>
                                Models
                            </Typography>
                            <TextField
                                value={inputValue}
                                onChange={handleInputChange}
                                sx={{ width: '158px' }}
                                size="small"
                                autoComplete="off"
                                placeholder={'Search...'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </TableCell>
                        {actions?.map((column, columnIndex) => (
                            <TableCell
                                key={column}
                                align="center"
                                sx={{
                                    width: 'fit-content !important',
                                    border: '1px solid #e6e6e6',
                                    textTransform: 'capitalize',
                                    borderTopRightRadius: columnIndex === actions.length - 1 ? '10px' : 0
                                }}
                            >
                                {column}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entities
                        .filter((el) => el.toUpperCase()?.includes(inputValue.toUpperCase()))
                        ?.map((row, rowIndex) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row}>
                                <TableCell
                                    key={row}
                                    sx={{
                                        position: 'sticky',
                                        border: '1px solid #e6e6e6',
                                        textTransform: 'capitalize',
                                        borderBottomLeftRadius: rowIndex === entities.length - 1 ? '10px' : 0
                                    }}
                                >
                                    <Typography variant="subtitle1" noWrap>
                                        {row}
                                    </Typography>
                                </TableCell>
                                {actions?.map((column, columnIndex) => {
                                    const hasPermission = permissions?.includes(`${row}_${column}`);
                                    const isAllowed = !(hasPermission && ((isGroupPermissions && editGroupPermission) || !isGroupPermissions));
                                    return (
                                        <TableCell
                                            key={column}
                                            align="center"
                                            style={{
                                                width: 'fit-content',
                                                border: '1px solid #e6e6e6',
                                                borderBottomRightRadius: rowIndex === entities.length - 1 && columnIndex === actions.length - 1 ? '10px' : 0
                                            }}
                                        >
                                            {!['idle', 'loading'].includes(status) ? (
                                                <CheckboxComponent
                                                    checked={permissionsAsString ? permissionsAsString?.includes(`${row}_${column}`) : false}
                                                    disabled={isAllowed}
                                                    model={row}
                                                    action={column}
                                                    getAssignPermission={setGetChecked}
                                                    permissions={userOrGroupPermissions}
                                                    showSkeleton={false}
                                                />
                                            ) : (
                                                <Skeleton animation="wave" variant="text" />
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    <TableRow>{isNotFound ? <TableCell colSpan={12}>No Data</TableCell> : <TableCell colSpan={12} sx={{ p: 0 }} />}</TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PermissionTable;
