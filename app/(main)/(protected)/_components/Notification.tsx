import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

export const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hover:bg-slate-200 p-3 rounded-full cursor-pointer dark:bg-opacity-20">
          <Bell className="w-7 h-7 text-black dark:text-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="end"
        alignOffset={11}
        forceMount
      >
        <DropdownMenuLabel>
          <div className="flex justify-between items-center py-2">
            <p>Notifications</p>
            {/* Todo: redirect to /notifications */}
            <div role="button" className="hover:underline" onClick={() => {}}>
              Mark as Reacd All
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col">
          {/* TODO: loop by fetching notification */}
          <DropdownMenuItem
            asChild
            className="w-full cursor-pointer text-muted-foreground"
          >
            <div
              role="button"
              className="flex w-full select-none items-center p-3 text-sm hover:bg-slate-300/25"
              onClick={() => {}}
            >
              <span className="line-clamp-1 text-start font-medium py-2">
                Todo: Implement notification system.
              </span>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
