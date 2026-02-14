"use client";

import { Container } from "@/components/ui/Container";
import { footer } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-subtle py-8">
      <Container>
        <p className="text-center text-sm text-slate-500">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
