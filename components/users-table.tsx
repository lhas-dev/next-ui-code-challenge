import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { User } from "@/types";

interface UsersTableProps {
  data: Array<User>;
}

const UsersTable = ({ data }: UsersTableProps) => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>E-mail</TableColumn>
        <TableColumn>City</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.address.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
