import Avatar from "@/components/atoms/avatar/Avatar";
import { IconBadge } from "@/components/atoms/icon-badge/IconBadge";
import DotsHorizontalIcon from "@/components/atoms/icons/DotsHorizontalIcon";
import FileDownloadIcon from "@/components/atoms/icons/FileDownloadIcon";
import GoogleIcon from "@/components/atoms/icons/GoogleIcon";
import GoogleMapsIcon from "@/components/atoms/icons/GoogleMapsIcon";
import HubSpotIcon from "@/components/atoms/icons/HubSpotIcon";
import { LinkedInIcon } from "@/components/atoms/icons/LinkedInIcon";
import StarIcon from "@/components/atoms/icons/StarIcon";
import UsersIcon from "@/components/atoms/icons/UsersIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table/Table";
import { Button } from "@/components/atoms/button/Button";
import BuildingIcon from "@/components/atoms/icons/BuildingIcon";
import ChevronRightIcon from "@/components/atoms/icons/ChevronRightIcon";

interface WorkbookRow {
  id: string;
  starred: boolean;
  icons: string[];
  name: string;
  editedBy: { name: string; avatar: string };
  lastEdited: string;
  indent?: boolean;
  expandable?: boolean;
}

const ICON_REGISTRY: Record<string, React.ReactNode> = {
  linkedin: <LinkedInIcon className="text-[#0077B7]" />,
  hubspot: <HubSpotIcon />,
  google_maps: <GoogleMapsIcon />,
  google: <GoogleIcon />,
  users: <UsersIcon className="text-[#8F65AF]" />,
  building: (
    <BuildingIcon width={10.5} height={10.5} className="text-[#438361]" />
  ),
  csv: <FileDownloadIcon className="text-[#9F6B53]" />,
};

const WorkbookTable = ({ data }: { data: WorkbookRow[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-muted/80 hover:bg-body">
          <TableHead className="w-6" />
          <TableHead>Name</TableHead>
          <TableHead>Edited by</TableHead>
          <TableHead>Last edited</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="[&>tr:nth-child(-n+3)]:bg-muted/20">
        {data.map((row) => (
          <TableRow
            key={row.id}
            className="border-muted/20 nth-child(-n+3)]:bg-muted/10 hover:bg-subtle">
            {/* Expand chevron */}
            <TableCell className="w-6 pr-0">
              {row.expandable && <ChevronRightIcon className="rotate-90" />}
            </TableCell>

            {/* Name */}
            <TableCell>
              <div className={`flex items-center gap-2`}>
                {/* Star */}
                <Button
                  className="h-[unset] p-0 rounded-none bg-transparent shrink-0"
                  startContent={
                    <StarIcon
                      filled={row.starred}
                      className={row.starred ? "text-warning" : "text-disabled"}
                    />
                  }
                />

                {/* Icon badges */}
                <div className="flex items-center min-w-[45px] [&>*:not(:first-child)]:ml-[-9px] shrink-0">
                  {row.icons.map((key) => (
                    <IconBadge key={key}>{ICON_REGISTRY[key]}</IconBadge>
                  ))}
                </div>

                {/* Name */}
                <span className="text-xs font-normal text-foreground truncate ml-3">
                  {row.name}
                </span>
              </div>
            </TableCell>

            {/* Edited by */}
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar
                  src={row.editedBy.avatar}
                  className="w-[21px] h-[21px] shrink-0"
                />
                <span className="text-xs">{row.editedBy.name}</span>
              </div>
            </TableCell>

            {/* Last edited */}
            <TableCell className="text-xs">{row.lastEdited}</TableCell>

            {/* Actions */}
            <TableCell>
              <Button
                variant="secondary"
                className="bg-transparent hover:bg-black/10 duration-300"
                startContent={<DotsHorizontalIcon />}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WorkbookTable;
