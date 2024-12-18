import { sidebarMenu } from "@/src/constants";
import SidebarNavCategory from "./SidebarNavCategory";

export default function SidebarNavLinks() {
  return (
    <div className="my-2 flex flex-col gap-4 px-3">
      {sidebarMenu.map((section) => (
        <SidebarNavCategory section={section} key={section.id} />
      ))}
    </div>
  );
}
