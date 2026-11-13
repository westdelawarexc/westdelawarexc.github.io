# West Delaware Girls Cross Country website

Built to match the girls wrestling site (westdelawaregirlswrestling.github.io): same look, same layout, plain HTML that runs free on GitHub Pages.

## Pages
| Page | What's on it |
|---|---|
| `index.html` | Photo slideshow, next-meet countdown, This Week (practices + meets), Coming Up, fastest course records, quick links, coach contacts. In the off-season it shows "schedule coming soon" and the course list instead. |
| `schedule.html` | Month calendars on computers, a list / week-by-week view on phones. |
| `courses.html` | Every meet site with directions from the high school, course map, and our course record. |
| `records.html` | Course records, all-time top times, class records, links to the old 4K records. |
| `history.html` | Runners in college and the season archive. |
| `training.html` | Summer / winter / spring workouts, form, strength, nutrition, books. |
| `parents.html` | Heja, coaches, handbooks and sign-ups. |

## Updating the site
**Everything you'll change lives in `js/data.js`** — meets, practice times, news bar, photos, coaches, courses, records, alumni and document links. Each section has a commented example; copy it, fill it in, remove the `//`.

- **Season schedule:** add meets to `MEETS` and a practice rule to `PRACTICE`, and set `SEASON`. The home page countdown, This Week and the schedule calendar all build from these.
- **Results:** paste the results link into that meet's `results` field.
- **New course record:** update the `record` on that course in `COURSES`.
- **Photos:** drop images in `img/` and add `{src:'img/name.jpg', caption:'...'}` to `PHOTOS`. (The three current photos still load from the old Wix site — move them into `img/` before the Wix site is deleted.)

## Putting it online (GitHub Pages)
1. Create a new public repo named `<account>.github.io` (or any name, then Settings → Pages → deploy from `main`).
2. Upload all of these files (keep the folders).
3. The site appears at `https://<account>.github.io` within a minute or two.
