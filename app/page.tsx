import { Button } from "@/components/atoms/button/Button";
import BuildingIcon from "@/components/atoms/icons/BuildingIcon";
import ListIcon from "@/components/atoms/icons/ListIcon";
import PlusIcon from "@/components/atoms/icons/PlusIcon";
import UserIcon from "@/components/atoms/icons/UserIcon";
import ProductDemo from "@/components/molecules/product-demo/ProductDemo";
import SearchBar from "@/components/molecules/search-bar/SearchBar";
import { Tabs } from "@/components/molecules/table-tabs/TableTabs";
import LatestCarousel from "@/components/organisms/latest-carousel/LatestCarousel";
import WorkbookTableFeatures from "@/components/organisms/workbook-table-features/WorkbookTableFeatures";

const slides = [
  {
    title: "How to Integrate 2 Way HubSpot",
    description:
      "Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple add our API key through the integrations pa...",
    postedAt: "Posted today",
    thumbnail: "https://picsum.photos/400/225?v=1",
  },
  {
    title: "Setting Up Your First Playbook",
    description:
      "Learn how to set up your first playbook in Bitscale and automate your outreach workflow in under 10 minutes.",
    postedAt: "Posted yesterday",
    thumbnail: "https://picsum.photos/400/225?v=2",
  },
  {
    title: "How to Integrate 2 Way HubSpot",
    description:
      "Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple add our API key through the integrations pa...",
    postedAt: "Posted today",
    thumbnail: "https://picsum.photos/400/225?v=3",
  },
  {
    title: "Advanced API Integrations",
    description:
      "Deep dive into connecting third-party tools with Bitscale's API layer to build powerful automated sequences.",
    postedAt: "Posted 3 days ago",
    thumbnail: "https://picsum.photos/400/225?v=4",
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
    </div>
  );
}
