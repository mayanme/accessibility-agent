"use client";

import { Container } from "@/components/ui/Container";
import { footer } from "@/content/copy";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container>
        <p className="text-center text-sm text-slate-500">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
