"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Searchbar({ className }: { className?: string }) {
  const [formValue, setFormValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateSearchParams = (updates: Record<string, string>) => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formValue.trim().length < 0) return;
    updateSearchParams({ search_query: formValue });
  };

  return (
    <>
      <form
        action={`/banks`}
        onSubmit={handleSubmit}
        className={`flex w-full flex-1 gap-4 rounded-lg border border-primary-border bg-primary px-4 py-[0.5rem] ${className}`}
      >
        <Search className="text-sm text-text-muted" />
        <input
          type="text"
          name="q"
          className="w-full bg-transparent focus-visible:outline-none"
          placeholder="Search for banks"
          minLength={1}
          onChange={(e) => setFormValue(e.target.value)}
        />
      </form>
    </>
  );
}
