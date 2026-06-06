import { Button } from "@/components/atoms/button/Button";
import BuildingIcon from "@/components/atoms/icons/BuildingIcon";
import PlusIcon from "@/components/atoms/icons/PlusIcon";
import UserIcon from "@/components/atoms/icons/UserIcon";
import ProductDemo from "@/components/molecules/product-demo/ProductDemo";
import LatestCarousel from "@/components/organisms/latest-carousel/LatestCarousel";
import WorkbookTableFeatures from "@/components/organisms/workbook-table-features/WorkbookTableFeatures";
import WorkbookTable from "@/components/organisms/workbook-table/WorkbookTable";

const WORKBOOK_ROWS = [
  {
    id: "1",
    starred: false,
    expandable: true,
    icons: ["users", "hubspot", "building"],
    name: "Workbook - Testing design Ideas for grid and workbook",
    editedBy: { name: "Sam Taylor", avatar: "https://i.pravatar.cc/32?img=1" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "2",
    starred: false,
    indent: true,
    icons: ["linkedin"],
    name: "LinkedIn",
    editedBy: {
      name: "Chris Parker",
      avatar: "https://i.pravatar.cc/32?img=2",
    },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "3",
    starred: false,
    indent: true,
    icons: ["hubspot"],
    name: "Sales nav",
    editedBy: { name: "Jone Doe", avatar: "https://i.pravatar.cc/32?img=3" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "4",
    starred: true,
    icons: ["building"],
    name: "find company",
    editedBy: { name: "Alex Morgan", avatar: "https://i.pravatar.cc/32?img=4" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "5",
    starred: true,
    icons: ["csv"],
    name: "import csv",
    editedBy: { name: "Drew Wilson", avatar: "https://i.pravatar.cc/32?img=5" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "6",
    starred: true,
    icons: ["users"],
    name: "Find people",
    editedBy: { name: "Jone Doe", avatar: "https://i.pravatar.cc/32?img=6" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "7",
    starred: false,
    icons: ["google_maps"],
    name: "Google maps",
    editedBy: { name: "Jone Doe", avatar: "https://i.pravatar.cc/32?img=7" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "8",
    starred: false,
    icons: ["google"],
    name: "google search results",
    editedBy: { name: "Jone Doe", avatar: "https://i.pravatar.cc/32?img=8" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "9",
    starred: false,
    icons: ["hubspot"],
    name: "factors",
    editedBy: { name: "Jone Doe", avatar: "https://i.pravatar.cc/32?img=9" },
    lastEdited: "06 Aug, 2025",
  },
  {
    id: "10",
    starred: true,
    icons: ["hubspot"],
    name: "Hubspot List - 10 (05 Aug 25)",
    editedBy: { name: "Jone Doe", avatar: "https://i.pravatar.cc/32?img=10" },
    lastEdited: "06 Aug, 2025",
  },
];

const slides = [
  {
    title: "How to Integrate 2 Way HubSpot",
    description:
      "Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple add our API key through the integrations pa...",
    postedAt: "Posted today",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    title: "Setting Up Your First Playbook",
    description:
      "Learn how to set up your first playbook in Bitscale and automate your outreach workflow in under 10 minutes.",
    postedAt: "Posted yesterday",
    thumbnail:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800",
  },
  {
    title: "How to Integrate 2 Way HubSpot",
    description:
      "Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple add our API key through the integrations pa...",
    postedAt: "Posted today",
    thumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
  },
  {
    title: "Advanced API Integrations",
    description:
      "Deep dive into connecting third-party tools with Bitscale's API layer to build powerful automated sequences.",
    postedAt: "Posted 3 days ago",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">Welcome back, Tim!</h4>
          <p className="text-sm text-helper">
            Here&apos;s your daily scoop on Bitscale!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            startContent={<BuildingIcon className="text-success" />}
            variant="outlined">
            Find Companies
          </Button>
          <Button
            startContent={<UserIcon className="text-[#8F65AF]" />}
            variant="outlined">
            Find People
          </Button>
          <Button startContent={<PlusIcon />}>New Grid</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <LatestCarousel slides={slides} heading="Latest from Bitscale" />
        <ProductDemo />
      </div>
      <WorkbookTableFeatures />
      <WorkbookTable data={WORKBOOK_ROWS} />
    </div>
  );
}
