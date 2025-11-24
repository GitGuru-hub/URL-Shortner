import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./homepage"
import { dashboardRoute } from "./dashboard"
import { statsRoute } from "./stats"
import { healthcheckRoute } from "./healthcheck"
import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    homePageRoute,
    dashboardRoute,
    statsRoute,
    healthcheckRoute
,])

