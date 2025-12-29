import StudioClient from "../StudioClient";

export const runtime = "nodejs";
export const revalidate = 0;

export default function StudioPage() {
  return <StudioClient />;
}
