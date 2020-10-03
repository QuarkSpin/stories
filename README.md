# Stories

## Command line

Current compilation :

```shell
tweego -f sugarcube-2 -o ./stories/publication/2020-09-19-le-phare-des-brumes/index.html ./addons/scripts/default ./addons/widgets/default ./addons/passages/default ./addons/styles/default ./stories/drafts/2020-09-19-le-phare-des-brumes --head=./addons/head.html -w
```

Doc :

* Compile : `tweego -f <FORMAT> -o <OUTPUT_FILE_NAME> <INPUT_DIRECTORIES>`
* Test : add `-t`
* Watch : add `-w`
* List supported formats : `tweego --list-formats`
