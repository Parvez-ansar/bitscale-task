"use client";
import { Button } from "@/components/atoms/button/Button";
import ListIcon from "@/components/atoms/icons/ListIcon";
import SearchBar from "@/components/molecules/search-bar/SearchBar";
import { Tabs } from "@/components/molecules/table-tabs/TableTabs";

const WorkbookTableFeatures = () => {
  return (
    <div className="flex gap-2 justify-between">
      <div>
        <Tabs
          tabs={[
            { label: "My Grids", value: "my-grids" },
            { label: "Starred", value: "starred" },
          ]}
          defaultValue="my-grids"
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="flex gap-2">
        <SearchBar wrapperClassName="min-w-72" />
        <Button
          variant="secondary"
          className="bg-subtle rounded-full"
          iconOnly
          startContent={<ListIcon className="text-helper" />}
        />
      </div>
    </div>
  );
};

export default WorkbookTableFeatures;
