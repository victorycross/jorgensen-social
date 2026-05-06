import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import FamilyReunion from "./pages/FamilyReunion";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<FamilyReunion />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
