import { formatDateAndTime, getFrequencyText } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { db } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const automationWhereCondition = {
  enabled: true,
  pending: true,
  deletedAt: null,
  inProgress: "",
};

export const postWhereCondition = {
  deletedAt: null,
};

export default async function ActiveAutomations() {
  const activeAutomations = await db.automation.findMany({
    where: automationWhereCondition,
    include: {
      user: {
        select: {
          email: true,
        },
      },
      _count: {
        select: {
          posts: {
            where: postWhereCondition,
          },
        },
      },
    },
    orderBy: {
      user: {
        email: "desc",
      },
    },
  });

  const activeUserCount = await db.automation.count({
    where: automationWhereCondition,
  });

  return (
    <Card>
      <Card.Header>
        <Card.Title>Active Automations ({activeUserCount})</Card.Title>
      </Card.Header>
      <Card.Content>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">User em ail</TableHead>
              <TableHead>Automation name</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Next Run</TableHead>
              <TableHead className="text-right">Number of posts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activeAutomations.map((automation) => (
              <TableRow key={automation.id}>
                <TableCell className="font-medium">
                  {automation.user.email}
                </TableCell>
                <TableCell>{automation.blogUrl}</TableCell>
                <TableCell>{getFrequencyText(automation.frequency)}</TableCell>
                <TableCell>
                  {automation.nextExecution
                    ? formatDateAndTime(automation.nextExecution)
                    : ""}
                </TableCell>
                <TableCell className="text-right">
                  {automation._count.posts} posts
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card.Content>
    </Card>
  );
}
