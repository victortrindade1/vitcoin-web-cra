import { lazy, Suspense } from "react";
import {
  Route,
  Navigate,
  Outlet,
  useLocation,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import AuthLayout from "pages/_layouts/auth";
import DefaultLayout from "pages/_layouts/default";
import LoadingPage from "pages/LoadingPage";

// import { useAppSelector } from "hooks";
// import api from "services/api";

const Dashboard = lazy(() => import("pages/Dashboard"));
const ConfigPage = lazy(() => import("pages/ConfigPage"));
const Login = lazy(() => import("pages/Login"));
const User = lazy(() => import("pages/User"));

export default function MyRoutes() {
  // const signed = useAppSelector((state) => state.auth.signed);
  const signed = false; // TEMPORÁRIO
  // const token = useAppSelector((state) => state.auth.user?.token);
  // const status = useAppSelector((state) => state.auth.status);

  // if (status === "loading") {
  //   return <LoadingPage />;
  // }

  const PrivateWrapper = () => {
    const location = useLocation();

    // // Aplica token
    // if (token && signed) {
    //   api.defaults.headers.Authorization = `Bearer ${token}`;
    // }

    return signed ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace state={{ from: location }} />
    );
  };

  const PublicWrapper = () => {
    return signed ? <Navigate to="/" replace /> : <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Suspense fallback={<LoadingPage />}>
              <PrivateWrapper />
            </Suspense>
          }
        >
          <Route
            element={
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            }
          >
            {/* INDEX */}
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Dashboard />
                </Suspense>
              }
            />

            {/* DASHBOARD */}
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Dashboard />
                </Suspense>
              }
            />

            <Route
              path="configuracoes"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ConfigPage />
                </Suspense>
              }
            />
            <Route
              path="/conta"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <User />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route element={<PublicWrapper />}>
          <Route
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Login />
                </Suspense>
              }
            />
          </Route>
          {/* </Suspense> */}
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Ooopss... 404!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
