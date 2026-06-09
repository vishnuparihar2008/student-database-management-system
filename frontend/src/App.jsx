import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Marksheet from "./pages/Marksheet";
import Settings from "./pages/Settings";
import PrintMarksheet from "./pages/PrintMarksheet";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/teacher" element={<LoginForm role="teacher" title="Teacher Portal" subtitle="Sign in to Manage the Class" />} />
        <Route path="/login/student" element={<LoginForm role="student" title="Student Portal" subtitle="Sign in to Access your Account" />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/marksheet" element={<Marksheet />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/print/marksheet/:id" element={<PrintMarksheet />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;