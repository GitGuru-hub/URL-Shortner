
import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import StatsPage from "../pages/StatsPage"

export const statsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/stats/$code',
    component: StatsPage,
})
