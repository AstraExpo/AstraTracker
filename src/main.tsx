import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { AppLayout } from "./components/app/AppLayout";
import Analytics from "./pages/Analytics";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import Plans from "./pages/Plans";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Finances from "./pages/Finances";
import "./App.css";
import Events from "./pages/Events";
import Todos from "./pages/Todos";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <TooltipProvider>
        <AuthProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Analytics />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="events" element={<Events />} />
              <Route path="todos" element={<Todos />} />
              <Route path="habits" element={<Habits />} />
              <Route path="goals" element={<Goals />} />
              <Route path="plans" element={<Plans />} />
              <Route path="projects" element={<Projects />} />
              <Route path="finances" element={<Finances />} />
            </Route>
          </Routes>
        </AuthProvider>
      </TooltipProvider>
    </HashRouter>
  </React.StrictMode>,
);
