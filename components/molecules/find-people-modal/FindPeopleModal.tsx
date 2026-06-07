import { FilterAccordion } from "@/components/atoms/accordion/FilterAccordion";
import BriefcaseIcon from "@/components/atoms/icons/BriefcaseIcon";
import GitBranchIcon from "@/components/atoms/icons/GitBranchIcon";
import GlobeIcon from "@/components/atoms/icons/GlobeIcon";
import MapPinIcon from "@/components/atoms/icons/MapPinIcon";
import MarkerPinIcon from "@/components/atoms/icons/MarkerPinIcon";
import UserRightIcon from "@/components/atoms/icons/UserRightIcon";
import UsersThreeIcon from "@/components/atoms/icons/UsersThreeIcon";
import { Modal } from "@/components/atoms/modal/Modal";
import SearchBar from "../search-bar/SearchBar";
import { Button } from "@/components/atoms/button/Button";
import ChevronRightIcon from "@/components/atoms/icons/ChevronRightIcon";
import FileSearchIcon from "@/components/atoms/icons/FileSearchIcon";
import EyeIcon from "@/components/atoms/icons/EyeIcon";
import LockUnlockedIcon from "@/components/atoms/icons/LockUnlockedIcon";
import SearchIcon from "@/components/atoms/icons/SearchIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table/Table";
import Image from "next/image";

interface FindPeopleModalProps {
  open: boolean;
  onClose: () => void;
}

const inputStyle: string =
  "w-full border-b border-border px-3 py-1 text-sm placeholder:text-helper focus:outline-none bg-transparent rounded-none border-b-2 px-0!";

const FindPeopleModal = ({ open, onClose }: FindPeopleModalProps) => {
  const FILTER_ITEMS = [
    // {
    //   id: "people-keyword",
    //   icon: <UserRightIcon />,
    //   title: "People Keyword",
    //   placeholder: "Enter single keyword here...",
    //   defaultOpen: true,
    //   content: (
    //     <SearchBar
    //       wrapperClassName={`${inputStyle}`}
    //       iconClassName="text-inverse ml-0"
    //       placeholder="Enter single keyword here..."
    //     />
    //   ),
    // },
    {
      id: "job-title",
      icon: <BriefcaseIcon />,
      title: "Job Title",
      placeholder: "E.g: Manager, Software Engineer",
      content: (
        <SearchBar
          wrapperClassName={`${inputStyle}`}
          iconClassName="text-helper ml-0"
          placeholder="E.g: Manager, Software Engineer"
        />
      ),
    },
    {
      id: "company-website",
      icon: <GlobeIcon />,
      title: "Company Website",
      placeholder: "Eg: Google.com, LinkedIn.com",
      content: (
        <SearchBar
          wrapperClassName={`${inputStyle}`}
          iconClassName="text-helper ml-0"
          placeholder="Eg: Google.com, LinkedIn.com"
        />
      ),
    },
    {
      id: "person-location",
      icon: <MarkerPinIcon />,
      title: "Person Location",
      placeholder: "Eg: London, Great New York City",
      content: (
        <SearchBar
          wrapperClassName={`${inputStyle}`}
          iconClassName="text-helper ml-0"
          placeholder="Eg: Google.com, LinkedIn.com"
        />
      ),
    },
    {
      id: "company-location",
      icon: <MapPinIcon />,
      title: "Company Location",
      placeholder: "E.g: United States, UAE",
      content: (
        <SearchBar
          wrapperClassName={`${inputStyle}`}
          iconClassName="text-helper ml-0"
          placeholder="Eg: Google.com, LinkedIn.com"
        />
      ),
    },
    {
      id: "companyh-headcount",
      icon: <UsersThreeIcon />,
      title: "Company Headcount",
      placeholder: "E.g: 11-50 , 10000+",
      content: (
        <SearchBar
          wrapperClassName={`${inputStyle}`}
          iconClassName="text-helper ml-0"
          placeholder="Eg: Google.com, LinkedIn.com"
        />
      ),
    },
    {
      id: "management-level",
      icon: <GitBranchIcon />,
      title: "Management Level",
      placeholder: "E.g: 11-50 , 10000+",
      content: (
        <SearchBar
          wrapperClassName={`${inputStyle}`}
          iconClassName="text-helper ml-0"
          placeholder="E.g: Owner, Founder"
        />
      ),
    },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="xl"
      showCloseButton={true}
      className="!p-0 overflow-hidden max-w-[95vw] max-h-[95vh] lg:h-[718px]">
      <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
        {/* Left panel */}
        <div className="w-full lg:w-[319px] shrink-0 flex flex-col gap-4 p-5 border-b lg:border-b-0 lg:overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mt-3 lg:-mt-5 lg:pt-8 bg-body lg:sticky lg:-top-5 z-2">
            <h5 className="text-lg font-extrabold">Find People</h5>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                startContent={<ChevronRightIcon className="rotate-90" />}
                className="h-[28px] text-xs font-medium rounded-md gap-1 px-1.5 pr-2">
                Saved Search
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <UserRightIcon />
              <span className="text-sm font-semibold text-foreground">
                People Keyword
              </span>
            </div>
            <SearchBar
              wrapperClassName={`${inputStyle}`}
              iconClassName="text-helper ml-0"
              placeholder="Enter single keyword here..."
            />
          </div>
          <FilterAccordion
            items={FILTER_ITEMS}
            itemClassName="px-0"
            contentClassName="pt-0"
            // gridClassName="grid-cols-1 sm:grid-cols-2 gap-x-4 lg:grid-cols-1"
          />

          {/* Footer buttons */}
          <div className="flex items-center gap-3 mt-auto pt-2 lg:sticky lg:-bottom-5 bg-body lg:-mb-5 lg:pb-5">
            <Button startContent={<FileSearchIcon />} variant="secondary">
              Save Search
            </Button>
            <Button startContent={<EyeIcon />} className="grow">
              Preview Result
            </Button>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col gap-3 p-5 min-w-0 lg:overflow-hidden">
          {/* Stats row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 lg:mt-4">
            <p className="text-xs font-medium text-tab">
              Found 0 companies. Click preview to view results
            </p>
            <div className="flex sm:flex-col flex-col-reverse gap-1.5 shrink-0">
              <div className="text-warning flex items-center gap-2 bg-warning-subtle self-start sm:self-end px-3 py-[3px] rounded-2xl whitespace-nowrap">
                <SearchIcon />
                <span className="text-xs font-medium">8000/50000</span>
              </div>
              <p className="flex items-center gap-1 text-warning text-xs font-bold whitespace-nowrap">
                <LockUnlockedIcon className="shrink-0" />
                Unlock 100,000 leads with Enterprise Plan*
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="shadow-table rounded-lg overflow-auto lg:grow min-h-[300px]">
            <Table
              className="rounded-lg bg-white min-w-[500px]"
              wrapperClassName="h-full">
              <TableHeader className="border-0">
                <TableRow className="hover:bg-helper/5 uppercase text-xs font-semibold bg-helper/5 border-b-0!">
                  <TableHead className="text-helper py-4">Name</TableHead>
                  <TableHead className="text-helper py-4">Title</TableHead>
                  <TableHead className="text-helper py-4">Headline</TableHead>
                  <TableHead className="text-helper py-4">
                    LinkedIn url
                  </TableHead>
                  <TableHead className="text-helper py-4">Company</TableHead>
                  <TableHead className="text-helper py-4">
                    Company URL
                  </TableHead>
                  <TableHead className="text-helper py-4">
                    Company URL
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-0 hover:bg-transparent">
                  <TableCell colSpan={7}>
                    <div className="flex flex-col justify-center items-center py-32">
                      <Image
                        src={"/images/empty_state.png"}
                        width={188}
                        height={134}
                        alt="empty"
                      />
                      <p className="text-xs font-medium text-disabled text-center max-w-xs mt-3">
                        Start your Company search, preview, and import companies
                        for enrichment by applying any filter in the left panel.
                        <br />
                        OR
                        <br />
                        Import companies from saved Search.
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FindPeopleModal;
