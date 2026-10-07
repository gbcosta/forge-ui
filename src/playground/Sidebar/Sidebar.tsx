import { Button } from "@/components/ui/Button";
import { Compass, Search } from "lucide-react";
import { FOUNDATIONS_DATA, COMPONENTS_DATA, type FoundationItem } from "./data";
import { useState } from "react";

const SidebarButton = (props: { style: FoundationItem }) => {
  return (
    <Button
      variant="primary"
      className="text-white bg-none rounded-lg w-full text-sm flex justify-start"
    >
      {props.style.icon}
      {props.style.name}
    </Button>
  );
};

export const Sidebar = () => {
  const [inputFilterData, setInputFilterData] = useState("");

  const filteredFoundations = FOUNDATIONS_DATA.filter((item) =>
    item.name.toLowerCase().includes(inputFilterData.toLowerCase()),
  );

  const filteredComponents = COMPONENTS_DATA.filter((item) =>
    item.name.toLowerCase().includes(inputFilterData.toLowerCase()),
  );

  return (
    <aside
      className="col-span-2 bg-background border-r border-neutral-200/60 
            dark:border-neutral-800/80 flex flex-col overflow-y-auto"
    >
      <div className="p-3 border-b border-neutral-200/60 dark:border-neutral-800/80">
        <Button
          variant="primary"
          className="text-white bg-none rounded-lg w-full text-sm"
        >
          <Compass className="w-4 h-4 mr-2" />
          Overview & Playground
        </Button>
      </div>

      <div className="p-3">
        <div
          className="flex items-center gap-8 bg-neutral-100/10 px-4 py-1 rounded-xl 
                    text-zinc-400 border border-neutral-100/15 hover:text-zinc-200 group
                    hover:cursor-pointer hover:border-neutral-100/30"
        >
          <div className="gap-2 flex items-center w-full">
            <Search className="w-4 h-4" />
            <input
              placeholder="Filter items..."
              className="w-full outline-none"
              onChange={(e) => {
                setInputFilterData(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-background p-2 flex flex-col overflow-y-auto">
        <span className="uppercase font-bold text-white text-sm px-3">
          foundations
        </span>
        <ul className="flex flex-col text-white mt-2">
          {filteredFoundations.map((item) => {
            return (
              <li key={item.name}>
                <SidebarButton style={item} />
              </li>
            );
          })}
        </ul>

        <span className="uppercase font-bold text-white text-sm mt-8 px-3">
          components
        </span>
        <ul className="flex flex-col text-white mt-2">
          {filteredComponents.map((item) => {
            return (
              <li key={item.name}>
                <SidebarButton style={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
