import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { AProposPage } from "./pages/AProposPage"
import { ConfidentialitePage } from "./pages/ConfidentialitePage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { MentionsLegalesPage } from "./pages/MentionsLegalesPage"
import { RealisationsPage } from "./pages/RealisationsPage"
import { RecrutementPage } from "./pages/RecrutementPage"
import { SavoirFairePage } from "./pages/SavoirFairePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="savoir-faire" element={<SavoirFairePage />} />
          <Route path="realisations" element={<RealisationsPage />} />
          <Route path="a-propos" element={<AProposPage />} />
          <Route path="recrutement" element={<RecrutementPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="confidentialite" element={<ConfidentialitePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
