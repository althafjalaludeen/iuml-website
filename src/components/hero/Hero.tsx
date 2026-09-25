import { homeSections } from "@/src/data/site";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { PlaceholderNote } from "@/src/components/ui/PlaceholderNote";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-charcoal/10 bg-ivory py-16 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-primary-green"
      />
      <Container>
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-semibold tracking-[0.16em] text-primary-green uppercase">
            {homeSections.heroEyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-display text-display text-charcoal font-medium tracking-tight"
          >
            {homeSections.heroTitle}
          </h1>

          <div className="mt-8">
            <PlaceholderNote badge="Institutional Foundation Notice">
              {homeSections.heroSubtitle}
            </PlaceholderNote>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/about" variant="primary">
              About the Organisation
            </Button>
            <Button href="/history" variant="secondary">
              Historical Chronology
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
