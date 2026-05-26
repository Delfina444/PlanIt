import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import CreatePlan from "./screens/CreatePlan";
import PlanDetail from "./screens/PlanDetail";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";
import TusPlanes from "./screens/TusPlanes";
import PlanGanador from "./screens/PlanGanador";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<CreatePlan />} />
      <Route path="/plan" element={<PlanDetail />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mis-planes" element={<TusPlanes />} />
      <Route path="/plan-ganador" element={<PlanGanador />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
