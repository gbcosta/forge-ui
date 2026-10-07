import { Boxes, SlidersHorizontal, Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export const Header = () => {
  return (
    <header
      className="flex w-full bg-background text-white px-4 py-2 justify-between
            border-b border-neutral-200/60 dark:border-neutral-800/80"
    >
      <div className="flex items-center gap-2">
        <div className="p-2 bg-white text-black rounded-md">
          <Boxes className=" w-4 h-4" />
        </div>
        <span className="font-bold text-sm tracking-tight">Forge UI</span>
      </div>
      <div className="flex-1 max-w-md mx-2 sm:mx-6">
        <button
          className="flex items-center gap-8 bg-neutral-100/10 px-4 py-1 rounded-xl 
                    text-zinc-400 border border-neutral-100/15 hover:text-zinc-200 group
                    hover:cursor-pointer hover:border-neutral-100/30"
        >
          <div className="gap-2 flex items-center">
            <Search className="w-4 h-4" />
            <span className="p-1">Search components, tokens, actions...</span>
          </div>
          <span
            className="bg-neutral-100/10 px-2 rounded-md border border-neutral-100/15
                        group-hover:border-neutral-100/30"
          >
            ctrl+K
          </span>
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-background group hover:cursor-pointer hover:bg-white/10 rounded-md">
          <FaGithub className="w-4 h-4 text-zinc-400 group-hover:text-white" />
        </div>
        <div className="p-2 bg-white/20 rounded-md hover:cursor-pointer">
          <SlidersHorizontal className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
};
