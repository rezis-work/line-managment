import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Loader, Plus } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full border-b px-4 shadow-sm bg-white h-14 flex items-center">
      <div className="flex items-center gap-x-4">
        {/* TODO: mobile sidebar */}
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size={"sm"}
          variant={"primary"}
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button
          size={"sm"}
          variant={"primary"}
          className="rounded-sm block md:hidden"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
          fallback={<Loader className="w-4 h-4 animate-spin" />}
        />
        <UserButton
          fallback={<Loader className="w-4 h-4 animate-spin" />}
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
