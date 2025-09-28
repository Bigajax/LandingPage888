import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react";
import { PLASMIC } from "./plasmic.client";

export default function PlasmicPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}
