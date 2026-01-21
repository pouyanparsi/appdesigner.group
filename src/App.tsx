import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter basename="/appdesigner.group">
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
