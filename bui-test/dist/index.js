(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// dom ready 
bui.ready(function (global) {
  // build data
  var ID = 1;
  function _random(max) {
    return Math.round(Math.random() * 1000) % max;
  }
  function buildData() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
    var adjectives = ['pretty', 'large', 'big', 'small', 'tall', 'short', 'long', 'handsome', 'plain', 'quaint', 'clean', 'elegant', 'easy', 'angry', 'crazy', 'helpful', 'mushy', 'odd', 'unsightly', 'adorable', 'important', 'inexpensive', 'cheap', 'expensive', 'fancy'];
    var colours = ['red', 'yellow', 'blue', 'green', 'pink', 'brown', 'purple', 'brown', 'white', 'black', 'orange'];
    var nouns = ['table', 'chair', 'house', 'bbq', 'desk', 'car', 'pony', 'cookie', 'sandwich', 'burger', 'pizza', 'mouse', 'keyboard'];
    var data = [];
    for (var i = 0; i < count; i++) {
      data.push({
        id: ID++,
        label: adjectives[_random(adjectives.length)] + ' ' + colours[_random(colours.length)] + ' ' + nouns[_random(nouns.length)]
      });
    }
    return data;
  }

  // page status manager store
  var bs = bui.store({
    el: "#home",
    scope: "home",
    data: {
      rows: []
    },
    methods: {
      add: function add() {
        var data = buildData(1000);
        var alldata = this.$data.rows.concat(data);
        this.rows = alldata;
      },
      update: function update() {
        var rows = this.$data.rows;
        for (var i = 0; i < rows.length; i += 10) {
          var item = rows[i];
          item.label += ' !!!';
          this.rows.splice(i, 1, item);
        }
      },
      remove: function remove(id) {
        var index = this.rows.findIndex(function (x) {
          return x.id == id;
        });
        this.rows.splice(index, 1);
      },
      select: function select(ref) {
        // use jquery remove class will faster than use status change.
        // ref: click this dom
        $(".danger").removeClass('danger');
        $(ref).parents('tr').addClass('danger');
      },
      run: function run() {
        var data = buildData(1000);
        this.rows = data;
      },
      runLots: function runLots() {
        var data = buildData(10000);
        this.rows = data;
      },
      clear: function clear() {
        this.rows = [];
      },
      swap: function swap() {
        if (this.rows.length > 998) {
          var a = this.$data.rows[1];
          var b = this.$data.rows[998];
          this.rows.splice(1, 1, b);
          this.rows.splice(998, 1, a);
        }
      }
    },
    watch: {},
    computed: {},
    templates: {
      tplRows: function tplRows(data) {
        var fragment = document.createDocumentFragment();
        data.forEach(function (item, index) {
          var tr = document.createElement('tr');
          tr.innerHTML = "<td class=\"col-md-1\">".concat(item.id, "</td>\n                    <td class=\"col-md-4\">\n                        <a b-click=\"home.select($this)\">").concat(item.label, "</a>\n                    </td>\n                    <td class=\"col-md-1\">\n                        <a b-click=\"home.remove('").concat(item.id, "')\">\n                        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                        </a>\n                    </td>\n                    <td class=\"col-md-6\"></td>");
          fragment.appendChild(tr);
        });
        return fragment;
      }
    },
    beforeMount: function beforeMount() {
      // example: init value, in beforeMount need $data
      // this.$data.rows = []
    },
    mounted: function mounted() {
      // example: chane value, in mounted don't need $data
      // this.rows = [];
    }
  });
});
},{}]},{},[1]);
