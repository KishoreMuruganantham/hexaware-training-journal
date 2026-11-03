# Release Notes

## 0.57.1 - 2026-11-03

### Added

- Mirrored his commit `15e54f4` `child routes config` byte-identical (9 files, +112/-2, UI only): nested `/executive` child routes in `App.jsx` (`ExecutiveDashboard` layout with `Home` at the index path and `customer-search` as its child), `Login.jsx` now navigates EXECUTIVE users to `/executive`, the admin ticket table gains a `view` button, and 6 new executive components (`ExecutiveDashboard`, `Navbar`, `Welcome`, `Home`, `CustomerSearch`, `ViewCustomer`).

### Verified

- `npm run build` succeeds (2.62s, 501.81 kB / 165.11 kB gzip - the first build to trip Vite's 500 kB chunk warning); `npm run lint` stands at **22 problems (20 errors, 2 warnings)** - 4 new, all his; `helpdesk_backend` `.\mvnw.cmd test` green (Tests run: 5, Failures: 0, Errors: 0 - BUILD SUCCESS); the byte check vs his commit differs only by the journal's own `TicketServiceTest` fix. The SonarQube MCP server was unavailable this session, so Java validation relied on the green test run.
- Live browser E2E: the manager onboards executive `execroutes`, EXECUTIVE login lands on `/executive` (Navbar + `Welcome execroutes` + the `Home` child in the Outlet), the `Customer Search` link swaps the URL to `/executive/customer-search` and renders `The search is here...` with the layout intact, console clean.

### Known Issues

- His code, mirrored as-is: the `/executive` routes carry no token guard at all (no token in the URL, no localStorage check); the table's `view`/`delete` buttons call undefined `onView`/`onDelete` (clicking throws a `ReferenceError`); 3 new unused imports (CustomerSearch's `Navbar`/`Welcome`, ExecutiveDashboard's `Home`); the "Ticket Search" nav item is a dead `#` link; `ViewCustomer.jsx` is an unrouted stub; all 6 new files lack a trailing newline.

## 0.57.0 - 2026-11-03

### Added

- Mirrored his commit `2d148dc` `upload API` byte-identical (6 files, +75/-0): new `POST /api/customer/upload` (CUSTOMER-gated, multipart `file` part, `void`) that writes `millis_originalName` into the hard-coded `D:/hex_fsd_sept_2026/helpdesk-ui/public/uploads/` directory and stores the name in the new `Customer.idUrl` field; `GlobalExceptionHandler` gains `NullPointerException` and `IOException` handlers replying 412 with the comment `File is mandatory`.
- Mirrored his commit `1acd667` `upload UI` byte-identical (14 files, +90/-15): new `Upload.jsx` (file input + FormData POST with the Bearer token + Bootstrap toast), `CustomerDashboard` wiring, `index.html` reformat moving the bootstrap bundle to the end of `<body>`, and 11 sample JPGs under `public/uploads/`.
- Mirrored his commit `767a834` `filter api e2e` byte-identical (10 files, +210/-45): `GET /api/ticket/filter` becomes ADMIN-gated and paginated - `FilterDto {list, paginationInfo{totalPages, totalRecords, numRecordsInPage}}` with new `page`/`size` params (defaults 0/10) - backed by a constructor-projection JPQL with LEFT JOINs; `TicketRespDto` gains `customerId/customerName/executiveId/executiveName`; the upload matcher is corrected from `DELETE` to `POST`; the admin dashboard renders the filter table with pagination and the customer ticket list becomes a table.
- Mirrored his commit `b76f35a` `chart - donut e2e` byte-identical (10 files, +172/-14): `GET /api/ticket/status/customers/stat` becomes ADMIN-gated and answers the new `ChartDto {labels, values}` (stat query now LEFT JOINs customer, so customerless tickets count); new `DonutChart.jsx` (chart.js + react-chartjs-2 `Doughnut`) fed from the admin dashboard; `chart.js` ^4.6.1 and `react-chartjs-2` ^5.3.1 added.

### Changed

- Breaking: `GET /api/ticket/filter` and `GET /api/ticket/status/customers/stat` moved from `anyRequest().permitAll()` to `hasAuthority("ADMIN")` (anon 401, other roles 403) and both changed response shape (bare list -> `FilterDto`; row list -> `ChartDto`), so every pre-existing no-auth consumer breaks; `TicketRespDto`'s four new fields also change the JSON of `POST /api/ticket/add` and `GET /api/ticket/by-priority`.
- The new412 `NullPointerException` handler changes the 2026-10-30 probe: `DELETE /api/ticket/hard/{id}` against a userless customer now answers 412 instead of 400 (the raw NPE message still leaks in `message`).

### Verified

- `helpdesk_backend` `.\mvnw.cmd test` green (Tests run: 5, Failures: 0, Errors: 0 - BUILD SUCCESS); scoped byte checks `git diff <his-commit> HEAD -- helpdesk-ui helpdesk_backend` differ only by the journal's own `TicketServiceTest` fix; the SonarQube MCP server was unavailable this session, so Java validation relied on the green test run.
- `npm install` adds 3 packages (audited 185, **6 moderate severity vulnerabilities** - 0 at v0.56.0); `npm run build` succeeds (2.45s, 499.62 kB / 164.59 kB gzip); `npm run lint` stands at **18 problems (16 errors, 2 warnings)**, up from 10 - the 8 new ones are all his.
- Live matrix against the restarted stack: filter anon 401 / CUSTOMER 403 / ADMIN 200 `FilterDto`; stat anon 401 / CUSTOMER 403 / ADMIN 200 `{"labels":["OPEN"],"values":[11]}`; upload via curl.exe CUSTOMER 200 (`id_url=1793688988181_smoke_upload.jpg`, file lands in the repo's `public/uploads`, served 200 by Vite), anon 401, ADMIN 403, empty file 412 `Please upload valid file`, extension-less filename 400 `Index 1 out of bounds for length 1`.
- Postman workspace: `GET ticket filter` and `GET ticket status stat` in `HelpDesk` updated to ADMIN Basic auth with the new contracts, plus new `POST upload profile pic` (multipart, CUSTOMER Basic) - now 24 requests covering all 23 trainer-coded operations; the 4 broken filter/stat requests in the demo collection updated to ADMIN auth with `FilterDto`/`ChartDto` tests plus a new `Tickets · Owner uploads profile pic` step - now 29 requests; both collection descriptions updated.
- Whole-repository audit re-run: all 109 of his commits across every branch matched by subject+date; his tips unchanged outside `helpdesk-ui` (+4 commits, now mirrored); the previously classified exclusions (PDFs, `helpdesk.mwb`/`.bak`, IDE files, `MyJavaApp/`, `pl-sql.sql` restyle) stand unchanged.

### Known Issues

- His hard-coded upload directory `D:/hex_fsd_sept_2026/helpdesk-ui/public/uploads/` does not exist on this machine (no `D:` drive). Recreated without touching any trainer file: `subst D: C:\hex_fsd_sept_2026` plus a junction `C:\hex_fsd_sept_2026\hex_fsd_sept_2026\helpdesk-ui` -> the repo's `helpdesk-ui`, so his exact path resolves to the repo's `public/uploads/`. The `subst` mapping does not survive a reboot - re-run it before exercising the upload API.
- His code, mirrored as-is: the upload matcher was `DELETE` for a `POST` endpoint until `767a834`; `split("\\.")[1]` throws `ArrayIndexOutOfBoundsException` for extension-less filenames (400 with the raw message); empty files throw `NullPointerException` as control flow (412); the admin table's delete button calls an undefined `onDelete` (clicking throws, lint `no-undef`); the filter inputs are decorative; `Upload.jsx`'s toast uses `class=` and prints `Upload Success` even on failure; `TicketList` puts its delete `<button>` directly under `<tbody>`; `TicketRespDto`'s new fields serialise as `0`/`""` from the entity mapper; `npm run lint` gains 8 problems (`setSize`, `onDelete`, DonutChart's 4 unused imports, `toastTrigger`, `bootstrap` no-undef); 6 moderate npm vulnerabilities appeared with the new dependencies (0 before).

## 0.56.2 - 2026-10-30

### Added

- Mirrored his commit `b9e0e29` `redux - delete api e2e` byte-identical (6 files, +45/-3): new `DELETE /api/ticket/hard/{id}` in `TicketController` (void, `Principal` from the container) guarded by `SecurityConfig`'s `.requestMatchers(HttpMethod.DELETE,"/api/ticket/hard/{id}").hasAuthority("CUSTOMER")`; `TicketService.deleteTicketHard` fetches the ticket (else `ResourceNotFoundException("Ticket if Invalid.")` - his if/is typo kept verbatim), checks `ticket.getCustomer().getUser().getUsername()` against the principal (else `InvalidCallException("Operation not allowed.")`), then deletes. This is the 22nd distinct operation his code exposes and the only role-gated delete in the API. UI side: `deleteTicket(id)` thunk in `CustomerAction.js` (axios DELETE with the Bearer token, dispatching `DELETE_TICKET`), the `DELETE_TICKET` filter case in `CustomerReducer.js`, and a `delete` button per row in `TicketList.jsx` via a new `useDispatch()` - which also resolves one of his standing lint errors.

### Verified

- `npm run build` succeeds (3.07s, 333.54 kB); `npm run lint` stays at 10 problems (8 errors, 2 warnings) - `useDispatch` unused is gone, `deleteTicket`'s unused `response` is new; `git diff b9e0e29 HEAD -- helpdesk-ui helpdesk_backend` differs only by the journal's own test fix from the previous round.
- `helpdesk_backend` `.\mvnw.cmd test` green (Tests run: 5, Failures: 0, Errors: 0 - BUILD SUCCESS); the SonarQube MCP server was unavailable this session, so Java validation relied on the green test run.
- Live HTTP against the restarted stack (old JVM on :8080 stopped first): owner CUSTOMER Basic auth on their own ticket 200 (row gone), unknown id 400 `Ticket if Invalid.`, a different logged-in CUSTOMER 400 `Operation not allowed.`, anonymous 401, ADMIN 403.
- Postman workspace follow-up: `DELETE ticket hard` added to `HelpDesk` - now 23 items covering all 22 trainer-coded operations, pointed at ticket 14 owned by the `postman.hard.demo` customer so it runs green out of the box (a later run answers 400, as documented); a final `Tickets · Delete demo ticket (hard)` step added to the trainer's API demo collection (28 requests) so the run cleans up its own ticket and unsets `demoTicketId`, with that collection's description updated accordingly.

### Known Issues

- His code, mirrored as-is: the `Ticket if Invalid.` typo; the UI `deleteTicket` has no `catch`, so a failed delete rejects silently and the row stays visible; the unused `response` const is a new lint error; and the ownership check NPEs for tickets whose customer has no linked user (seeded customer 4) - probed live, `DELETE /api/ticket/hard/1` as another CUSTOMER answers 400 with the raw Java NPE message leaked in `message`, ticket intact.

## 0.56.1 - 2026-10-30

### Added

- Mirrored his commit `7e25419` `redux - post api call` byte-identical (9 files, +81/-21): new `AddTicket.jsx` raise-ticket form wired into `CustomerDashboard` with the `addTicket` thunk now actually posting the ticket body, and `Stat.jsx` deriving its counts directly from the store (fixing the stale counters). Backend: `GET /api/ticket/v2` now requires `CUSTOMER` or `EXECUTIVE` authority, `POST /api/ticket/add` returns the created `TicketRespDto`, `TicketController` gains `@CrossOrigin(origins = "http://localhost:5173")`, and the v2 query uses `LEFT JOIN`s so unassigned tickets still appear.

### Fixed

- Our own `TicketServiceTest.saveTest` updated for the new `TicketRespDto` return type - the old `.thenReturn(any(Ticket.class))` stub returns null, which the previous `void` signature had silently tolerated.

### Verified

- `npm run build` succeeds (3.15s, 333.17 kB); `npm run lint` improves from 11 to 10 problems (8 errors, 2 warnings) - his fixes remove 3 issues while the now-unused hook imports in `Stat.jsx` add 2.
- `helpdesk_backend` `.\mvnw.cmd test` green (Tests run: 5, Failures: 0, Errors: 0 - BUILD SUCCESS); `git diff 7e25419 HEAD -- helpdesk-ui helpdesk_backend` empty - all 9 blobs identical. The SonarQube MCP server was unavailable this session, so Java validation relied on the green test run.
- Live HTTP against the restarted stack (the pre-mirror JVM on :8080 stopped first): anonymous `GET /api/ticket/v2` 401 under the new rule, CUSTOMER and EXECUTIVE Basic auth 200, ADMIN 403, `v1` unchanged at 200 anonymous, `POST /api/ticket/add` 200 returning the created `TicketRespDto`.
- Postman workspace follow-up: the demo collection's v2 request now sends the customer's Basic credentials to match the new security rule; his own byte-faithful collection item keeps its no-auth setup and therefore answers 401 (his stale JSON, recorded as a known issue).

## 0.56.0 - 2026-10-30

### Added

- Mirrored his commit `0047f41` `Customer Sign-Up` byte-identical (3 files, +122/-3): `SignUp.jsx` becomes a real form posting `customerDto` to `/api/customer/add` with error display and navigation to `/` on success; `SecurityConfig` permits `OPTIONS /**` preflights and `CustomerController` gains `@CrossOrigin(origins = "http://localhost:5173")`.
- Mirrored his commit `3dc3de4` `redux setup` byte-identical (5 files, +133/-4): `@reduxjs/toolkit` ^2.13.0 and `react-redux` ^9.3.1 added, new `store.js` + `CustomerReducer.js` stub, `<Provider store={store}>` wired into `main.jsx` (his missing `Provider` import is fixed only by the next commit).
- Mirrored his commit `ff4a2b8` `redux - get api call` byte-identical (7 files, +105/-5): thunk-style `getTickets`/`addTicket` actions against `/api/ticket/v2` and `/api/ticket/add`, the `customerTickets` reducer with `FETCH_TICKETS_CUSTOMER`/`ADD_TICKET`, new `Stat.jsx`/`TicketList.jsx`, and `CustomerDashboard` dispatching the fetch on mount.

### Verified

- `npm ci` clean (0 vulnerabilities); `npm run build` succeeds (947ms, 332.01 kB); `git diff ff4a2b8 HEAD -- helpdesk-ui helpdesk_backend` empty - all 12 touched files identical to his blobs.
- `helpdesk_backend` `.\mvnw.cmd test` green (Tests run: 5, Failures: 0, Errors: 0 - BUILD SUCCESS); the SonarQube MCP server was unavailable this session, so the green test run is the Java validation.
- Live HTTP: `OPTIONS /api/customer/add` 200 with `ACAO: http://localhost:5173`; sign-up 200 creating an active `CUSTOMER` row; login JWT 144 chars; `GET /api/ticket/v2?username=` 200 `[]` for both test users; all 7 touched modules transform 200 in Vite with a clean dev log.
- `npm run lint` at 11 problems (8 errors, 3 warnings), all his (unused `errComment`/`setErrComment`, `Stat` setState-in-effect + missing `list` dep, `TicketList` unused imports, `addTicket` unused `ticket` param, `CustomerDashboard` missing `dispatch` dep) - mirrored as-is.
- Whole-repository audit: every branch of his GitHub compared file-by-file against the journal; these 3 commits were the only unmirrored trainer content anywhere.

## 0.55.0 - 2026-10-29

### Added

- Mirrored his commit `08f54ee` `Dashboard hack check` byte-identical (2 files, +17/-4): `AdminDashboard.jsx` now imports `axios` and the config URL, verifies the token from the URL against `localStorage`, calls the user-details API with the stored token, and redirects to `/no-access` on token mismatch, role failure, or request error; `PageNotFound.jsx` clears `localStorage` on mount so the blocked path wipes the session.

### Verified

- `npm run build` succeeds (696ms, 319.57 kB); `git diff 08f54ee HEAD -- helpdesk-ui` empty - both blobs identical.
- Live run: ADMIN login renders `AdminDashboard` and stays; a tampered URL token redirects to `/no-access` (rendered by the `*` catch-all) with `localStorage` fully cleared.
- `npm run lint` improved from 7 problems to 2, all his (unused `err`, hook deps warning) - mirrored as-is.

## 0.54.0 - 2026-10-29

### Added

- Mirrored his commit `9e83b76` `Dashboard hack check` byte-identical (4 files, +71/-3): `App.jsx` gains `customer/:token` and `admin/:token` routes, `Login.jsx` replaces the role-switch `console.log`s with `useNavigate()` navigation carrying the JWT in the URL, and two new dashboards appear - `CustomerDashboard` (heading + Logout clearing localStorage) and `AdminDashboard` (token-match guard against `localStorage`, role re-verification via the user-details API, Logout).

### Verified

- `npm run build` succeeds (2.17s, 319.27 kB); `git diff 9e83b76 HEAD -- helpdesk-ui` empty - all 4 blobs identical.
- Live run against the backend: login navigated to `/customer/<jwt>` and rendered `CustomerDashboard`; Logout cleared storage and returned to `/`.
- `npm run lint` went from 0 to 7 problems (6 errors, 1 warning), all his, in `AdminDashboard.jsx` (undefined `axios`/`userDetailsUrl`/`response`, mis-nested `getUserDetails()` call, empty `catch`, missing hook deps) - mirrored as-is.

## 0.53.0 - 2026-10-29

### Added

- Mirrored his commit `054af35` `login API+UI- e2e` byte-identical (9 files, +141/-18): the UI login becomes a two-step end-to-end flow - HTTP Basic `GET /api/auth/login` stores the JWT, then `GET /api/auth/user-details` with `Bearer` fetches the profile, stores the role, and switches on it with dashboard placeholders; errors now render (`errMsg` + `errComment`) from the backend `ErrorDto` shape.
- Backend: new `GET /api/auth/user-details` endpoint in `AuthController` (plus `@CrossOrigin(origins = "http://localhost:5173/")`), new `DetailsDto` record and `InactiveUserException`, `SecurityConfig` matcher for the endpoint, a `UserRepository` projection query for username/isActive/role, `UserService.getUserDetails` throwing on inactive users, and a `GlobalExceptionHandler` mapping that exception to HTTP 412 with an admin contact comment.

### Verified

- `helpdesk-ui` `npm run build` succeeds (951ms, 318.47 kB) and `npm run lint` exits 0 (his commit fixed the previous 2 unused-variable errors by renaming and using `setErrMsg`).
- `helpdesk_backend` `.\mvnw.cmd test` green (Tests run: 5, Failures: 0, Errors: 0 - BUILD SUCCESS); `git diff 054af35 HEAD -- helpdesk-ui helpdesk_backend` empty - all 9 blobs identical. The SonarQube MCP server was unavailable this session, so Java validation relied on the green test run.

## 0.52.0 - 2026-10-28

### Added

- New `helpdesk-ui` branch (created from the journal's `react` tip), mirroring his commit `9bb21fd` `Helpdesk initial sertup with router and login'` byte-identical: a fresh Vite + React 19 app under `helpdesk-ui/` (21 files, 3392 insertions) with `react-router` routes (`""` -> `Login`, `customer/signup` -> `SignUp`, `*` -> `PageNotFound`), a Bootstrap card login form doing HTTP Basic auth against `config.js`'s `API_SERVER_URL_DEV` (`http://localhost:8080`) and storing the JWT in `localStorage`, plus `SignUp`/`PageNotFound` stubs and `styles/login.css`.

### Verified

- `npm ci` clean (0 vulnerabilities); `npm run build` succeeds (431ms, 317.63 kB); `git diff 9bb21fd HEAD -- helpdesk-ui` empty - all 21 blobs identical to his.
- `npm run lint` reports 2 errors, both his (unused `errMsg`/`SetErrMsg` in `Login.jsx`).

## 0.51.0 - 2026-10-28

### Added

- Mirrored his commit `b6ef0f6` `get api` byte-identical: `axios` ^1.21.0 in `package.json`/`package-lock.json` and `components/posts/PostDashBoard.jsx` filling the placeholder with a `useEffect` + `async`/`await` `axios.get` against `https://jsonplaceholder.typicode.com/posts`, rendering the results as Bootstrap cards (Post ID, user ID, title, body).
- Mirrored his commit `4c40e4f` `post api call` byte-identical: `PostDashBoard.jsx` gains `id`/`userId`/`title`/`body` state, an async `addPost()` doing `axios.post` with his console logging and prepending the response to the list, a `+Add Post` button, and the `#postForm` Bootstrap modal (Title / User Id / Body inputs, Close/Add footer).

### Verified

- `npm ci` installs axios 1.21.0 with 0 vulnerabilities; `npm run build` succeeds (3.75s, 332.73 kB after `post api call`).
- `git diff 4c40e4f HEAD -- react-ui` shows only the journal's own `Dashboard.jsx` and `UsersTable.jsx`; `npm run lint` reports 12 errors, all his (previous 8 plus unused `id`/`setId` and the second empty `catch` in `PostDashBoard.jsx`).

## 0.50.0 - 2026-10-28

### Added

- Mirrored his commit `f762785` `Router added` byte-identical: `react-router` ^7.18.5 in `package.json`/`package-lock.json`, `<BrowserRouter>` in `main.jsx`, `<Routes>` in `App.jsx` (`""` -> `CourseList`, `users` -> `UsersDashboard`, `posts` -> `PostDashboard`), the Bootstrap `navbar-expand-lg` with `Link` navigation (Home/Users/Posts), and the new empty `components/posts/PostDashBoard.jsx`.
- Re-applied the journal's own users case study layout in `e9fa705`: his placeholder `Dashboard.jsx` replaced again by the `col-md-2` GET/ADD/DELETE/EDIT panel plus `col-md-10` `UsersTable`, with the inner navbar row removed now that `App` renders the navbar globally.

### Verified

- `npm ci` installs `react-router` 7.18.5 with 0 vulnerabilities; `npm run build` succeeds (565ms, 272.49 kB).
- `git diff f762785 HEAD -- react-ui` shows only the journal's own `UsersTable.jsx`; `npm run lint` reports 6 errors, all in his code (4 fresh unused imports in `App.jsx`, 2 in `Nums.jsx`).

## 0.49.0 - 2026-10-27

### Added

- Mirrored his commit `5db0a6f` `users case study` byte-identical: new `react-ui/src/data/users.js` (10 JSONPlaceholder users with nested `address.city` and `company.name`), an empty `users-cs/Dashboard.jsx` stub, and `App.jsx` rendering `<UsersDashboard />` with the old layout commented out.
- Implemented the layout he sketched in own commit `97f306d`: filled his `Dashboard.jsx` stub with the `col-md-2` side panel (GET/ADD/DELETE/EDIT) plus `col-md-10` holding Navbar over the users table, and added `users-cs/UsersTable.jsx` with GET/ADD/DELETE/EDIT over `data/users.js`, a clickable row selection, nested `address.city`/`company.name` handling, and one `#staticBackdrop` modal switched by an `onAdd` flag - all written in his `CourseList` style.
- Recorded as a deliberate deviation: his empty stub was edited rather than left byte-identical, noted in the journal like the root `.gitignore` clash.

### Verified

- `npm run build` succeeds (457ms, 228.77 kB bundle); `npm run lint` reports zero errors in the new `users-cs/` files - the 8 it reports (6 unused imports in his `App.jsx` after he commented out the old layout, plus his 2 in `Nums.jsx`) are all his own code, mirrored as-is.

## 0.48.0 - 2026-10-27

### Added

- Mirrored five more commits of his `react` branch, all byte-identical to his blobs: `4086125` `state variables` (`useState` array plus ASC/RESET/DESC sort buttons in `Nums.jsx`), `8b083e9` `reading input` (new `AddTicket.jsx` form with `preventDefault` and three controlled fields), `b15b316` `iterating over object array` (new `data/courses.js` with 10 courses and `CourseList.jsx` rendering them in a table), `321c769` `delete and add op in array` (bootstrap-icons + Bootstrap bundle in `index.html`, `onDelete`/`addCourse` and the `#staticBackdrop` modal), and `abc6c9f` `edit op` (`onEdit`/`editCourse` with an `onAdd` flag switching the modal footer between Add and Edit).
- 10 files across the five commits; `git diff trainer/react HEAD -- react-ui` is empty, so the whole project matches his `abc6c9f` tree.

### Verified

- `npm run build` succeeds (`built in 1.42s`, 227.26 kB bundle); `git status` clean apart from the three intentionally-untracked files.
- `npm run lint` now exits 1 with 3 `no-unused-vars` errors that are all in his own mirrored code (`Todos` imported but unused in `App.jsx`, `nums` and `setNumsClone` unused in `Nums.jsx`) - recorded as known issues, not fixed, since trainer files are never edited.

## 0.47.0 - 2026-10-26

### Added

- Mirrored his commit `6e0a902` `multi component layout`: Bootstrap 5.3.3 CDN link in `index.html`, `App.jsx` refactored into a parent component driving a Bootstrap grid, and four new children under `react-ui/src/components/` - `Navbar.jsx`, `Auth.jsx`, `Nums.jsx` (the array iteration moved out of `App`), and `Todos.jsx` (static Bootstrap table). 6 files, byte-identical to his blobs.

### Verified

- `git diff trainer/react HEAD -- react-ui` empty; `npm run build` (`built in 992ms`, 221.38 kB bundle) and `npm run lint` exit 0; `git status` clean apart from the three intentionally-untracked files.

## 0.46.0 - 2026-10-26

### Added

- New `react` branch mirroring the trainer's new `react` branch (forked from his JS line at `1501911`), created from this journal's `JS-fundamentals` tip so all earlier work stays reachable.
- Mirrored his commit `a38d61a` `react project setup`: the root `.gitignore` (Vite template rules) and the `react-ui/` Vite + React 19 scaffold - `package.json`, `package-lock.json`, `vite.config.js`, `eslint.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx` (his first component iterating an array with `map`), `App.css`, `index.css`, and the `public/` and `assets/` images. All 17 files byte-identical to his blobs.
- `postman/.gitignore` and `.postman/.gitignore` (`*`, `!.gitignore`) keeping local Postman workspace files ignored now that the root `.gitignore` mirrors his; the remaining IDE-only rules moved to the local `.git/info/exclude`.

### Verified

- `git diff trainer/react HEAD -- .gitignore react-ui` empty; `npm ci` (143 packages), `npm run build` (`built in 3.55s`, 219.68 kB bundle), and `npm run lint` all exit 0; `git status` clean apart from the three intentionally-untracked files.

## 0.45.0 - 2026-10-25

### Added

- `src/05-reduce-practice.js` now also solves the trainer's open comment `// Compute the max price of the products in the array.` with `reduce`: one pass for the max price number, one for the product holding it. His `src/04-arrays.js` stays byte-identical with the comment unanswered.

### Verified

- `node js-fundamentals/src/05-reduce-practice.js` exits 0 - `Max price: 22999`, `Product with max price: PCO X5 Pro , price= 22999`.

## 0.42.0 - 2026-10-23

### Added

- Mirrored the trainer's commit `3d3274c` (`JS Fundamentals: course case study`): `"type": "module"` in `package.json`, the closing `// Compute the max price of the products in the array.` comment in `src/04-arrays.js`, and the new `src/learning-app/` ES-modules case study (`courses.mjs`, `courseUtil.mjs`, `app.mjs`) with display, find, filter, count, delete, fee-total, and fee-sort utilities.

### Verified

- `node js-fundamentals/src/learning-app/app.mjs` exits 0: id 2 found, `Number of courses for web dev category 3`, `Fee for all courses 237000`, delete of id 1 leaves 9 courses, DESC sort puts the 35000 course first.

## 0.41.0 - 2026-10-23

### Added

- Mirrored the trainer's commit `cd5fed5` (`JS Fundamentals: map and reduce`) in `src/04-arrays.js`: spacing normalization, the `map op` section (name array plus mapped `Product : ... , with price= ...` strings), and the `reduce op` section summing all prices.
- New `src/05-reduce-practice.js` solving the trainer's open comment (`// display products having price > 20000`) with `reduce`: accumulator array, match count, and matched-price total.

### Verified

- `04-arrays.js` exits 0 with `Total price: 180991`; `05-reduce-practice.js` exits 0 printing PCO X5 Pro and Infinix Zero 30, `Products above 20000 : 2`, `Total price of products above 20000: 44998`.

## 0.40.0 - 2026-10-23

### Added

- Mirrored the trainer's commit `1501911` (`JS Fundamentals: objects + arrays find and filter`): `src/03-objects.js` with the `product` object, spread clone, and 10% price discount, plus `src/04-arrays.js` with the 10-item `products` array, `forEach`, spread clone, `find` by id, and `filter` by price.

### Verified

- Both scripts run on Node v22.14.0 with exit 0: original price 18000 after the discount while the clone keeps 20000, all 10 products printed, `product with id : 205 does not exist`, and `No matching products`.

## 0.39.0 - 2026-10-23

### Added

- New `JS-fundamentals` branch holding the trainer's first JavaScript commit `d1183a5` (`JS Fundamentals: variables + Functions`): the `js-fundamentals` Node project with `src/01-variables.js` (`const`/`let`, `typeof`, value assignment, template literal) and `src/02-functions.js` (standard function, arrow functions, default discount parameter, circle area).

### Verified

- Both scripts run on Node v22.14.0 with exit 0: visitors 10, `My total bill is 1180` from both forms, `Final bill is 1062`, and ` Area of circle is 314` from both forms.

## 0.38.0 - 2026-10-15

### Added

- Mirrored all 8 commits of the trainer's new standalone `helpdesk_backend` repo: the SonarCloud import (`sonar-maven-plugin`, `assignExecutiveTest`), the JWT secret moved to `application.properties` via `@Value("${jwt.secret}")`, Sonar low-priority fixes (field rename, UTC login timestamp, uppercased `PlanType` constants), SLF4J loggers replacing printlns, and the ADMIN-only `POST /api/plan/batch/add` with `PlanDto`, `PlanMapper`, `PlanService` (`@Transactional`), `PlanRepository`, a `planName` column, and a catch-all exception handler.

### Verified

- `mvnw test` 5/5 green; live smoke: ticket reads/writes 200, admin batch insert 200 (two `plan` rows), CUSTOMER token 403 on the batch endpoint, bad enum 400 via the catch-all handler, UTC login timestamps.

## 0.37.0 - 2026-10-14

### Added

- `saveTest` in `TicketServiceTest`: mocked `getByUsername` and `save` with `times(1)` verification around `TicketService.add`, covering the write path with stubs instead of a database.
- Step-by-step `System.out.println` markers in `TicketService.add`, kept as shown.

### Verified

- `mvnw test` 4/4 green and the live ticket add and reads re-exercised (outputs in history).

## 0.36.0 - 2026-10-14

### Added

- Mockito unit tests for the ticket fetch: `TicketServiceTest` with `@Mock` repositories and an `@InjectMocks` service covering the happy path (size assertions plus `times`/`verifyNoMoreInteractions` checks) and the invalid-id `assertThrows` case; `assertEquals` in `contextLoads`.

### Changed

- `getTicketsByCustomerId` validates the customer id first and throws `ResourceNotFoundException` for unknown ids, and the executive-username ticket query joins the manager.

### Verified

- `mvnw test` 3/3 green and live endpoints re-exercised (outputs in history).

## 0.35.0 - 2026-10-13

### Added

- JWT authentication: `JwtUtility` mints HS256 tokens with a 24-hour expiry, `GET /api/auth/login` issues a `TokenDto` after the HTTP Basic login, and a `JwtFilter` in front of the Spring auth filter turns `Authorization: Bearer` tokens into authenticated sessions carrying the user's authorities.
- `jjwt` 0.9.1 with jaxb-api and jaxb-runtime dependencies in `pom.xml`.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.34.0 - 2026-10-12

### Added

- Spring Security wiring: security filter chain with HTTP Basic and CSRF disabled, BCrypt password encoding, DB-backed user details service, and role rules for the customer, manager, executive, and admin flows.
- Admin onboarding API (`POST /api/admin/add`) and an ownership check on ticket assignment that rejects another manager's executive, plus the trainer's `HelpDesk` Postman collection at the repository root.
- Ticket add and executive add now resolve the customer or manager from the logged-in `Principal` instead of a path id.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.33.0 - 2026-10-09

### Added

- Group-by stats: executives per job title with a job-title update API, and ticket status with customer counts.
- Derived query methods `findByPriority`, `findByStatus`, `findByPriorityAndStatus` with `GET /api/ticket/by-priority`.
- Dynamic filter API `GET /api/ticket/filter` with optional priority, status, and date range.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.32.0 - 2026-10-08

### Changed

- Regrouped the training history to one heading per date with that day's commits listed; no entries added, removed, or reworded.
- No source code changed.

## 0.31.0 - 2026-10-08

### Added

- Customer plan case study scaffolding with entities and assignment stubs.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.30.0 - 2026-10-08

### Added

- Ticket fetch by executive username with `TicketInfoDtoV2` and optional pagination.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.29.0 - 2026-10-08

### Added

- Ticket POST, executive assign, and paginated fetch by customer id and username.
- `TicketInfoDto` joined DTO with optional pagination.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.28.0 - 2026-10-07

### Added

- Customer update API with partial name/city update and `InvalidCallException`.
- `CustomerUpdateDto`, `updatedAt` timestamp on customer.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.27.0 - 2026-10-07

### Added

- Customer POST with linked user creation (`CustomerDto`, `CustomerMapper`, user link).
- `User` model updates and service wiring.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.26.0 - 2026-10-07

### Added

- Manager POST flow with linked user (`Manager`, `ManagerDto`, `ManagerMapper`, `ManagerRepository`, `ManagerService`).
- Executive POST now takes the manager id in the path and validates it.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.25.0 - 2026-10-07

### Added

- Executive POST with linked user creation (`User`, `Role`, `UserRepository`, `UserService`).
- `@OneToOne` executive-user link; username/password fields with validations.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.24.0 - 2026-10-07

### Added

- Validation errors refined to a field-to-message map in the global handler.
- Contact-field messages corrected in `ExecutiveDto`.

### Verified

- Rebooted and exercised live: invalid POST returns the clean field map with 400.
- Files byte-identical to the trainer's commit.

## 0.23.0 - 2026-10-07

### Added

- Executive POST API with bean validation (`ExecutiveDto`, `@Valid`, mapper, entity, repository, service).
- Port note in properties; `@Repository` on customer repository.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.22.0 - 2026-10-06

### Added

- Error DTO response object with `ResponseEntity` for invalid ids.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.21.0 - 2026-10-06

### Added

- Global exception handler mapping invalid ids to 400 with the message.
- Delete validates the id before removing.

### Verified

- App rebooted and all paths exercised live: valid ids 200, missing ids 400 with message.
- Files byte-identical to the trainer's commit.

## 0.20.0 - 2026-10-06

### Added

- Basic customer CRUD APIs with `ResourceNotFoundException`.
- GET all, GET by id, and DELETE endpoints.

### Verified

- App boots with Tomcat on port 8080; all four endpoints exercised live (outputs in history).

## 0.19.0 - 2026-10-06

### Added

- `helpdesk_backend` Spring Boot project with customer POST API.
- `Customer` entity, `JpaRepository`, service, and controller.
- Datasource properties with auto-created `helpdesk_db`.

### Verified

- Maven bootstrapped through `mvnw`; project compiles on Java 21.
- App boots with Tomcat on port 8080; POST returns HTTP 200 with the saved record (run output recorded in history).

## 0.18.0 - 2026-10-05

### Added

- Ticket fetch with DTO mapping (`TicketRespDto`, `TicketMapper`, V1/V2 repository queries).

### Verified

- All touched files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.17.0 - 2026-10-05

### Added

- Ticket creation flow with customer validation and `OPEN` status.
- `TicketService`, `TicketRepository`, `TicketController`, customer lookup.

### Verified

- All touched files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, MySQL, and the seeded customer row; not run here.

## 0.16.0 - 2026-10-05

### Added

- Full executive insert flow with manager validation, user persist and re-fetch, and executive persist.
- `UserRepository`, `ResourceNotFoundException`, model updates.

### Verified

- All touched files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.15.0 - 2026-10-05

### Added

- `ExecutiveService` with step-commented `insertExecutive`.
- `ExecutiveRepository` and `ExecutiveController` starter.
- Datasource bean restructured to constructor style.
- `helpdesk.mwb` Workbench model.

### Verified

- New files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.14.0 - 2026-10-01

### Added

- `HibernateJpaApp` Maven project with Hibernate and Spring dependencies.
- `AppConfig` with entity manager factory, transaction manager, and datasource.
- `Customer` entity with JPQL repository insert and fetch.
- `User` model and all helpdesk entities with enums.

### Verified

- `pom.xml` well-formed; `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.13.0 - 2026-09-30

### Added

- `SpringCoreHelpDesk` case study with models, enums, repositories, and services.
- Customer sign-up insertion and fetch operations with mappers.

### Verified

- `pom.xml` well-formed; `javac` on Java 21 shows only missing Spring/HikariCP dependency errors, no syntax errors.
- App run needs Maven, Spring jars, and MySQL; not run here.

## 0.12.0 - 2026-09-29

### Added

- `SpringCoreApp` Maven project with Spring dependencies.
- `AppConfig` context loading, DAO/service beans, setter autowiring variants.
- In-method injection, custom bean definition, HikariCP datasource with `JdbcTemplate`.
- `joining_date`/`salary` columns, seed values, and `GROUP BY` queries in `pl-sql.sql`.

### Verified

- `pom.xml` well-formed; `javac` on Java 21 shows only missing Spring/HikariCP dependency errors, no syntax errors.
- App run needs Maven, Spring jars, and MySQL; not run here.

## 0.11.0 - 2026-09-28

### Added

- `MavenDemo` Maven project with JUnit dependencies.
- `DemoService` with validations, custom exceptions, and test cases.
- Stream test cases for `EmployeeService` with model, enums, and tests.
- DTO test case with `EmployeeRespDto` and `EmployeeMapper`.

### Verified

- `pom.xml` well-formed; all main sources compile with `javac` on Java 21: MAIN_BUILD_EXIT=0.
- `mvn test` not run here: Maven and JUnit jars are not installed in this environment.

## 0.10.0 - 2026-09-25

### Added

- Singleton `DBConnection` shared by `CustomerDao`, `OrderDao`, and `ProductDao`.
- `Customer` bean and `HeapDemo` heap/stack demo.
- Factory pattern payments (`PaymentFactory` with Neft, RTGS, UPI, PhonePe, GooglePay, PayTM).

### Verified

- `javac` on Java 21: BUILD_EXIT=0.
- `HeapDemo`, `com.design_pattern.App`, `com.factory.design_pattern.App`: RUN_EXIT=0.
- Existing JDBC project still compiles: JDBC_BUILD_EXIT=0.

## 0.9.0 - 2026-09-24

### Added

- Department employee-count grouping (`EmpDeptStatDto`, `Collectors.groupingBy`).
- `MapDemo` HashMap example.
- Department count mapped to DTO list.
- Branch salary totals (`EmployeeSalaryStatDto`, `Collectors.summingDouble`) and total salary computation.
- `Comparable` default sort by joining date on `Employee`.
- OOPs payment hierarchy with `PaymentMode`, `PaymentUtil`, and demo starters.

### Verified

- `javac` on Java 21: BUILD_EXIT=0.
- `java com.main.App`: RUN_EXIT=0, department stats, branch salary stats, total salary 1680000.0.
- `MapDemo`, `OOPDemo`, `IsADemo`: RUN_EXIT=0.

## 0.8.9 - 2026-09-23

### Added

- Java fundamentals collections exercise (`JavaFundamentals` project).
- `Branch`, `Department`, and `SortDirection` enums.
- `Employee` model with salary field.
- `EmployeeDao` with 20 sample employees.
- `EmployeeService` with lambda salary sorting, stream filters, name listing, and DTO mapping.
- `EmployeeRespDto` record and `EmployeeMapper`.
- `App` entry point printing the DTO list.
- IntelliJ project metadata for `JavaFundamentals`.

### Verified

- `javac` on Java 21: BUILD_EXIT=0.
- `java com.main.App`: RUN_EXIT=0, printed 20 `EmployeeRespDto` records.
- Existing JDBC project still compiles: JDBC_BUILD_EXIT=0.
- MySQL reachable on `localhost:3306`; fundamentals run needs no database.

## 0.7.0 - 2026-09-22

### Added

- MySQL Workbench ER model `ecom_sample.mwb`.
- E-commerce schema with six tables and six foreign-key relationships.

### Verified

- Forward-engineered schema `ecom_sample_db` successfully.
- Confirmed `users`, `customer`, `vendor`, `category`, `product`, and `customer_product` exist.

## 0.6.0 - 2026-09-22

### Added

- Product and order tables for the e-commerce trigger case study.
- `trg_check_stock_qty` for pre-insert product and stock validation.
- `trg_update_product_stock_qty` for post-insert stock updates.
- A valid sample order demonstrating the trigger flow.

### Fixed

- Ordered the trigger setup so tables and triggers can execute without duplicate-key or delimiter errors.

## 0.5.0 - 2026-09-22

### Added

- Java support for the `cnt_emp_by_dept` stored procedure and its OUT parameter.
- SQL view examples `v_emp` and `v_emp_dev` with `WITH CHECK OPTION`.

### Changed

- Updated the application to use the DEV department and display its employee count.
- Commented database connection status output to match the trainer's implementation.

## 0.4.0 - 2026-09-22

### Changed

- Aligned DAO, service, application, and PL/SQL names with the trainer's commits.
- Restored `getEmployeeNamesByDepartment` as the trainer's placeholder method.
- Added the missing schema, sample data, `update_emp_branch`, and `cnt_emp_by_dept` exercises.
- Removed the completed employee-name implementation that was not present in the trainer's commit.

## 0.3.0 - 2026-09-22

### Added

- `pl-sql.sql` with validated department and employee-name stored procedures.
- Parameterized department retrieval in the DAO and service layers.
- Employee-name retrieval support for a department.

### Changed

- Updated the application to demonstrate department-based employee retrieval.
- Updated the README with the PL/SQL workflow.

## 0.2.0 - 2026-09-21

### Added

- Employee model with database field mapping and string representation.
- Customer DAO for calling the `all_emp()` MySQL stored procedure.
- Customer service layer for employee retrieval.

### Changed

- Updated the application entry point to retrieve and print employees.
- Updated `DBConnection.dbConnect()` to return the active JDBC connection.
- Updated project documentation and training history.

## 0.1.0 - 2026-09-21

### Added

- Java 21 project structure.
- MySQL database connection utility.
- Application entry point for testing the database connection.
- MySQL Connector/J 9.1.0 dependency.
- Training journal README and project diagram.
- Private repository documentation and licensing.
