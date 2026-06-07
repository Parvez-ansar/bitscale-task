"use client";
import { Button } from "@/components/atoms/button/Button";
import ListIcon from "@/components/atoms/icons/ListIcon";
import SearchBar from "@/components/molecules/search-bar/SearchBar";
import { Tabs } from "@/components/molecules/table-tabs/TableTabs";

const WorkbookTableFeatures = () => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-2 sm:justify-between">
      <Tabs
        tabs={[
          { label: "My Grids", value: "my-grids" },
          { label: "Starred", value: "starred" },
        ]}
        defaultValue="my-grids"
        onChange={(value) => console.log(value)}
      />

      <div className="flex gap-2">
        <SearchBar
          wrapperClassName="flex-1 sm:min-w-72"
          placeholder="Search grids and workbooks..."
        />
        <Button
          variant="secondary"
          className="bg-subtle rounded-full shrink-0"
          iconOnly
          startContent={<ListIcon className="text-helper" />}
        />
      </div>
    </div>
  );
};

export default WorkbookTableFeatures;
