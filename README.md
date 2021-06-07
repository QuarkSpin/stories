# Stories

## About

Interactive fiction in French made with Twine/TweeGo and SugarCube.

![Code license : GNU AGPL-3.0](<https://img.shields.io/badge/Code License-AGPL--3.0-blue?style=flat-square>)

![Stories license : CC BY-NC-SA 4.0](<https://img.shields.io/badge/Stories License-CC BY--NC--SA 4.0-blue?style=flat-square>)

## Stories

🇫🇷 [Le Principe de Lyssa](./stories/publication/principe-de-lyssa.html)

* **Genres** : mystère, étrange, survie
* **Durée** : courte
* **Difficulté** : facile
* **Autres** : musique

## Compilation

```shell
tweego -f <FORMAT> -o <OUTPUT_FILE_NAME> <INPUT_DIRECTORIES>
```

* Compile : `tweego -f <FORMAT> -o <OUTPUT_FILE_NAME> <INPUT_DIRECTORIES>`
* Head : `--head=./PATH-TO-HEAD.html`
* Test : add `-t`
* Watch : add `-w`

Example (powershell multiline) :

```powershell
tweego `
  -f sugarcube-2 `
  -o ./stories/publication/principe-de-lyssa.html `
  ./addons/localization/ui-french.js `
  ./addons/tutorials `
  ./addons/scripts/default `
  ./addons/styles/default `
  ./addons/widgets/default `
  ./addons/passages/default `
  ./stories/drafts/principe-de-lyssa `
  -w
```

NB : List supported formats using `tweego --list-formats`
