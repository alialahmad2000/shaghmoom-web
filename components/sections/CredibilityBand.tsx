import { Container } from "@/components/ui/Container";
import { CredibilityBar } from "@/components/ui/CredibilityBar";
import { Reveal } from "@/components/ui/Reveal";

/** A quiet credibility band, used between sections (§7-Credibility). */
export function CredibilityBand() {
  return (
    <section className="border-y border-line bg-bg py-12">
      <Container>
        <Reveal>
          <CredibilityBar tone="bg" />
        </Reveal>
      </Container>
    </section>
  );
}
