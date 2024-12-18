"use client";

import { Filter, Landmark, Percent, UserMinus, UserPlus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const filterMethods = [
  {
    value: "all",
    label: "All",
    icon: Landmark,
  },
  {
    value: "less-tax",
    label: "Less Tax",
    icon: Percent,
  },
  {
    value: "higher-tax",
    label: "Higher Tax",
    icon: Percent,
  },
  {
    value: "less-members-count",
    label: "Less Members Count",
    icon: UserMinus,
  },
  {
    value: "higher-members-count",
    label: "Higher Members Count",
    icon: UserPlus,
  },
];

export default function FilterBy() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`${pathname}?${params.toString()}`); // Push new params to URL
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-secondary-light focus-visible:outline-none md:px-4">
          <Filter className="text-text-muted" />
          <span className="text-sm">
            {value
              ? filterMethods.find((method) => method.value === value)?.label
              : "Filter"}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="mr-4 w-[250px] border border-primary-border bg-primary px-0 py-2">
        {filterMethods.map((method) => {
          const Icon = method.icon;
          return (
            <button
              className="flex w-full items-center gap-4 px-4 py-2 text-sm text-text-muted hover:bg-secondary-light focus-visible:outline-none"
              onClick={() => {
                updateParams({ filter_method: method.value });
                setOpen(false);
                setValue(method.value);
              }}
              key={method.value}
            >
              <Icon />
              {method.label}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
