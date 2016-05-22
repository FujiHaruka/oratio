#!/usr/bin/env node
const usage = `
[使い方]
主の祈りを標準出力に出力します。

オプション
-j 日本語（プロテスタント訳）
-e 英語（modern 1988 ELLC version）
-l ラテン語（Latin version Nova Vulgata）
-g 古代ギリシャ語（原文）

ソース
https://ja.wikipedia.org/wiki/%E4%B8%BB%E3%81%AE%E7%A5%88%E3%82%8A
https://en.wikipedia.org/wiki/Lord%27s_Prayer
`

const argv = require('yargs')
    .usage(usage)
    .example('oratio -j')
    .alias('j', 'japanese')
    .alias('e', 'english')
    .alias('l', 'latin')
    .alias('g', 'greek')
    .help('h')
    .alias('h', 'help')
    .argv

const prayers = require('./prayers.json')
const list = ['j', 'e', 'l', 'g']

// set default
let countArgs = list.reduce((value, lang) => {
  if (argv[lang]) {
    value += 1
  }
  return value
}, 0)
if (countArgs === 0) {
  argv['j'] = true
}

// output
list.forEach(lang => {
  if (argv[lang]) {
    console.log('')
    console.log(prayers[lang])
    console.log('')
  }
})
