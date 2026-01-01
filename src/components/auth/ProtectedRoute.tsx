import { Navigate, useLocation } from "react-router-dom";
import { useAuth, AppRole } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: AppRole[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If no specific roles required, allow any authenticated user
  if (!allowedRoles || allowedRoles.length === 0) {
    return <>{children}</>;
  }

  // Check if user has one of the allowed roles
  if (role && allowedRoles.includes(role)) {
    return <>{children}</>;
  }

  // Redirect to appropriate dashboard based on role
  const dashboardPath = role === "admin" 
    ? "/admin/dashboard" 
    : role === "creator" 
      ? "/creator/dashboard" 
      : "/student/dashboard";

  return <Navigate to={dashboardPath} replace />;
}
