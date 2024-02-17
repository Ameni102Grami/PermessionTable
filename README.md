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

    import "./App.css";
    import PermissionTable from "permission-table";

    function App() {
      // Define the actions and entities for the table
      const actions = ["create", "read", "update", "delete"];
      const entities = ["users", "posts", "comments"];

      // Define the permissions as strings
      const userPermissions = [
        "users_create",
        "users_read",
        "posts_update",
        "comments_delete",
      ];

      const permissions = [
        "users_create",
        "users_read",
        "users_update",
        "users_delete",
        "posts_create",
        "posts_update",
        "posts_delete",
        "posts_read",
        "comments_update",
        "comments_delete",
        "comments_create",
        "comments_read",
      ];

      // Define a handler function to process the checked permissions
      const handleReturnCheckedPermissions = (checkedPermissions) => {
        console.log("Selected permissions:", checkedPermissions);
        // Here you would typically update your application's state or perform an API call
      };

      // Render the PermissionTable component with the necessary props
      return (
        <div>
          <h1>Manage Permissions</h1>
          <PermissionTable
            isGroupPermissions
            editGroupPermission
            actions={actions}
            entities={entities}
            permissionsAsString={userPermissions}
            permissions={permissions}
            handleReturnCheckedPermissions={handleReturnCheckedPermissions}
            status={"success"}
          />
        </div>
      );
    }

export default App;


## Props

- `actions`: An array of strings representing the actions that can be performed on entities.
- `entities`: An array of strings representing the entities for which permissions can be managed.
- `permissionsAsString`: user Permissions.
- `isGroupPermissions`: An optional boolean indicating whether the permissions are for a group.
- `status`: A string representing the current status of the component ('idle', 'loading', etc.) to show the skeleton.
- `editGroupPermission`: An optional boolean that defaults to true, allowing editing of group permissions.
- `handleReturnCheckedPermissions`: A callback function for handling the return of checked permissions.
- `permissions`: An array containing all the permissions.
- `userOrGroupPermissions`: An optional array of strings representing the permissions of the user or group being managed.

## Styling

Customize the appearance of the `PermissionTable` using Material-UI's styling solutions. You can apply inline styles with the `sx` prop or use `makeStyles` for more complex styling scenarios.

## Contributing

Contributions to the `PermissionTable` are welcome! Please ensure that your code adheres to the existing coding style and maintains test coverage.

## GitHub Repository

You can find the source code for the `PermissionTable` component on GitHub at [https://github.com/Ameni102Grami/PermessionTable](https://github.com/Ameni102Grami/PermessionTable).

## License

This project is licensed under the ISC License.
