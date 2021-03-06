/* global suite, bench */
var fs = require('fs')
var path = require('path')

var bencode = require('../')
var bencoding = require('bencoding')
var bncode = require('bncode')
var btparse = require('btparse')
var dht = require('dht.js/lib/dht/bencode')
var dhtBencode = require('dht-bencode')

var buffer = fs.readFileSync(path.join(__dirname, 'test.torrent'))

suite('decode to buffer', function () {
  bench('bencode', function () {
    bencode.decode(buffer)
  })
  bench('bencoding', function () {
    bencoding.decode(buffer)
  })
  bench('dht-bencode', function () {
    dhtBencode.bdecode(buffer)
  })
  bench('bncode', function () {
    bncode.decode(buffer)
  })
  bench('btparse', function () {
    btparse(buffer)
  })
  bench('dht.js', function () {
    dht.decode(buffer)
  })
})

suite('decode to utf8', function () {
  bench('bencode', function () {
    bencode.decode(buffer, 'utf8')
  })
})
suite('decode to ascii', function () {
  bench('bencode', function () {
    bencode.decode(buffer, 'ascii')
  })
})
suite('decode to binary', function () {
  bench('bencode', function () {
    bencode.decode(buffer, 'ascii')
  })
})
