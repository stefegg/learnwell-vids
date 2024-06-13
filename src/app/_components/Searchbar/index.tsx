"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

export default function SearchBar(props: { placeholder: string }) {
  const { placeholder } = props;
  const [isTyping, setIsTyping] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    setIsTyping(searchTerm.trim() !== "");
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 100);

  return (
    <div className="flex flex-row items-center justify-end">
      <input
        className={`peer w-screen rounded-md py-[9px] pl-10 text-sm text-black border border-black placeholder:text-gray-500 focus:outline-0`}
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
