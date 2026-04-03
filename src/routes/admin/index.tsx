import { Title } from "@solidjs/meta";
import { action, redirect, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";
import { useSession } from "vinxi/http";
import "./admin.css";

const login = action(async (formData: FormData) => {
  "use server";
  const password = formData.get("password") as string;
  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Incorrect password." };
  }
  const session = await useSession<{ admin?: boolean }>({
    password: process.env.SESSION_SECRET!,
  });
  await session.update({ admin: true });
  throw redirect("/admin/enquiries");
}, "admin-login");

export default function AdminLogin() {
  const submission = useSubmission(login);

  return (
    <div class="admin-page">
      <Title>Admin Login</Title>
      <div class="admin-login-card">
        <h1>Admin</h1>
        <p>Sign in to view enquiries</p>
        <form method="post" action={login}>
          <div class="admin-field">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" required autofocus />
          </div>
          <Show when={submission.result?.error}>
            <p class="admin-error">{submission.result?.error}</p>
          </Show>
          <button type="submit" class="admin-submit" disabled={submission.pending}>
            {submission.pending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
