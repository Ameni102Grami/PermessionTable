# PermissionTable Component

This README provides an overview of the `PermissionTable` component within a React project. The `PermissionTable` is a table interface for managing and displaying permission data in a structured format using Material-UI components.

## Features

- **Search Functionality**: Users can filter entities by typing in a search field.
- **Dynamic Table Structure**: Entities and actions can be dynamically passed as props to create flexible table structures.
- **Permission Management**: Checkboxes allow for the selection and deselection of permissions.
- **Loading State Indicator**: Skeleton loading indicators are displayed when fetching data.
- **Accessibility**: Utilizes ARIA roles and properties for screen reader support.

## Dependencies

The `PermissionTable` component relies on the following dependencies:

- **Material-UI**: For UI components like `Table`, `TableContainer`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `TextField`, `Typography`, `Divider`, `Iconify`, and `CheckboxComponent`.
- **React**: For building the component and managing state.

## Installation

To use the `PermissionTable` component, ensure that you have the following dependencies installed in your project:

## Usage

To incorporate the `PermissionTable` component into your application, import it into your parent component and configure it with the required props. See the example below:

    import React from 'react';
    import PermissionTable from 'permission-table-component';

        const MyComponent = () => {
            // Define your actions, entities, and permissions
            const actions = ['read', 'write', 'delete'];
            const entities = ['user', 'group', 'role'];
            const permissions = ['user_read', 'group_write', 'role_delete'];

            // Define the handler for when permissions change
            const handlePermissionsChange = (checkedPermissions) => {
              console.log('Permissions have changed:', checkedPermissions);
            };

            return (
              <PermissionTable
                actions={actions}
                entities={entities}
                permissionsAsString={permissions}
                editGroupPermission={true}
                status="idle"
                handleReturnCheckedPermissions={handlePermissionsChange}
                permissions={userPermissions}
                userOrGroupPermissions={groupPermissions}
              />
            );
          };

          export default MyComponent;



## Props

- `actions`: An array of strings representing the actions that can be performed on entities.
- `entities`: An array of strings representing the entities for which permissions can be managed.
- `permissionsAsString`: An optional array of strings representing the current permissions as concatenated entity-action pairs.
- `superAdminPermissions`: An optional array of strings for defining super admin permissions.
- `isGroupPermissions`: An optional boolean indicating whether the permissions are for a group.
- `status`: A string representing the current status of the component ('idle', 'loading', etc.).
- `editGroupPermission`: An optional boolean that defaults to true, allowing editing of group permissions.
- `handleReturnCheckedPermissions`: A callback function for handling the return of checked permissions.
- `permissions`: An object containing detailed permission information.
- `userOrGroupPermissions`: An optional array of strings representing the permissions of the user or group being managed.

## Styling

Customize the appearance of the `PermissionTable` using Material-UI's styling solutions. You can apply inline styles with the `sx` prop or use `makeStyles` for more complex styling scenarios.

## Contributing

Contributions to the `PermissionTable` are welcome! Please ensure that your code adheres to the existing coding style and maintains test coverage.

## GitHub Repository

You can find the source code for the `PermissionTable` component on GitHub at [https://github.com/Ameni102Grami/PermessionTable](https://github.com/Ameni102Grami/PermessionTable).

## License

This project is licensed under the ISC License.
