import { Title } from "@solidjs/meta";
import { action, createAsync, query, redirect, useAction } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { useSession } from "vinxi/http";
import { getAllEnquiries } from "~/data/enquiries";
import "./admin.css";

const getEnquiries = query(async () => {
  "use server";
  const session = await useSession<{ admin?: boolean }>({
    password: process.env.SESSION_SECRET!,
  });
  if (!session.data.admin) throw redirect("/admin");
  return getAllEnquiries();
}, "admin-enquiries");

export const route = {
  load: () => getEnquiries(),
};

const logout = action(async () => {
  "use server";
  const session = await useSession<{ admin?: boolean }>({
    password: process.env.SESSION_SECRET!,
  });
  await session.update({ admin: false });
  throw redirect("/admin");
}, "admin-logout");

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-IE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminEnquiries() {
  const enquiries = createAsync(() => getEnquiries());
  const doLogout = useAction(logout);

  return (
    <div class="admin-enquiries">
      <Title>Enquiries — Admin</Title>
      <div class="admin-header">
        <h1>Enquiries</h1>
        <button class="admin-logout" onClick={() => doLogout(new FormData())}>
          Sign out
        </button>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Show
          when={(enquiries() ?? []).length > 0}
          fallback={<p class="admin-empty">No enquiries yet.</p>}
        >
          <div class="admin-table-wrap">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>About</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <For each={enquiries()}>
                  {(e) => (
                    <tr>
                      <td style={{ "white-space": "nowrap" }}>{formatDate(e.created)}</td>
                      <td style={{ "white-space": "nowrap" }}>{e.first_name} {e.last_name}</td>
                      <td><a href={`mailto:${e.email}`}>{e.email}</a></td>
                      <td>{e.phone || "—"}</td>
                      <td><span class="admin-badge">{e.about}</span></td>
                      <td class="admin-message">{e.message || "—"}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </Show>
      </Suspense>
    </div>
  );
}
