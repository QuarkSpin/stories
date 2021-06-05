# Stories

## About

Some interactive stories (mostly in French) made with [TweeGo](https://www.motoslave.net/tweego/) and [SugarCube](https://www.motoslave.net/sugarcube/2/)

![Code license : GNU AGPL-3.0](<https://img.shields.io/badge/Code License-AGPL--3.0-blue?style=flat-square>)

![Stories license : CC BY-NC-SA 4.0](<https://img.shields.io/badge/Stories License-CC BY--NC--SA 4.0-blue?style=flat-square>)

## Compilation

```shell
tweego -f sugarcube-2 -o ./stories/publication/OUTPUT_FILE ./addons/scripts/default ./addons/widgets/default ./addons/passages/default ./addons/styles/default ./stories/drafts/STORY_DIR --head=./addons/head.html
```

* Compile : `tweego -f <FORMAT> -o <OUTPUT_FILE_NAME> <INPUT_DIRECTORIES>`
* Test : add `-t`
* Watch : add `-w`
* List supported formats : `tweego --list-formats`
