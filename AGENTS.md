<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Shared workspace navigation and session-only tasks and drafts live in the root provider so navigation preserves work; no user-owned data is persisted without accounts.
- Fashion draft generation uses a validated server function and server-only streaming AI Gateway helpers to protect credentials and centralize safeguards.
- Each named workspace view uses its own TanStack content route and metadata for direct navigation.
