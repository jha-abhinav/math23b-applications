# Publish Around the World in 80 Integrals on GitHub Pages

The website is ready for GitHub Pages. No server, paid API, npm installation, LaTeX build, or database is required on GitHub. The repository contains already-generated webpages, local math assets, CSV data, and all 18 PDF downloads.

## Recommended: this folder becomes its own repository

1. Create a new repository on GitHub, for example `math23b-applications`. For GitHub Free, use a public repository.
2. Put the **contents of `Application Worksheets Website/` at the repository root**. Keep `.github/workflows/deploy-pages.yml`, `dist/`, `tests/`, and the documentation together. Do not place the whole website folder inside another folder in this repository.
3. In the repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push to the `main` branch. If the push happened before enabling Pages, run **Actions → Deploy Around the World in 80 Integrals to GitHub Pages → Run workflow**.
5. The deployment job publishes its resulting URL. A project repository normally appears at `https://YOUR-USERNAME.github.io/math23b-applications/`.

The workflow validates the site and answer checker, uploads only `dist/`, and deploys it. All local assets and links are relative, so the site works at either a project-repository subpath or an account Pages root. No base-URL edits are needed.

### Example commands

Run these in the `Application Worksheets Website` folder after creating an empty repository. Replace the two placeholders with your own GitHub username and repository name. These commands have not been run on your behalf.

```sh
git init -b main
git add .
git commit -m "Add Math 23B application worksheets website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If your default branch is not named `main`, update the workflow’s `on.push.branches` setting to match it.

## If you want to keep this inside a larger repository

GitHub reads workflows only from the repository-root `.github/workflows/` directory. Copy the supplied workflow there. In its validation step use:

```yaml
      - name: Validate the site
        working-directory: Application Worksheets Website
        run: |
          python3 tests/validate_site.py
          node tests/checker.test.cjs
```

Change the upload step’s path to:

```yaml
        with:
          path: Application Worksheets Website/dist
```

The deploy step and Pages settings stay the same. Uploading only that `dist/` directory keeps the rest of your repository out of the published site.

## An even simpler alternative

You can instead put **only the contents of `dist/`** at the root of a repository. Under Settings → Pages choose **Deploy from a branch**, select `main` and `/(root)`, then Save. Include the `.nojekyll` file. In that arrangement you do not need the supplied Actions workflow; the prebuilt static files are enough.

## Updating content

The editable workbook and build scripts are in the separate `Application Worksheets/` folder. Regenerate the webpages and PDFs there, copy the updated website files into your GitHub checkout, and push. With the supplied workflow, pushes to `main` deploy the latest checked-in `dist/` files.

Student answers and notes are stored locally in each student’s browser. Hosting on GitHub Pages does not create accounts or send their answers to a teacher. The site deliberately exposes worked solutions and is intended for practice.

Official references: [GitHub’s custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [configuring a Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
