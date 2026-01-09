"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import StarBorder from "./star-border";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Clients", href: "#clients" },
    { name: "Process", href: "#process" },
    { name: "Results", href: "#results" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "group lg:hidden p-2 text-white transition-colors",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={28} />
          <X className="hidden group-[[data-state=open]]:block" size={28} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div
          data-overlay="true"
          className="fixed z-40 inset-0 bg-black/60 backdrop-blur-md"
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (
              e.target instanceof HTMLElement &&
              e.target.dataset.overlay !== "true"
            ) {
              e.preventDefault();
            }
          }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center space-y-10"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-3xl font-bold uppercase text-white/90 transition-colors ease-out duration-300 hover:text-[#facc15]"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-8">
              <Link href="https://calendly.com/mkthoughts10/discovery-call?embed_domain=localhost&embed_type=Inline" target="_blank" onClick={handleLinkClick}>
                <StarBorder
                  as="div"
                  className="rounded-full text-base font-semibold [--sb-color:white] hover:[--sb-color:#FFC700] transition-all duration-300"
                  color="var(--sb-color)"
                  speed="3s"
                  style={{
                    '--content-padding': '0.8rem 2rem',
                    '--star-hover-bg': 'linear-gradient(180deg, #F3DFA2 0%, #D4AF37 100%)',
                    '--star-hover-text': 'black'
                  } as React.CSSProperties}
                >
                  Let&apos;s Talk
                </StarBorder>
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
