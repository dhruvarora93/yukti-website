import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => {
        return (
          <MetaProvider>
            <Title>Yukti</Title>
            <nav class="main-nav">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </nav>
            <Suspense>{props.children}</Suspense>
          </MetaProvider >
        )
      }}
    >
      <FileRoutes />
    </Router>
  );
}
