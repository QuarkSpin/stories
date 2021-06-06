# Stories

## About

Some interactive stories (mostly in French) made with [TweeGo](https://www.motoslave.net/tweego/) and [SugarCube](https://www.motoslave.net/sugarcube/2/)

![Code license : GNU AGPL-3.0](<https://img.shields.io/badge/Code License-AGPL--3.0-blue?style=flat-square>)

![Stories license : CC BY-NC-SA 4.0](<https://img.shields.io/badge/Stories License-CC BY--NC--SA 4.0-blue?style=flat-square>)

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
  ./addons/styles/default `
  ./stories/drafts/principe-de-lyssa `
  -w
```

NB : List supported formats using `tweego --list-formats`

