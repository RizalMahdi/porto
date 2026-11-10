"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { CvButton } from "@/components/cv-button";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ cvAvailable }: { cvAvailable: boolean }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group inline-flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="Rizal Mahdi, kembali ke beranda"
        >
          <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary text-xs font-bold tracking-tight text-primary-foreground">
            <svg viewBox="0 0 64 64" className="size-8" fill="currentColor">
              <path d="M12 44V20h10c6 0 9 3 9 8 0 3-2 6-5 7l6 9h-7l-5-8h-2v8zm6-13h4c2 0 3-1 3-3s-1-3-3-3h-4zm16 13V20h6l6 10 6-10h6v24h-6V30l-6 9-6-9v14z" />
            </svg>
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
            {site.shortName}
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex" viewport={false} aria-label="Navigasi utama">
          <NavigationMenuList className="gap-1">
            {site.navigation.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  active={isActive(item.href)}
                  className={cn(
                    "min-h-11 px-3 text-sm font-medium text-muted-foreground hover:text-foreground",
                    isActive(item.href) && "bg-muted text-foreground",
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <span className="hidden md:inline-flex" title={cvAvailable ? undefined : "CV belum tersedia"}>
            <CvButton available={cvAvailable} className="h-11 px-4" />
          </span>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-11 cursor-pointer md:hidden"
                aria-label="Buka menu navigasi"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[min(86vw,24rem)] gap-0 p-2">
              <SheetHeader className="border-b px-5 pt-6 pb-6 text-left">
                <SheetTitle className="text-lg font-semibold">Menu navigasi</SheetTitle>
                <SheetDescription>Jelajahi portofolio Rizal Mahdi.</SheetDescription>
              </SheetHeader>
              <nav aria-label="Navigasi mobile" className="flex flex-col gap-1 px-3 py-6">
                {site.navigation.map((item, index) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 items-center gap-5 rounded-md px-3 text-base font-medium outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
                        isActive(item.href) && "bg-muted text-primary",
                      )}
                    >
                      <span className="text-xs font-normal text-muted-foreground">
                        0{index + 1}
                      </span>
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t p-5">
                <CvButton available={cvAvailable} className="h-11 w-full" />
                {!cvAvailable && <p className="mt-2 text-xs text-muted-foreground">CV belum tersedia.</p>}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
