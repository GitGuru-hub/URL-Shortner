
import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import HealthCheckPage from "../pages/HealthCheckPage"

export const healthcheckRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/healthz',
    component: HealthCheckPage,
})
