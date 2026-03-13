import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";

export function Root() {
  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      <Navigation />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
}
