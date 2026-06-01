import { MetaProvider, Title, Link } from "@solidjs/meta";
import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Show, Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => {
        const location = useLocation();
        const isAdmin = () => location.pathname.startsWith("/admin");
        return (
          <MetaProvider>
            <Title>Yukti</Title>
            <Link rel="preconnect" href="https://fonts.googleapis.com" />
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
            <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&display=swap" />
            <Show when={!isAdmin()}>
              <header class="site-header">
                <a href="/" class="site-logo">
                  <img src="/Mental health-pana.svg" alt="" class="logo-icon" />
                  <span class="logo-text">YUKTI<br />ARORA</span>
                </a>
                <nav class="main-nav">
                  <a href="/">Home</a>
                  <a href="/about">About me</a>
                  <a href="/therapy">Therapy</a>
                  <a href="/study-abroad">Study Abroad</a>
                  <a href="/contact">Contact me</a>
                </nav>
                <a href="/admin" class="admin-nav-link">Admin</a>
              </header>
            </Show>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )
      }}
    >
      <FileRoutes />
    </Router>
  );
}
