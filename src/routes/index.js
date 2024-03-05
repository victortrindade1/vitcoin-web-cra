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

import { useAppSelector } from "hooks";
import api from "services/api";

const HomeBroker = lazy(() => import("pages/HomeBroker"));
const Historico = lazy(() => import("pages/Historico"));
const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));

export default function MyRoutes() {
  // const signed = useAppSelector((state) => state.auth.signed);
  const signed = true;

  const token = useAppSelector((state) => state.auth.user?.token);
  const status = useAppSelector((state) => state.auth.status);

  if (status === "loading") {
    return <LoadingPage />;
  }

  const PrivateWrapper = () => {
    const location = useLocation();

    // Aplica token
    if (token && signed) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

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
                  <HomeBroker />
                </Suspense>
              }
            />

            {/* HomeBroker */}
            <Route
              path="homebroker"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <HomeBroker />
                </Suspense>
              }
            />

            <Route
              path="historico"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Historico />
                </Suspense>
              }
            />
            <Route
              path="/home"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Home />
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
