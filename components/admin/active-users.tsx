import { formatDateAndTime } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function ActiveUsers() {
  const activeUsers = await db.user.findMany({
    where: {
      email: {
        not: null,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const activeUserCount = await db.user.aggregate({
    _count: true,
    where: {
      email: {
        not: null,
      },
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Users ({activeUserCount._count})</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Created at</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>E-mail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activeUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{formatDateAndTime(user.createdAt)}</TableCell>
                <TableCell>{user.name || ""}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
