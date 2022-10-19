!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.MVDOTOK = t())
    : (e.MVDOTOK = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 14))
    );
  })([
    function (e, t, r) {
      "use strict";
      async function n(e, t) {
        let r;
        switch (t) {
          case "File":
            r = await ((i = e),
            new Promise((e, t) => {
              const r = new FileReader();
              (r.onload = (t) => {
                let n = r.result,
                  i = new Uint8Array(n);
                e(i);
              }),
                (r.onerror = (e) => t(e)),
                r.readAsArrayBuffer(i);
            }));
            break;
          case "Base64":
            (r = await ((n = e),
            (n = n.substr(n.indexOf(",") + 1)),
            new Promise((e, t) => {
              fetch("data:application/octet-binary;base64," + n)
                .then((e) => e.arrayBuffer())
                .then((t) => {
                  e(new Uint8Array(t));
                });
            }))),
              (function (e) {
                let t = new Blob([e], { type: "application/octet-binary" });
                new Promise((e, r) => {
                  let n = new FileReader();
                  (n.onload = function () {
                    let t = n.result,
                      r = t.substr(t.indexOf(",") + 1);
                    e(r);
                  }),
                    n.readAsDataURL(t);
                });
              })(r);
            break;
          default:
            r = [];
        }
        var n, i;
        return r;
      }
      var i = {
        from: "",
        fileExtension: "",
        headerId: "",
        size: "",
        topic: "",
        key: "",
        totalPacket: 0,
        type: 0,
        date: new Date().getTime(),
      };
      class o {
        constructor() {
          this.message = i;
        }
        set from(e) {
          this.message.from = e;
        }
        get from() {
          return this.message.from;
        }
        set fileExtension(e) {
          this.message.fileExtension = e;
        }
        get fileExtension() {
          return this.message.fileExtension;
        }
        set headerId(e) {
          this.message.headerId = e;
        }
        get headerId() {
          return this.message.headerId;
        }
        set topic(e) {
          this.message.topic = e;
        }
        get topic() {
          return this.message.topic;
        }
        set size(e) {
          this.message.size = e;
        }
        get size() {
          return this.message.size;
        }
        set key(e) {
          this.message.key = e;
        }
        get key() {
          return this.message.key;
        }
        set totalPacket(e) {
          this.message.totalPacket = e;
        }
        get totalPacket() {
          return this.message.totalPacket;
        }
        set type(e) {
          this.message.type = e;
        }
        get type() {
          return this.message.type;
        }
        set date(e) {
          this.message.date = e;
        }
        get date() {
          return this.message.date;
        }
        Send(e) {
          let t = `${this.message.key}/${this.message.topic}`;
          e.publish(t, JSON.stringify(this.message), {}, () => {});
        }
        MapHeader(e) {
          let t = Object.keys(this.message),
            r = Object.keys(e);
          return t.filter((e) => r.indexOf(e) > -1).length == t.length;
        }
      }
      var s = {
        messageId: "",
        content: [],
        packetNo: 0,
        from: "",
        headerId: "",
        topic: "",
        key: "",
        type: "",
      };
      class a {
        constructor() {
          this.message = s;
        }
        set messageId(e) {
          this.message.messageId = e;
        }
        get messageId() {
          return this.message.messageId;
        }
        set content(e) {
          this.message.content = e;
        }
        get content() {
          return this.message.content;
        }
        set packetNo(e) {
          this.message.packetNo = e;
        }
        get packetNo() {
          return this.message.packetNo;
        }
        set from(e) {
          this.message.from = e;
        }
        get from() {
          return this.message.from;
        }
        set headerId(e) {
          this.message.headerId = e;
        }
        get headerId() {
          return this.message.headerId;
        }
        set topic(e) {
          this.message.topic = e;
        }
        get topic() {
          return this.message.topic;
        }
        set key(e) {
          this.message.key = e;
        }
        get key() {
          return this.message.key;
        }
        set type(e) {
          this.message.type = e;
        }
        get type() {
          return this.message.type;
        }
        Send(e) {
          let t = `${this.message.key}/${this.message.topic}`,
            r = JSON.stringify(this.message);
          e.publish(t, r, {}, () => {});
        }
        MapMessage(e) {
          let t = Object.keys(this.message),
            r = Object.keys(e);
          return t.filter((e) => r.indexOf(e) > -1).length == t.length;
        }
      }
      const c = { image: 0, audio: 1, video: 2, file: 3 };
      const u = new (class {
        constructor() {}
        SendFile(e, t, r) {
          const i = (function (e) {
            let t = { fileType: "", file: "", ext: "" };
            var r;
            return (
              "string" == typeof (r = e) && r.includes(";base64")
                ? ((t.fileType = "Base64"),
                  (t.file = e),
                  (t.ext = e.substring(
                    e.indexOf("/") + 1,
                    e.indexOf(";base64")
                  )))
                : "object" == typeof e &&
                  (null != e[0] &&
                    ((t.fileType = "File"),
                    (t.file = e[0]),
                    (t.ext = e[0].name.split(".").pop())),
                  null != e.name &&
                    ((t.fileType = "File"),
                    (t.file = e),
                    (t.ext = e.name.split(".").pop()))),
              t
            );
          })(e);
          n(i.file, i.fileType).then((e) => {
            const n = e.length,
              o = Object.assign(Object.assign(Object.assign({}, t), i), {
                size: n,
              });
            let s = [];
            if (n > 2e3) {
              (s = (function (e, t) {
                const r = [];
                for (let n = 0, i = e.length; n < i; n += t)
                  r.push(e.slice(n, n + t));
                return r;
              })(e, 2e3)),
                (o.totalPacket = s.length);
              const n = this.SendHeaderFirst(o, r);
              s.forEach((e, i) => {
                const o = i + 1;
                this.SendChunkPacket(e, n, o, t, r);
              });
            } else {
              const t = Object.assign(Object.assign({}, o), { totalPacket: 1 }),
                n = this.SendHeaderFirst(t, r);
              this.SendChunkPacket(e, n, 1, t, r);
            }
          });
        }
        SendHeaderFirst(e, t) {
          const r = new o(),
            n = e.id;
          return (
            (r.from = e.from),
            (r.fileExtension = e.ext),
            (r.headerId = n),
            (r.topic = e.topic),
            (r.size = e.size),
            (r.key = e.key),
            (r.type = c[e.type]),
            (r.totalPacket = e.totalPacket),
            r.Send(t.Connection),
            n
          );
        }
        SendChunkPacket(e, t, r, n, i) {
          console.log("Binarray", e),
            (e = Array.from(e)),
            (e = btoa(e.map((e) => String.fromCharCode(e)).join(""))),
            console.log("Binarray Normal== ", e);
          const o = new a();
          (o.messageId = new Date().getTime().toString()),
            (o.content = e),
            (o.packetNo = r),
            (o.from = n.from),
            (o.headerId = t),
            (o.topic = n.topic),
            (o.key = n.key),
            (o.type = c[n.type]),
            o.Send(i.Connection);
        }
        MapHeaderPacket(e) {
          return new o().MapHeader(e);
        }
        MapFileMessagePacket(e) {
          return new a().MapMessage(e);
        }
        SetMessagePacket(e, t) {}
      })();
      t.a = u;
    },
    function (e, t, r) {
      "use strict";
      t.a = {
        from: "",
        content: "",
        id: "",
        size: 0,
        key: "",
        type: "",
        to: "",
        isGroupMessage: !1,
        date: new Date().getTime(),
        status: 1,
        subtype: 0,
        isBuffering: !0,
      };
    },
    function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "a", function () {
          return o;
        });
      var n = {
        ai: "application/postscript",
        aif: "audio/x-aiff",
        aifc: "audio/x-aiff",
        aiff: "audio/x-aiff",
        asc: "text/plain",
        atom: "application/atom+xml",
        au: "audio/basic",
        avi: "video/x-msvideo",
        bcpio: "application/x-bcpio",
        bin: "application/octet-stream",
        bmp: "image/bmp",
        cdf: "application/x-netcdf",
        cgm: "image/cgm",
        class: "application/octet-stream",
        cpio: "application/x-cpio",
        cpt: "application/mac-compactpro",
        csh: "application/x-csh",
        css: "text/css",
        csv: "text/csv",
        dcr: "application/x-director",
        dir: "application/x-director",
        djv: "image/vnd.djvu",
        djvu: "image/vnd.djvu",
        dll: "application/octet-stream",
        dmg: "application/octet-stream",
        dms: "application/octet-stream",
        doc: "application/msword",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        dtd: "application/xml-dtd",
        dvi: "application/x-dvi",
        dxr: "application/x-director",
        eps: "application/postscript",
        etx: "text/x-setext",
        exe: "application/octet-stream",
        ez: "application/andrew-inset",
        gif: "image/gif",
        gram: "application/srgs",
        grxml: "application/srgs+xml",
        gtar: "application/x-gtar",
        hdf: "application/x-hdf",
        hqx: "application/mac-binhex40",
        htm: "text/html",
        html: "text/html",
        ice: "x-conference/x-cooltalk",
        ico: "image/x-icon",
        ics: "text/calendar",
        ief: "image/ief",
        ifb: "text/calendar",
        iges: "model/iges",
        igs: "model/iges",
        jpe: "image/jpeg",
        jpeg: "image/jpeg",
        jpg: "image/jpeg",
        js: "application/x-javascript",
        json: "application/json",
        kar: "audio/midi",
        latex: "application/x-latex",
        lha: "application/octet-stream",
        lzh: "application/octet-stream",
        log: "application/octet-stream",
        m3u: "audio/x-mpegurl",
        man: "application/x-troff-man",
        mathml: "application/mathml+xml",
        me: "application/x-troff-me",
        mesh: "model/mesh",
        mid: "audio/midi",
        midi: "audio/midi",
        mif: "application/vnd.mif",
        mov: "video/quicktime",
        movie: "video/x-sgi-movie",
        mp2: "audio/mpeg",
        mp3: "audio/mpeg",
        mpe: "video/mpeg",
        mpeg: "video/mpeg",
        mpg: "video/mpeg",
        mp4: "video/mp4",
        mpga: "audio/mpeg",
        ms: "application/x-troff-ms",
        msh: "model/mesh",
        mxu: "video/vnd.mpegurl",
        nc: "application/x-netcdf",
        oda: "application/oda",
        ogg: "audio/ogg",
        oga: "audio/ogg",
        pbm: "image/x-portable-bitmap",
        pdb: "chemical/x-pdb",
        pdf: "application/pdf",
        pgm: "image/x-portable-graymap",
        pgn: "application/x-chess-pgn",
        png: "image/png",
        pnm: "image/x-portable-anymap",
        ppm: "image/x-portable-pixmap",
        ppt: "application/vnd.ms-powerpoint",
        ps: "application/postscript",
        qt: "video/quicktime",
        ra: "audio/x-pn-realaudio",
        ram: "audio/x-pn-realaudio",
        ras: "image/x-cmu-raster",
        rdf: "application/rdf+xml",
        rgb: "image/x-rgb",
        rm: "application/vnd.rn-realmedia",
        roff: "application/x-troff",
        rss: "application/rss+xml",
        rtf: "text/rtf",
        rtx: "text/richtext",
        sgm: "text/sgml",
        sgml: "text/sgml",
        sh: "application/x-sh",
        shar: "application/x-shar",
        silo: "model/mesh",
        sit: "application/x-stuffit",
        skd: "application/x-koan",
        skm: "application/x-koan",
        skp: "application/x-koan",
        skt: "application/x-koan",
        smi: "application/smil",
        smil: "application/smil",
        snd: "audio/basic",
        so: "application/octet-stream",
        spl: "application/x-futuresplash",
        src: "application/x-wais-source",
        sv4cpio: "application/x-sv4cpio",
        sv4crc: "application/x-sv4crc",
        svg: "image/svg+xml",
        svgz: "image/svg+xml",
        swf: "application/x-shockwave-flash",
        t: "application/x-troff",
        tar: "application/x-tar",
        tcl: "application/x-tcl",
        tex: "application/x-tex",
        texi: "application/x-texinfo",
        texinfo: "application/x-texinfo",
        tif: "image/tiff",
        tiff: "image/tiff",
        tr: "application/x-troff",
        tsv: "text/tab-separated-values",
        txt: "text/plain",
        ustar: "application/x-ustar",
        vcd: "application/x-cdlink",
        vrml: "model/vrml",
        vxml: "application/voicexml+xml",
        wav: "audio/x-wav",
        aac: "audio/aac",
        wbmp: "image/vnd.wap.wbmp",
        wbxml: "application/vnd.wap.wbxml",
        wml: "text/vnd.wap.wml",
        wmlc: "application/vnd.wap.wmlc",
        wmls: "text/vnd.wap.wmlscript",
        wmlsc: "application/vnd.wap.wmlscriptc",
        wrl: "model/vrml",
        xbm: "image/x-xbitmap",
        xht: "application/xhtml+xml",
        xhtml: "application/xhtml+xml",
        xls: "application/vnd.ms-excel",
        xml: "application/xml",
        xpm: "image/x-xpixmap",
        xsl: "application/xml",
        xslt: "application/xslt+xml",
        xul: "application/vnd.mozilla.xul+xml",
        xwd: "image/x-xwindowdump",
        xyz: "chemical/x-xyz",
        zip: "application/zip",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      };
      function i(e, t) {
        const r = new Uint8Array(e);
        let i = new Blob([r], { type: "application/octet-binary" });
        return new Promise((e, r) => {
          let o = new FileReader();
          (o.onload = function () {
            let r = o.result,
              i = r.substr(r.indexOf(",") + 1);
            e(`data:${n[t]};base64,${i}`);
          }),
            o.readAsDataURL(i);
        });
      }
      function o(e, t) {
        return new Promise((r, i) => {
          console.log("completeFile buffer: ", e);
          let o = e.join("");
          (t = t.toLowerCase()), r(`data:${n[t]};base64,${o}`);
        });
      }
    },
    function (e, t) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (r = window);
      }
      e.exports = r;
    },
    function (e, t, r) {
      "use strict";
      var n,
        i = "object" == typeof Reflect ? Reflect : null,
        o =
          i && "function" == typeof i.apply
            ? i.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      n =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var s =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function a() {
        a.init.call(this);
      }
      (e.exports = a),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var c = 10;
      function u(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function l(e) {
        return void 0 === e._maxListeners
          ? a.defaultMaxListeners
          : e._maxListeners;
      }
      function f(e, t, r, n) {
        var i, o, s, a;
        if (
          (u(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = o[t] = n ? [r, s] : [s, r])
            : n
            ? s.unshift(r)
            : s.push(r),
          (i = l(e)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = e),
            (c.type = t),
            (c.count = s.length),
            (a = c),
            console && console.warn && console.warn(a);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function p(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = h.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function d(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : m(i, i.length);
      }
      function g(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          c = e;
        },
      }),
        (a.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (a.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (a.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var n = "error" === e,
            i = this._events;
          if (void 0 !== i) n = n && void 0 === i.error;
          else if (!n) return !1;
          if (n) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var a = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((a.context = s), a);
          }
          var c = i[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) o(c, this, t);
          else {
            var u = c.length,
              l = m(c, u);
            for (r = 0; r < u; ++r) o(l[r], this, t);
          }
          return !0;
        }),
        (a.prototype.addListener = function (e, t) {
          return f(this, e, t, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function (e, t) {
          return f(this, e, t, !0);
        }),
        (a.prototype.once = function (e, t) {
          return u(t), this.on(e, p(this, e, t)), this;
        }),
        (a.prototype.prependOnceListener = function (e, t) {
          return u(t), this.prependListener(e, p(this, e, t)), this;
        }),
        (a.prototype.removeListener = function (e, t) {
          var r, n, i, o, s;
          if ((u(t), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (s = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (a.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (a.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (a.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : g.call(e, t);
        }),
        (a.prototype.listenerCount = g),
        (a.prototype.eventNames = function () {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    },
    function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r(1),
        i = r(2);
      const o = { 0: "image", 1: "audio", 2: "video", 3: "file" };
      class s {
        constructor() {
          this.message = n.a;
        }
        set from(e) {
          this.message.from = e;
        }
        get from() {
          return this.message.from;
        }
        set content(e) {
          this.message.content = e;
        }
        get content() {
          return this.message.content;
        }
        set id(e) {
          this.message.id = e;
        }
        get id() {
          return this.message.id;
        }
        set size(e) {
          this.message.size = e;
        }
        get size() {
          return this.message.size;
        }
        set key(e) {
          this.message.key = e;
        }
        get key() {
          return this.message.key;
        }
        set type(e) {
          this.message.type = e;
        }
        get type() {
          return this.message.type;
        }
        set to(e) {
          this.message.to = e;
        }
        get to() {
          return this.message.to;
        }
        set isGroupMessage(e) {
          this.message.isGroupMsg = e;
        }
        get isGroupMessage() {
          return this.message.isGroupMessage;
        }
        set isBuffering(e) {
          this.message.isBuffering = e;
        }
        get isBuffering() {
          return this.message.isBuffering;
        }
        set ext(e) {
          this.message.ext = e;
        }
        get ext() {
          return this.message.ext;
        }
        set filename(e) {
          this.message.filename = e;
        }
        get filename() {
          return this.message.filename;
        }
        set date(e) {
          this.message.date = e;
        }
        get date() {
          return this.message.date;
        }
        set status(e) {
          this.message.status = e;
        }
        get status() {
          return this.message.status;
        }
        set subtype(e) {
          this.message.subtype = e;
        }
        get subtype() {
          return this.message.subtype;
        }
        ShowFileMessage(e) {
          Object(i.b)(this.message.content, this.message.ext).then((t) => {
            (this.message.content = t),
              (this.message.type = o[this.message.type]),
              e.emit("message", this.message);
          });
        }
        ShowFileLoadingMessage(e) {
          (this.message.type = o[this.message.type]),
            e.emit("message", this.message);
        }
        MapMessage(e) {
          const t = Object.keys(this.message),
            r = Object.keys(e);
          return t.filter((e) => r.includes(e)).length == t.length;
        }
      }
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return f;
        });
        var n = r(4),
          i = r(0),
          o = r(10),
          s = r(5),
          a = r(2),
          c = r(1);
        e.Buffer = e.Buffer || r(7).Buffer;
        const u = r(8).connect,
          l = { 0: "image", 1: "audio", 2: "video", 3: "file" };
        class f extends n.EventEmitter {
          constructor(e) {
            super(),
              (this.Host = ""),
              (this.Port = ""),
              (this.Username = ""),
              (this.Password = ""),
              (this.Connection = ""),
              (this.ChennalKey = ""),
              (this.reConnectivity = ""),
              (this.projectID = ""),
              (this.projectSecretKey = ""),
              (this.QueueFiles = {}),
              (this.projectSecretKey = e.secret),
              (this.projectID = e.projectID),
              e.host
                ? ((this.Host = e.host), this.emit("authenticated", {}))
                : this.Authentication(),
              this.registerPingWorker();
          }
          static consoleLog(...e) {
            console.log(...e);
          }
          Register(e, t) {
            (this.Username = e), (this.Password = t);
            const r = "" + this.Host;
            if (0 == r.length)
              return this.emit("authentication_error", {
                message: "SDK is not authorized.",
              });
            f.consoleLog(
              "hostString===",
              r,
              this.Username,
              " ===password=== ",
              this.Password
            );
            const n = u(r, { username: e, password: t });
            (this.Connection = n),
              n.on("message", (e, t, r) => {
                try {
                  let e = JSON.parse(t.toString());
                  e.hasOwnProperty("event")
                    ? this.SetPresenceEvent(e)
                    : e.hasOwnProperty("status") && 200 == e.status
                    ? this.emit("create", e)
                    : this.SetMessagePacket(e);
                } catch (e) {
                  this.SetMessagePacket(r);
                }
              }),
              n.on("connect", () => {
                this.emit("connect");
              }),
              n.on("packetsend", (e) => {
                f.consoleLog("on packetsend", e, new Date().toLocaleString());
              }),
              n.on("packetreceive", (e) => {}),
              n.on("presence", (e) => {}),
              n.on("disconnect", (e) => {
                this.emit("disconnect", e);
              }),
              n.on("error", (e) => {
                this.emit("error", e);
              });
          }
          CreateChannel(e) {
            const t = {
              key: "cWV91camkwd99XO9rvHmamvXxGdyeHK5",
              channel: e + "/",
              type: "rwslp",
              ttl: 999999,
            };
            this.Connection.publish("emitter/keygen/", JSON.stringify(t));
          }
          Subscribe(e) {
            const t = `${e.key}/${e.channel}`;
            this.Connection.subscribe(t, [], (t, r) => {
              r && null != r && this.SendPresence(e);
            });
          }
          UnSubscribe(e) {
            const t = `${e.key}/${e.channel}`;
            this.Connection.unsubscribe(t, [], (t) => {
              null == t && this.emit("unsubscribed", e);
            });
          }
          Presence(e) {}
          SendMessage(e) {
            const t = `${e.key}/${e.to}`;
            this.Connection.publish(t, JSON.stringify(e), {}, () => {
              this.Connection.on("message", (t, r, n) => {
                if (t == e.to) {
                  const i = n.payload;
                  "publish" == n.cmd &&
                    null != i &&
                    i == JSON.stringify(e) &&
                    this.emit("messagesent", { channel: t, message: r });
                }
              });
            });
          }
          SendReceipt(e) {
            const t = `${e.key}/${e.to}`;
            this.Connection.publish(t, JSON.stringify(e), {}, () => {
              this.Connection.on("message", (t, r, n) => {
                if (t == e.to) {
                  const i = n.payload;
                  "publish" == n.cmd &&
                    null != i &&
                    i == JSON.stringify(e) &&
                    this.emit("messagesent", { channel: t, message: r });
                }
              });
            });
          }
          SendRawMessage(e, t) {
            const r = `${t.key}/${t.to}`;
            this.Connection.publish(r, e, {}, () => {
              this.Connection.on("message", (e, r, n) => {
                if (e == t.topic) {
                  const i = n.payload;
                  "publish" == n.cmd &&
                    null != i &&
                    i == JSON.stringify(t) &&
                    this.emit("messagesent", { channel: e, message: r });
                }
              });
            });
          }
          SendFile(e, t) {
            i.a.SendFile(e, t, this);
          }
          Disconnect() {
            this.pingWorker &&
              this.pingWorker.postMessage({ method: "clearPingInterval" }),
              this.Connection.end();
          }
          async SetFileMessage(e, t) {
            const r = c.a;
            (r.type = e.Header.type),
              (r.size = e.Header.size),
              (r.to = e.Header.topic),
              (r.key = e.Header.key),
              (r.from = e.Header.from),
              (r.isBuffering = !1),
              (r.ext = e.Header.fileExtension),
              (r.id = t.headerId),
              (r.filename =
                this.Username +
                Math.random() +
                "." +
                e.Header.fileExtension.toLowerCase()),
              (r.content = await Object(a.a)(
                e.Content,
                e.Header.fileExtension
              )),
              (r.type = l[r.type]),
              this.emit("message", r),
              delete this.QueueFiles[t.headerId];
          }
          SetFileLoadingMessage(e) {
            const t = new s.a();
            (t.content = ""),
              (t.type = e.type),
              (t.size = e.size),
              (t.to = e.topic),
              (t.key = e.key),
              (t.from = e.from),
              (t.isBuffering = !0),
              (t.ext = e.fileExtension),
              (t.id = e.headerId),
              t.ShowFileLoadingMessage(this);
          }
          Authentication() {
            o.a
              .Authorization(this.projectID, this.projectSecretKey)
              .then((e) => {
                f.consoleLog("====Authorization Chat====", e),
                  200 == e.status
                    ? ((this.Host = `${e.messaging_server_map.protocol}://${e.messaging_server_map.host}:${e.messaging_server_map.port}`),
                      this.emit("authenticated", {}))
                    : this.emit("authentication_error", {
                        message:
                          "SDK Credentials are invalid.Reason:" + e.message,
                      });
              });
          }
          SendPresence(e) {
            const t = {
              key: e.key,
              channel: e.channel,
              changes: !0,
              status: !0,
            };
            this.Connection.publish(
              "emitter/presence/",
              JSON.stringify(t),
              {},
              () => {
                this.Connection.on("message", (e, t, r) => {});
              }
            );
          }
          SetPresenceEvent(e) {
            "status" == e.event && this.emit("subscribed", e),
              "subscribe" == e.event && this.emit("online", e),
              "unsubscribe" == e.event && this.emit("offline", e);
          }
          SetMessagePacket(e) {
            let t = !1;
            const r = i.a.MapHeaderPacket(e),
              n = i.a.MapFileMessagePacket(e);
            if (
              (r &&
                ((t = !0),
                (this.QueueFiles[e.headerId] = { Header: e, Content: [] }),
                this.SetFileLoadingMessage(e)),
              n)
            ) {
              t = !0;
              const r = this.QueueFiles[e.headerId];
              if (null != r) {
                const t = r.Content;
                (r.Content = t.concat(e.content)),
                  (this.QueueFiles[e.headerId] = Object.assign({}, r)),
                  r.Header.totalPacket == e.packetNo &&
                    this.SetFileMessage(r, e);
              }
            }
            n || r || this.emit("message", e);
          }
          registerPingWorker() {
            window.URL = window.URL || window.webkitURL;
            const e = new Blob(
              [
                "let pingInterval;\n                            onmessage = (res) => {\n                                let data = res.data;\n                                console.log('Message received from main script');\n                                const method = data.method;\n                                if (method === 'format') {\n                                    postMessage({\n                                        data: {\n                                            'res': 'I am a customized result string.',\n                                        }\n                                    });\n                                }\n                                else if (method === 'startPingInterval')\n                                {\n                                    if(!data.interval)\n                                    {\n                                        data.interval =  5000;\n                                    }\n                                    startPingInterval(data.interval);\n                                }\n                                else if(method === 'clearPingInterval')\n                                {\n                                    clearPingInterval();\n                                }\n                                console.log('Posting message back to main script');\n                            }\n                            \n                            function startPingInterval(interval)\n                            {\n                                pingInterval = setInterval(()=>{\n                                    postMessage({\n                                            'sendPing': true\n                                    });\n                                },interval)\n                            }\n                            function  clearPingInterval()\n                            {\n                                if(pingInterval)\n                                {\n                                    clearInterval(pingInterval);\n                                }\n                            } \n                            ",
              ],
              { type: "application/javascript" }
            );
            (this.pingWorker = new Worker(URL.createObjectURL(e))),
              this.pingWorker &&
                ((this.pingWorker.onmessage = (e) => {
                  e &&
                    e.data &&
                    e.data.sendPing && this.Connection &&
                    this.Connection._checkPing();
                }),
                this.pingWorker.postMessage({
                  method: "startPingInterval",
                  interval: 3e3,
                }));
          }
        }
      }.call(this, r(3)));
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(11),
          i = r(12),
          o = r(13);
        function s() {
          return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(e, t) {
          if (s() < t) throw new RangeError("Invalid typed array length");
          return (
            c.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = c.prototype)
              : (null === e && (e = new c(t)), (e.length = t)),
            e
          );
        }
        function c(e, t, r) {
          if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
            return new c(e, t, r);
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return f(this, e);
          }
          return u(this, e, t, r);
        }
        function u(e, t, r, n) {
          if ("number" == typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, r, n) {
                if ((t.byteLength, r < 0 || t.byteLength < r))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(t)
                    : void 0 === n
                    ? new Uint8Array(t, r)
                    : new Uint8Array(t, r, n);
                c.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = c.prototype)
                  : (e = h(e, t));
                return e;
              })(e, t, r, n)
            : "string" == typeof t
            ? (function (e, t, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!c.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var n = 0 | d(t, r),
                  i = (e = a(e, n)).write(t, r);
                i !== n && (e = e.slice(0, i));
                return e;
              })(e, t, r)
            : (function (e, t) {
                if (c.isBuffer(t)) {
                  var r = 0 | p(t.length);
                  return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e;
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" != typeof t.length || (n = t.length) != n
                      ? a(e, 0)
                      : h(e, t);
                  if ("Buffer" === t.type && o(t.data)) return h(e, t.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function l(e) {
          if ("number" != typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function f(e, t) {
          if ((l(t), (e = a(e, t < 0 ? 0 : 0 | p(t))), !c.TYPED_ARRAY_SUPPORT))
            for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
        function h(e, t) {
          var r = t.length < 0 ? 0 : 0 | p(t.length);
          e = a(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function p(e) {
          if (e >= s())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                s().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function d(e, t) {
          if (c.isBuffer(e)) return e.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return D(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return q(e).length;
              default:
                if (n) return D(e).length;
                (t = ("" + t).toLowerCase()), (n = !0);
            }
        }
        function g(e, t, r) {
          var n = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
            return "";
          if ((r >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return P(this, t, r);
              case "utf8":
              case "utf-8":
                return I(this, t, r);
              case "ascii":
                return C(this, t, r);
              case "latin1":
              case "binary":
                return O(this, t, r);
              case "base64":
                return E(this, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return A(this, t, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (n = !0);
            }
        }
        function m(e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function y(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)))
            return 0 === t.length ? -1 : b(e, t, r, n, i);
          if ("number" == typeof t)
            return (
              (t &= 255),
              c.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : b(e, [t], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function b(e, t, r, n, i) {
          var o,
            s = 1,
            a = e.length,
            c = t.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (a /= 2), (c /= 2), (r /= 2);
          }
          function u(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (i) {
            var l = -1;
            for (o = r; o < a; o++)
              if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === c)) return l * s;
              } else -1 !== l && (o -= o - l), (l = -1);
          } else
            for (r + c > a && (r = a - c), o = r; o >= 0; o--) {
              for (var f = !0, h = 0; h < c; h++)
                if (u(e, o + h) !== u(t, h)) {
                  f = !1;
                  break;
                }
              if (f) return o;
            }
          return -1;
        }
        function v(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var o = t.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          n > o / 2 && (n = o / 2);
          for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[r + s] = a;
          }
          return s;
        }
        function _(e, t, r, n) {
          return z(D(t, e.length - r), e, r, n);
        }
        function w(e, t, r, n) {
          return z(
            (function (e) {
              for (var t = [], r = 0; r < e.length; ++r)
                t.push(255 & e.charCodeAt(r));
              return t;
            })(t),
            e,
            r,
            n
          );
        }
        function S(e, t, r, n) {
          return w(e, t, r, n);
        }
        function x(e, t, r, n) {
          return z(q(t), e, r, n);
        }
        function k(e, t, r, n) {
          return z(
            (function (e, t) {
              for (
                var r, n, i, o = [], s = 0;
                s < e.length && !((t -= 2) < 0);
                ++s
              )
                (r = e.charCodeAt(s)),
                  (n = r >> 8),
                  (i = r % 256),
                  o.push(i),
                  o.push(n);
              return o;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function E(e, t, r) {
          return 0 === t && r === e.length
            ? n.fromByteArray(e)
            : n.fromByteArray(e.slice(t, r));
        }
        function I(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], i = t; i < r; ) {
            var o,
              s,
              a,
              c,
              u = e[i],
              l = null,
              f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + f <= r)
              switch (f) {
                case 1:
                  u < 128 && (l = u);
                  break;
                case 2:
                  128 == (192 & (o = e[i + 1])) &&
                    (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                    (l = c);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) >
                        2047 &&
                      (c < 55296 || c > 57343) &&
                      (l = c);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    (a = e[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (c =
                        ((15 & u) << 18) |
                        ((63 & o) << 12) |
                        ((63 & s) << 6) |
                        (63 & a)) > 65535 &&
                      c < 1114112 &&
                      (l = c);
              }
            null === l
              ? ((l = 65533), (f = 1))
              : l > 65535 &&
                ((l -= 65536),
                n.push(((l >>> 10) & 1023) | 55296),
                (l = 56320 | (1023 & l))),
              n.push(l),
              (i += f);
          }
          return (function (e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            var r = "",
              n = 0;
            for (; n < t; )
              r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
            return r;
          })(n);
        }
        (t.Buffer = c),
          (t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return c.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (c.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === e.foo() &&
                        "function" == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = s()),
          (c.poolSize = 8192),
          (c._augment = function (e) {
            return (e.__proto__ = c.prototype), e;
          }),
          (c.from = function (e, t, r) {
            return u(null, e, t, r);
          }),
          c.TYPED_ARRAY_SUPPORT &&
            ((c.prototype.__proto__ = Uint8Array.prototype),
            (c.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              c[Symbol.species] === c &&
              Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (c.alloc = function (e, t, r) {
            return (function (e, t, r, n) {
              return (
                l(t),
                t <= 0
                  ? a(e, t)
                  : void 0 !== r
                  ? "string" == typeof n
                    ? a(e, t).fill(r, n)
                    : a(e, t).fill(r)
                  : a(e, t)
              );
            })(null, e, t, r);
          }),
          (c.allocUnsafe = function (e) {
            return f(null, e);
          }),
          (c.allocUnsafeSlow = function (e) {
            return f(null, e);
          }),
          (c.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (c.compare = function (e, t) {
            if (!c.isBuffer(e) || !c.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
              i < o;
              ++i
            )
              if (e[i] !== t[i]) {
                (r = e[i]), (n = t[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (c.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (c.concat = function (e, t) {
            if (!o(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return c.alloc(0);
            var r;
            if (void 0 === t)
              for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = c.allocUnsafe(t),
              i = 0;
            for (r = 0; r < e.length; ++r) {
              var s = e[r];
              if (!c.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(n, i), (i += s.length);
            }
            return n;
          }),
          (c.byteLength = d),
          (c.prototype._isBuffer = !0),
          (c.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) m(this, t, t + 1);
            return this;
          }),
          (c.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              m(this, t, t + 3), m(this, t + 1, t + 2);
            return this;
          }),
          (c.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this;
          }),
          (c.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? I(this, 0, e)
              : g.apply(this, arguments);
          }),
          (c.prototype.equals = function (e) {
            if (!c.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === c.compare(this, e);
          }),
          (c.prototype.inspect = function () {
            var e = "",
              r = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                this.length > r && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (c.prototype.compare = function (e, t, r, n, i) {
            if (!c.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                s = (r >>>= 0) - (t >>>= 0),
                a = Math.min(o, s),
                u = this.slice(n, i),
                l = e.slice(t, r),
                f = 0;
              f < a;
              ++f
            )
              if (u[f] !== l[f]) {
                (o = u[f]), (s = l[f]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (c.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }),
          (c.prototype.indexOf = function (e, t, r) {
            return y(this, e, t, r, !0);
          }),
          (c.prototype.lastIndexOf = function (e, t, r) {
            return y(this, e, t, r, !1);
          }),
          (c.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
            else if (void 0 === r && "string" == typeof t)
              (n = t), (r = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(r)
                  ? ((r |= 0), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === r || r > i) && (r = i),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
              switch (n) {
                case "hex":
                  return v(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return _(this, e, t, r);
                case "ascii":
                  return w(this, e, t, r);
                case "latin1":
                case "binary":
                  return S(this, e, t, r);
                case "base64":
                  return x(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return k(this, e, t, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (c.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function C(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function O(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function P(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", o = t; o < r; ++o) i += F(e[o]);
          return i;
        }
        function A(e, t, r) {
          for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function j(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function T(e, t, r, n, i, o) {
          if (!c.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function M(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
            e[r + i] =
              (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function R(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
            e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function B(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function L(e, t, r, n, o) {
          return o || B(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
        }
        function U(e, t, r, n, o) {
          return o || B(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
        }
        (c.prototype.slice = function (e, t) {
          var r,
            n = this.length;
          if (
            ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0
              ? (t += n) < 0 && (t = 0)
              : t > n && (t = n),
            t < e && (t = e),
            c.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = c.prototype;
          else {
            var i = t - e;
            r = new c(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + e];
          }
          return r;
        }),
          (c.prototype.readUIntLE = function (e, t, r) {
            (e |= 0), (t |= 0), r || j(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              n += this[e + o] * i;
            return n;
          }),
          (c.prototype.readUIntBE = function (e, t, r) {
            (e |= 0), (t |= 0), r || j(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
          (c.prototype.readUInt8 = function (e, t) {
            return t || j(e, 1, this.length), this[e];
          }),
          (c.prototype.readUInt16LE = function (e, t) {
            return t || j(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (c.prototype.readUInt16BE = function (e, t) {
            return t || j(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (c.prototype.readUInt32LE = function (e, t) {
            return (
              t || j(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (c.prototype.readUInt32BE = function (e, t) {
            return (
              t || j(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (c.prototype.readIntLE = function (e, t, r) {
            (e |= 0), (t |= 0), r || j(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              n += this[e + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
          }),
          (c.prototype.readIntBE = function (e, t, r) {
            (e |= 0), (t |= 0), r || j(e, t, this.length);
            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
              o += this[e + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (c.prototype.readInt8 = function (e, t) {
            return (
              t || j(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (c.prototype.readInt16LE = function (e, t) {
            t || j(e, 2, this.length);
            var r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (c.prototype.readInt16BE = function (e, t) {
            t || j(e, 2, this.length);
            var r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (c.prototype.readInt32LE = function (e, t) {
            return (
              t || j(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (c.prototype.readInt32BE = function (e, t) {
            return (
              t || j(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (c.prototype.readFloatLE = function (e, t) {
            return t || j(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (c.prototype.readFloatBE = function (e, t) {
            return t || j(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (c.prototype.readDoubleLE = function (e, t) {
            return t || j(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (c.prototype.readDoubleBE = function (e, t) {
            return t || j(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (c.prototype.writeUIntLE = function (e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              T(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + r;
          }),
          (c.prototype.writeUIntBE = function (e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) ||
              T(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + r;
          }),
          (c.prototype.writeUInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 1, 255, 0),
              c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (c.prototype.writeUInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : M(this, e, t, !0),
              t + 2
            );
          }),
          (c.prototype.writeUInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : M(this, e, t, !1),
              t + 2
            );
          }),
          (c.prototype.writeUInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : R(this, e, t, !0),
              t + 4
            );
          }),
          (c.prototype.writeUInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : R(this, e, t, !1),
              t + 4
            );
          }),
          (c.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              T(this, e, t, r, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[t] = 255 & e; ++o < r && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + r;
          }),
          (c.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              T(this, e, t, r, i - 1, -i);
            }
            var o = r - 1,
              s = 1,
              a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + r;
          }),
          (c.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 1, 127, -128),
              c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (c.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : M(this, e, t, !0),
              t + 2
            );
          }),
          (c.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : M(this, e, t, !1),
              t + 2
            );
          }),
          (c.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 4, 2147483647, -2147483648),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : R(this, e, t, !0),
              t + 4
            );
          }),
          (c.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || T(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : R(this, e, t, !1),
              t + 4
            );
          }),
          (c.prototype.writeFloatLE = function (e, t, r) {
            return L(this, e, t, !0, r);
          }),
          (c.prototype.writeFloatBE = function (e, t, r) {
            return L(this, e, t, !1, r);
          }),
          (c.prototype.writeDoubleLE = function (e, t, r) {
            return U(this, e, t, !0, r);
          }),
          (c.prototype.writeDoubleBE = function (e, t, r) {
            return U(this, e, t, !1, r);
          }),
          (c.prototype.copy = function (e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r);
            var i,
              o = n - r;
            if (this === e && r < t && t < n)
              for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
            return o;
          }),
          (c.prototype.fill = function (e, t, r, n) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== n && "string" != typeof n)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !c.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= t) return this;
            var o;
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (o = t; o < r; ++o) this[o] = e;
            else {
              var s = c.isBuffer(e) ? e : D(new c(e, n).toString()),
                a = s.length;
              for (o = 0; o < r - t; ++o) this[o + t] = s[o % a];
            }
            return this;
          });
        var N = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function D(e, t) {
          var r;
          t = t || 1 / 0;
          for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function q(e) {
          return n.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(N, "")).length < 2
              )
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function z(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
            t[i + r] = e[i];
          return i;
        }
      }.call(this, r(3)));
    },
    function (e, t, r) {
      (function (t) {
        e.exports = (function e(t, r, n) {
          function i(s, a) {
            if (!r[s]) {
              if (!t[s]) {
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
              }
              var u = (r[s] = { exports: {} });
              t[s][0].call(
                u.exports,
                function (e) {
                  return i(t[s][1][e] || e);
                },
                u,
                u.exports,
                e,
                t,
                r,
                n
              );
            }
            return r[s].exports;
          }
          for (var o = !1, s = 0; s < n.length; s++) i(n[s]);
          return i;
        })(
          {
            1: [
              function (e, r, n) {
                (function (t, n) {
                  "use strict";
                  var i = e("events").EventEmitter,
                    o = e("./store"),
                    s = e("mqtt-packet"),
                    a = e("readable-stream").Writable,
                    c = e("inherits"),
                    u = e("reinterval"),
                    l = e("./validations"),
                    f = e("xtend"),
                    h = e("debug")("mqttjs:client"),
                    p = t
                      ? t.nextTick
                      : function (e) {
                          setTimeout(e, 0);
                        },
                    d =
                      n.setImmediate ||
                      function (e) {
                        p(e);
                      },
                    g = {
                      keepalive: 60,
                      reschedulePings: !0,
                      protocolId: "MQTT",
                      protocolVersion: 4,
                      reconnectPeriod: 1e3,
                      connectTimeout: 3e4,
                      clean: !0,
                      resubscribe: !0,
                    },
                    m = [
                      "ECONNREFUSED",
                      "EADDRINUSE",
                      "ECONNRESET",
                      "ENOTFOUND",
                    ],
                    y = {
                      0: "",
                      1: "Unacceptable protocol version",
                      2: "Identifier rejected",
                      3: "Server unavailable",
                      4: "Bad username or password",
                      5: "Not authorized",
                      16: "No matching subscribers",
                      17: "No subscription existed",
                      128: "Unspecified error",
                      129: "Malformed Packet",
                      130: "Protocol Error",
                      131: "Implementation specific error",
                      132: "Unsupported Protocol Version",
                      133: "Client Identifier not valid",
                      134: "Bad User Name or Password",
                      135: "Not authorized",
                      136: "Server unavailable",
                      137: "Server busy",
                      138: "Banned",
                      139: "Server shutting down",
                      140: "Bad authentication method",
                      141: "Keep Alive timeout",
                      142: "Session taken over",
                      143: "Topic Filter invalid",
                      144: "Topic Name invalid",
                      145: "Packet identifier in use",
                      146: "Packet Identifier not found",
                      147: "Receive Maximum exceeded",
                      148: "Topic Alias invalid",
                      149: "Packet too large",
                      150: "Message rate too high",
                      151: "Quota exceeded",
                      152: "Administrative action",
                      153: "Payload format invalid",
                      154: "Retain not supported",
                      155: "QoS not supported",
                      156: "Use another server",
                      157: "Server moved",
                      158: "Shared Subscriptions not supported",
                      159: "Connection rate exceeded",
                      160: "Maximum connect time",
                      161: "Subscription Identifiers not supported",
                      162: "Wildcard Subscriptions not supported",
                    };
                  function b(e, t, r) {
                    h("sendPacket :: packet: %O", t),
                      h("sendPacket :: emitting `packetsend`"),
                      e.emit("packetsend", t),
                      h("sendPacket :: writing to stream");
                    var n = s.writeToStream(t, e.stream, e.options);
                    h("sendPacket :: writeToStream result %s", n),
                      !n && r
                        ? (h(
                            "sendPacket :: handle events on `drain` once through callback."
                          ),
                          e.stream.once("drain", r))
                        : r && (h("sendPacket :: invoking cb"), r());
                  }
                  function v(e) {
                    e &&
                      (h("flush: queue exists? %b", !!e),
                      Object.keys(e).forEach(function (t) {
                        "function" == typeof e[t].cb &&
                          (e[t].cb(new Error("Connection closed")),
                          delete e[t]);
                      }));
                  }
                  function _(e, t, r, n) {
                    h(
                      "storeAndSend :: store packet with cmd %s to outgoingStore",
                      t.cmd
                    ),
                      e.outgoingStore.put(t, function (i) {
                        if (i) return r && r(i);
                        n(), b(e, t, r);
                      });
                  }
                  function w(e) {
                    h("nop ::", e);
                  }
                  function S(e, t) {
                    var r,
                      n = this;
                    if (!(this instanceof S)) return new S(e, t);
                    for (r in ((this.options = t || {}), g))
                      void 0 === this.options[r]
                        ? (this.options[r] = g[r])
                        : (this.options[r] = t[r]);
                    h("MqttClient :: options.protocol", t.protocol),
                      h(
                        "MqttClient :: options.protocolVersion",
                        t.protocolVersion
                      ),
                      h("MqttClient :: options.username", t.username),
                      h("MqttClient :: options.keepalive", t.keepalive),
                      h(
                        "MqttClient :: options.reconnectPeriod",
                        t.reconnectPeriod
                      ),
                      h(
                        "MqttClient :: options.rejectUnauthorized",
                        t.rejectUnauthorized
                      ),
                      (this.options.clientId =
                        "string" == typeof t.clientId
                          ? t.clientId
                          : "mqttjs_" +
                            Math.random().toString(16).substr(2, 8)),
                      h("MqttClient :: clientId", this.options.clientId),
                      (this.options.customHandleAcks =
                        5 === t.protocolVersion && t.customHandleAcks
                          ? t.customHandleAcks
                          : function () {
                              arguments[3](0);
                            }),
                      (this.streamBuilder = e),
                      (this.outgoingStore = t.outgoingStore || new o()),
                      (this.incomingStore = t.incomingStore || new o()),
                      (this.queueQoSZero =
                        void 0 === t.queueQoSZero || t.queueQoSZero),
                      (this._resubscribeTopics = {}),
                      (this.messageIdToTopic = {}),
                      (this.pingTimer = null),
                      (this.connected = !1),
                      (this.disconnecting = !1),
                      (this.queue = []),
                      (this.connackTimer = null),
                      (this.reconnectTimer = null),
                      (this._storeProcessing = !1),
                      (this._packetIdsDuringStoreProcessing = {}),
                      (this.nextId = Math.max(
                        1,
                        Math.floor(65535 * Math.random())
                      )),
                      (this.outgoing = {}),
                      (this._firstConnection = !0),
                      this.on("connect", function () {
                        var e = this.queue;
                        h("connect :: sending queued packets"),
                          (function t() {
                            var r,
                              i = e.shift();
                            h("deliver :: entry %o", i),
                              i &&
                                ((r = i.packet),
                                h("deliver :: call _sendPacket for %o", r),
                                n._sendPacket(r, function (e) {
                                  i.cb && i.cb(e), t();
                                }));
                          })();
                      }),
                      this.on("close", function () {
                        h("close :: connected set to `false`"),
                          (this.connected = !1),
                          h("close :: clearing connackTimer"),
                          clearTimeout(this.connackTimer),
                          h("close :: clearing ping timer"),
                          null !== n.pingTimer &&
                            (n.pingTimer.clear(), (n.pingTimer = null)),
                          h("close :: calling _setupReconnect"),
                          this._setupReconnect();
                      }),
                      i.call(this),
                      h("MqttClient :: setting up stream"),
                      this._setupStream();
                  }
                  c(S, i),
                    (S.prototype._setupStream = function () {
                      var e,
                        t = this,
                        r = new a(),
                        n = s.parser(this.options),
                        i = null,
                        o = [];
                      function c() {
                        if (o.length) p(u);
                        else {
                          var e = i;
                          (i = null), e();
                        }
                      }
                      function u() {
                        h("work :: getting next packet in queue");
                        var e = o.shift();
                        if (e)
                          h("work :: packet pulled from queue"),
                            t._handlePacket(e, c);
                        else {
                          h("work :: no packets in queue");
                          var r = i;
                          (i = null),
                            h("work :: done flag is %s", !!r),
                            r && r();
                        }
                      }
                      if (
                        (h("_setupStream :: calling method to clear reconnect"),
                        this._clearReconnect(),
                        h(
                          "_setupStream :: using streamBuilder provided to client to create stream"
                        ),
                        (this.stream = this.streamBuilder(this)),
                        n.on("packet", function (e) {
                          h("parser :: on packet push to packets array."),
                            o.push(e);
                        }),
                        (r._write = function (e, t, r) {
                          (i = r),
                            h("writable stream :: parsing buffer"),
                            n.parse(e),
                            u();
                        }),
                        h("_setupStream :: pipe stream to writable stream"),
                        this.stream.pipe(r),
                        this.stream.on("error", function (e) {
                          h("streamErrorHandler :: error", e.message),
                            m.includes(e.code)
                              ? (h("streamErrorHandler :: emitting error"),
                                t.emit("error", e))
                              : w(e);
                        }),
                        this.stream.on("close", function () {
                          var e;
                          h("(%s)stream :: on close", t.options.clientId),
                            (e = t.outgoing) &&
                              (h(
                                "flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"
                              ),
                              Object.keys(e).forEach(function (t) {
                                e[t].volatile &&
                                  "function" == typeof e[t].cb &&
                                  (e[t].cb(new Error("Connection closed")),
                                  delete e[t]);
                              })),
                            h("stream: emit close to MqttClient"),
                            t.emit("close");
                        }),
                        h("_setupStream: sending packet `connect`"),
                        ((e = Object.create(this.options)).cmd = "connect"),
                        b(this, e),
                        n.on("error", this.emit.bind(this, "error")),
                        this.options.properties)
                      ) {
                        if (
                          !this.options.properties.authenticationMethod &&
                          this.options.properties.authenticationData
                        )
                          return (
                            t.end(() =>
                              this.emit(
                                "error",
                                new Error("Packet has no Authentication Method")
                              )
                            ),
                            this
                          );
                        this.options.properties.authenticationMethod &&
                          this.options.authPacket &&
                          "object" == typeof this.options.authPacket &&
                          b(
                            this,
                            f(
                              { cmd: "auth", reasonCode: 0 },
                              this.options.authPacket
                            )
                          );
                      }
                      this.stream.setMaxListeners(1e3),
                        clearTimeout(this.connackTimer),
                        (this.connackTimer = setTimeout(function () {
                          h(
                            "!!connectTimeout hit!! Calling _cleanUp with force `true`"
                          ),
                            t._cleanUp(!0);
                        }, this.options.connectTimeout));
                    }),
                    (S.prototype._handlePacket = function (e, t) {
                      var r = this.options;
                      if (
                        5 === r.protocolVersion &&
                        r.properties &&
                        r.properties.maximumPacketSize &&
                        r.properties.maximumPacketSize < e.length
                      )
                        return (
                          this.emit(
                            "error",
                            new Error("exceeding packets size " + e.cmd)
                          ),
                          this.end({
                            reasonCode: 149,
                            properties: {
                              reasonString: "Maximum packet size was exceeded",
                            },
                          }),
                          this
                        );
                      switch (
                        (h("_handlePacket :: emitting packetreceive"),
                        this.emit("packetreceive", e),
                        e.cmd)
                      ) {
                        case "publish":
                          this._handlePublish(e, t);
                          break;
                        case "puback":
                        case "pubrec":
                        case "pubcomp":
                        case "suback":
                        case "unsuback":
                          this._handleAck(e), t();
                          break;
                        case "pubrel":
                          this._handlePubrel(e, t);
                          break;
                        case "connack":
                          this._handleConnack(e), t();
                          break;
                        case "pingresp":
                          this._handlePingresp(e), t();
                          break;
                        case "disconnect":
                          this._handleDisconnect(e), t();
                      }
                    }),
                    (S.prototype._checkDisconnecting = function (e) {
                      return (
                        this.disconnecting &&
                          (e
                            ? e(new Error("client disconnecting"))
                            : this.emit(
                                "error",
                                new Error("client disconnecting")
                              )),
                        this.disconnecting
                      );
                    }),
                    (S.prototype.publish = function (e, t, r, n) {
                      var i;
                      h("publish :: message `%s` to topic `%s`", t, e);
                      var o = this.options;
                      if (
                        ("function" == typeof r && ((n = r), (r = null)),
                        (r = f({ qos: 0, retain: !1, dup: !1 }, r)),
                        this._checkDisconnecting(n))
                      )
                        return this;
                      switch (
                        ((i = {
                          cmd: "publish",
                          topic: e,
                          payload: t,
                          qos: r.qos,
                          retain: r.retain,
                          messageId: this._nextId(),
                          dup: r.dup,
                        }),
                        5 === o.protocolVersion &&
                          ((i.properties = r.properties),
                          ((!o.properties &&
                            i.properties &&
                            i.properties.topicAlias) ||
                            (r.properties &&
                              o.properties &&
                              ((r.properties.topicAlias &&
                                o.properties.topicAliasMaximum &&
                                r.properties.topicAlias >
                                  o.properties.topicAliasMaximum) ||
                                (!o.properties.topicAliasMaximum &&
                                  r.properties.topicAlias)))) &&
                            delete i.properties.topicAlias),
                        h("publish :: qos", r.qos),
                        r.qos)
                      ) {
                        case 1:
                        case 2:
                          (this.outgoing[i.messageId] = {
                            volatile: !1,
                            cb: n || w,
                          }),
                            this._storeProcessing
                              ? (h("_storeProcessing enabled"),
                                (this._packetIdsDuringStoreProcessing[
                                  i.messageId
                                ] = !1),
                                this._storePacket(i, void 0, r.cbStorePut))
                              : (h("MqttClient:publish: packet cmd: %s", i.cmd),
                                this._sendPacket(i, void 0, r.cbStorePut));
                          break;
                        default:
                          this._storeProcessing
                            ? (h("_storeProcessing enabled"),
                              this._storePacket(i, n, r.cbStorePut))
                            : (h("MqttClient:publish: packet cmd: %s", i.cmd),
                              this._sendPacket(i, n, r.cbStorePut));
                      }
                      return this;
                    }),
                    (S.prototype.subscribe = function () {
                      for (
                        var e, t = new Array(arguments.length), r = 0;
                        r < arguments.length;
                        r++
                      )
                        t[r] = arguments[r];
                      var n,
                        i = [],
                        o = t.shift(),
                        s = o.resubscribe,
                        a = t.pop() || w,
                        c = t.pop(),
                        u = this,
                        p = this.options.protocolVersion;
                      if (
                        (delete o.resubscribe,
                        "string" == typeof o && (o = [o]),
                        "function" != typeof a && ((c = a), (a = w)),
                        null !== (n = l.validateTopics(o)))
                      )
                        return d(a, new Error("Invalid topic " + n)), this;
                      if (this._checkDisconnecting(a))
                        return h("subscribe: discconecting true"), this;
                      var g = { qos: 0 };
                      if (
                        (5 === p && ((g.nl = !1), (g.rap = !1), (g.rh = 0)),
                        (c = f(g, c)),
                        Array.isArray(o)
                          ? o.forEach(function (e) {
                              if (
                                (h("subscribe: array topic %s", e),
                                !u._resubscribeTopics.hasOwnProperty(e) ||
                                  u._resubscribeTopics[e].qos < c.qos ||
                                  s)
                              ) {
                                var t = { topic: e, qos: c.qos };
                                5 === p &&
                                  ((t.nl = c.nl),
                                  (t.rap = c.rap),
                                  (t.rh = c.rh),
                                  (t.properties = c.properties)),
                                  h(
                                    "subscribe: pushing topic `%s` and qos `%s` to subs list",
                                    t.topic,
                                    t.qos
                                  ),
                                  i.push(t);
                              }
                            })
                          : Object.keys(o).forEach(function (e) {
                              if (
                                (h("subscribe: object topic %s", e),
                                !u._resubscribeTopics.hasOwnProperty(e) ||
                                  u._resubscribeTopics[e].qos < o[e].qos ||
                                  s)
                              ) {
                                var t = { topic: e, qos: o[e].qos };
                                5 === p &&
                                  ((t.nl = o[e].nl),
                                  (t.rap = o[e].rap),
                                  (t.rh = o[e].rh),
                                  (t.properties = c.properties)),
                                  h("subscribe: pushing `%s` to subs list", t),
                                  i.push(t);
                              }
                            }),
                        (e = {
                          cmd: "subscribe",
                          subscriptions: i,
                          qos: 1,
                          retain: !1,
                          dup: !1,
                          messageId: this._nextId(),
                        }),
                        c.properties && (e.properties = c.properties),
                        i.length)
                      ) {
                        if (this.options.resubscribe) {
                          h("subscribe :: resubscribe true");
                          var m = [];
                          i.forEach(function (e) {
                            if (u.options.reconnectPeriod > 0) {
                              var t = { qos: e.qos };
                              5 === p &&
                                ((t.nl = e.nl || !1),
                                (t.rap = e.rap || !1),
                                (t.rh = e.rh || 0),
                                (t.properties = e.properties)),
                                (u._resubscribeTopics[e.topic] = t),
                                m.push(e.topic);
                            }
                          }),
                            (u.messageIdToTopic[e.messageId] = m);
                        }
                        return (
                          (this.outgoing[e.messageId] = {
                            volatile: !0,
                            cb: function (e, t) {
                              if (!e)
                                for (
                                  var r = t.granted, n = 0;
                                  n < r.length;
                                  n += 1
                                )
                                  i[n].qos = r[n];
                              a(e, i);
                            },
                          }),
                          h("subscribe :: call _sendPacket"),
                          this._sendPacket(e),
                          this
                        );
                      }
                      a(null, []);
                    }),
                    (S.prototype.unsubscribe = function () {
                      for (
                        var e = {
                            cmd: "unsubscribe",
                            qos: 1,
                            messageId: this._nextId(),
                          },
                          t = this,
                          r = new Array(arguments.length),
                          n = 0;
                        n < arguments.length;
                        n++
                      )
                        r[n] = arguments[n];
                      var i = r.shift(),
                        o = r.pop() || w,
                        s = r.pop();
                      return (
                        "string" == typeof i && (i = [i]),
                        "function" != typeof o && ((s = o), (o = w)),
                        this._checkDisconnecting(o) ||
                          ("string" == typeof i
                            ? (e.unsubscriptions = [i])
                            : Array.isArray(i) && (e.unsubscriptions = i),
                          this.options.resubscribe &&
                            e.unsubscriptions.forEach(function (e) {
                              delete t._resubscribeTopics[e];
                            }),
                          "object" == typeof s &&
                            s.properties &&
                            (e.properties = s.properties),
                          (this.outgoing[e.messageId] = {
                            volatile: !0,
                            cb: o,
                          }),
                          h("unsubscribe: call _sendPacket"),
                          this._sendPacket(e)),
                        this
                      );
                    }),
                    (S.prototype.end = function (e, t, r) {
                      var n = this;
                      function i() {
                        h(
                          "end :: closeStores: closing incoming and outgoing stores"
                        ),
                          (n.disconnected = !0),
                          n.incomingStore.close(function (e) {
                            n.outgoingStore.close(function (t) {
                              if (
                                (h("end :: closeStores: emitting end"),
                                n.emit("end"),
                                r)
                              ) {
                                let n = e || t;
                                h(
                                  "end :: closeStores: invoking callback with args"
                                ),
                                  r(n);
                              }
                            });
                          }),
                          n._deferredReconnect && n._deferredReconnect();
                      }
                      function o() {
                        h(
                          "end :: (%s) :: finish :: calling _cleanUp with force %s",
                          n.options.clientId,
                          e
                        ),
                          n._cleanUp(
                            e,
                            () => {
                              h(
                                "end :: finish :: calling process.nextTick on closeStores"
                              ),
                                p(i.bind(n));
                            },
                            t
                          );
                      }
                      return (
                        h("end :: (%s)", this.options.clientId),
                        (null != e && "boolean" == typeof e) ||
                          ((r = t || w),
                          (t = e),
                          (e = !1),
                          "object" != typeof t &&
                            ((r = t),
                            (t = null),
                            "function" != typeof r && (r = w))),
                        "object" != typeof t && ((r = t), (t = null)),
                        h("end :: cb? %s", !!r),
                        (r = r || w),
                        this.disconnecting
                          ? (r(), this)
                          : (this._clearReconnect(),
                            (this.disconnecting = !0),
                            !e && Object.keys(this.outgoing).length > 0
                              ? (h(
                                  "end :: (%s) :: calling finish in 10ms once outgoing is empty",
                                  n.options.clientId
                                ),
                                this.once(
                                  "outgoingEmpty",
                                  setTimeout.bind(null, o, 10)
                                ))
                              : (h(
                                  "end :: (%s) :: immediately calling finish",
                                  n.options.clientId
                                ),
                                o()),
                            this)
                      );
                    }),
                    (S.prototype.removeOutgoingMessage = function (e) {
                      var t = this.outgoing[e] ? this.outgoing[e].cb : null;
                      return (
                        delete this.outgoing[e],
                        this.outgoingStore.del({ messageId: e }, function () {
                          t(new Error("Message removed"));
                        }),
                        this
                      );
                    }),
                    (S.prototype.reconnect = function (e) {
                      h("client reconnect");
                      var t = this,
                        r = function () {
                          e
                            ? ((t.options.incomingStore = e.incomingStore),
                              (t.options.outgoingStore = e.outgoingStore))
                            : ((t.options.incomingStore = null),
                              (t.options.outgoingStore = null)),
                            (t.incomingStore =
                              t.options.incomingStore || new o()),
                            (t.outgoingStore =
                              t.options.outgoingStore || new o()),
                            (t.disconnecting = !1),
                            (t.disconnected = !1),
                            (t._deferredReconnect = null),
                            t._reconnect();
                        };
                      return (
                        this.disconnecting && !this.disconnected
                          ? (this._deferredReconnect = r)
                          : r(),
                        this
                      );
                    }),
                    (S.prototype._reconnect = function () {
                      h("_reconnect: emitting reconnect to client"),
                        this.emit("reconnect"),
                        h("_reconnect: calling _setupStream"),
                        this._setupStream();
                    }),
                    (S.prototype._setupReconnect = function () {
                      var e = this;
                      !e.disconnecting &&
                      !e.reconnectTimer &&
                      e.options.reconnectPeriod > 0
                        ? (this.reconnecting ||
                            (h("_setupReconnect :: emit `offline` state"),
                            this.emit("offline"),
                            h(
                              "_setupReconnect :: set `reconnecting` to `true`"
                            ),
                            (this.reconnecting = !0)),
                          h(
                            "_setupReconnect :: setting reconnectTimer for %d ms",
                            e.options.reconnectPeriod
                          ),
                          (e.reconnectTimer = setInterval(function () {
                            h("reconnectTimer :: reconnect triggered!"),
                              e._reconnect();
                          }, e.options.reconnectPeriod)))
                        : h("_setupReconnect :: doing nothing...");
                    }),
                    (S.prototype._clearReconnect = function () {
                      h("_clearReconnect : clearing reconnect timer"),
                        this.reconnectTimer &&
                          (clearInterval(this.reconnectTimer),
                          (this.reconnectTimer = null));
                    }),
                    (S.prototype._cleanUp = function (e, t) {
                      var r = arguments[2];
                      if (
                        (t &&
                          (h(
                            "_cleanUp :: done callback provided for on stream close"
                          ),
                          this.stream.on("close", t)),
                        h("_cleanUp :: forced? %s", e),
                        e)
                      )
                        0 === this.options.reconnectPeriod &&
                          this.options.clean &&
                          v(this.outgoing),
                          h(
                            "_cleanUp :: (%s) :: destroying stream",
                            this.options.clientId
                          ),
                          this.stream.destroy();
                      else {
                        var n = f({ cmd: "disconnect" }, r);
                        h(
                          "_cleanUp :: (%s) :: call _sendPacket with disconnect packet",
                          this.options.clientId
                        ),
                          this._sendPacket(
                            n,
                            d.bind(null, this.stream.end.bind(this.stream))
                          );
                      }
                      this.disconnecting ||
                        (h(
                          "_cleanUp :: client not disconnecting. Clearing and resetting reconnect."
                        ),
                        this._clearReconnect(),
                        this._setupReconnect()),
                        null !== this.pingTimer &&
                          (h("_cleanUp :: clearing pingTimer"),
                          this.pingTimer.clear(),
                          (this.pingTimer = null)),
                        t &&
                          !this.connected &&
                          (h(
                            "_cleanUp :: (%s) :: removing stream `done` callback `close` listener",
                            this.options.clientId
                          ),
                          this.stream.removeListener("close", t),
                          t());
                    }),
                    (S.prototype._sendPacket = function (e, t, r) {
                      if (
                        (h(
                          "_sendPacket :: (%s) ::  start",
                          this.options.clientId
                        ),
                        (r = r || w),
                        !this.connected)
                      )
                        return (
                          h(
                            "_sendPacket :: client not connected. Storing packet offline."
                          ),
                          void this._storePacket(e, t, r)
                        );
                      switch ((this._shiftPingInterval(), e.cmd)) {
                        case "publish":
                          break;
                        case "pubrel":
                          return void _(this, e, t, r);
                        default:
                          return void b(this, e, t);
                      }
                      switch (e.qos) {
                        case 2:
                        case 1:
                          _(this, e, t, r);
                          break;
                        case 0:
                        default:
                          b(this, e, t);
                      }
                      h("_sendPacket :: (%s) ::  end", this.options.clientId);
                    }),
                    (S.prototype._storePacket = function (e, t, r) {
                      h("_storePacket :: packet: %o", e),
                        h("_storePacket :: cb? %s", !!t),
                        (r = r || w),
                        (0 === (e.qos || 0) && this.queueQoSZero) ||
                        "publish" !== e.cmd
                          ? this.queue.push({ packet: e, cb: t })
                          : e.qos > 0
                          ? ((t = this.outgoing[e.messageId]
                              ? this.outgoing[e.messageId].cb
                              : null),
                            this.outgoingStore.put(e, function (e) {
                              if (e) return t && t(e);
                              r();
                            }))
                          : t && t(new Error("No connection to broker"));
                    }),
                    (S.prototype._setupPingTimer = function () {
                      h(
                        "_setupPingTimer :: keepalive %d (seconds)",
                        this.options.keepalive
                      );
                      var e = this;
                      !this.pingTimer &&
                        this.options.keepalive &&
                        ((this.pingResp = !0),
                        (this.pingTimer = u(function () {
                          e._checkPing(),
                            (this.options.keepalive = (
                              this.options.keepalive + Math.random()
                            ).toFixed(2));
                        }, 1e3 * this.options.keepalive)));
                    }),
                    (S.prototype._shiftPingInterval = function () {
                      this.pingTimer &&
                        this.options.keepalive &&
                        this.options.reschedulePings &&
                        this.pingTimer.reschedule(1e3 * this.options.keepalive);
                    }),
                    (S.prototype._checkPing = function () {
                      h("_checkPing :: checking ping..."),
                        this.pingResp
                          ? (h(
                              "_checkPing :: ping response received. Clearing flag and sending `pingreq`"
                            ),
                            (this.pingResp = !1),
                            this._sendPacket({ cmd: "pingreq" }))
                          : (h(
                              "_checkPing :: calling _cleanUp with force true"
                            ),
                            this._cleanUp(!0));
                    }),
                    (S.prototype._handlePingresp = function () {
                      this.pingResp = !0;
                    }),
                    (S.prototype._handleConnack = function (e) {
                      h("_handleConnack");
                      var t = this.options,
                        r =
                          5 === t.protocolVersion ? e.reasonCode : e.returnCode;
                      if (
                        (clearTimeout(this.connackTimer),
                        e.properties &&
                          (e.properties.topicAliasMaximum &&
                            (t.properties || (t.properties = {}),
                            (t.properties.topicAliasMaximum =
                              e.properties.topicAliasMaximum)),
                          e.properties.serverKeepAlive &&
                            t.keepalive &&
                            ((t.keepalive = e.properties.serverKeepAlive),
                            this._shiftPingInterval()),
                          e.properties.maximumPacketSize &&
                            (t.properties || (t.properties = {}),
                            (t.properties.maximumPacketSize =
                              e.properties.maximumPacketSize))),
                        0 === r)
                      )
                        (this.reconnecting = !1), this._onConnect(e);
                      else if (r > 0) {
                        var n = new Error("Connection refused: " + y[r]);
                        (n.code = r), this.emit("error", n);
                      }
                    }),
                    (S.prototype._handlePublish = function (e, t) {
                      h("_handlePublish: packet %o", e),
                        (t = void 0 !== t ? t : w);
                      var r = e.topic.toString(),
                        n = e.payload,
                        i = e.qos,
                        o = e.messageId,
                        s = this,
                        a = this.options,
                        c = [0, 16, 128, 131, 135, 144, 145, 151, 153];
                      switch ((h("_handlePublish: qos %d", i), i)) {
                        case 2:
                          a.customHandleAcks(r, n, e, function (r, n) {
                            return (
                              r instanceof Error || ((n = r), (r = null)),
                              r
                                ? s.emit("error", r)
                                : -1 === c.indexOf(n)
                                ? s.emit(
                                    "error",
                                    new Error("Wrong reason code for pubrec")
                                  )
                                : void (n
                                    ? s._sendPacket(
                                        {
                                          cmd: "pubrec",
                                          messageId: o,
                                          reasonCode: n,
                                        },
                                        t
                                      )
                                    : s.incomingStore.put(e, function () {
                                        s._sendPacket(
                                          { cmd: "pubrec", messageId: o },
                                          t
                                        );
                                      }))
                            );
                          });
                          break;
                        case 1:
                          a.customHandleAcks(r, n, e, function (i, a) {
                            return (
                              i instanceof Error || ((a = i), (i = null)),
                              i
                                ? s.emit("error", i)
                                : -1 === c.indexOf(a)
                                ? s.emit(
                                    "error",
                                    new Error("Wrong reason code for puback")
                                  )
                                : (a || s.emit("message", r, n, e),
                                  void s.handleMessage(e, function (e) {
                                    if (e) return t && t(e);
                                    s._sendPacket(
                                      {
                                        cmd: "puback",
                                        messageId: o,
                                        reasonCode: a,
                                      },
                                      t
                                    );
                                  }))
                            );
                          });
                          break;
                        case 0:
                          this.emit("message", r, n, e),
                            this.handleMessage(e, t);
                          break;
                        default:
                          h("_handlePublish: unknown QoS. Doing nothing.");
                      }
                    }),
                    (S.prototype.handleMessage = function (e, t) {
                      t();
                    }),
                    (S.prototype._handleAck = function (e) {
                      var t,
                        r = e.messageId,
                        n = e.cmd,
                        i = null,
                        o = this.outgoing[r] ? this.outgoing[r].cb : null,
                        s = this;
                      if (o) {
                        switch ((h("_handleAck :: packet type", n), n)) {
                          case "pubcomp":
                          case "puback":
                            var a = e.reasonCode;
                            a &&
                              a > 0 &&
                              16 !== a &&
                              (((t = new Error("Publish error: " + y[a])).code =
                                a),
                              o(t, e)),
                              delete this.outgoing[r],
                              this.outgoingStore.del(e, o);
                            break;
                          case "pubrec":
                            i = { cmd: "pubrel", qos: 2, messageId: r };
                            var c = e.reasonCode;
                            c && c > 0 && 16 !== c
                              ? (((t = new Error(
                                  "Publish error: " + y[c]
                                )).code = c),
                                o(t, e))
                              : this._sendPacket(i);
                            break;
                          case "suback":
                            delete this.outgoing[r];
                            for (var u = 0; u < e.granted.length; u++)
                              if (0 != (128 & e.granted[u])) {
                                var l = this.messageIdToTopic[r];
                                l &&
                                  l.forEach(function (e) {
                                    delete s._resubscribeTopics[e];
                                  });
                              }
                            o(null, e);
                            break;
                          case "unsuback":
                            delete this.outgoing[r], o(null);
                            break;
                          default:
                            s.emit(
                              "error",
                              new Error("unrecognized packet type")
                            );
                        }
                        this.disconnecting &&
                          0 === Object.keys(this.outgoing).length &&
                          this.emit("outgoingEmpty");
                      } else
                        h(
                          "_handleAck :: Server sent an ack in error. Ignoring."
                        );
                    }),
                    (S.prototype._handlePubrel = function (e, t) {
                      h("handling pubrel packet"), (t = void 0 !== t ? t : w);
                      var r = e.messageId,
                        n = this,
                        i = { cmd: "pubcomp", messageId: r };
                      n.incomingStore.get(e, function (e, r) {
                        e
                          ? n._sendPacket(i, t)
                          : (n.emit("message", r.topic, r.payload, r),
                            n.handleMessage(r, function (e) {
                              if (e) return t(e);
                              n.incomingStore.del(r, w), n._sendPacket(i, t);
                            }));
                      });
                    }),
                    (S.prototype._handleDisconnect = function (e) {
                      this.emit("disconnect", e);
                    }),
                    (S.prototype._nextId = function () {
                      var e = this.nextId++;
                      return 65536 === this.nextId && (this.nextId = 1), e;
                    }),
                    (S.prototype.getLastMessageId = function () {
                      return 1 === this.nextId ? 65535 : this.nextId - 1;
                    }),
                    (S.prototype._resubscribe = function (e) {
                      h("_resubscribe");
                      var t = Object.keys(this._resubscribeTopics);
                      if (
                        !this._firstConnection &&
                        (this.options.clean ||
                          (5 === this.options.protocolVersion &&
                            !e.sessionPresent)) &&
                        t.length > 0
                      )
                        if (this.options.resubscribe)
                          if (5 === this.options.protocolVersion) {
                            h("_resubscribe: protocolVersion 5");
                            for (var r = 0; r < t.length; r++) {
                              var n = {};
                              (n[t[r]] = this._resubscribeTopics[t[r]]),
                                (n.resubscribe = !0),
                                this.subscribe(n, {
                                  properties: n[t[r]].properties,
                                });
                            }
                          } else
                            (this._resubscribeTopics.resubscribe = !0),
                              this.subscribe(this._resubscribeTopics);
                        else this._resubscribeTopics = {};
                      this._firstConnection = !1;
                    }),
                    (S.prototype._onConnect = function (e) {
                      if (this.disconnected) this.emit("connect", e);
                      else {
                        var t = this;
                        this._setupPingTimer(),
                          this._resubscribe(e),
                          (this.connected = !0),
                          (function r() {
                            var n = t.outgoingStore.createStream();
                            function i() {
                              (t._storeProcessing = !1),
                                (t._packetIdsDuringStoreProcessing = {});
                            }
                            function o() {
                              n.destroy(), (n = null), i();
                            }
                            t.once("close", o),
                              n.on("error", function (e) {
                                i(),
                                  t.removeListener("close", o),
                                  t.emit("error", e);
                              }),
                              n.on("end", function () {
                                var n = !0;
                                for (var s in t._packetIdsDuringStoreProcessing)
                                  if (!t._packetIdsDuringStoreProcessing[s]) {
                                    n = !1;
                                    break;
                                  }
                                n
                                  ? (i(),
                                    t.removeListener("close", o),
                                    t.emit("connect", e))
                                  : r();
                              }),
                              (function e() {
                                if (n) {
                                  t._storeProcessing = !0;
                                  var r,
                                    i = n.read(1);
                                  i
                                    ? t._packetIdsDuringStoreProcessing[
                                        i.messageId
                                      ]
                                      ? e()
                                      : t.disconnecting || t.reconnectTimer
                                      ? n.destroy && n.destroy()
                                      : ((r = t.outgoing[i.messageId]
                                          ? t.outgoing[i.messageId].cb
                                          : null),
                                        (t.outgoing[i.messageId] = {
                                          volatile: !1,
                                          cb: function (t, n) {
                                            r && r(t, n), e();
                                          },
                                        }),
                                        (t._packetIdsDuringStoreProcessing[
                                          i.messageId
                                        ] = !0),
                                        t._sendPacket(i))
                                    : n.once("readable", e);
                                }
                              })();
                          })();
                      }
                    }),
                    (r.exports = S);
                }.call(
                  this,
                  e("_process"),
                  void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {
                "./store": 7,
                "./validations": 8,
                _process: 101,
                debug: 17,
                events: 83,
                inherits: 88,
                "mqtt-packet": 93,
                "readable-stream": 115,
                reinterval: 116,
                xtend: 140,
              },
            ],
            2: [
              function (e, t, r) {
                (function (r) {
                  "use strict";
                  var n,
                    i,
                    o,
                    s = e("readable-stream").Transform,
                    a = e("duplexify"),
                    c = e("base64-js"),
                    u = !1;
                  t.exports = function (e, t) {
                    if (((t.hostname = t.hostname || t.host), !t.hostname))
                      throw new Error(
                        "Could not determine host. Specify host manually."
                      );
                    var l =
                      "MQIsdp" === t.protocolId && 3 === t.protocolVersion
                        ? "mqttv3.1"
                        : "mqtt";
                    !(function (e) {
                      e.hostname || (e.hostname = "localhost"),
                        e.path || (e.path = "/"),
                        e.wsOptions || (e.wsOptions = {});
                    })(t);
                    var f = (function (e, t) {
                      var r = "alis" === e.protocol ? "wss" : "ws",
                        n = r + "://" + e.hostname + e.path;
                      return (
                        e.port &&
                          80 !== e.port &&
                          443 !== e.port &&
                          (n = r + "://" + e.hostname + ":" + e.port + e.path),
                        "function" == typeof e.transformWsUrl &&
                          (n = e.transformWsUrl(n, e, t)),
                        n
                      );
                    })(t, e);
                    return (
                      (n = t.my).connectSocket({ url: f, protocols: l }),
                      (i = (function () {
                        var e = new s();
                        return (
                          (e._write = function (e, t, r) {
                            n.sendSocketMessage({
                              data: e.buffer,
                              success: function () {
                                r();
                              },
                              fail: function () {
                                r(new Error());
                              },
                            });
                          }),
                          (e._flush = function (e) {
                            n.closeSocket({
                              success: function () {
                                e();
                              },
                            });
                          }),
                          e
                        );
                      })()),
                      (o = a.obj()),
                      u ||
                        ((u = !0),
                        n.onSocketOpen(function () {
                          o.setReadable(i), o.setWritable(i), o.emit("connect");
                        }),
                        n.onSocketMessage(function (e) {
                          if ("string" == typeof e.data) {
                            var t = c.toByteArray(e.data),
                              n = r.from(t);
                            i.push(n);
                          } else {
                            var o = new FileReader();
                            o.addEventListener("load", function () {
                              var e = o.result;
                              (e =
                                e instanceof ArrayBuffer
                                  ? r.from(e)
                                  : r.from(e, "utf8")),
                                i.push(e);
                            }),
                              o.readAsArrayBuffer(e.data);
                          }
                        }),
                        n.onSocketClose(function () {
                          o.end(), o.destroy();
                        }),
                        n.onSocketError(function (e) {
                          o.destroy(e);
                        })),
                      o
                    );
                  };
                }.call(this, e("buffer").Buffer));
              },
              {
                "base64-js": 10,
                buffer: 13,
                duplexify: 19,
                "readable-stream": 115,
              },
            ],
            3: [
              function (e, t, r) {
                "use strict";
                var n = e("net"),
                  i = e("debug")("mqttjs:tcp");
                t.exports = function (e, t) {
                  var r, o;
                  return (
                    (t.port = t.port || 1883),
                    (t.hostname = t.hostname || t.host || "localhost"),
                    (r = t.port),
                    (o = t.hostname),
                    i("port %d and host %s", r, o),
                    n.createConnection(r, o)
                  );
                };
              },
              { debug: 17, net: 12 },
            ],
            4: [
              function (e, t, r) {
                "use strict";
                var n = e("tls"),
                  i = e("debug")("mqttjs:tls");
                t.exports = function (e, t) {
                  var r;
                  function o(n) {
                    t.rejectUnauthorized && e.emit("error", n), r.end();
                  }
                  return (
                    (t.port = t.port || 8883),
                    (t.host = t.hostname || t.host || "localhost"),
                    (t.servername = t.host),
                    (t.rejectUnauthorized = !1 !== t.rejectUnauthorized),
                    delete t.path,
                    i(
                      "port %d host %s rejectUnauthorized %b",
                      t.port,
                      t.host,
                      t.rejectUnauthorized
                    ),
                    (r = n.connect(t)).on("secureConnect", function () {
                      t.rejectUnauthorized && !r.authorized
                        ? r.emit("error", new Error("TLS not authorized"))
                        : r.removeListener("error", o);
                    }),
                    r.on("error", o),
                    r
                  );
                };
              },
              { debug: 17, tls: 12 },
            ],
            5: [
              function (e, t, n) {
                (function (n) {
                  "use strict";
                  const i = e("ws"),
                    o = e("debug")("mqttjs:ws"),
                    s = e("duplexify"),
                    a = e("safe-buffer").Buffer,
                    c = e("url"),
                    u = e("readable-stream").Transform;
                  let l = [
                    "rejectUnauthorized",
                    "ca",
                    "cert",
                    "key",
                    "pfx",
                    "passphrase",
                  ];
                  const f =
                    (void 0 !== n && "browser" === n.title) ||
                    "function" == typeof r;
                  function h(e, t) {
                    let r =
                      e.protocol + "://" + e.hostname + ":" + e.port + e.path;
                    return (
                      "function" == typeof e.transformWsUrl &&
                        (r = e.transformWsUrl(r, e, t)),
                      r
                    );
                  }
                  function p(e) {
                    let t = e;
                    return (
                      e.hostname || (t.hostname = "localhost"),
                      e.port ||
                        ("wss" === e.protocol ? (t.port = 443) : (t.port = 80)),
                      e.path || (t.path = "/"),
                      e.wsOptions || (t.wsOptions = {}),
                      f ||
                        "wss" !== e.protocol ||
                        l.forEach(function (r) {
                          e.hasOwnProperty(r) &&
                            !e.wsOptions.hasOwnProperty(r) &&
                            (t.wsOptions[r] = e[r]);
                        }),
                      t
                    );
                  }
                  t.exports = f
                    ? function (e, t) {
                        let r;
                        o("browserStreamBuilder");
                        const n =
                            (function (e) {
                              let t = p(e);
                              if (
                                (t.hostname || (t.hostname = t.host),
                                !t.hostname)
                              ) {
                                if ("undefined" == typeof document)
                                  throw new Error(
                                    "Could not determine host. Specify host manually."
                                  );
                                const e = c.parse(document.URL);
                                (t.hostname = e.hostname),
                                  t.port || (t.port = e.port);
                              }
                              return (
                                void 0 === t.objectMode &&
                                  (t.objectMode = !(
                                    !0 === t.binary || void 0 === t.binary
                                  )),
                                t
                              );
                            })(t).browserBufferSize || 524288,
                          i = t.browserBufferTimeout || 1e3,
                          l = !t.objectMode;
                        let f = (function (e, t) {
                            const r =
                              "MQIsdp" === t.protocolId &&
                              3 === t.protocolVersion
                                ? "mqttv3.1"
                                : "mqtt";
                            let n = h(t, e),
                              i = new WebSocket(n, [r]);
                            return (i.binaryType = "arraybuffer"), i;
                          })(e, t),
                          d = (function (e, t, r) {
                            let n = new u({ objectModeMode: e.objectMode });
                            return (n._write = t), (n._flush = r), n;
                          })(
                            t,
                            function e(t, r, o) {
                              f.bufferedAmount > n && setTimeout(e, i, t, r, o),
                                l &&
                                  "string" == typeof t &&
                                  (t = a.from(t, "utf8"));
                              try {
                                f.send(t);
                              } catch (e) {
                                return o(e);
                              }
                              o();
                            },
                            function (e) {
                              f.close(), e();
                            }
                          );
                        t.objectMode || (d._writev = _),
                          d.on("close", () => {
                            f.close();
                          });
                        const g = void 0 === f.addEventListener;
                        function m() {
                          r.setReadable(d), r.setWritable(d), r.emit("connect");
                        }
                        function y() {
                          r.end(), r.destroy();
                        }
                        function b(e) {
                          r.destroy(e);
                        }
                        function v(e) {
                          let t = e.data;
                          (t =
                            t instanceof ArrayBuffer
                              ? a.from(t)
                              : a.from(t, "utf8")),
                            d.push(t);
                        }
                        function _(e, t) {
                          const r = new Array(e.length);
                          for (let t = 0; t < e.length; t++)
                            "string" == typeof e[t].chunk
                              ? (r[t] = a.from(e[t], "utf8"))
                              : (r[t] = e[t].chunk);
                          this._write(a.concat(r), "binary", t);
                        }
                        return (
                          f.readyState === f.OPEN
                            ? (r = d)
                            : ((r = r = s(void 0, void 0, t)),
                              t.objectMode || (r._writev = _),
                              g
                                ? f.addEventListener("open", m)
                                : (f.onopen = m)),
                          (r.socket = f),
                          g
                            ? (f.addEventListener("close", y),
                              f.addEventListener("error", b),
                              f.addEventListener("message", v))
                            : ((f.onclose = y),
                              (f.onerror = b),
                              (f.onmessage = v)),
                          r
                        );
                      }
                    : function (e, t) {
                        o("streamBuilder");
                        let r = p(t);
                        const n = h(r, e);
                        let s = (function (e, t, r) {
                            o("createWebSocket"),
                              o(
                                "protocol: " +
                                  r.protocolId +
                                  " " +
                                  r.protocolVersion
                              );
                            const n =
                              "MQIsdp" === r.protocolId &&
                              3 === r.protocolVersion
                                ? "mqttv3.1"
                                : "mqtt";
                            return (
                              o(
                                "creating new Websocket for url: " +
                                  t +
                                  " and protocol: " +
                                  n
                              ),
                              new i(t, [n], r.wsOptions)
                            );
                          })(0, n, r),
                          a = i.createWebSocketStream(s, r.wsOptions);
                        return (a.url = n), a;
                      };
                }.call(this, e("_process")));
              },
              {
                _process: 101,
                debug: 17,
                duplexify: 19,
                "readable-stream": 115,
                "safe-buffer": 117,
                url: 132,
                ws: 139,
              },
            ],
            6: [
              function (e, t, r) {
                (function (r) {
                  "use strict";
                  var n,
                    i,
                    o,
                    s = e("readable-stream").Transform,
                    a = e("duplexify");
                  t.exports = function (e, t) {
                    if (((t.hostname = t.hostname || t.host), !t.hostname))
                      throw new Error(
                        "Could not determine host. Specify host manually."
                      );
                    var c =
                      "MQIsdp" === t.protocolId && 3 === t.protocolVersion
                        ? "mqttv3.1"
                        : "mqtt";
                    !(function (e) {
                      e.hostname || (e.hostname = "localhost"),
                        e.path || (e.path = "/"),
                        e.wsOptions || (e.wsOptions = {});
                    })(t);
                    var u = (function (e, t) {
                      var r = "wxs" === e.protocol ? "wss" : "ws",
                        n = r + "://" + e.hostname + e.path;
                      return (
                        e.port &&
                          80 !== e.port &&
                          443 !== e.port &&
                          (n = r + "://" + e.hostname + ":" + e.port + e.path),
                        "function" == typeof e.transformWsUrl &&
                          (n = e.transformWsUrl(n, e, t)),
                        n
                      );
                    })(t, e);
                    (n = wx.connectSocket({ url: u, protocols: [c] })),
                      (i = (function () {
                        var e = new s();
                        return (
                          (e._write = function (e, t, r) {
                            n.send({
                              data: e.buffer,
                              success: function () {
                                r();
                              },
                              fail: function (e) {
                                r(new Error(e));
                              },
                            });
                          }),
                          (e._flush = function (e) {
                            n.close({
                              success: function () {
                                e();
                              },
                            });
                          }),
                          e
                        );
                      })()),
                      ((o = a.obj())._destroy = function (e, t) {
                        n.close({
                          success: function () {
                            t && t(e);
                          },
                        });
                      });
                    var l = o.destroy;
                    return (
                      (o.destroy = function () {
                        o.destroy = l;
                        var e = this;
                        setTimeout(function () {
                          n.close({
                            fail: function () {
                              e._destroy(new Error());
                            },
                          });
                        }, 0);
                      }.bind(o)),
                      n.onOpen(function () {
                        o.setReadable(i), o.setWritable(i), o.emit("connect");
                      }),
                      n.onMessage(function (e) {
                        var t = e.data;
                        (t =
                          t instanceof ArrayBuffer
                            ? r.from(t)
                            : r.from(t, "utf8")),
                          i.push(t);
                      }),
                      n.onClose(function () {
                        o.end(), o.destroy();
                      }),
                      n.onError(function (e) {
                        o.destroy(new Error(e.errMsg));
                      }),
                      o
                    );
                  };
                }.call(this, e("buffer").Buffer));
              },
              { buffer: 13, duplexify: 19, "readable-stream": 115 },
            ],
            7: [
              function (e, t, r) {
                "use strict";
                var n = e("xtend"),
                  i = e("readable-stream").Readable,
                  o = { objectMode: !0 },
                  s = { clean: !0 },
                  a = e("es6-map");
                function c(e) {
                  if (!(this instanceof c)) return new c(e);
                  (this.options = e || {}),
                    (this.options = n(s, e)),
                    (this._inflights = new a());
                }
                (c.prototype.put = function (e, t) {
                  return this._inflights.set(e.messageId, e), t && t(), this;
                }),
                  (c.prototype.createStream = function () {
                    var e = new i(o),
                      t = !1,
                      r = [],
                      n = 0;
                    return (
                      this._inflights.forEach(function (e, t) {
                        r.push(e);
                      }),
                      (e._read = function () {
                        !t && n < r.length
                          ? this.push(r[n++])
                          : this.push(null);
                      }),
                      (e.destroy = function () {
                        if (!t) {
                          var e = this;
                          (t = !0),
                            setTimeout(function () {
                              e.emit("close");
                            }, 0);
                        }
                      }),
                      e
                    );
                  }),
                  (c.prototype.del = function (e, t) {
                    return (
                      (e = this._inflights.get(e.messageId))
                        ? (this._inflights.delete(e.messageId), t(null, e))
                        : t && t(new Error("missing packet")),
                      this
                    );
                  }),
                  (c.prototype.get = function (e, t) {
                    return (
                      (e = this._inflights.get(e.messageId))
                        ? t(null, e)
                        : t && t(new Error("missing packet")),
                      this
                    );
                  }),
                  (c.prototype.close = function (e) {
                    this.options.clean && (this._inflights = null), e && e();
                  }),
                  (t.exports = c);
              },
              { "es6-map": 68, "readable-stream": 115, xtend: 140 },
            ],
            8: [
              function (e, t, r) {
                "use strict";
                function n(e) {
                  for (var t = e.split("/"), r = 0; r < t.length; r++)
                    if ("+" !== t[r]) {
                      if ("#" === t[r]) return r === t.length - 1;
                      if (-1 !== t[r].indexOf("+") || -1 !== t[r].indexOf("#"))
                        return !1;
                    }
                  return !0;
                }
                t.exports = {
                  validateTopics: function (e) {
                    if (0 === e.length) return "empty_topic_list";
                    for (var t = 0; t < e.length; t++)
                      if (!n(e[t])) return e[t];
                    return null;
                  },
                };
              },
              {},
            ],
            9: [
              function (e, t, n) {
                (function (n) {
                  "use strict";
                  var i = e("../client"),
                    o = e("../store"),
                    s = e("url"),
                    a = e("xtend"),
                    c = e("debug")("mqttjs"),
                    u = {};
                  function l(e, t) {
                    if (
                      (c("connecting to an MQTT broker..."),
                      "object" != typeof e || t || ((t = e), (e = null)),
                      (t = t || {}),
                      e)
                    ) {
                      var r = s.parse(e, !0);
                      if (
                        (null != r.port && (r.port = Number(r.port)),
                        null === (t = a(r, t)).protocol)
                      )
                        throw new Error("Missing protocol");
                      t.protocol = t.protocol.replace(/:$/, "");
                    }
                    if (
                      ((function (e) {
                        var t;
                        e.auth &&
                          ((t = e.auth.match(/^(.+):(.+)$/))
                            ? ((e.username = t[1]), (e.password = t[2]))
                            : (e.username = e.auth));
                      })(t),
                      t.query &&
                        "string" == typeof t.query.clientId &&
                        (t.clientId = t.query.clientId),
                      t.cert && t.key)
                    ) {
                      if (!t.protocol)
                        throw new Error("Missing secure protocol key");
                      if (
                        -1 ===
                        ["mqtts", "wss", "wxs", "alis"].indexOf(t.protocol)
                      )
                        switch (t.protocol) {
                          case "mqtt":
                            t.protocol = "mqtts";
                            break;
                          case "ws":
                            t.protocol = "wss";
                            break;
                          case "wx":
                            t.protocol = "wxs";
                            break;
                          case "ali":
                            t.protocol = "alis";
                            break;
                          default:
                            throw new Error(
                              'Unknown protocol for secure connection: "' +
                                t.protocol +
                                '"!'
                            );
                        }
                    }
                    if (!u[t.protocol]) {
                      var n = -1 !== ["mqtts", "wss"].indexOf(t.protocol);
                      t.protocol = [
                        "mqtt",
                        "mqtts",
                        "ws",
                        "wss",
                        "wx",
                        "wxs",
                        "ali",
                        "alis",
                      ].filter(function (e, t) {
                        return (!n || t % 2 != 0) && "function" == typeof u[e];
                      })[0];
                    }
                    if (!1 === t.clean && !t.clientId)
                      throw new Error("Missing clientId for unclean clients");
                    t.protocol && (t.defaultProtocol = t.protocol);
                    var o = new i(function (e) {
                      return (
                        t.servers &&
                          ((e._reconnectCount &&
                            e._reconnectCount !== t.servers.length) ||
                            (e._reconnectCount = 0),
                          (t.host = t.servers[e._reconnectCount].host),
                          (t.port = t.servers[e._reconnectCount].port),
                          (t.protocol = t.servers[e._reconnectCount].protocol
                            ? t.servers[e._reconnectCount].protocol
                            : t.defaultProtocol),
                          (t.hostname = t.host),
                          e._reconnectCount++),
                        c("calling streambuilder for", t.protocol),
                        u[t.protocol](e, t)
                      );
                    }, t);
                    return o.on("error", function () {}), o;
                  }
                  (void 0 !== n && "browser" !== n.title) ||
                  "function" == typeof r
                    ? ((u.mqtt = e("./tcp")),
                      (u.tcp = e("./tcp")),
                      (u.ssl = e("./tls")),
                      (u.tls = e("./tls")),
                      (u.mqtts = e("./tls")))
                    : ((u.wx = e("./wx")),
                      (u.wxs = e("./wx")),
                      (u.ali = e("./ali")),
                      (u.alis = e("./ali"))),
                    (u.ws = e("./ws")),
                    (u.wss = e("./ws")),
                    (t.exports = l),
                    (t.exports.connect = l),
                    (t.exports.MqttClient = i),
                    (t.exports.Store = o);
                }.call(this, e("_process")));
              },
              {
                "../client": 1,
                "../store": 7,
                "./ali": 2,
                "./tcp": 3,
                "./tls": 4,
                "./ws": 5,
                "./wx": 6,
                _process: 101,
                debug: 17,
                url: 132,
                xtend: 140,
              },
            ],
            10: [
              function (e, t, r) {
                "use strict";
                (r.byteLength = function (e) {
                  var t = u(e),
                    r = t[0],
                    n = t[1];
                  return (3 * (r + n)) / 4 - n;
                }),
                  (r.toByteArray = function (e) {
                    var t,
                      r,
                      n = u(e),
                      s = n[0],
                      a = n[1],
                      c = new o(
                        (function (e, t, r) {
                          return (3 * (t + r)) / 4 - r;
                        })(0, s, a)
                      ),
                      l = 0,
                      f = a > 0 ? s - 4 : s;
                    for (r = 0; r < f; r += 4)
                      (t =
                        (i[e.charCodeAt(r)] << 18) |
                        (i[e.charCodeAt(r + 1)] << 12) |
                        (i[e.charCodeAt(r + 2)] << 6) |
                        i[e.charCodeAt(r + 3)]),
                        (c[l++] = (t >> 16) & 255),
                        (c[l++] = (t >> 8) & 255),
                        (c[l++] = 255 & t);
                    return (
                      2 === a &&
                        ((t =
                          (i[e.charCodeAt(r)] << 2) |
                          (i[e.charCodeAt(r + 1)] >> 4)),
                        (c[l++] = 255 & t)),
                      1 === a &&
                        ((t =
                          (i[e.charCodeAt(r)] << 10) |
                          (i[e.charCodeAt(r + 1)] << 4) |
                          (i[e.charCodeAt(r + 2)] >> 2)),
                        (c[l++] = (t >> 8) & 255),
                        (c[l++] = 255 & t)),
                      c
                    );
                  }),
                  (r.fromByteArray = function (e) {
                    for (
                      var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i;
                      s < a;
                      s += 16383
                    )
                      o.push(l(e, s, s + 16383 > a ? a : s + 16383));
                    return (
                      1 === i
                        ? ((t = e[r - 1]),
                          o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
                        : 2 === i &&
                          ((t = (e[r - 2] << 8) + e[r - 1]),
                          o.push(
                            n[t >> 10] +
                              n[(t >> 4) & 63] +
                              n[(t << 2) & 63] +
                              "="
                          )),
                      o.join("")
                    );
                  });
                for (
                  var n = [],
                    i = [],
                    o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                    s =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    a = 0,
                    c = s.length;
                  a < c;
                  ++a
                )
                  (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
                function u(e) {
                  var t = e.length;
                  if (t % 4 > 0)
                    throw new Error(
                      "Invalid string. Length must be a multiple of 4"
                    );
                  var r = e.indexOf("=");
                  return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
                }
                function l(e, t, r) {
                  for (var i, o, s = [], a = t; a < r; a += 3)
                    (i =
                      ((e[a] << 16) & 16711680) +
                      ((e[a + 1] << 8) & 65280) +
                      (255 & e[a + 2])),
                      s.push(
                        n[((o = i) >> 18) & 63] +
                          n[(o >> 12) & 63] +
                          n[(o >> 6) & 63] +
                          n[63 & o]
                      );
                  return s.join("");
                }
                (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
              },
              {},
            ],
            11: [
              function (e, t, r) {
                var n = e("readable-stream/duplex"),
                  i = e("util"),
                  o = e("safe-buffer").Buffer;
                function s(e) {
                  if (!(this instanceof s)) return new s(e);
                  if (
                    ((this._bufs = []),
                    (this.length = 0),
                    "function" == typeof e)
                  ) {
                    this._callback = e;
                    var t = function (e) {
                      this._callback &&
                        (this._callback(e), (this._callback = null));
                    }.bind(this);
                    this.on("pipe", function (e) {
                      e.on("error", t);
                    }),
                      this.on("unpipe", function (e) {
                        e.removeListener("error", t);
                      });
                  } else this.append(e);
                  n.call(this);
                }
                i.inherits(s, n),
                  (s.prototype._offset = function (e) {
                    var t,
                      r = 0,
                      n = 0;
                    if (0 === e) return [0, 0];
                    for (; n < this._bufs.length; n++) {
                      if (
                        e < (t = r + this._bufs[n].length) ||
                        n == this._bufs.length - 1
                      )
                        return [n, e - r];
                      r = t;
                    }
                  }),
                  (s.prototype.append = function (e) {
                    var t = 0;
                    if (o.isBuffer(e)) this._appendBuffer(e);
                    else if (Array.isArray(e))
                      for (; t < e.length; t++) this.append(e[t]);
                    else if (e instanceof s)
                      for (; t < e._bufs.length; t++) this.append(e._bufs[t]);
                    else
                      null != e &&
                        ("number" == typeof e && (e = e.toString()),
                        this._appendBuffer(o.from(e)));
                    return this;
                  }),
                  (s.prototype._appendBuffer = function (e) {
                    this._bufs.push(e), (this.length += e.length);
                  }),
                  (s.prototype._write = function (e, t, r) {
                    this._appendBuffer(e), "function" == typeof r && r();
                  }),
                  (s.prototype._read = function (e) {
                    if (!this.length) return this.push(null);
                    (e = Math.min(e, this.length)),
                      this.push(this.slice(0, e)),
                      this.consume(e);
                  }),
                  (s.prototype.end = function (e) {
                    n.prototype.end.call(this, e),
                      this._callback &&
                        (this._callback(null, this.slice()),
                        (this._callback = null));
                  }),
                  (s.prototype.get = function (e) {
                    return this.slice(e, e + 1)[0];
                  }),
                  (s.prototype.slice = function (e, t) {
                    return (
                      "number" == typeof e && e < 0 && (e += this.length),
                      "number" == typeof t && t < 0 && (t += this.length),
                      this.copy(null, 0, e, t)
                    );
                  }),
                  (s.prototype.copy = function (e, t, r, n) {
                    if (
                      (("number" != typeof r || r < 0) && (r = 0),
                      ("number" != typeof n || n > this.length) &&
                        (n = this.length),
                      r >= this.length)
                    )
                      return e || o.alloc(0);
                    if (n <= 0) return e || o.alloc(0);
                    var i,
                      s,
                      a = !!e,
                      c = this._offset(r),
                      u = n - r,
                      l = u,
                      f = (a && t) || 0,
                      h = c[1];
                    if (0 === r && n == this.length) {
                      if (!a)
                        return 1 === this._bufs.length
                          ? this._bufs[0]
                          : o.concat(this._bufs, this.length);
                      for (s = 0; s < this._bufs.length; s++)
                        this._bufs[s].copy(e, f), (f += this._bufs[s].length);
                      return e;
                    }
                    if (l <= this._bufs[c[0]].length - h)
                      return a
                        ? this._bufs[c[0]].copy(e, t, h, h + l)
                        : this._bufs[c[0]].slice(h, h + l);
                    for (
                      a || (e = o.allocUnsafe(u)), s = c[0];
                      s < this._bufs.length;
                      s++
                    ) {
                      if (!(l > (i = this._bufs[s].length - h))) {
                        this._bufs[s].copy(e, f, h, h + l);
                        break;
                      }
                      this._bufs[s].copy(e, f, h),
                        (f += i),
                        (l -= i),
                        h && (h = 0);
                    }
                    return e;
                  }),
                  (s.prototype.shallowSlice = function (e, t) {
                    (e = e || 0),
                      (t = t || this.length),
                      e < 0 && (e += this.length),
                      t < 0 && (t += this.length);
                    var r = this._offset(e),
                      n = this._offset(t),
                      i = this._bufs.slice(r[0], n[0] + 1);
                    return (
                      0 == n[1]
                        ? i.pop()
                        : (i[i.length - 1] = i[i.length - 1].slice(0, n[1])),
                      0 != r[1] && (i[0] = i[0].slice(r[1])),
                      new s(i)
                    );
                  }),
                  (s.prototype.toString = function (e, t, r) {
                    return this.slice(t, r).toString(e);
                  }),
                  (s.prototype.consume = function (e) {
                    for (; this._bufs.length; ) {
                      if (!(e >= this._bufs[0].length)) {
                        (this._bufs[0] = this._bufs[0].slice(e)),
                          (this.length -= e);
                        break;
                      }
                      (e -= this._bufs[0].length),
                        (this.length -= this._bufs[0].length),
                        this._bufs.shift();
                    }
                    return this;
                  }),
                  (s.prototype.duplicate = function () {
                    for (var e = 0, t = new s(); e < this._bufs.length; e++)
                      t.append(this._bufs[e]);
                    return t;
                  }),
                  (s.prototype.destroy = function () {
                    (this._bufs.length = 0), (this.length = 0), this.push(null);
                  }),
                  (function () {
                    var e = {
                      readDoubleBE: 8,
                      readDoubleLE: 8,
                      readFloatBE: 4,
                      readFloatLE: 4,
                      readInt32BE: 4,
                      readInt32LE: 4,
                      readUInt32BE: 4,
                      readUInt32LE: 4,
                      readInt16BE: 2,
                      readInt16LE: 2,
                      readUInt16BE: 2,
                      readUInt16LE: 2,
                      readInt8: 1,
                      readUInt8: 1,
                    };
                    for (var t in e)
                      !(function (t) {
                        s.prototype[t] = function (r) {
                          return this.slice(r, r + e[t])[t](0);
                        };
                      })(t);
                  })(),
                  (t.exports = s);
              },
              { "readable-stream/duplex": 106, "safe-buffer": 117, util: 137 },
            ],
            12: [function (e, t, r) {}, {}],
            13: [
              function (e, t, r) {
                (function (t) {
                  "use strict";
                  var n = e("base64-js"),
                    i = e("ieee754");
                  function o(e) {
                    if (e > 2147483647)
                      throw new RangeError(
                        'The value "' + e + '" is invalid for option "size"'
                      );
                    var r = new Uint8Array(e);
                    return (r.__proto__ = t.prototype), r;
                  }
                  function t(e, t, r) {
                    if ("number" == typeof e) {
                      if ("string" == typeof t)
                        throw new TypeError(
                          'The "string" argument must be of type string. Received type number'
                        );
                      return c(e);
                    }
                    return s(e, t, r);
                  }
                  function s(e, r, n) {
                    if ("string" == typeof e)
                      return (function (e, r) {
                        if (
                          (("string" == typeof r && "" !== r) || (r = "utf8"),
                          !t.isEncoding(r))
                        )
                          throw new TypeError("Unknown encoding: " + r);
                        var n = 0 | f(e, r),
                          i = o(n),
                          s = i.write(e, r);
                        return s !== n && (i = i.slice(0, s)), i;
                      })(e, r);
                    if (ArrayBuffer.isView(e)) return u(e);
                    if (null == e)
                      throw TypeError(
                        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                          typeof e
                      );
                    if (U(e, ArrayBuffer) || (e && U(e.buffer, ArrayBuffer)))
                      return (function (e, r, n) {
                        if (r < 0 || e.byteLength < r)
                          throw new RangeError(
                            '"offset" is outside of buffer bounds'
                          );
                        if (e.byteLength < r + (n || 0))
                          throw new RangeError(
                            '"length" is outside of buffer bounds'
                          );
                        var i;
                        return (
                          ((i =
                            void 0 === r && void 0 === n
                              ? new Uint8Array(e)
                              : void 0 === n
                              ? new Uint8Array(e, r)
                              : new Uint8Array(e, r, n)).__proto__ =
                            t.prototype),
                          i
                        );
                      })(e, r, n);
                    if ("number" == typeof e)
                      throw new TypeError(
                        'The "value" argument must not be of type number. Received type number'
                      );
                    var i = e.valueOf && e.valueOf();
                    if (null != i && i !== e) return t.from(i, r, n);
                    var s = (function (e) {
                      if (t.isBuffer(e)) {
                        var r = 0 | l(e.length),
                          n = o(r);
                        return 0 === n.length || e.copy(n, 0, 0, r), n;
                      }
                      return void 0 !== e.length
                        ? "number" != typeof e.length || N(e.length)
                          ? o(0)
                          : u(e)
                        : "Buffer" === e.type && Array.isArray(e.data)
                        ? u(e.data)
                        : void 0;
                    })(e);
                    if (s) return s;
                    if (
                      "undefined" != typeof Symbol &&
                      null != Symbol.toPrimitive &&
                      "function" == typeof e[Symbol.toPrimitive]
                    )
                      return t.from(e[Symbol.toPrimitive]("string"), r, n);
                    throw new TypeError(
                      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                        typeof e
                    );
                  }
                  function a(e) {
                    if ("number" != typeof e)
                      throw new TypeError(
                        '"size" argument must be of type number'
                      );
                    if (e < 0)
                      throw new RangeError(
                        'The value "' + e + '" is invalid for option "size"'
                      );
                  }
                  function c(e) {
                    return a(e), o(e < 0 ? 0 : 0 | l(e));
                  }
                  function u(e) {
                    for (
                      var t = e.length < 0 ? 0 : 0 | l(e.length),
                        r = o(t),
                        n = 0;
                      n < t;
                      n += 1
                    )
                      r[n] = 255 & e[n];
                    return r;
                  }
                  function l(e) {
                    if (e >= 2147483647)
                      throw new RangeError(
                        "Attempt to allocate Buffer larger than maximum size: 0x" +
                          (2147483647).toString(16) +
                          " bytes"
                      );
                    return 0 | e;
                  }
                  function f(e, r) {
                    if (t.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || U(e, ArrayBuffer))
                      return e.byteLength;
                    if ("string" != typeof e)
                      throw new TypeError(
                        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                          typeof e
                      );
                    var n = e.length,
                      i = arguments.length > 2 && !0 === arguments[2];
                    if (!i && 0 === n) return 0;
                    for (var o = !1; ; )
                      switch (r) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                          return n;
                        case "utf8":
                        case "utf-8":
                          return R(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          return 2 * n;
                        case "hex":
                          return n >>> 1;
                        case "base64":
                          return B(e).length;
                        default:
                          if (o) return i ? -1 : R(e).length;
                          (r = ("" + r).toLowerCase()), (o = !0);
                      }
                  }
                  function h(e, t, r) {
                    var n = !1;
                    if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                      return "";
                    if (
                      ((void 0 === r || r > this.length) && (r = this.length),
                      r <= 0)
                    )
                      return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8"); ; )
                      switch (e) {
                        case "hex":
                          return I(this, t, r);
                        case "utf8":
                        case "utf-8":
                          return x(this, t, r);
                        case "ascii":
                          return k(this, t, r);
                        case "latin1":
                        case "binary":
                          return E(this, t, r);
                        case "base64":
                          return S(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          return C(this, t, r);
                        default:
                          if (n) throw new TypeError("Unknown encoding: " + e);
                          (e = (e + "").toLowerCase()), (n = !0);
                      }
                  }
                  function p(e, t, r) {
                    var n = e[t];
                    (e[t] = e[r]), (e[r] = n);
                  }
                  function d(e, r, n, i, o) {
                    if (0 === e.length) return -1;
                    if (
                      ("string" == typeof n
                        ? ((i = n), (n = 0))
                        : n > 2147483647
                        ? (n = 2147483647)
                        : n < -2147483648 && (n = -2147483648),
                      N((n = +n)) && (n = o ? 0 : e.length - 1),
                      n < 0 && (n = e.length + n),
                      n >= e.length)
                    ) {
                      if (o) return -1;
                      n = e.length - 1;
                    } else if (n < 0) {
                      if (!o) return -1;
                      n = 0;
                    }
                    if (
                      ("string" == typeof r && (r = t.from(r, i)),
                      t.isBuffer(r))
                    )
                      return 0 === r.length ? -1 : g(e, r, n, i, o);
                    if ("number" == typeof r)
                      return (
                        (r &= 255),
                        "function" == typeof Uint8Array.prototype.indexOf
                          ? o
                            ? Uint8Array.prototype.indexOf.call(e, r, n)
                            : Uint8Array.prototype.lastIndexOf.call(e, r, n)
                          : g(e, [r], n, i, o)
                      );
                    throw new TypeError("val must be string, number or Buffer");
                  }
                  function g(e, t, r, n, i) {
                    var o,
                      s = 1,
                      a = e.length,
                      c = t.length;
                    if (
                      void 0 !== n &&
                      ("ucs2" === (n = String(n).toLowerCase()) ||
                        "ucs-2" === n ||
                        "utf16le" === n ||
                        "utf-16le" === n)
                    ) {
                      if (e.length < 2 || t.length < 2) return -1;
                      (s = 2), (a /= 2), (c /= 2), (r /= 2);
                    }
                    function u(e, t) {
                      return 1 === s ? e[t] : e.readUInt16BE(t * s);
                    }
                    if (i) {
                      var l = -1;
                      for (o = r; o < a; o++)
                        if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                          if ((-1 === l && (l = o), o - l + 1 === c))
                            return l * s;
                        } else -1 !== l && (o -= o - l), (l = -1);
                    } else
                      for (r + c > a && (r = a - c), o = r; o >= 0; o--) {
                        for (var f = !0, h = 0; h < c; h++)
                          if (u(e, o + h) !== u(t, h)) {
                            f = !1;
                            break;
                          }
                        if (f) return o;
                      }
                    return -1;
                  }
                  function m(e, t, r, n) {
                    r = Number(r) || 0;
                    var i = e.length - r;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    var o = t.length;
                    n > o / 2 && (n = o / 2);
                    for (var s = 0; s < n; ++s) {
                      var a = parseInt(t.substr(2 * s, 2), 16);
                      if (N(a)) return s;
                      e[r + s] = a;
                    }
                    return s;
                  }
                  function y(e, t, r, n) {
                    return L(R(t, e.length - r), e, r, n);
                  }
                  function b(e, t, r, n) {
                    return L(
                      (function (e) {
                        for (var t = [], r = 0; r < e.length; ++r)
                          t.push(255 & e.charCodeAt(r));
                        return t;
                      })(t),
                      e,
                      r,
                      n
                    );
                  }
                  function v(e, t, r, n) {
                    return b(e, t, r, n);
                  }
                  function _(e, t, r, n) {
                    return L(B(t), e, r, n);
                  }
                  function w(e, t, r, n) {
                    return L(
                      (function (e, t) {
                        for (
                          var r, n, i, o = [], s = 0;
                          s < e.length && !((t -= 2) < 0);
                          ++s
                        )
                          (r = e.charCodeAt(s)),
                            (n = r >> 8),
                            (i = r % 256),
                            o.push(i),
                            o.push(n);
                        return o;
                      })(t, e.length - r),
                      e,
                      r,
                      n
                    );
                  }
                  function S(e, t, r) {
                    return 0 === t && r === e.length
                      ? n.fromByteArray(e)
                      : n.fromByteArray(e.slice(t, r));
                  }
                  function x(e, t, r) {
                    r = Math.min(e.length, r);
                    for (var n = [], i = t; i < r; ) {
                      var o,
                        s,
                        a,
                        c,
                        u = e[i],
                        l = null,
                        f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                      if (i + f <= r)
                        switch (f) {
                          case 1:
                            u < 128 && (l = u);
                            break;
                          case 2:
                            128 == (192 & (o = e[i + 1])) &&
                              (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                              (l = c);
                            break;
                          case 3:
                            (o = e[i + 1]),
                              (s = e[i + 2]),
                              128 == (192 & o) &&
                                128 == (192 & s) &&
                                (c =
                                  ((15 & u) << 12) |
                                  ((63 & o) << 6) |
                                  (63 & s)) > 2047 &&
                                (c < 55296 || c > 57343) &&
                                (l = c);
                            break;
                          case 4:
                            (o = e[i + 1]),
                              (s = e[i + 2]),
                              (a = e[i + 3]),
                              128 == (192 & o) &&
                                128 == (192 & s) &&
                                128 == (192 & a) &&
                                (c =
                                  ((15 & u) << 18) |
                                  ((63 & o) << 12) |
                                  ((63 & s) << 6) |
                                  (63 & a)) > 65535 &&
                                c < 1114112 &&
                                (l = c);
                        }
                      null === l
                        ? ((l = 65533), (f = 1))
                        : l > 65535 &&
                          ((l -= 65536),
                          n.push(((l >>> 10) & 1023) | 55296),
                          (l = 56320 | (1023 & l))),
                        n.push(l),
                        (i += f);
                    }
                    return (function (e) {
                      var t = e.length;
                      if (t <= 4096)
                        return String.fromCharCode.apply(String, e);
                      for (var r = "", n = 0; n < t; )
                        r += String.fromCharCode.apply(
                          String,
                          e.slice(n, (n += 4096))
                        );
                      return r;
                    })(n);
                  }
                  function k(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i)
                      n += String.fromCharCode(127 & e[i]);
                    return n;
                  }
                  function E(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                    return n;
                  }
                  function I(e, t, r) {
                    var n,
                      i = e.length;
                    (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
                    for (var o = "", s = t; s < r; ++s)
                      o +=
                        (n = e[s]) < 16 ? "0" + n.toString(16) : n.toString(16);
                    return o;
                  }
                  function C(e, t, r) {
                    for (
                      var n = e.slice(t, r), i = "", o = 0;
                      o < n.length;
                      o += 2
                    )
                      i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                    return i;
                  }
                  function O(e, t, r) {
                    if (e % 1 != 0 || e < 0)
                      throw new RangeError("offset is not uint");
                    if (e + t > r)
                      throw new RangeError(
                        "Trying to access beyond buffer length"
                      );
                  }
                  function P(e, r, n, i, o, s) {
                    if (!t.isBuffer(e))
                      throw new TypeError(
                        '"buffer" argument must be a Buffer instance'
                      );
                    if (r > o || r < s)
                      throw new RangeError('"value" argument is out of bounds');
                    if (n + i > e.length)
                      throw new RangeError("Index out of range");
                  }
                  function A(e, t, r, n, i, o) {
                    if (r + n > e.length)
                      throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range");
                  }
                  function j(e, t, r, n, o) {
                    return (
                      (t = +t),
                      (r >>>= 0),
                      o || A(e, 0, r, 4),
                      i.write(e, t, r, n, 23, 4),
                      r + 4
                    );
                  }
                  function T(e, t, r, n, o) {
                    return (
                      (t = +t),
                      (r >>>= 0),
                      o || A(e, 0, r, 8),
                      i.write(e, t, r, n, 52, 8),
                      r + 8
                    );
                  }
                  (r.Buffer = t),
                    (r.SlowBuffer = function (e) {
                      return +e != e && (e = 0), t.alloc(+e);
                    }),
                    (r.INSPECT_MAX_BYTES = 50),
                    (r.kMaxLength = 2147483647),
                    (t.TYPED_ARRAY_SUPPORT = (function () {
                      try {
                        var e = new Uint8Array(1);
                        return (
                          (e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                              return 42;
                            },
                          }),
                          42 === e.foo()
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    t.TYPED_ARRAY_SUPPORT ||
                      "undefined" == typeof console ||
                      "function" != typeof console.error ||
                      console.error(
                        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                      ),
                    Object.defineProperty(t.prototype, "parent", {
                      enumerable: !0,
                      get: function () {
                        if (t.isBuffer(this)) return this.buffer;
                      },
                    }),
                    Object.defineProperty(t.prototype, "offset", {
                      enumerable: !0,
                      get: function () {
                        if (t.isBuffer(this)) return this.byteOffset;
                      },
                    }),
                    "undefined" != typeof Symbol &&
                      null != Symbol.species &&
                      t[Symbol.species] === t &&
                      Object.defineProperty(t, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1,
                      }),
                    (t.poolSize = 8192),
                    (t.from = function (e, t, r) {
                      return s(e, t, r);
                    }),
                    (t.prototype.__proto__ = Uint8Array.prototype),
                    (t.__proto__ = Uint8Array),
                    (t.alloc = function (e, t, r) {
                      return (function (e, t, r) {
                        return (
                          a(e),
                          e <= 0
                            ? o(e)
                            : void 0 !== t
                            ? "string" == typeof r
                              ? o(e).fill(t, r)
                              : o(e).fill(t)
                            : o(e)
                        );
                      })(e, t, r);
                    }),
                    (t.allocUnsafe = function (e) {
                      return c(e);
                    }),
                    (t.allocUnsafeSlow = function (e) {
                      return c(e);
                    }),
                    (t.isBuffer = function (e) {
                      return (
                        null != e && !0 === e._isBuffer && e !== t.prototype
                      );
                    }),
                    (t.compare = function (e, r) {
                      if (
                        (U(e, Uint8Array) &&
                          (e = t.from(e, e.offset, e.byteLength)),
                        U(r, Uint8Array) &&
                          (r = t.from(r, r.offset, r.byteLength)),
                        !t.isBuffer(e) || !t.isBuffer(r))
                      )
                        throw new TypeError(
                          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                        );
                      if (e === r) return 0;
                      for (
                        var n = e.length,
                          i = r.length,
                          o = 0,
                          s = Math.min(n, i);
                        o < s;
                        ++o
                      )
                        if (e[o] !== r[o]) {
                          (n = e[o]), (i = r[o]);
                          break;
                        }
                      return n < i ? -1 : i < n ? 1 : 0;
                    }),
                    (t.isEncoding = function (e) {
                      switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                          return !0;
                        default:
                          return !1;
                      }
                    }),
                    (t.concat = function (e, r) {
                      if (!Array.isArray(e))
                        throw new TypeError(
                          '"list" argument must be an Array of Buffers'
                        );
                      if (0 === e.length) return t.alloc(0);
                      var n;
                      if (void 0 === r)
                        for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
                      var i = t.allocUnsafe(r),
                        o = 0;
                      for (n = 0; n < e.length; ++n) {
                        var s = e[n];
                        if (
                          (U(s, Uint8Array) && (s = t.from(s)), !t.isBuffer(s))
                        )
                          throw new TypeError(
                            '"list" argument must be an Array of Buffers'
                          );
                        s.copy(i, o), (o += s.length);
                      }
                      return i;
                    }),
                    (t.byteLength = f),
                    (t.prototype._isBuffer = !0),
                    (t.prototype.swap16 = function () {
                      var e = this.length;
                      if (e % 2 != 0)
                        throw new RangeError(
                          "Buffer size must be a multiple of 16-bits"
                        );
                      for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                      return this;
                    }),
                    (t.prototype.swap32 = function () {
                      var e = this.length;
                      if (e % 4 != 0)
                        throw new RangeError(
                          "Buffer size must be a multiple of 32-bits"
                        );
                      for (var t = 0; t < e; t += 4)
                        p(this, t, t + 3), p(this, t + 1, t + 2);
                      return this;
                    }),
                    (t.prototype.swap64 = function () {
                      var e = this.length;
                      if (e % 8 != 0)
                        throw new RangeError(
                          "Buffer size must be a multiple of 64-bits"
                        );
                      for (var t = 0; t < e; t += 8)
                        p(this, t, t + 7),
                          p(this, t + 1, t + 6),
                          p(this, t + 2, t + 5),
                          p(this, t + 3, t + 4);
                      return this;
                    }),
                    (t.prototype.toString = function () {
                      var e = this.length;
                      return 0 === e
                        ? ""
                        : 0 === arguments.length
                        ? x(this, 0, e)
                        : h.apply(this, arguments);
                    }),
                    (t.prototype.toLocaleString = t.prototype.toString),
                    (t.prototype.equals = function (e) {
                      if (!t.isBuffer(e))
                        throw new TypeError("Argument must be a Buffer");
                      return this === e || 0 === t.compare(this, e);
                    }),
                    (t.prototype.inspect = function () {
                      var e = "",
                        t = r.INSPECT_MAX_BYTES;
                      return (
                        (e = this.toString("hex", 0, t)
                          .replace(/(.{2})/g, "$1 ")
                          .trim()),
                        this.length > t && (e += " ... "),
                        "<Buffer " + e + ">"
                      );
                    }),
                    (t.prototype.compare = function (e, r, n, i, o) {
                      if (
                        (U(e, Uint8Array) &&
                          (e = t.from(e, e.offset, e.byteLength)),
                        !t.isBuffer(e))
                      )
                        throw new TypeError(
                          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                            typeof e
                        );
                      if (
                        (void 0 === r && (r = 0),
                        void 0 === n && (n = e ? e.length : 0),
                        void 0 === i && (i = 0),
                        void 0 === o && (o = this.length),
                        r < 0 || n > e.length || i < 0 || o > this.length)
                      )
                        throw new RangeError("out of range index");
                      if (i >= o && r >= n) return 0;
                      if (i >= o) return -1;
                      if (r >= n) return 1;
                      if (this === e) return 0;
                      for (
                        var s = (o >>>= 0) - (i >>>= 0),
                          a = (n >>>= 0) - (r >>>= 0),
                          c = Math.min(s, a),
                          u = this.slice(i, o),
                          l = e.slice(r, n),
                          f = 0;
                        f < c;
                        ++f
                      )
                        if (u[f] !== l[f]) {
                          (s = u[f]), (a = l[f]);
                          break;
                        }
                      return s < a ? -1 : a < s ? 1 : 0;
                    }),
                    (t.prototype.includes = function (e, t, r) {
                      return -1 !== this.indexOf(e, t, r);
                    }),
                    (t.prototype.indexOf = function (e, t, r) {
                      return d(this, e, t, r, !0);
                    }),
                    (t.prototype.lastIndexOf = function (e, t, r) {
                      return d(this, e, t, r, !1);
                    }),
                    (t.prototype.write = function (e, t, r, n) {
                      if (void 0 === t)
                        (n = "utf8"), (r = this.length), (t = 0);
                      else if (void 0 === r && "string" == typeof t)
                        (n = t), (r = this.length), (t = 0);
                      else {
                        if (!isFinite(t))
                          throw new Error(
                            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                          );
                        (t >>>= 0),
                          isFinite(r)
                            ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                            : ((n = r), (r = void 0));
                      }
                      var i = this.length - t;
                      if (
                        ((void 0 === r || r > i) && (r = i),
                        (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                      )
                        throw new RangeError(
                          "Attempt to write outside buffer bounds"
                        );
                      n || (n = "utf8");
                      for (var o = !1; ; )
                        switch (n) {
                          case "hex":
                            return m(this, e, t, r);
                          case "utf8":
                          case "utf-8":
                            return y(this, e, t, r);
                          case "ascii":
                            return b(this, e, t, r);
                          case "latin1":
                          case "binary":
                            return v(this, e, t, r);
                          case "base64":
                            return _(this, e, t, r);
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return w(this, e, t, r);
                          default:
                            if (o)
                              throw new TypeError("Unknown encoding: " + n);
                            (n = ("" + n).toLowerCase()), (o = !0);
                        }
                    }),
                    (t.prototype.toJSON = function () {
                      return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0),
                      };
                    }),
                    (t.prototype.slice = function (e, r) {
                      var n = this.length;
                      (e = ~~e) < 0
                        ? (e += n) < 0 && (e = 0)
                        : e > n && (e = n),
                        (r = void 0 === r ? n : ~~r) < 0
                          ? (r += n) < 0 && (r = 0)
                          : r > n && (r = n),
                        r < e && (r = e);
                      var i = this.subarray(e, r);
                      return (i.__proto__ = t.prototype), i;
                    }),
                    (t.prototype.readUIntLE = function (e, t, r) {
                      (e >>>= 0), (t >>>= 0), r || O(e, t, this.length);
                      for (
                        var n = this[e], i = 1, o = 0;
                        ++o < t && (i *= 256);

                      )
                        n += this[e + o] * i;
                      return n;
                    }),
                    (t.prototype.readUIntBE = function (e, t, r) {
                      (e >>>= 0), (t >>>= 0), r || O(e, t, this.length);
                      for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                        n += this[e + --t] * i;
                      return n;
                    }),
                    (t.prototype.readUInt8 = function (e, t) {
                      return (e >>>= 0), t || O(e, 1, this.length), this[e];
                    }),
                    (t.prototype.readUInt16LE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 2, this.length),
                        this[e] | (this[e + 1] << 8)
                      );
                    }),
                    (t.prototype.readUInt16BE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 2, this.length),
                        (this[e] << 8) | this[e + 1]
                      );
                    }),
                    (t.prototype.readUInt32LE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 4, this.length),
                        (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                          16777216 * this[e + 3]
                      );
                    }),
                    (t.prototype.readUInt32BE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 4, this.length),
                        16777216 * this[e] +
                          ((this[e + 1] << 16) |
                            (this[e + 2] << 8) |
                            this[e + 3])
                      );
                    }),
                    (t.prototype.readIntLE = function (e, t, r) {
                      (e >>>= 0), (t >>>= 0), r || O(e, t, this.length);
                      for (
                        var n = this[e], i = 1, o = 0;
                        ++o < t && (i *= 256);

                      )
                        n += this[e + o] * i;
                      return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
                    }),
                    (t.prototype.readIntBE = function (e, t, r) {
                      (e >>>= 0), (t >>>= 0), r || O(e, t, this.length);
                      for (
                        var n = t, i = 1, o = this[e + --n];
                        n > 0 && (i *= 256);

                      )
                        o += this[e + --n] * i;
                      return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                    }),
                    (t.prototype.readInt8 = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 1, this.length),
                        128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                      );
                    }),
                    (t.prototype.readInt16LE = function (e, t) {
                      (e >>>= 0), t || O(e, 2, this.length);
                      var r = this[e] | (this[e + 1] << 8);
                      return 32768 & r ? 4294901760 | r : r;
                    }),
                    (t.prototype.readInt16BE = function (e, t) {
                      (e >>>= 0), t || O(e, 2, this.length);
                      var r = this[e + 1] | (this[e] << 8);
                      return 32768 & r ? 4294901760 | r : r;
                    }),
                    (t.prototype.readInt32LE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 4, this.length),
                        this[e] |
                          (this[e + 1] << 8) |
                          (this[e + 2] << 16) |
                          (this[e + 3] << 24)
                      );
                    }),
                    (t.prototype.readInt32BE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 4, this.length),
                        (this[e] << 24) |
                          (this[e + 1] << 16) |
                          (this[e + 2] << 8) |
                          this[e + 3]
                      );
                    }),
                    (t.prototype.readFloatLE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 4, this.length),
                        i.read(this, e, !0, 23, 4)
                      );
                    }),
                    (t.prototype.readFloatBE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 4, this.length),
                        i.read(this, e, !1, 23, 4)
                      );
                    }),
                    (t.prototype.readDoubleLE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 8, this.length),
                        i.read(this, e, !0, 52, 8)
                      );
                    }),
                    (t.prototype.readDoubleBE = function (e, t) {
                      return (
                        (e >>>= 0),
                        t || O(e, 8, this.length),
                        i.read(this, e, !1, 52, 8)
                      );
                    }),
                    (t.prototype.writeUIntLE = function (e, t, r, n) {
                      (e = +e),
                        (t >>>= 0),
                        (r >>>= 0),
                        n || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                      var i = 1,
                        o = 0;
                      for (this[t] = 255 & e; ++o < r && (i *= 256); )
                        this[t + o] = (e / i) & 255;
                      return t + r;
                    }),
                    (t.prototype.writeUIntBE = function (e, t, r, n) {
                      (e = +e),
                        (t >>>= 0),
                        (r >>>= 0),
                        n || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                      var i = r - 1,
                        o = 1;
                      for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                        this[t + i] = (e / o) & 255;
                      return t + r;
                    }),
                    (t.prototype.writeUInt8 = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 1, 255, 0),
                        (this[t] = 255 & e),
                        t + 1
                      );
                    }),
                    (t.prototype.writeUInt16LE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 2, 65535, 0),
                        (this[t] = 255 & e),
                        (this[t + 1] = e >>> 8),
                        t + 2
                      );
                    }),
                    (t.prototype.writeUInt16BE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 2, 65535, 0),
                        (this[t] = e >>> 8),
                        (this[t + 1] = 255 & e),
                        t + 2
                      );
                    }),
                    (t.prototype.writeUInt32LE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 4, 4294967295, 0),
                        (this[t + 3] = e >>> 24),
                        (this[t + 2] = e >>> 16),
                        (this[t + 1] = e >>> 8),
                        (this[t] = 255 & e),
                        t + 4
                      );
                    }),
                    (t.prototype.writeUInt32BE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 4, 4294967295, 0),
                        (this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e),
                        t + 4
                      );
                    }),
                    (t.prototype.writeIntLE = function (e, t, r, n) {
                      if (((e = +e), (t >>>= 0), !n)) {
                        var i = Math.pow(2, 8 * r - 1);
                        P(this, e, t, r, i - 1, -i);
                      }
                      var o = 0,
                        s = 1,
                        a = 0;
                      for (this[t] = 255 & e; ++o < r && (s *= 256); )
                        e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                          (this[t + o] = (((e / s) >> 0) - a) & 255);
                      return t + r;
                    }),
                    (t.prototype.writeIntBE = function (e, t, r, n) {
                      if (((e = +e), (t >>>= 0), !n)) {
                        var i = Math.pow(2, 8 * r - 1);
                        P(this, e, t, r, i - 1, -i);
                      }
                      var o = r - 1,
                        s = 1,
                        a = 0;
                      for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                        e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                          (this[t + o] = (((e / s) >> 0) - a) & 255);
                      return t + r;
                    }),
                    (t.prototype.writeInt8 = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 1, 127, -128),
                        e < 0 && (e = 255 + e + 1),
                        (this[t] = 255 & e),
                        t + 1
                      );
                    }),
                    (t.prototype.writeInt16LE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 2, 32767, -32768),
                        (this[t] = 255 & e),
                        (this[t + 1] = e >>> 8),
                        t + 2
                      );
                    }),
                    (t.prototype.writeInt16BE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 2, 32767, -32768),
                        (this[t] = e >>> 8),
                        (this[t + 1] = 255 & e),
                        t + 2
                      );
                    }),
                    (t.prototype.writeInt32LE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 4, 2147483647, -2147483648),
                        (this[t] = 255 & e),
                        (this[t + 1] = e >>> 8),
                        (this[t + 2] = e >>> 16),
                        (this[t + 3] = e >>> 24),
                        t + 4
                      );
                    }),
                    (t.prototype.writeInt32BE = function (e, t, r) {
                      return (
                        (e = +e),
                        (t >>>= 0),
                        r || P(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        (this[t] = e >>> 24),
                        (this[t + 1] = e >>> 16),
                        (this[t + 2] = e >>> 8),
                        (this[t + 3] = 255 & e),
                        t + 4
                      );
                    }),
                    (t.prototype.writeFloatLE = function (e, t, r) {
                      return j(this, e, t, !0, r);
                    }),
                    (t.prototype.writeFloatBE = function (e, t, r) {
                      return j(this, e, t, !1, r);
                    }),
                    (t.prototype.writeDoubleLE = function (e, t, r) {
                      return T(this, e, t, !0, r);
                    }),
                    (t.prototype.writeDoubleBE = function (e, t, r) {
                      return T(this, e, t, !1, r);
                    }),
                    (t.prototype.copy = function (e, r, n, i) {
                      if (!t.isBuffer(e))
                        throw new TypeError("argument should be a Buffer");
                      if (
                        (n || (n = 0),
                        i || 0 === i || (i = this.length),
                        r >= e.length && (r = e.length),
                        r || (r = 0),
                        i > 0 && i < n && (i = n),
                        i === n)
                      )
                        return 0;
                      if (0 === e.length || 0 === this.length) return 0;
                      if (r < 0)
                        throw new RangeError("targetStart out of bounds");
                      if (n < 0 || n >= this.length)
                        throw new RangeError("Index out of range");
                      if (i < 0)
                        throw new RangeError("sourceEnd out of bounds");
                      i > this.length && (i = this.length),
                        e.length - r < i - n && (i = e.length - r + n);
                      var o = i - n;
                      if (
                        this === e &&
                        "function" == typeof Uint8Array.prototype.copyWithin
                      )
                        this.copyWithin(r, n, i);
                      else if (this === e && n < r && r < i)
                        for (var s = o - 1; s >= 0; --s) e[s + r] = this[s + n];
                      else
                        Uint8Array.prototype.set.call(
                          e,
                          this.subarray(n, i),
                          r
                        );
                      return o;
                    }),
                    (t.prototype.fill = function (e, r, n, i) {
                      if ("string" == typeof e) {
                        if (
                          ("string" == typeof r
                            ? ((i = r), (r = 0), (n = this.length))
                            : "string" == typeof n &&
                              ((i = n), (n = this.length)),
                          void 0 !== i && "string" != typeof i)
                        )
                          throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !t.isEncoding(i))
                          throw new TypeError("Unknown encoding: " + i);
                        if (1 === e.length) {
                          var o = e.charCodeAt(0);
                          (("utf8" === i && o < 128) || "latin1" === i) &&
                            (e = o);
                        }
                      } else "number" == typeof e && (e &= 255);
                      if (r < 0 || this.length < r || this.length < n)
                        throw new RangeError("Out of range index");
                      if (n <= r) return this;
                      var s;
                      if (
                        ((r >>>= 0),
                        (n = void 0 === n ? this.length : n >>> 0),
                        e || (e = 0),
                        "number" == typeof e)
                      )
                        for (s = r; s < n; ++s) this[s] = e;
                      else {
                        var a = t.isBuffer(e) ? e : t.from(e, i),
                          c = a.length;
                        if (0 === c)
                          throw new TypeError(
                            'The value "' +
                              e +
                              '" is invalid for argument "value"'
                          );
                        for (s = 0; s < n - r; ++s) this[s + r] = a[s % c];
                      }
                      return this;
                    });
                  var M = /[^+/0-9A-Za-z-_]/g;
                  function R(e, t) {
                    var r;
                    t = t || 1 / 0;
                    for (
                      var n = e.length, i = null, o = [], s = 0;
                      s < n;
                      ++s
                    ) {
                      if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                          if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue;
                          }
                          if (s + 1 === n) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue;
                          }
                          i = r;
                          continue;
                        }
                        if (r < 56320) {
                          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                          continue;
                        }
                        r = 65536 + (((i - 55296) << 10) | (r - 56320));
                      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                      if (((i = null), r < 128)) {
                        if ((t -= 1) < 0) break;
                        o.push(r);
                      } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push((r >> 6) | 192, (63 & r) | 128);
                      } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(
                          (r >> 12) | 224,
                          ((r >> 6) & 63) | 128,
                          (63 & r) | 128
                        );
                      } else {
                        if (!(r < 1114112))
                          throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(
                          (r >> 18) | 240,
                          ((r >> 12) & 63) | 128,
                          ((r >> 6) & 63) | 128,
                          (63 & r) | 128
                        );
                      }
                    }
                    return o;
                  }
                  function B(e) {
                    return n.toByteArray(
                      (function (e) {
                        if (
                          (e = (e = e.split("=")[0]).trim().replace(M, ""))
                            .length < 2
                        )
                          return "";
                        for (; e.length % 4 != 0; ) e += "=";
                        return e;
                      })(e)
                    );
                  }
                  function L(e, t, r, n) {
                    for (
                      var i = 0;
                      i < n && !(i + r >= t.length || i >= e.length);
                      ++i
                    )
                      t[i + r] = e[i];
                    return i;
                  }
                  function U(e, t) {
                    return (
                      e instanceof t ||
                      (null != e &&
                        null != e.constructor &&
                        null != e.constructor.name &&
                        e.constructor.name === t.name)
                    );
                  }
                  function N(e) {
                    return e != e;
                  }
                }.call(this, e("buffer").Buffer));
              },
              { "base64-js": 10, buffer: 13, ieee754: 87 },
            ],
            14: [
              function (e, t, r) {
                (function (e) {
                  function t(e) {
                    return Object.prototype.toString.call(e);
                  }
                  (r.isArray = function (e) {
                    return Array.isArray
                      ? Array.isArray(e)
                      : "[object Array]" === t(e);
                  }),
                    (r.isBoolean = function (e) {
                      return "boolean" == typeof e;
                    }),
                    (r.isNull = function (e) {
                      return null === e;
                    }),
                    (r.isNullOrUndefined = function (e) {
                      return null == e;
                    }),
                    (r.isNumber = function (e) {
                      return "number" == typeof e;
                    }),
                    (r.isString = function (e) {
                      return "string" == typeof e;
                    }),
                    (r.isSymbol = function (e) {
                      return "symbol" == typeof e;
                    }),
                    (r.isUndefined = function (e) {
                      return void 0 === e;
                    }),
                    (r.isRegExp = function (e) {
                      return "[object RegExp]" === t(e);
                    }),
                    (r.isObject = function (e) {
                      return "object" == typeof e && null !== e;
                    }),
                    (r.isDate = function (e) {
                      return "[object Date]" === t(e);
                    }),
                    (r.isError = function (e) {
                      return "[object Error]" === t(e) || e instanceof Error;
                    }),
                    (r.isFunction = function (e) {
                      return "function" == typeof e;
                    }),
                    (r.isPrimitive = function (e) {
                      return (
                        null === e ||
                        "boolean" == typeof e ||
                        "number" == typeof e ||
                        "string" == typeof e ||
                        "symbol" == typeof e ||
                        void 0 === e
                      );
                    }),
                    (r.isBuffer = e.isBuffer);
                }.call(this, { isBuffer: e("../../is-buffer/index.js") }));
              },
              { "../../is-buffer/index.js": 89 },
            ],
            15: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("type/value/is"),
                  o = e("type/value/ensure"),
                  s = e("type/plain-function/ensure"),
                  a = e("es5-ext/object/copy"),
                  c = e("es5-ext/object/normalize-options"),
                  u = e("es5-ext/object/map"),
                  l = Function.prototype.bind,
                  f = Object.defineProperty,
                  h = Object.prototype.hasOwnProperty;
                (n = function (e, t, r) {
                  var n,
                    i = o(t) && s(t.value);
                  return (
                    delete (n = a(t)).writable,
                    delete n.value,
                    (n.get = function () {
                      return !r.overwriteDefinition && h.call(this, e)
                        ? i
                        : ((t.value = l.call(
                            i,
                            r.resolveContext ? r.resolveContext(this) : this
                          )),
                          f(this, e, t),
                          this[e]);
                    }),
                    n
                  );
                }),
                  (t.exports = function (e) {
                    var t = c(arguments[1]);
                    return (
                      i(t.resolveContext) && s(t.resolveContext),
                      u(e, function (e, r) {
                        return n(r, e, t);
                      })
                    );
                  });
              },
              {
                "es5-ext/object/copy": 41,
                "es5-ext/object/map": 49,
                "es5-ext/object/normalize-options": 50,
                "type/plain-function/ensure": 126,
                "type/value/ensure": 130,
                "type/value/is": 131,
              },
            ],
            16: [
              function (e, t, r) {
                "use strict";
                var n = e("type/value/is"),
                  i = e("type/plain-function/is"),
                  o = e("es5-ext/object/assign"),
                  s = e("es5-ext/object/normalize-options"),
                  a = e("es5-ext/string/#/contains");
                (t.exports = function (e, t) {
                  var r, i, c, u, l;
                  return (
                    arguments.length < 2 || "string" != typeof e
                      ? ((u = t), (t = e), (e = null))
                      : (u = arguments[2]),
                    n(e)
                      ? ((r = a.call(e, "c")),
                        (i = a.call(e, "e")),
                        (c = a.call(e, "w")))
                      : ((r = c = !0), (i = !1)),
                    (l = {
                      value: t,
                      configurable: r,
                      enumerable: i,
                      writable: c,
                    }),
                    u ? o(s(u), l) : l
                  );
                }).gs = function (e, t, r) {
                  var c, u, l, f;
                  return (
                    "string" != typeof e
                      ? ((l = r), (r = t), (t = e), (e = null))
                      : (l = arguments[3]),
                    n(t)
                      ? i(t)
                        ? n(r)
                          ? i(r) || ((l = r), (r = void 0))
                          : (r = void 0)
                        : ((l = t), (t = r = void 0))
                      : (t = void 0),
                    n(e)
                      ? ((c = a.call(e, "c")), (u = a.call(e, "e")))
                      : ((c = !0), (u = !1)),
                    (f = { get: t, set: r, configurable: c, enumerable: u }),
                    l ? o(s(l), f) : f
                  );
                };
              },
              {
                "es5-ext/object/assign": 38,
                "es5-ext/object/normalize-options": 50,
                "es5-ext/string/#/contains": 57,
                "type/plain-function/is": 127,
                "type/value/is": 131,
              },
            ],
            17: [
              function (e, t, r) {
                (function (n) {
                  (r.log = function (...e) {
                    return (
                      "object" == typeof console &&
                      console.log &&
                      console.log(...e)
                    );
                  }),
                    (r.formatArgs = function (e) {
                      if (
                        ((e[0] =
                          (this.useColors ? "%c" : "") +
                          this.namespace +
                          (this.useColors ? " %c" : " ") +
                          e[0] +
                          (this.useColors ? "%c " : " ") +
                          "+" +
                          t.exports.humanize(this.diff)),
                        !this.useColors)
                      )
                        return;
                      const r = "color: " + this.color;
                      e.splice(1, 0, r, "color: inherit");
                      let n = 0,
                        i = 0;
                      e[0].replace(/%[a-zA-Z%]/g, (e) => {
                        "%%" !== e && (n++, "%c" === e && (i = n));
                      }),
                        e.splice(i, 0, r);
                    }),
                    (r.save = function (e) {
                      try {
                        e
                          ? r.storage.setItem("debug", e)
                          : r.storage.removeItem("debug");
                      } catch (e) {}
                    }),
                    (r.load = function () {
                      let e;
                      try {
                        e = r.storage.getItem("debug");
                      } catch (e) {}
                      return (
                        !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e
                      );
                    }),
                    (r.useColors = function () {
                      return (
                        !(
                          "undefined" == typeof window ||
                          !window.process ||
                          ("renderer" !== window.process.type &&
                            !window.process.__nwjs)
                        ) ||
                        (("undefined" == typeof navigator ||
                          !navigator.userAgent ||
                          !navigator.userAgent
                            .toLowerCase()
                            .match(/(edge|trident)\/(\d+)/)) &&
                          (("undefined" != typeof document &&
                            document.documentElement &&
                            document.documentElement.style &&
                            document.documentElement.style.WebkitAppearance) ||
                            ("undefined" != typeof window &&
                              window.console &&
                              (window.console.firebug ||
                                (window.console.exception &&
                                  window.console.table))) ||
                            ("undefined" != typeof navigator &&
                              navigator.userAgent &&
                              navigator.userAgent
                                .toLowerCase()
                                .match(/firefox\/(\d+)/) &&
                              parseInt(RegExp.$1, 10) >= 31) ||
                            ("undefined" != typeof navigator &&
                              navigator.userAgent &&
                              navigator.userAgent
                                .toLowerCase()
                                .match(/applewebkit\/(\d+)/))))
                      );
                    }),
                    (r.storage = (function () {
                      try {
                        return localStorage;
                      } catch (e) {}
                    })()),
                    (r.colors = [
                      "#0000CC",
                      "#0000FF",
                      "#0033CC",
                      "#0033FF",
                      "#0066CC",
                      "#0066FF",
                      "#0099CC",
                      "#0099FF",
                      "#00CC00",
                      "#00CC33",
                      "#00CC66",
                      "#00CC99",
                      "#00CCCC",
                      "#00CCFF",
                      "#3300CC",
                      "#3300FF",
                      "#3333CC",
                      "#3333FF",
                      "#3366CC",
                      "#3366FF",
                      "#3399CC",
                      "#3399FF",
                      "#33CC00",
                      "#33CC33",
                      "#33CC66",
                      "#33CC99",
                      "#33CCCC",
                      "#33CCFF",
                      "#6600CC",
                      "#6600FF",
                      "#6633CC",
                      "#6633FF",
                      "#66CC00",
                      "#66CC33",
                      "#9900CC",
                      "#9900FF",
                      "#9933CC",
                      "#9933FF",
                      "#99CC00",
                      "#99CC33",
                      "#CC0000",
                      "#CC0033",
                      "#CC0066",
                      "#CC0099",
                      "#CC00CC",
                      "#CC00FF",
                      "#CC3300",
                      "#CC3333",
                      "#CC3366",
                      "#CC3399",
                      "#CC33CC",
                      "#CC33FF",
                      "#CC6600",
                      "#CC6633",
                      "#CC9900",
                      "#CC9933",
                      "#CCCC00",
                      "#CCCC33",
                      "#FF0000",
                      "#FF0033",
                      "#FF0066",
                      "#FF0099",
                      "#FF00CC",
                      "#FF00FF",
                      "#FF3300",
                      "#FF3333",
                      "#FF3366",
                      "#FF3399",
                      "#FF33CC",
                      "#FF33FF",
                      "#FF6600",
                      "#FF6633",
                      "#FF9900",
                      "#FF9933",
                      "#FFCC00",
                      "#FFCC33",
                    ]),
                    (t.exports = e("./common")(r));
                  const { formatters: i } = t.exports;
                  i.j = function (e) {
                    try {
                      return JSON.stringify(e);
                    } catch (e) {
                      return "[UnexpectedJSONParseError]: " + e.message;
                    }
                  };
                }.call(this, e("_process")));
              },
              { "./common": 18, _process: 101 },
            ],
            18: [
              function (e, t, r) {
                t.exports = function (t) {
                  function r(e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++)
                      (t = (t << 5) - t + e.charCodeAt(r)), (t |= 0);
                    return n.colors[Math.abs(t) % n.colors.length];
                  }
                  function n(e) {
                    let t;
                    function s(...e) {
                      if (!s.enabled) return;
                      const r = s,
                        i = Number(new Date()),
                        o = i - (t || i);
                      (r.diff = o),
                        (r.prev = t),
                        (r.curr = i),
                        (t = i),
                        (e[0] = n.coerce(e[0])),
                        "string" != typeof e[0] && e.unshift("%O");
                      let a = 0;
                      (e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
                        if ("%%" === t) return t;
                        a++;
                        const o = n.formatters[i];
                        if ("function" == typeof o) {
                          const n = e[a];
                          (t = o.call(r, n)), e.splice(a, 1), a--;
                        }
                        return t;
                      })),
                        n.formatArgs.call(r, e),
                        (r.log || n.log).apply(r, e);
                    }
                    return (
                      (s.namespace = e),
                      (s.enabled = n.enabled(e)),
                      (s.useColors = n.useColors()),
                      (s.color = r(e)),
                      (s.destroy = i),
                      (s.extend = o),
                      "function" == typeof n.init && n.init(s),
                      n.instances.push(s),
                      s
                    );
                  }
                  function i() {
                    const e = n.instances.indexOf(this);
                    return -1 !== e && (n.instances.splice(e, 1), !0);
                  }
                  function o(e, t) {
                    const r = n(this.namespace + (void 0 === t ? ":" : t) + e);
                    return (r.log = this.log), r;
                  }
                  function s(e) {
                    return e
                      .toString()
                      .substring(2, e.toString().length - 2)
                      .replace(/\.\*\?$/, "*");
                  }
                  return (
                    (n.debug = n),
                    (n.default = n),
                    (n.coerce = function (e) {
                      return e instanceof Error ? e.stack || e.message : e;
                    }),
                    (n.disable = function () {
                      const e = [
                        ...n.names.map(s),
                        ...n.skips.map(s).map((e) => "-" + e),
                      ].join(",");
                      return n.enable(""), e;
                    }),
                    (n.enable = function (e) {
                      let t;
                      n.save(e), (n.names = []), (n.skips = []);
                      const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        i = r.length;
                      for (t = 0; t < i; t++)
                        r[t] &&
                          ("-" === (e = r[t].replace(/\*/g, ".*?"))[0]
                            ? n.skips.push(new RegExp("^" + e.substr(1) + "$"))
                            : n.names.push(new RegExp("^" + e + "$")));
                      for (t = 0; t < n.instances.length; t++) {
                        const e = n.instances[t];
                        e.enabled = n.enabled(e.namespace);
                      }
                    }),
                    (n.enabled = function (e) {
                      if ("*" === e[e.length - 1]) return !0;
                      let t, r;
                      for (t = 0, r = n.skips.length; t < r; t++)
                        if (n.skips[t].test(e)) return !1;
                      for (t = 0, r = n.names.length; t < r; t++)
                        if (n.names[t].test(e)) return !0;
                      return !1;
                    }),
                    (n.humanize = e("ms")),
                    Object.keys(t).forEach((e) => {
                      n[e] = t[e];
                    }),
                    (n.instances = []),
                    (n.names = []),
                    (n.skips = []),
                    (n.formatters = {}),
                    (n.selectColor = r),
                    n.enable(n.load()),
                    n
                  );
                };
              },
              { ms: 98 },
            ],
            19: [
              function (e, t, r) {
                (function (r, n) {
                  var i = e("readable-stream"),
                    o = e("end-of-stream"),
                    s = e("inherits"),
                    a = e("stream-shift"),
                    c =
                      n.from && n.from !== Uint8Array.from
                        ? n.from([0])
                        : new n([0]),
                    u = function (e, t) {
                      e._corked ? e.once("uncork", t) : t();
                    },
                    l = function (e, t) {
                      return function (r) {
                        r
                          ? (function (e, t) {
                              e._autoDestroy && e.destroy(t);
                            })(e, "premature close" === r.message ? null : r)
                          : t && !e._ended && e.end();
                      };
                    },
                    f = function (e, t, r) {
                      if (!(this instanceof f)) return new f(e, t, r);
                      i.Duplex.call(this, r),
                        (this._writable = null),
                        (this._readable = null),
                        (this._readable2 = null),
                        (this._autoDestroy = !r || !1 !== r.autoDestroy),
                        (this._forwardDestroy = !r || !1 !== r.destroy),
                        (this._forwardEnd = !r || !1 !== r.end),
                        (this._corked = 1),
                        (this._ondrain = null),
                        (this._drained = !1),
                        (this._forwarding = !1),
                        (this._unwrite = null),
                        (this._unread = null),
                        (this._ended = !1),
                        (this.destroyed = !1),
                        e && this.setWritable(e),
                        t && this.setReadable(t);
                    };
                  s(f, i.Duplex),
                    (f.obj = function (e, t, r) {
                      return (
                        r || (r = {}),
                        (r.objectMode = !0),
                        (r.highWaterMark = 16),
                        new f(e, t, r)
                      );
                    }),
                    (f.prototype.cork = function () {
                      1 == ++this._corked && this.emit("cork");
                    }),
                    (f.prototype.uncork = function () {
                      this._corked &&
                        0 == --this._corked &&
                        this.emit("uncork");
                    }),
                    (f.prototype.setWritable = function (e) {
                      if ((this._unwrite && this._unwrite(), this.destroyed))
                        e && e.destroy && e.destroy();
                      else if (null !== e && !1 !== e) {
                        var t = this,
                          n = o(
                            e,
                            { writable: !0, readable: !1 },
                            l(this, this._forwardEnd)
                          ),
                          i = function () {
                            var e = t._ondrain;
                            (t._ondrain = null), e && e();
                          };
                        this._unwrite && r.nextTick(i),
                          (this._writable = e),
                          this._writable.on("drain", i),
                          (this._unwrite = function () {
                            t._writable.removeListener("drain", i), n();
                          }),
                          this.uncork();
                      } else this.end();
                    }),
                    (f.prototype.setReadable = function (e) {
                      if ((this._unread && this._unread(), this.destroyed))
                        e && e.destroy && e.destroy();
                      else {
                        if (null === e || !1 === e)
                          return this.push(null), void this.resume();
                        var t,
                          r = this,
                          n = o(e, { writable: !1, readable: !0 }, l(this)),
                          s = function () {
                            r._forward();
                          },
                          a = function () {
                            r.push(null);
                          };
                        (this._drained = !0),
                          (this._readable = e),
                          (this._readable2 = e._readableState
                            ? e
                            : ((t = e),
                              new i.Readable({
                                objectMode: !0,
                                highWaterMark: 16,
                              }).wrap(t))),
                          this._readable2.on("readable", s),
                          this._readable2.on("end", a),
                          (this._unread = function () {
                            r._readable2.removeListener("readable", s),
                              r._readable2.removeListener("end", a),
                              n();
                          }),
                          this._forward();
                      }
                    }),
                    (f.prototype._read = function () {
                      (this._drained = !0), this._forward();
                    }),
                    (f.prototype._forward = function () {
                      if (
                        !this._forwarding &&
                        this._readable2 &&
                        this._drained
                      ) {
                        var e;
                        for (
                          this._forwarding = !0;
                          this._drained && null !== (e = a(this._readable2));

                        )
                          this.destroyed || (this._drained = this.push(e));
                        this._forwarding = !1;
                      }
                    }),
                    (f.prototype.destroy = function (e) {
                      if (!this.destroyed) {
                        this.destroyed = !0;
                        var t = this;
                        r.nextTick(function () {
                          t._destroy(e);
                        });
                      }
                    }),
                    (f.prototype._destroy = function (e) {
                      if (e) {
                        var t = this._ondrain;
                        (this._ondrain = null),
                          t ? t(e) : this.emit("error", e);
                      }
                      this._forwardDestroy &&
                        (this._readable &&
                          this._readable.destroy &&
                          this._readable.destroy(),
                        this._writable &&
                          this._writable.destroy &&
                          this._writable.destroy()),
                        this.emit("close");
                    }),
                    (f.prototype._write = function (e, t, r) {
                      return this.destroyed
                        ? r()
                        : this._corked
                        ? u(this, this._write.bind(this, e, t, r))
                        : e === c
                        ? this._finish(r)
                        : this._writable
                        ? void (!1 === this._writable.write(e)
                            ? (this._ondrain = r)
                            : r())
                        : r();
                    }),
                    (f.prototype._finish = function (e) {
                      var t = this;
                      this.emit("preend"),
                        u(this, function () {
                          var r, n;
                          (r = t._forwardEnd && t._writable),
                            (n = function () {
                              !1 === t._writableState.prefinished &&
                                (t._writableState.prefinished = !0),
                                t.emit("prefinish"),
                                u(t, e);
                            }),
                            r
                              ? r._writableState && r._writableState.finished
                                ? n()
                                : r._writableState
                                ? r.end(n)
                                : (r.end(), n())
                              : n();
                        });
                    }),
                    (f.prototype.end = function (e, t, r) {
                      return "function" == typeof e
                        ? this.end(null, null, e)
                        : "function" == typeof t
                        ? this.end(e, null, t)
                        : ((this._ended = !0),
                          e && this.write(e),
                          this._writableState.ending || this.write(c),
                          i.Writable.prototype.end.call(this, r));
                    }),
                    (t.exports = f);
                }.call(this, e("_process"), e("buffer").Buffer));
              },
              {
                _process: 101,
                buffer: 13,
                "end-of-stream": 20,
                inherits: 88,
                "readable-stream": 115,
                "stream-shift": 118,
              },
            ],
            20: [
              function (e, t, r) {
                (function (r) {
                  var n = e("once"),
                    i = function () {},
                    o = function (e, t, s) {
                      if ("function" == typeof t) return o(e, null, t);
                      t || (t = {}), (s = n(s || i));
                      var a = e._writableState,
                        c = e._readableState,
                        u = t.readable || (!1 !== t.readable && e.readable),
                        l = t.writable || (!1 !== t.writable && e.writable),
                        f = !1,
                        h = function () {
                          e.writable || p();
                        },
                        p = function () {
                          (l = !1), u || s.call(e);
                        },
                        d = function () {
                          (u = !1), l || s.call(e);
                        },
                        g = function (t) {
                          s.call(
                            e,
                            t ? new Error("exited with error code: " + t) : null
                          );
                        },
                        m = function (t) {
                          s.call(e, t);
                        },
                        y = function () {
                          r.nextTick(b);
                        },
                        b = function () {
                          if (!f)
                            return (!u || (c && c.ended && !c.destroyed)) &&
                              (!l || (a && a.ended && !a.destroyed))
                              ? void 0
                              : s.call(e, new Error("premature close"));
                        },
                        v = function () {
                          e.req.on("finish", p);
                        };
                      return (
                        (function (e) {
                          return e.setHeader && "function" == typeof e.abort;
                        })(e)
                          ? (e.on("complete", p),
                            e.on("abort", y),
                            e.req ? v() : e.on("request", v))
                          : l && !a && (e.on("end", h), e.on("close", h)),
                        (function (e) {
                          return (
                            e.stdio &&
                            Array.isArray(e.stdio) &&
                            3 === e.stdio.length
                          );
                        })(e) && e.on("exit", g),
                        e.on("end", d),
                        e.on("finish", p),
                        !1 !== t.error && e.on("error", m),
                        e.on("close", y),
                        function () {
                          (f = !0),
                            e.removeListener("complete", p),
                            e.removeListener("abort", y),
                            e.removeListener("request", v),
                            e.req && e.req.removeListener("finish", p),
                            e.removeListener("end", h),
                            e.removeListener("close", h),
                            e.removeListener("finish", p),
                            e.removeListener("exit", g),
                            e.removeListener("end", d),
                            e.removeListener("error", m),
                            e.removeListener("close", y);
                        }
                      );
                    };
                  t.exports = o;
                }.call(this, e("_process")));
              },
              { _process: 101, once: 99 },
            ],
            21: [
              function (e, t, r) {
                "use strict";
                var n = e("../../object/valid-value");
                t.exports = function () {
                  return (n(this).length = 0), this;
                };
              },
              { "../../object/valid-value": 56 },
            ],
            22: [
              function (e, t, r) {
                "use strict";
                var n = e("../../number/is-nan"),
                  i = e("../../number/to-pos-integer"),
                  o = e("../../object/valid-value"),
                  s = Array.prototype.indexOf,
                  a = Object.prototype.hasOwnProperty,
                  c = Math.abs,
                  u = Math.floor;
                t.exports = function (e) {
                  var t, r, l, f;
                  if (!n(e)) return s.apply(this, arguments);
                  for (
                    r = i(o(this).length),
                      l = arguments[1],
                      t = l =
                        isNaN(l) ? 0 : l >= 0 ? u(l) : i(this.length) - u(c(l));
                    t < r;
                    ++t
                  )
                    if (a.call(this, t) && ((f = this[t]), n(f))) return t;
                  return -1;
                };
              },
              {
                "../../number/is-nan": 32,
                "../../number/to-pos-integer": 36,
                "../../object/valid-value": 56,
              },
            ],
            23: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")() ? Array.from : e("./shim");
              },
              { "./is-implemented": 24, "./shim": 25 },
            ],
            24: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  var e,
                    t,
                    r = Array.from;
                  return (
                    "function" == typeof r &&
                    ((t = r((e = ["raz", "dwa"]))),
                    Boolean(t && t !== e && "dwa" === t[1]))
                  );
                };
              },
              {},
            ],
            25: [
              function (e, t, r) {
                "use strict";
                var n = e("es6-symbol").iterator,
                  i = e("../../function/is-arguments"),
                  o = e("../../function/is-function"),
                  s = e("../../number/to-pos-integer"),
                  a = e("../../object/valid-callable"),
                  c = e("../../object/valid-value"),
                  u = e("../../object/is-value"),
                  l = e("../../string/is-string"),
                  f = Array.isArray,
                  h = Function.prototype.call,
                  p = {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: null,
                  },
                  d = Object.defineProperty;
                t.exports = function (e) {
                  var t,
                    r,
                    g,
                    m,
                    y,
                    b,
                    v,
                    _,
                    w,
                    S,
                    x = arguments[1],
                    k = arguments[2];
                  if (
                    ((e = Object(c(e))),
                    u(x) && a(x),
                    this && this !== Array && o(this))
                  )
                    t = this;
                  else {
                    if (!x) {
                      if (i(e))
                        return 1 !== (y = e.length)
                          ? Array.apply(null, e)
                          : (((m = new Array(1))[0] = e[0]), m);
                      if (f(e)) {
                        for (m = new Array((y = e.length)), r = 0; r < y; ++r)
                          m[r] = e[r];
                        return m;
                      }
                    }
                    m = [];
                  }
                  if (!f(e))
                    if (void 0 !== (w = e[n])) {
                      for (
                        v = a(w).call(e),
                          t && (m = new t()),
                          _ = v.next(),
                          r = 0;
                        !_.done;

                      )
                        (S = x ? h.call(x, k, _.value, r) : _.value),
                          t ? ((p.value = S), d(m, r, p)) : (m[r] = S),
                          (_ = v.next()),
                          ++r;
                      y = r;
                    } else if (l(e)) {
                      for (
                        y = e.length, t && (m = new t()), r = 0, g = 0;
                        r < y;
                        ++r
                      )
                        (S = e[r]),
                          r + 1 < y &&
                            (b = S.charCodeAt(0)) >= 55296 &&
                            b <= 56319 &&
                            (S += e[++r]),
                          (S = x ? h.call(x, k, S, g) : S),
                          t ? ((p.value = S), d(m, g, p)) : (m[g] = S),
                          ++g;
                      y = g;
                    }
                  if (void 0 === y)
                    for (
                      y = s(e.length), t && (m = new t(y)), r = 0;
                      r < y;
                      ++r
                    )
                      (S = x ? h.call(x, k, e[r], r) : e[r]),
                        t ? ((p.value = S), d(m, r, p)) : (m[r] = S);
                  return t && ((p.value = null), (m.length = y)), m;
                };
              },
              {
                "../../function/is-arguments": 26,
                "../../function/is-function": 27,
                "../../number/to-pos-integer": 36,
                "../../object/is-value": 45,
                "../../object/valid-callable": 55,
                "../../object/valid-value": 56,
                "../../string/is-string": 60,
                "es6-symbol": 74,
              },
            ],
            26: [
              function (e, t, r) {
                "use strict";
                var n = Object.prototype.toString,
                  i = n.call(
                    (function () {
                      return arguments;
                    })()
                  );
                t.exports = function (e) {
                  return n.call(e) === i;
                };
              },
              {},
            ],
            27: [
              function (e, t, r) {
                "use strict";
                var n = Object.prototype.toString,
                  i = RegExp.prototype.test.bind(
                    /^[object [A-Za-z0-9]*Function]$/
                  );
                t.exports = function (e) {
                  return "function" == typeof e && i(n.call(e));
                };
              },
              {},
            ],
            28: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {};
              },
              {},
            ],
            29: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")() ? Math.sign : e("./shim");
              },
              { "./is-implemented": 30, "./shim": 31 },
            ],
            30: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  var e = Math.sign;
                  return "function" == typeof e && 1 === e(10) && -1 === e(-20);
                };
              },
              {},
            ],
            31: [
              function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                  return (
                    (e = Number(e)), isNaN(e) || 0 === e ? e : e > 0 ? 1 : -1
                  );
                };
              },
              {},
            ],
            32: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")()
                  ? Number.isNaN
                  : e("./shim");
              },
              { "./is-implemented": 33, "./shim": 34 },
            ],
            33: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  var e = Number.isNaN;
                  return "function" == typeof e && !e({}) && e(NaN) && !e(34);
                };
              },
              {},
            ],
            34: [
              function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                  return e != e;
                };
              },
              {},
            ],
            35: [
              function (e, t, r) {
                "use strict";
                var n = e("../math/sign"),
                  i = Math.abs,
                  o = Math.floor;
                t.exports = function (e) {
                  return isNaN(e)
                    ? 0
                    : 0 !== (e = Number(e)) && isFinite(e)
                    ? n(e) * o(i(e))
                    : e;
                };
              },
              { "../math/sign": 29 },
            ],
            36: [
              function (e, t, r) {
                "use strict";
                var n = e("./to-integer"),
                  i = Math.max;
                t.exports = function (e) {
                  return i(0, n(e));
                };
              },
              { "./to-integer": 35 },
            ],
            37: [
              function (e, t, r) {
                "use strict";
                var n = e("./valid-callable"),
                  i = e("./valid-value"),
                  o = Function.prototype.bind,
                  s = Function.prototype.call,
                  a = Object.keys,
                  c = Object.prototype.propertyIsEnumerable;
                t.exports = function (e, t) {
                  return function (r, u) {
                    var l,
                      f = arguments[2],
                      h = arguments[3];
                    return (
                      (r = Object(i(r))),
                      n(u),
                      (l = a(r)),
                      h &&
                        l.sort("function" == typeof h ? o.call(h, r) : void 0),
                      "function" != typeof e && (e = l[e]),
                      s.call(e, l, function (e, n) {
                        return c.call(r, e) ? s.call(u, f, r[e], e, r, n) : t;
                      })
                    );
                  };
                };
              },
              { "./valid-callable": 55, "./valid-value": 56 },
            ],
            38: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")()
                  ? Object.assign
                  : e("./shim");
              },
              { "./is-implemented": 39, "./shim": 40 },
            ],
            39: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  var e,
                    t = Object.assign;
                  return (
                    "function" == typeof t &&
                    (t((e = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
                    e.foo + e.bar + e.trzy === "razdwatrzy")
                  );
                };
              },
              {},
            ],
            40: [
              function (e, t, r) {
                "use strict";
                var n = e("../keys"),
                  i = e("../valid-value"),
                  o = Math.max;
                t.exports = function (e, t) {
                  var r,
                    s,
                    a,
                    c = o(arguments.length, 2);
                  for (
                    e = Object(i(e)),
                      a = function (n) {
                        try {
                          e[n] = t[n];
                        } catch (e) {
                          r || (r = e);
                        }
                      },
                      s = 1;
                    s < c;
                    ++s
                  )
                    n((t = arguments[s])).forEach(a);
                  if (void 0 !== r) throw r;
                  return e;
                };
              },
              { "../keys": 46, "../valid-value": 56 },
            ],
            41: [
              function (e, t, r) {
                "use strict";
                var n = e("../array/from"),
                  i = e("./assign"),
                  o = e("./valid-value");
                t.exports = function (e) {
                  var t = Object(o(e)),
                    r = arguments[1],
                    s = Object(arguments[2]);
                  if (t !== e && !r) return t;
                  var a = {};
                  return (
                    r
                      ? n(r, function (t) {
                          (s.ensure || t in e) && (a[t] = e[t]);
                        })
                      : i(a, e),
                    a
                  );
                };
              },
              { "../array/from": 23, "./assign": 38, "./valid-value": 56 },
            ],
            42: [
              function (e, t, r) {
                "use strict";
                var n,
                  i,
                  o,
                  s,
                  a = Object.create;
                e("./set-prototype-of/is-implemented")() ||
                  (n = e("./set-prototype-of/shim")),
                  (t.exports = n
                    ? 1 !== n.level
                      ? a
                      : ((i = {}),
                        (o = {}),
                        (s = {
                          configurable: !1,
                          enumerable: !1,
                          writable: !0,
                          value: void 0,
                        }),
                        Object.getOwnPropertyNames(Object.prototype).forEach(
                          function (e) {
                            o[e] =
                              "__proto__" !== e
                                ? s
                                : {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: void 0,
                                  };
                          }
                        ),
                        Object.defineProperties(i, o),
                        Object.defineProperty(n, "nullPolyfill", {
                          configurable: !1,
                          enumerable: !1,
                          writable: !1,
                          value: i,
                        }),
                        function (e, t) {
                          return a(null === e ? i : e, t);
                        })
                    : a);
              },
              {
                "./set-prototype-of/is-implemented": 53,
                "./set-prototype-of/shim": 54,
              },
            ],
            43: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./_iterate")("forEach");
              },
              { "./_iterate": 37 },
            ],
            44: [
              function (e, t, r) {
                "use strict";
                var n = e("./is-value"),
                  i = { function: !0, object: !0 };
                t.exports = function (e) {
                  return (n(e) && i[typeof e]) || !1;
                };
              },
              { "./is-value": 45 },
            ],
            45: [
              function (e, t, r) {
                "use strict";
                var n = e("../function/noop")();
                t.exports = function (e) {
                  return e !== n && null !== e;
                };
              },
              { "../function/noop": 28 },
            ],
            46: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")() ? Object.keys : e("./shim");
              },
              { "./is-implemented": 47, "./shim": 48 },
            ],
            47: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  try {
                    return Object.keys("primitive"), !0;
                  } catch (e) {
                    return !1;
                  }
                };
              },
              {},
            ],
            48: [
              function (e, t, r) {
                "use strict";
                var n = e("../is-value"),
                  i = Object.keys;
                t.exports = function (e) {
                  return i(n(e) ? Object(e) : e);
                };
              },
              { "../is-value": 45 },
            ],
            49: [
              function (e, t, r) {
                "use strict";
                var n = e("./valid-callable"),
                  i = e("./for-each"),
                  o = Function.prototype.call;
                t.exports = function (e, t) {
                  var r = {},
                    s = arguments[2];
                  return (
                    n(t),
                    i(e, function (e, n, i, a) {
                      r[n] = o.call(t, s, e, n, i, a);
                    }),
                    r
                  );
                };
              },
              { "./for-each": 43, "./valid-callable": 55 },
            ],
            50: [
              function (e, t, r) {
                "use strict";
                var n = e("./is-value"),
                  i = Array.prototype.forEach,
                  o = Object.create,
                  s = function (e, t) {
                    var r;
                    for (r in e) t[r] = e[r];
                  };
                t.exports = function (e) {
                  var t = o(null);
                  return (
                    i.call(arguments, function (e) {
                      n(e) && s(Object(e), t);
                    }),
                    t
                  );
                };
              },
              { "./is-value": 45 },
            ],
            51: [
              function (e, t, r) {
                "use strict";
                var n = Array.prototype.forEach,
                  i = Object.create;
                t.exports = function (e) {
                  var t = i(null);
                  return (
                    n.call(arguments, function (e) {
                      t[e] = !0;
                    }),
                    t
                  );
                };
              },
              {},
            ],
            52: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")()
                  ? Object.setPrototypeOf
                  : e("./shim");
              },
              { "./is-implemented": 53, "./shim": 54 },
            ],
            53: [
              function (e, t, r) {
                "use strict";
                var n = Object.create,
                  i = Object.getPrototypeOf,
                  o = {};
                t.exports = function () {
                  var e = Object.setPrototypeOf,
                    t = arguments[0] || n;
                  return "function" == typeof e && i(e(t(null), o)) === o;
                };
              },
              {},
            ],
            54: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("../is-object"),
                  o = e("../valid-value"),
                  s = Object.prototype.isPrototypeOf,
                  a = Object.defineProperty,
                  c = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: void 0,
                  };
                (n = function (e, t) {
                  if ((o(e), null === t || i(t))) return e;
                  throw new TypeError("Prototype must be null or an object");
                }),
                  (t.exports = (function (e) {
                    var t, r;
                    return e
                      ? (2 === e.level
                          ? e.set
                            ? ((r = e.set),
                              (t = function (e, t) {
                                return r.call(n(e, t), t), e;
                              }))
                            : (t = function (e, t) {
                                return (n(e, t).__proto__ = t), e;
                              })
                          : (t = function e(t, r) {
                              var i;
                              return (
                                n(t, r),
                                (i = s.call(e.nullPolyfill, t)) &&
                                  delete e.nullPolyfill.__proto__,
                                null === r && (r = e.nullPolyfill),
                                (t.__proto__ = r),
                                i && a(e.nullPolyfill, "__proto__", c),
                                t
                              );
                            }),
                        Object.defineProperty(t, "level", {
                          configurable: !1,
                          enumerable: !1,
                          writable: !1,
                          value: e.level,
                        }))
                      : null;
                  })(
                    (function () {
                      var e,
                        t = Object.create(null),
                        r = {},
                        n = Object.getOwnPropertyDescriptor(
                          Object.prototype,
                          "__proto__"
                        );
                      if (n) {
                        try {
                          (e = n.set).call(t, r);
                        } catch (e) {}
                        if (Object.getPrototypeOf(t) === r)
                          return { set: e, level: 2 };
                      }
                      return (
                        (t.__proto__ = r),
                        Object.getPrototypeOf(t) === r
                          ? { level: 2 }
                          : (((t = {}).__proto__ = r),
                            Object.getPrototypeOf(t) === r && { level: 1 })
                      );
                    })()
                  )),
                  e("../create");
              },
              { "../create": 42, "../is-object": 44, "../valid-value": 56 },
            ],
            55: [
              function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                  if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                  return e;
                };
              },
              {},
            ],
            56: [
              function (e, t, r) {
                "use strict";
                var n = e("./is-value");
                t.exports = function (e) {
                  if (!n(e))
                    throw new TypeError("Cannot use null or undefined");
                  return e;
                };
              },
              { "./is-value": 45 },
            ],
            57: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")()
                  ? String.prototype.contains
                  : e("./shim");
              },
              { "./is-implemented": 58, "./shim": 59 },
            ],
            58: [
              function (e, t, r) {
                "use strict";
                var n = "razdwatrzy";
                t.exports = function () {
                  return (
                    "function" == typeof n.contains &&
                    !0 === n.contains("dwa") &&
                    !1 === n.contains("foo")
                  );
                };
              },
              {},
            ],
            59: [
              function (e, t, r) {
                "use strict";
                var n = String.prototype.indexOf;
                t.exports = function (e) {
                  return n.call(this, e, arguments[1]) > -1;
                };
              },
              {},
            ],
            60: [
              function (e, t, r) {
                "use strict";
                var n = Object.prototype.toString,
                  i = n.call("");
                t.exports = function (e) {
                  return (
                    "string" == typeof e ||
                    (e &&
                      "object" == typeof e &&
                      (e instanceof String || n.call(e) === i)) ||
                    !1
                  );
                };
              },
              {},
            ],
            61: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("es5-ext/object/set-prototype-of"),
                  o = e("es5-ext/string/#/contains"),
                  s = e("d"),
                  a = e("es6-symbol"),
                  c = e("./"),
                  u = Object.defineProperty;
                (n = t.exports =
                  function (e, t) {
                    if (!(this instanceof n))
                      throw new TypeError("Constructor requires 'new'");
                    c.call(this, e),
                      (t = t
                        ? o.call(t, "key+value")
                          ? "key+value"
                          : o.call(t, "key")
                          ? "key"
                          : "value"
                        : "value"),
                      u(this, "__kind__", s("", t));
                  }),
                  i && i(n, c),
                  delete n.prototype.constructor,
                  (n.prototype = Object.create(c.prototype, {
                    _resolve: s(function (e) {
                      return "value" === this.__kind__
                        ? this.__list__[e]
                        : "key+value" === this.__kind__
                        ? [e, this.__list__[e]]
                        : e;
                    }),
                  })),
                  u(n.prototype, a.toStringTag, s("c", "Array Iterator"));
              },
              {
                "./": 64,
                d: 16,
                "es5-ext/object/set-prototype-of": 52,
                "es5-ext/string/#/contains": 57,
                "es6-symbol": 74,
              },
            ],
            62: [
              function (e, t, r) {
                "use strict";
                var n = e("es5-ext/function/is-arguments"),
                  i = e("es5-ext/object/valid-callable"),
                  o = e("es5-ext/string/is-string"),
                  s = e("./get"),
                  a = Array.isArray,
                  c = Function.prototype.call,
                  u = Array.prototype.some;
                t.exports = function (e, t) {
                  var r,
                    l,
                    f,
                    h,
                    p,
                    d,
                    g,
                    m,
                    y = arguments[2];
                  if (
                    (a(e) || n(e)
                      ? (r = "array")
                      : o(e)
                      ? (r = "string")
                      : (e = s(e)),
                    i(t),
                    (f = function () {
                      h = !0;
                    }),
                    "array" !== r)
                  )
                    if ("string" !== r)
                      for (l = e.next(); !l.done; ) {
                        if ((c.call(t, y, l.value, f), h)) return;
                        l = e.next();
                      }
                    else
                      for (
                        d = e.length, p = 0;
                        p < d &&
                        ((g = e[p]),
                        p + 1 < d &&
                          (m = g.charCodeAt(0)) >= 55296 &&
                          m <= 56319 &&
                          (g += e[++p]),
                        c.call(t, y, g, f),
                        !h);
                        ++p
                      );
                  else
                    u.call(e, function (e) {
                      return c.call(t, y, e, f), h;
                    });
                };
              },
              {
                "./get": 63,
                "es5-ext/function/is-arguments": 26,
                "es5-ext/object/valid-callable": 55,
                "es5-ext/string/is-string": 60,
              },
            ],
            63: [
              function (e, t, r) {
                "use strict";
                var n = e("es5-ext/function/is-arguments"),
                  i = e("es5-ext/string/is-string"),
                  o = e("./array"),
                  s = e("./string"),
                  a = e("./valid-iterable"),
                  c = e("es6-symbol").iterator;
                t.exports = function (e) {
                  return "function" == typeof a(e)[c]
                    ? e[c]()
                    : n(e)
                    ? new o(e)
                    : i(e)
                    ? new s(e)
                    : new o(e);
                };
              },
              {
                "./array": 61,
                "./string": 66,
                "./valid-iterable": 67,
                "es5-ext/function/is-arguments": 26,
                "es5-ext/string/is-string": 60,
                "es6-symbol": 74,
              },
            ],
            64: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("es5-ext/array/#/clear"),
                  o = e("es5-ext/object/assign"),
                  s = e("es5-ext/object/valid-callable"),
                  a = e("es5-ext/object/valid-value"),
                  c = e("d"),
                  u = e("d/auto-bind"),
                  l = e("es6-symbol"),
                  f = Object.defineProperty,
                  h = Object.defineProperties;
                (t.exports = n =
                  function (e, t) {
                    if (!(this instanceof n))
                      throw new TypeError("Constructor requires 'new'");
                    h(this, {
                      __list__: c("w", a(e)),
                      __context__: c("w", t),
                      __nextIndex__: c("w", 0),
                    }),
                      t &&
                        (s(t.on),
                        t.on("_add", this._onAdd),
                        t.on("_delete", this._onDelete),
                        t.on("_clear", this._onClear));
                  }),
                  delete n.prototype.constructor,
                  h(
                    n.prototype,
                    o(
                      {
                        _next: c(function () {
                          var e;
                          if (this.__list__)
                            return this.__redo__ &&
                              void 0 !== (e = this.__redo__.shift())
                              ? e
                              : this.__nextIndex__ < this.__list__.length
                              ? this.__nextIndex__++
                              : void this._unBind();
                        }),
                        next: c(function () {
                          return this._createResult(this._next());
                        }),
                        _createResult: c(function (e) {
                          return void 0 === e
                            ? { done: !0, value: void 0 }
                            : { done: !1, value: this._resolve(e) };
                        }),
                        _resolve: c(function (e) {
                          return this.__list__[e];
                        }),
                        _unBind: c(function () {
                          (this.__list__ = null),
                            delete this.__redo__,
                            this.__context__ &&
                              (this.__context__.off("_add", this._onAdd),
                              this.__context__.off("_delete", this._onDelete),
                              this.__context__.off("_clear", this._onClear),
                              (this.__context__ = null));
                        }),
                        toString: c(function () {
                          return (
                            "[object " + (this[l.toStringTag] || "Object") + "]"
                          );
                        }),
                      },
                      u({
                        _onAdd: c(function (e) {
                          e >= this.__nextIndex__ ||
                            (++this.__nextIndex__,
                            this.__redo__
                              ? (this.__redo__.forEach(function (t, r) {
                                  t >= e && (this.__redo__[r] = ++t);
                                }, this),
                                this.__redo__.push(e))
                              : f(this, "__redo__", c("c", [e])));
                        }),
                        _onDelete: c(function (e) {
                          var t;
                          e >= this.__nextIndex__ ||
                            (--this.__nextIndex__,
                            this.__redo__ &&
                              (-1 !== (t = this.__redo__.indexOf(e)) &&
                                this.__redo__.splice(t, 1),
                              this.__redo__.forEach(function (t, r) {
                                t > e && (this.__redo__[r] = --t);
                              }, this)));
                        }),
                        _onClear: c(function () {
                          this.__redo__ && i.call(this.__redo__),
                            (this.__nextIndex__ = 0);
                        }),
                      })
                    )
                  ),
                  f(
                    n.prototype,
                    l.iterator,
                    c(function () {
                      return this;
                    })
                  );
              },
              {
                d: 16,
                "d/auto-bind": 15,
                "es5-ext/array/#/clear": 21,
                "es5-ext/object/assign": 38,
                "es5-ext/object/valid-callable": 55,
                "es5-ext/object/valid-value": 56,
                "es6-symbol": 74,
              },
            ],
            65: [
              function (e, t, r) {
                "use strict";
                var n = e("es5-ext/function/is-arguments"),
                  i = e("es5-ext/object/is-value"),
                  o = e("es5-ext/string/is-string"),
                  s = e("es6-symbol").iterator,
                  a = Array.isArray;
                t.exports = function (e) {
                  return !(
                    !i(e) ||
                    (!a(e) && !o(e) && !n(e) && "function" != typeof e[s])
                  );
                };
              },
              {
                "es5-ext/function/is-arguments": 26,
                "es5-ext/object/is-value": 45,
                "es5-ext/string/is-string": 60,
                "es6-symbol": 74,
              },
            ],
            66: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("es5-ext/object/set-prototype-of"),
                  o = e("d"),
                  s = e("es6-symbol"),
                  a = e("./"),
                  c = Object.defineProperty;
                (n = t.exports =
                  function (e) {
                    if (!(this instanceof n))
                      throw new TypeError("Constructor requires 'new'");
                    (e = String(e)),
                      a.call(this, e),
                      c(this, "__length__", o("", e.length));
                  }),
                  i && i(n, a),
                  delete n.prototype.constructor,
                  (n.prototype = Object.create(a.prototype, {
                    _next: o(function () {
                      if (this.__list__)
                        return this.__nextIndex__ < this.__length__
                          ? this.__nextIndex__++
                          : void this._unBind();
                    }),
                    _resolve: o(function (e) {
                      var t,
                        r = this.__list__[e];
                      return this.__nextIndex__ === this.__length__
                        ? r
                        : (t = r.charCodeAt(0)) >= 55296 && t <= 56319
                        ? r + this.__list__[this.__nextIndex__++]
                        : r;
                    }),
                  })),
                  c(n.prototype, s.toStringTag, o("c", "String Iterator"));
              },
              {
                "./": 64,
                d: 16,
                "es5-ext/object/set-prototype-of": 52,
                "es6-symbol": 74,
              },
            ],
            67: [
              function (e, t, r) {
                "use strict";
                var n = e("./is-iterable");
                t.exports = function (e) {
                  if (!n(e)) throw new TypeError(e + " is not iterable");
                  return e;
                };
              },
              { "./is-iterable": 65 },
            ],
            68: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")() ? Map : e("./polyfill");
              },
              { "./is-implemented": 69, "./polyfill": 73 },
            ],
            69: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  var e, t;
                  if ("function" != typeof Map) return !1;
                  try {
                    e = new Map([
                      ["raz", "one"],
                      ["dwa", "two"],
                      ["trzy", "three"],
                    ]);
                  } catch (e) {
                    return !1;
                  }
                  return (
                    "[object Map]" === String(e) &&
                    3 === e.size &&
                    "function" == typeof e.clear &&
                    "function" == typeof e.delete &&
                    "function" == typeof e.entries &&
                    "function" == typeof e.forEach &&
                    "function" == typeof e.get &&
                    "function" == typeof e.has &&
                    "function" == typeof e.keys &&
                    "function" == typeof e.set &&
                    "function" == typeof e.values &&
                    !1 === (t = e.entries().next()).done &&
                    !!t.value &&
                    "raz" === t.value[0] &&
                    "one" === t.value[1]
                  );
                };
              },
              {},
            ],
            70: [
              function (e, t, r) {
                "use strict";
                t.exports =
                  "undefined" != typeof Map &&
                  "[object Map]" === Object.prototype.toString.call(new Map());
              },
              {},
            ],
            71: [
              function (e, t, r) {
                "use strict";
                t.exports = e("es5-ext/object/primitive-set")(
                  "key",
                  "value",
                  "key+value"
                );
              },
              { "es5-ext/object/primitive-set": 51 },
            ],
            72: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("es5-ext/object/set-prototype-of"),
                  o = e("d"),
                  s = e("es6-iterator"),
                  a = e("es6-symbol").toStringTag,
                  c = e("./iterator-kinds"),
                  u = Object.defineProperties,
                  l = s.prototype._unBind;
                (n = t.exports =
                  function (e, t) {
                    if (!(this instanceof n)) return new n(e, t);
                    s.call(this, e.__mapKeysData__, e),
                      (t && c[t]) || (t = "key+value"),
                      u(this, {
                        __kind__: o("", t),
                        __values__: o("w", e.__mapValuesData__),
                      });
                  }),
                  i && i(n, s),
                  (n.prototype = Object.create(s.prototype, {
                    constructor: o(n),
                    _resolve: o(function (e) {
                      return "value" === this.__kind__
                        ? this.__values__[e]
                        : "key" === this.__kind__
                        ? this.__list__[e]
                        : [this.__list__[e], this.__values__[e]];
                    }),
                    _unBind: o(function () {
                      (this.__values__ = null), l.call(this);
                    }),
                    toString: o(function () {
                      return "[object Map Iterator]";
                    }),
                  })),
                  Object.defineProperty(n.prototype, a, o("c", "Map Iterator"));
              },
              {
                "./iterator-kinds": 71,
                d: 16,
                "es5-ext/object/set-prototype-of": 52,
                "es6-iterator": 64,
                "es6-symbol": 74,
              },
            ],
            73: [
              function (e, t, r) {
                "use strict";
                var n,
                  i = e("es5-ext/array/#/clear"),
                  o = e("es5-ext/array/#/e-index-of"),
                  s = e("es5-ext/object/set-prototype-of"),
                  a = e("es5-ext/object/valid-callable"),
                  c = e("es5-ext/object/valid-value"),
                  u = e("d"),
                  l = e("event-emitter"),
                  f = e("es6-symbol"),
                  h = e("es6-iterator/valid-iterable"),
                  p = e("es6-iterator/for-of"),
                  d = e("./lib/iterator"),
                  g = e("./is-native-implemented"),
                  m = Function.prototype.call,
                  y = Object.defineProperties,
                  b = Object.getPrototypeOf;
                (t.exports = n =
                  function () {
                    var e,
                      t,
                      r,
                      i = arguments[0];
                    if (!(this instanceof n))
                      throw new TypeError("Constructor requires 'new'");
                    return (
                      (r = g && s && Map !== n ? s(new Map(), b(this)) : this),
                      null != i && h(i),
                      y(r, {
                        __mapKeysData__: u("c", (e = [])),
                        __mapValuesData__: u("c", (t = [])),
                      }),
                      i
                        ? (p(
                            i,
                            function (r) {
                              var n = c(r)[0];
                              (r = r[1]),
                                -1 === o.call(e, n) && (e.push(n), t.push(r));
                            },
                            r
                          ),
                          r)
                        : r
                    );
                  }),
                  g &&
                    (s && s(n, Map),
                    (n.prototype = Object.create(Map.prototype, {
                      constructor: u(n),
                    }))),
                  l(
                    y(n.prototype, {
                      clear: u(function () {
                        this.__mapKeysData__.length &&
                          (i.call(this.__mapKeysData__),
                          i.call(this.__mapValuesData__),
                          this.emit("_clear"));
                      }),
                      delete: u(function (e) {
                        var t = o.call(this.__mapKeysData__, e);
                        return (
                          -1 !== t &&
                          (this.__mapKeysData__.splice(t, 1),
                          this.__mapValuesData__.splice(t, 1),
                          this.emit("_delete", t, e),
                          !0)
                        );
                      }),
                      entries: u(function () {
                        return new d(this, "key+value");
                      }),
                      forEach: u(function (e) {
                        var t,
                          r,
                          n = arguments[1];
                        for (
                          a(e), r = (t = this.entries())._next();
                          void 0 !== r;

                        )
                          m.call(
                            e,
                            n,
                            this.__mapValuesData__[r],
                            this.__mapKeysData__[r],
                            this
                          ),
                            (r = t._next());
                      }),
                      get: u(function (e) {
                        var t = o.call(this.__mapKeysData__, e);
                        if (-1 !== t) return this.__mapValuesData__[t];
                      }),
                      has: u(function (e) {
                        return -1 !== o.call(this.__mapKeysData__, e);
                      }),
                      keys: u(function () {
                        return new d(this, "key");
                      }),
                      set: u(function (e, t) {
                        var r,
                          n = o.call(this.__mapKeysData__, e);
                        return (
                          -1 === n &&
                            ((n = this.__mapKeysData__.push(e) - 1), (r = !0)),
                          (this.__mapValuesData__[n] = t),
                          r && this.emit("_add", n, e),
                          this
                        );
                      }),
                      size: u.gs(function () {
                        return this.__mapKeysData__.length;
                      }),
                      values: u(function () {
                        return new d(this, "value");
                      }),
                      toString: u(function () {
                        return "[object Map]";
                      }),
                    })
                  ),
                  Object.defineProperty(
                    n.prototype,
                    f.iterator,
                    u(function () {
                      return this.entries();
                    })
                  ),
                  Object.defineProperty(
                    n.prototype,
                    f.toStringTag,
                    u("c", "Map")
                  );
              },
              {
                "./is-native-implemented": 70,
                "./lib/iterator": 72,
                d: 16,
                "es5-ext/array/#/clear": 21,
                "es5-ext/array/#/e-index-of": 22,
                "es5-ext/object/set-prototype-of": 52,
                "es5-ext/object/valid-callable": 55,
                "es5-ext/object/valid-value": 56,
                "es6-iterator/for-of": 62,
                "es6-iterator/valid-iterable": 67,
                "es6-symbol": 74,
                "event-emitter": 82,
              },
            ],
            74: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")()
                  ? e("ext/global-this").Symbol
                  : e("./polyfill");
              },
              {
                "./is-implemented": 75,
                "./polyfill": 80,
                "ext/global-this": 85,
              },
            ],
            75: [
              function (e, t, r) {
                "use strict";
                var n = e("ext/global-this"),
                  i = { object: !0, symbol: !0 };
                t.exports = function () {
                  var e,
                    t = n.Symbol;
                  if ("function" != typeof t) return !1;
                  e = t("test symbol");
                  try {
                    String(e);
                  } catch (e) {
                    return !1;
                  }
                  return (
                    !!i[typeof t.iterator] &&
                    !!i[typeof t.toPrimitive] &&
                    !!i[typeof t.toStringTag]
                  );
                };
              },
              { "ext/global-this": 85 },
            ],
            76: [
              function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                  return (
                    !!e &&
                    ("symbol" == typeof e ||
                      (!!e.constructor &&
                        "Symbol" === e.constructor.name &&
                        "Symbol" === e[e.constructor.toStringTag]))
                  );
                };
              },
              {},
            ],
            77: [
              function (e, t, r) {
                "use strict";
                var n = e("d"),
                  i = Object.create,
                  o = Object.defineProperty,
                  s = Object.prototype,
                  a = i(null);
                t.exports = function (e) {
                  for (var t, r, i = 0; a[e + (i || "")]; ) ++i;
                  return (
                    (a[(e += i || "")] = !0),
                    o(
                      s,
                      (t = "@@" + e),
                      n.gs(null, function (e) {
                        r || ((r = !0), o(this, t, n(e)), (r = !1));
                      })
                    ),
                    t
                  );
                };
              },
              { d: 16 },
            ],
            78: [
              function (e, t, r) {
                "use strict";
                var n = e("d"),
                  i = e("ext/global-this").Symbol;
                t.exports = function (e) {
                  return Object.defineProperties(e, {
                    hasInstance: n(
                      "",
                      (i && i.hasInstance) || e("hasInstance")
                    ),
                    isConcatSpreadable: n(
                      "",
                      (i && i.isConcatSpreadable) || e("isConcatSpreadable")
                    ),
                    iterator: n("", (i && i.iterator) || e("iterator")),
                    match: n("", (i && i.match) || e("match")),
                    replace: n("", (i && i.replace) || e("replace")),
                    search: n("", (i && i.search) || e("search")),
                    species: n("", (i && i.species) || e("species")),
                    split: n("", (i && i.split) || e("split")),
                    toPrimitive: n(
                      "",
                      (i && i.toPrimitive) || e("toPrimitive")
                    ),
                    toStringTag: n(
                      "",
                      (i && i.toStringTag) || e("toStringTag")
                    ),
                    unscopables: n(
                      "",
                      (i && i.unscopables) || e("unscopables")
                    ),
                  });
                };
              },
              { d: 16, "ext/global-this": 85 },
            ],
            79: [
              function (e, t, r) {
                "use strict";
                var n = e("d"),
                  i = e("../../../validate-symbol"),
                  o = Object.create(null);
                t.exports = function (e) {
                  return Object.defineProperties(e, {
                    for: n(function (t) {
                      return o[t] ? o[t] : (o[t] = e(String(t)));
                    }),
                    keyFor: n(function (e) {
                      var t;
                      for (t in (i(e), o)) if (o[t] === e) return t;
                    }),
                  });
                };
              },
              { "../../../validate-symbol": 81, d: 16 },
            ],
            80: [
              function (e, t, r) {
                "use strict";
                var n,
                  i,
                  o,
                  s = e("d"),
                  a = e("./validate-symbol"),
                  c = e("ext/global-this").Symbol,
                  u = e("./lib/private/generate-name"),
                  l = e("./lib/private/setup/standard-symbols"),
                  f = e("./lib/private/setup/symbol-registry"),
                  h = Object.create,
                  p = Object.defineProperties,
                  d = Object.defineProperty;
                if ("function" == typeof c)
                  try {
                    String(c()), (o = !0);
                  } catch (e) {}
                else c = null;
                (i = function (e) {
                  if (this instanceof i)
                    throw new TypeError("Symbol is not a constructor");
                  return n(e);
                }),
                  (t.exports = n =
                    function e(t) {
                      var r;
                      if (this instanceof e)
                        throw new TypeError("Symbol is not a constructor");
                      return o
                        ? c(t)
                        : ((r = h(i.prototype)),
                          (t = void 0 === t ? "" : String(t)),
                          p(r, {
                            __description__: s("", t),
                            __name__: s("", u(t)),
                          }));
                    }),
                  l(n),
                  f(n),
                  p(i.prototype, {
                    constructor: s(n),
                    toString: s("", function () {
                      return this.__name__;
                    }),
                  }),
                  p(n.prototype, {
                    toString: s(function () {
                      return "Symbol (" + a(this).__description__ + ")";
                    }),
                    valueOf: s(function () {
                      return a(this);
                    }),
                  }),
                  d(
                    n.prototype,
                    n.toPrimitive,
                    s("", function () {
                      var e = a(this);
                      return "symbol" == typeof e ? e : e.toString();
                    })
                  ),
                  d(n.prototype, n.toStringTag, s("c", "Symbol")),
                  d(
                    i.prototype,
                    n.toStringTag,
                    s("c", n.prototype[n.toStringTag])
                  ),
                  d(
                    i.prototype,
                    n.toPrimitive,
                    s("c", n.prototype[n.toPrimitive])
                  );
              },
              {
                "./lib/private/generate-name": 77,
                "./lib/private/setup/standard-symbols": 78,
                "./lib/private/setup/symbol-registry": 79,
                "./validate-symbol": 81,
                d: 16,
                "ext/global-this": 85,
              },
            ],
            81: [
              function (e, t, r) {
                "use strict";
                var n = e("./is-symbol");
                t.exports = function (e) {
                  if (!n(e)) throw new TypeError(e + " is not a symbol");
                  return e;
                };
              },
              { "./is-symbol": 76 },
            ],
            82: [
              function (e, t, r) {
                "use strict";
                var n,
                  i,
                  o,
                  s,
                  a,
                  c,
                  u,
                  l = e("d"),
                  f = e("es5-ext/object/valid-callable"),
                  h = Function.prototype.apply,
                  p = Function.prototype.call,
                  d = Object.create,
                  g = Object.defineProperty,
                  m = Object.defineProperties,
                  y = Object.prototype.hasOwnProperty,
                  b = { configurable: !0, enumerable: !1, writable: !0 };
                (i = function (e, t) {
                  var r, i;
                  return (
                    f(t),
                    (i = this),
                    n.call(
                      this,
                      e,
                      (r = function () {
                        o.call(i, e, r), h.call(t, this, arguments);
                      })
                    ),
                    (r.__eeOnceListener__ = t),
                    this
                  );
                }),
                  (a = {
                    on: (n = function (e, t) {
                      var r;
                      return (
                        f(t),
                        y.call(this, "__ee__")
                          ? (r = this.__ee__)
                          : ((r = b.value = d(null)),
                            g(this, "__ee__", b),
                            (b.value = null)),
                        r[e]
                          ? "object" == typeof r[e]
                            ? r[e].push(t)
                            : (r[e] = [r[e], t])
                          : (r[e] = t),
                        this
                      );
                    }),
                    once: i,
                    off: (o = function (e, t) {
                      var r, n, i, o;
                      if ((f(t), !y.call(this, "__ee__"))) return this;
                      if (!(r = this.__ee__)[e]) return this;
                      if ("object" == typeof (n = r[e]))
                        for (o = 0; (i = n[o]); ++o)
                          (i !== t && i.__eeOnceListener__ !== t) ||
                            (2 === n.length
                              ? (r[e] = n[o ? 0 : 1])
                              : n.splice(o, 1));
                      else
                        (n !== t && n.__eeOnceListener__ !== t) || delete r[e];
                      return this;
                    }),
                    emit: (s = function (e) {
                      var t, r, n, i, o;
                      if (y.call(this, "__ee__") && (i = this.__ee__[e]))
                        if ("object" == typeof i) {
                          for (
                            r = arguments.length, o = new Array(r - 1), t = 1;
                            t < r;
                            ++t
                          )
                            o[t - 1] = arguments[t];
                          for (i = i.slice(), t = 0; (n = i[t]); ++t)
                            h.call(n, this, o);
                        } else
                          switch (arguments.length) {
                            case 1:
                              p.call(i, this);
                              break;
                            case 2:
                              p.call(i, this, arguments[1]);
                              break;
                            case 3:
                              p.call(i, this, arguments[1], arguments[2]);
                              break;
                            default:
                              for (
                                r = arguments.length,
                                  o = new Array(r - 1),
                                  t = 1;
                                t < r;
                                ++t
                              )
                                o[t - 1] = arguments[t];
                              h.call(i, this, o);
                          }
                    }),
                  }),
                  (c = { on: l(n), once: l(i), off: l(o), emit: l(s) }),
                  (u = m({}, c)),
                  (t.exports = r =
                    function (e) {
                      return null == e ? d(u) : m(Object(e), c);
                    }),
                  (r.methods = a);
              },
              { d: 16, "es5-ext/object/valid-callable": 55 },
            ],
            83: [
              function (e, t, r) {
                var n =
                    Object.create ||
                    function (e) {
                      var t = function () {};
                      return (t.prototype = e), new t();
                    },
                  i =
                    Object.keys ||
                    function (e) {
                      var t = [];
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                      return r;
                    },
                  o =
                    Function.prototype.bind ||
                    function (e) {
                      var t = this;
                      return function () {
                        return t.apply(e, arguments);
                      };
                    };
                function s() {
                  (this._events &&
                    Object.prototype.hasOwnProperty.call(this, "_events")) ||
                    ((this._events = n(null)), (this._eventsCount = 0)),
                    (this._maxListeners = this._maxListeners || void 0);
                }
                (t.exports = s),
                  (s.EventEmitter = s),
                  (s.prototype._events = void 0),
                  (s.prototype._maxListeners = void 0);
                var a,
                  c = 10;
                try {
                  var u = {};
                  Object.defineProperty &&
                    Object.defineProperty(u, "x", { value: 0 }),
                    (a = 0 === u.x);
                } catch (e) {
                  a = !1;
                }
                function l(e) {
                  return void 0 === e._maxListeners
                    ? s.defaultMaxListeners
                    : e._maxListeners;
                }
                function f(e, t, r) {
                  if (t) e.call(r);
                  else
                    for (var n = e.length, i = w(e, n), o = 0; o < n; ++o)
                      i[o].call(r);
                }
                function h(e, t, r, n) {
                  if (t) e.call(r, n);
                  else
                    for (var i = e.length, o = w(e, i), s = 0; s < i; ++s)
                      o[s].call(r, n);
                }
                function p(e, t, r, n, i) {
                  if (t) e.call(r, n, i);
                  else
                    for (var o = e.length, s = w(e, o), a = 0; a < o; ++a)
                      s[a].call(r, n, i);
                }
                function d(e, t, r, n, i, o) {
                  if (t) e.call(r, n, i, o);
                  else
                    for (var s = e.length, a = w(e, s), c = 0; c < s; ++c)
                      a[c].call(r, n, i, o);
                }
                function g(e, t, r, n) {
                  if (t) e.apply(r, n);
                  else
                    for (var i = e.length, o = w(e, i), s = 0; s < i; ++s)
                      o[s].apply(r, n);
                }
                function m(e, t, r, i) {
                  var o, s, a;
                  if ("function" != typeof r)
                    throw new TypeError(
                      '"listener" argument must be a function'
                    );
                  if (
                    ((s = e._events)
                      ? (s.newListener &&
                          (e.emit(
                            "newListener",
                            t,
                            r.listener ? r.listener : r
                          ),
                          (s = e._events)),
                        (a = s[t]))
                      : ((s = e._events = n(null)), (e._eventsCount = 0)),
                    a)
                  ) {
                    if (
                      ("function" == typeof a
                        ? (a = s[t] = i ? [r, a] : [a, r])
                        : i
                        ? a.unshift(r)
                        : a.push(r),
                      !a.warned && (o = l(e)) && o > 0 && a.length > o)
                    ) {
                      a.warned = !0;
                      var c = new Error(
                        "Possible EventEmitter memory leak detected. " +
                          a.length +
                          ' "' +
                          String(t) +
                          '" listeners added. Use emitter.setMaxListeners() to increase limit.'
                      );
                      (c.name = "MaxListenersExceededWarning"),
                        (c.emitter = e),
                        (c.type = t),
                        (c.count = a.length),
                        "object" == typeof console &&
                          console.warn &&
                          console.warn("%s: %s", c.name, c.message);
                    }
                  } else (a = s[t] = r), ++e._eventsCount;
                  return e;
                }
                function y() {
                  if (!this.fired)
                    switch (
                      (this.target.removeListener(this.type, this.wrapFn),
                      (this.fired = !0),
                      arguments.length)
                    ) {
                      case 0:
                        return this.listener.call(this.target);
                      case 1:
                        return this.listener.call(this.target, arguments[0]);
                      case 2:
                        return this.listener.call(
                          this.target,
                          arguments[0],
                          arguments[1]
                        );
                      case 3:
                        return this.listener.call(
                          this.target,
                          arguments[0],
                          arguments[1],
                          arguments[2]
                        );
                      default:
                        for (
                          var e = new Array(arguments.length), t = 0;
                          t < e.length;
                          ++t
                        )
                          e[t] = arguments[t];
                        this.listener.apply(this.target, e);
                    }
                }
                function b(e, t, r) {
                  var n = {
                      fired: !1,
                      wrapFn: void 0,
                      target: e,
                      type: t,
                      listener: r,
                    },
                    i = o.call(y, n);
                  return (i.listener = r), (n.wrapFn = i), i;
                }
                function v(e, t, r) {
                  var n = e._events;
                  if (!n) return [];
                  var i = n[t];
                  return i
                    ? "function" == typeof i
                      ? r
                        ? [i.listener || i]
                        : [i]
                      : r
                      ? (function (e) {
                          for (
                            var t = new Array(e.length), r = 0;
                            r < t.length;
                            ++r
                          )
                            t[r] = e[r].listener || e[r];
                          return t;
                        })(i)
                      : w(i, i.length)
                    : [];
                }
                function _(e) {
                  var t = this._events;
                  if (t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (r) return r.length;
                  }
                  return 0;
                }
                function w(e, t) {
                  for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
                  return r;
                }
                a
                  ? Object.defineProperty(s, "defaultMaxListeners", {
                      enumerable: !0,
                      get: function () {
                        return c;
                      },
                      set: function (e) {
                        if ("number" != typeof e || e < 0 || e != e)
                          throw new TypeError(
                            '"defaultMaxListeners" must be a positive number'
                          );
                        c = e;
                      },
                    })
                  : (s.defaultMaxListeners = c),
                  (s.prototype.setMaxListeners = function (e) {
                    if ("number" != typeof e || e < 0 || isNaN(e))
                      throw new TypeError(
                        '"n" argument must be a positive number'
                      );
                    return (this._maxListeners = e), this;
                  }),
                  (s.prototype.getMaxListeners = function () {
                    return l(this);
                  }),
                  (s.prototype.emit = function (e) {
                    var t,
                      r,
                      n,
                      i,
                      o,
                      s,
                      a = "error" === e;
                    if ((s = this._events)) a = a && null == s.error;
                    else if (!a) return !1;
                    if (a) {
                      if (
                        (arguments.length > 1 && (t = arguments[1]),
                        t instanceof Error)
                      )
                        throw t;
                      var c = new Error('Unhandled "error" event. (' + t + ")");
                      throw ((c.context = t), c);
                    }
                    if (!(r = s[e])) return !1;
                    var u = "function" == typeof r;
                    switch ((n = arguments.length)) {
                      case 1:
                        f(r, u, this);
                        break;
                      case 2:
                        h(r, u, this, arguments[1]);
                        break;
                      case 3:
                        p(r, u, this, arguments[1], arguments[2]);
                        break;
                      case 4:
                        d(r, u, this, arguments[1], arguments[2], arguments[3]);
                        break;
                      default:
                        for (i = new Array(n - 1), o = 1; o < n; o++)
                          i[o - 1] = arguments[o];
                        g(r, u, this, i);
                    }
                    return !0;
                  }),
                  (s.prototype.addListener = function (e, t) {
                    return m(this, e, t, !1);
                  }),
                  (s.prototype.on = s.prototype.addListener),
                  (s.prototype.prependListener = function (e, t) {
                    return m(this, e, t, !0);
                  }),
                  (s.prototype.once = function (e, t) {
                    if ("function" != typeof t)
                      throw new TypeError(
                        '"listener" argument must be a function'
                      );
                    return this.on(e, b(this, e, t)), this;
                  }),
                  (s.prototype.prependOnceListener = function (e, t) {
                    if ("function" != typeof t)
                      throw new TypeError(
                        '"listener" argument must be a function'
                      );
                    return this.prependListener(e, b(this, e, t)), this;
                  }),
                  (s.prototype.removeListener = function (e, t) {
                    var r, i, o, s, a;
                    if ("function" != typeof t)
                      throw new TypeError(
                        '"listener" argument must be a function'
                      );
                    if (!(i = this._events)) return this;
                    if (!(r = i[e])) return this;
                    if (r === t || r.listener === t)
                      0 == --this._eventsCount
                        ? (this._events = n(null))
                        : (delete i[e],
                          i.removeListener &&
                            this.emit("removeListener", e, r.listener || t));
                    else if ("function" != typeof r) {
                      for (o = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === t || r[s].listener === t) {
                          (a = r[s].listener), (o = s);
                          break;
                        }
                      if (o < 0) return this;
                      0 === o
                        ? r.shift()
                        : (function (e, t) {
                            for (
                              var r = t, n = r + 1, i = e.length;
                              n < i;
                              r += 1, n += 1
                            )
                              e[r] = e[n];
                            e.pop();
                          })(r, o),
                        1 === r.length && (i[e] = r[0]),
                        i.removeListener &&
                          this.emit("removeListener", e, a || t);
                    }
                    return this;
                  }),
                  (s.prototype.removeAllListeners = function (e) {
                    var t, r, o;
                    if (!(r = this._events)) return this;
                    if (!r.removeListener)
                      return (
                        0 === arguments.length
                          ? ((this._events = n(null)), (this._eventsCount = 0))
                          : r[e] &&
                            (0 == --this._eventsCount
                              ? (this._events = n(null))
                              : delete r[e]),
                        this
                      );
                    if (0 === arguments.length) {
                      var s,
                        a = i(r);
                      for (o = 0; o < a.length; ++o)
                        "removeListener" !== (s = a[o]) &&
                          this.removeAllListeners(s);
                      return (
                        this.removeAllListeners("removeListener"),
                        (this._events = n(null)),
                        (this._eventsCount = 0),
                        this
                      );
                    }
                    if ("function" == typeof (t = r[e]))
                      this.removeListener(e, t);
                    else if (t)
                      for (o = t.length - 1; o >= 0; o--)
                        this.removeListener(e, t[o]);
                    return this;
                  }),
                  (s.prototype.listeners = function (e) {
                    return v(this, e, !0);
                  }),
                  (s.prototype.rawListeners = function (e) {
                    return v(this, e, !1);
                  }),
                  (s.listenerCount = function (e, t) {
                    return "function" == typeof e.listenerCount
                      ? e.listenerCount(t)
                      : _.call(e, t);
                  }),
                  (s.prototype.listenerCount = _),
                  (s.prototype.eventNames = function () {
                    return this._eventsCount > 0
                      ? Reflect.ownKeys(this._events)
                      : [];
                  });
              },
              {},
            ],
            84: [
              function (e, t, r) {
                var n = function () {
                  if ("object" == typeof self && self) return self;
                  if ("object" == typeof window && window) return window;
                  throw new Error("Unable to resolve global `this`");
                };
                t.exports = (function () {
                  if (this) return this;
                  try {
                    Object.defineProperty(Object.prototype, "__global__", {
                      get: function () {
                        return this;
                      },
                      configurable: !0,
                    });
                  } catch (e) {
                    return n();
                  }
                  try {
                    return __global__ || n();
                  } finally {
                    delete Object.prototype.__global__;
                  }
                })();
              },
              {},
            ],
            85: [
              function (e, t, r) {
                "use strict";
                t.exports = e("./is-implemented")()
                  ? globalThis
                  : e("./implementation");
              },
              { "./implementation": 84, "./is-implemented": 86 },
            ],
            86: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  return (
                    "object" == typeof globalThis &&
                    !!globalThis &&
                    globalThis.Array === Array
                  );
                };
              },
              {},
            ],
            87: [
              function (e, t, r) {
                (r.read = function (e, t, r, n, i) {
                  var o,
                    s,
                    a = 8 * i - n - 1,
                    c = (1 << a) - 1,
                    u = c >> 1,
                    l = -7,
                    f = r ? i - 1 : 0,
                    h = r ? -1 : 1,
                    p = e[t + f];
                  for (
                    f += h, o = p & ((1 << -l) - 1), p >>= -l, l += a;
                    l > 0;
                    o = 256 * o + e[t + f], f += h, l -= 8
                  );
                  for (
                    s = o & ((1 << -l) - 1), o >>= -l, l += n;
                    l > 0;
                    s = 256 * s + e[t + f], f += h, l -= 8
                  );
                  if (0 === o) o = 1 - u;
                  else {
                    if (o === c) return s ? NaN : (1 / 0) * (p ? -1 : 1);
                    (s += Math.pow(2, n)), (o -= u);
                  }
                  return (p ? -1 : 1) * s * Math.pow(2, o - n);
                }),
                  (r.write = function (e, t, r, n, i, o) {
                    var s,
                      a,
                      c,
                      u = 8 * o - i - 1,
                      l = (1 << u) - 1,
                      f = l >> 1,
                      h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                      p = n ? 0 : o - 1,
                      d = n ? 1 : -1,
                      g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                    for (
                      t = Math.abs(t),
                        isNaN(t) || t === 1 / 0
                          ? ((a = isNaN(t) ? 1 : 0), (s = l))
                          : ((s = Math.floor(Math.log(t) / Math.LN2)),
                            t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                            (t += s + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) *
                              c >=
                              2 && (s++, (c /= 2)),
                            s + f >= l
                              ? ((a = 0), (s = l))
                              : s + f >= 1
                              ? ((a = (t * c - 1) * Math.pow(2, i)), (s += f))
                              : ((a = t * Math.pow(2, f - 1) * Math.pow(2, i)),
                                (s = 0)));
                      i >= 8;
                      e[r + p] = 255 & a, p += d, a /= 256, i -= 8
                    );
                    for (
                      s = (s << i) | a, u += i;
                      u > 0;
                      e[r + p] = 255 & s, p += d, s /= 256, u -= 8
                    );
                    e[r + p - d] |= 128 * g;
                  });
              },
              {},
            ],
            88: [
              function (e, t, r) {
                "function" == typeof Object.create
                  ? (t.exports = function (e, t) {
                      t &&
                        ((e.super_ = t),
                        (e.prototype = Object.create(t.prototype, {
                          constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })));
                    })
                  : (t.exports = function (e, t) {
                      if (t) {
                        e.super_ = t;
                        var r = function () {};
                        (r.prototype = t.prototype),
                          (e.prototype = new r()),
                          (e.prototype.constructor = e);
                      }
                    });
              },
              {},
            ],
            89: [
              function (e, t, r) {
                function n(e) {
                  return (
                    !!e.constructor &&
                    "function" == typeof e.constructor.isBuffer &&
                    e.constructor.isBuffer(e)
                  );
                }
                t.exports = function (e) {
                  return (
                    null != e &&
                    (n(e) ||
                      (function (e) {
                        return (
                          "function" == typeof e.readFloatLE &&
                          "function" == typeof e.slice &&
                          n(e.slice(0, 0))
                        );
                      })(e) ||
                      !!e._isBuffer)
                  );
                };
              },
              {},
            ],
            90: [
              function (e, t, r) {
                var n = {}.toString;
                t.exports =
                  Array.isArray ||
                  function (e) {
                    return "[object Array]" == n.call(e);
                  };
              },
              {},
            ],
            91: [
              function (e, t, r) {
                "use strict";
                var n = e("safe-buffer").Buffer,
                  i = t.exports;
                for (var o in ((i.types = {
                  0: "reserved",
                  1: "connect",
                  2: "connack",
                  3: "publish",
                  4: "puback",
                  5: "pubrec",
                  6: "pubrel",
                  7: "pubcomp",
                  8: "subscribe",
                  9: "suback",
                  10: "unsubscribe",
                  11: "unsuback",
                  12: "pingreq",
                  13: "pingresp",
                  14: "disconnect",
                  15: "auth",
                }),
                (i.codes = {}),
                i.types)) {
                  var s = i.types[o];
                  i.codes[s] = o;
                }
                for (var a in ((i.CMD_SHIFT = 4),
                (i.CMD_MASK = 240),
                (i.DUP_MASK = 8),
                (i.QOS_MASK = 3),
                (i.QOS_SHIFT = 1),
                (i.RETAIN_MASK = 1),
                (i.LENGTH_MASK = 127),
                (i.LENGTH_FIN_MASK = 128),
                (i.SESSIONPRESENT_MASK = 1),
                (i.SESSIONPRESENT_HEADER = n.from([i.SESSIONPRESENT_MASK])),
                (i.CONNACK_HEADER = n.from([i.codes.connack << i.CMD_SHIFT])),
                (i.USERNAME_MASK = 128),
                (i.PASSWORD_MASK = 64),
                (i.WILL_RETAIN_MASK = 32),
                (i.WILL_QOS_MASK = 24),
                (i.WILL_QOS_SHIFT = 3),
                (i.WILL_FLAG_MASK = 4),
                (i.CLEAN_SESSION_MASK = 2),
                (i.CONNECT_HEADER = n.from([i.codes.connect << i.CMD_SHIFT])),
                (i.properties = {
                  sessionExpiryInterval: 17,
                  willDelayInterval: 24,
                  receiveMaximum: 33,
                  maximumPacketSize: 39,
                  topicAliasMaximum: 34,
                  requestResponseInformation: 25,
                  requestProblemInformation: 23,
                  userProperties: 38,
                  authenticationMethod: 21,
                  authenticationData: 22,
                  payloadFormatIndicator: 1,
                  messageExpiryInterval: 2,
                  contentType: 3,
                  responseTopic: 8,
                  correlationData: 9,
                  maximumQoS: 36,
                  retainAvailable: 37,
                  assignedClientIdentifier: 18,
                  reasonString: 31,
                  wildcardSubscriptionAvailable: 40,
                  subscriptionIdentifiersAvailable: 41,
                  sharedSubscriptionAvailable: 42,
                  serverKeepAlive: 19,
                  responseInformation: 26,
                  serverReference: 28,
                  topicAlias: 35,
                  subscriptionIdentifier: 11,
                }),
                (i.propertiesCodes = {}),
                i.properties)) {
                  var c = i.properties[a];
                  i.propertiesCodes[c] = a;
                }
                function u(e) {
                  return [0, 1, 2].map(function (t) {
                    return [0, 1].map(function (r) {
                      return [0, 1].map(function (o) {
                        var s = n.alloc(1);
                        return (
                          s.writeUInt8(
                            (i.codes[e] << i.CMD_SHIFT) |
                              (r ? i.DUP_MASK : 0) |
                              (t << i.QOS_SHIFT) |
                              o,
                            0,
                            !0
                          ),
                          s
                        );
                      });
                    });
                  });
                }
                (i.propertiesTypes = {
                  sessionExpiryInterval: "int32",
                  willDelayInterval: "int32",
                  receiveMaximum: "int16",
                  maximumPacketSize: "int32",
                  topicAliasMaximum: "int16",
                  requestResponseInformation: "byte",
                  requestProblemInformation: "byte",
                  userProperties: "pair",
                  authenticationMethod: "string",
                  authenticationData: "binary",
                  payloadFormatIndicator: "byte",
                  messageExpiryInterval: "int32",
                  contentType: "string",
                  responseTopic: "string",
                  correlationData: "binary",
                  maximumQoS: "int8",
                  retainAvailable: "byte",
                  assignedClientIdentifier: "string",
                  reasonString: "string",
                  wildcardSubscriptionAvailable: "byte",
                  subscriptionIdentifiersAvailable: "byte",
                  sharedSubscriptionAvailable: "byte",
                  serverKeepAlive: "int16",
                  responseInformation: "string",
                  serverReference: "string",
                  topicAlias: "int16",
                  subscriptionIdentifier: "var",
                }),
                  (i.PUBLISH_HEADER = u("publish")),
                  (i.SUBSCRIBE_HEADER = u("subscribe")),
                  (i.SUBSCRIBE_OPTIONS_QOS_MASK = 3),
                  (i.SUBSCRIBE_OPTIONS_NL_MASK = 1),
                  (i.SUBSCRIBE_OPTIONS_NL_SHIFT = 2),
                  (i.SUBSCRIBE_OPTIONS_RAP_MASK = 1),
                  (i.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3),
                  (i.SUBSCRIBE_OPTIONS_RH_MASK = 3),
                  (i.SUBSCRIBE_OPTIONS_RH_SHIFT = 4),
                  (i.SUBSCRIBE_OPTIONS_RH = [0, 16, 32]),
                  (i.SUBSCRIBE_OPTIONS_NL = 4),
                  (i.SUBSCRIBE_OPTIONS_RAP = 8),
                  (i.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2]),
                  (i.UNSUBSCRIBE_HEADER = u("unsubscribe")),
                  (i.ACKS = {
                    unsuback: u("unsuback"),
                    puback: u("puback"),
                    pubcomp: u("pubcomp"),
                    pubrel: u("pubrel"),
                    pubrec: u("pubrec"),
                  }),
                  (i.SUBACK_HEADER = n.from([i.codes.suback << i.CMD_SHIFT])),
                  (i.VERSION3 = n.from([3])),
                  (i.VERSION4 = n.from([4])),
                  (i.VERSION5 = n.from([5])),
                  (i.QOS = [0, 1, 2].map(function (e) {
                    return n.from([e]);
                  })),
                  (i.EMPTY = {
                    pingreq: n.from([i.codes.pingreq << 4, 0]),
                    pingresp: n.from([i.codes.pingresp << 4, 0]),
                    disconnect: n.from([i.codes.disconnect << 4, 0]),
                  });
              },
              { "safe-buffer": 117 },
            ],
            92: [
              function (e, t, r) {
                "use strict";
                var n = e("safe-buffer").Buffer,
                  i = e("./writeToStream"),
                  o = e("events").EventEmitter;
                function s() {
                  (this._array = new Array(20)), (this._i = 0);
                }
                e("inherits")(s, o),
                  (s.prototype.write = function (e) {
                    return (this._array[this._i++] = e), !0;
                  }),
                  (s.prototype.concat = function () {
                    var e,
                      t,
                      r = 0,
                      i = new Array(this._array.length),
                      o = this._array,
                      s = 0;
                    for (e = 0; e < o.length && void 0 !== o[e]; e++)
                      "string" != typeof o[e]
                        ? (i[e] = o[e].length)
                        : (i[e] = n.byteLength(o[e])),
                        (r += i[e]);
                    for (
                      t = n.allocUnsafe(r), e = 0;
                      e < o.length && void 0 !== o[e];
                      e++
                    )
                      "string" != typeof o[e]
                        ? (o[e].copy(t, s), (s += i[e]))
                        : (t.write(o[e], s), (s += i[e]));
                    return t;
                  }),
                  (t.exports = function (e, t) {
                    var r = new s();
                    return i(e, r, t), r.concat();
                  });
              },
              {
                "./writeToStream": 97,
                events: 83,
                inherits: 88,
                "safe-buffer": 117,
              },
            ],
            93: [
              function (e, t, r) {
                "use strict";
                (r.parser = e("./parser")),
                  (r.generate = e("./generate")),
                  (r.writeToStream = e("./writeToStream"));
              },
              { "./generate": 92, "./parser": 96, "./writeToStream": 97 },
            ],
            94: [
              function (e, t, r) {
                "use strict";
                var n = e("safe-buffer").Buffer,
                  i = {};
                function o(e) {
                  var t = n.allocUnsafe(2);
                  return t.writeUInt8(e >> 8, 0), t.writeUInt8(255 & e, 1), t;
                }
                t.exports = {
                  cache: i,
                  generateCache: function () {
                    for (var e = 0; e < 65536; e++) i[e] = o(e);
                  },
                  generateNumber: o,
                  genBufVariableByteInt: function (e) {
                    var t = 0,
                      r = 0,
                      i = (function (e) {
                        return e >= 0 && e < 128
                          ? 1
                          : e >= 128 && e < 16384
                          ? 2
                          : e >= 16384 && e < 2097152
                          ? 3
                          : e >= 2097152 && e < 268435456
                          ? 4
                          : 0;
                      })(e),
                      o = n.allocUnsafe(i);
                    do {
                      (t = e % 128 | 0),
                        (e = (e / 128) | 0) > 0 && (t |= 128),
                        o.writeUInt8(t, r++);
                    } while (e > 0);
                    return { data: o, length: i };
                  },
                  generate4ByteBuffer: function (e) {
                    var t = n.allocUnsafe(4);
                    return t.writeUInt32BE(e, 0), t;
                  },
                };
              },
              { "safe-buffer": 117 },
            ],
            95: [
              function (e, t, r) {
                t.exports = function () {
                  (this.cmd = null),
                    (this.retain = !1),
                    (this.qos = 0),
                    (this.dup = !1),
                    (this.length = -1),
                    (this.topic = null),
                    (this.payload = null);
                };
              },
              {},
            ],
            96: [
              function (e, t, r) {
                "use strict";
                var n = e("bl"),
                  i = e("inherits"),
                  o = e("events").EventEmitter,
                  s = e("./packet"),
                  a = e("./constants"),
                  c = e("debug")("mqtt-packet:parser");
                function u(e) {
                  if (!(this instanceof u)) return new u(e);
                  (this.settings = e || {}),
                    (this._states = [
                      "_parseHeader",
                      "_parseLength",
                      "_parsePayload",
                      "_newPacket",
                    ]),
                    this._resetState();
                }
                i(u, o),
                  (u.prototype._resetState = function () {
                    c(
                      "_resetState: resetting packet, error, _list, and _stateCounter"
                    ),
                      (this.packet = new s()),
                      (this.error = null),
                      (this._list = n()),
                      (this._stateCounter = 0);
                  }),
                  (u.prototype.parse = function (e) {
                    for (
                      this.error && this._resetState(),
                        this._list.append(e),
                        c(
                          "parse: current state: %s",
                          this._states[this._stateCounter]
                        );
                      (-1 !== this.packet.length || this._list.length > 0) &&
                      this[this._states[this._stateCounter]]() &&
                      !this.error;

                    )
                      this._stateCounter++,
                        c(
                          "parse: state complete. _stateCounter is now: %d",
                          this._stateCounter
                        ),
                        c(
                          "parse: packet.length: %d, buffer list length: %d",
                          this.packet.length,
                          this._list.length
                        ),
                        this._stateCounter >= this._states.length &&
                          (this._stateCounter = 0);
                    return (
                      c(
                        "parse: exited while loop. packet: %d, buffer list length: %d",
                        this.packet.length,
                        this._list.length
                      ),
                      this._list.length
                    );
                  }),
                  (u.prototype._parseHeader = function () {
                    var e = this._list.readUInt8(0);
                    return (
                      (this.packet.cmd = a.types[e >> a.CMD_SHIFT]),
                      (this.packet.retain = 0 != (e & a.RETAIN_MASK)),
                      (this.packet.qos = (e >> a.QOS_SHIFT) & a.QOS_MASK),
                      (this.packet.dup = 0 != (e & a.DUP_MASK)),
                      c("_parseHeader: packet: %o", this.packet),
                      this._list.consume(1),
                      !0
                    );
                  }),
                  (u.prototype._parseLength = function () {
                    var e = this._parseVarByteNum(!0);
                    return (
                      e &&
                        ((this.packet.length = e.value),
                        this._list.consume(e.bytes)),
                      c("_parseLength %d", e.value),
                      !!e
                    );
                  }),
                  (u.prototype._parsePayload = function () {
                    c("_parsePayload: payload %O", this._list);
                    var e = !1;
                    if (
                      0 === this.packet.length ||
                      this._list.length >= this.packet.length
                    ) {
                      switch (((this._pos = 0), this.packet.cmd)) {
                        case "connect":
                          this._parseConnect();
                          break;
                        case "connack":
                          this._parseConnack();
                          break;
                        case "publish":
                          this._parsePublish();
                          break;
                        case "puback":
                        case "pubrec":
                        case "pubrel":
                        case "pubcomp":
                          this._parseConfirmation();
                          break;
                        case "subscribe":
                          this._parseSubscribe();
                          break;
                        case "suback":
                          this._parseSuback();
                          break;
                        case "unsubscribe":
                          this._parseUnsubscribe();
                          break;
                        case "unsuback":
                          this._parseUnsuback();
                          break;
                        case "pingreq":
                        case "pingresp":
                          break;
                        case "disconnect":
                          this._parseDisconnect();
                          break;
                        case "auth":
                          this._parseAuth();
                          break;
                        default:
                          this._emitError(new Error("Not supported"));
                      }
                      e = !0;
                    }
                    return c("_parsePayload complete result: %s", e), e;
                  }),
                  (u.prototype._parseConnect = function () {
                    var e, t, r, n, i, o;
                    c("_parseConnect");
                    var s = {},
                      u = this.packet;
                    if (null === (e = this._parseString()))
                      return this._emitError(
                        new Error("Cannot parse protocolId")
                      );
                    if ("MQTT" !== e && "MQIsdp" !== e)
                      return this._emitError(new Error("Invalid protocolId"));
                    if (((u.protocolId = e), this._pos >= this._list.length))
                      return this._emitError(new Error("Packet too short"));
                    if (
                      ((u.protocolVersion = this._list.readUInt8(this._pos)),
                      3 !== u.protocolVersion &&
                        4 !== u.protocolVersion &&
                        5 !== u.protocolVersion)
                    )
                      return this._emitError(
                        new Error("Invalid protocol version")
                      );
                    if ((this._pos++, this._pos >= this._list.length))
                      return this._emitError(new Error("Packet too short"));
                    if (
                      ((s.username =
                        this._list.readUInt8(this._pos) & a.USERNAME_MASK),
                      (s.password =
                        this._list.readUInt8(this._pos) & a.PASSWORD_MASK),
                      (s.will =
                        this._list.readUInt8(this._pos) & a.WILL_FLAG_MASK),
                      s.will &&
                        ((u.will = {}),
                        (u.will.retain =
                          0 !=
                          (this._list.readUInt8(this._pos) &
                            a.WILL_RETAIN_MASK)),
                        (u.will.qos =
                          (this._list.readUInt8(this._pos) & a.WILL_QOS_MASK) >>
                          a.WILL_QOS_SHIFT)),
                      (u.clean =
                        0 !=
                        (this._list.readUInt8(this._pos) &
                          a.CLEAN_SESSION_MASK)),
                      this._pos++,
                      (u.keepalive = this._parseNum()),
                      -1 === u.keepalive)
                    )
                      return this._emitError(new Error("Packet too short"));
                    if (5 === u.protocolVersion) {
                      var l = this._parseProperties();
                      Object.getOwnPropertyNames(l).length &&
                        (u.properties = l);
                    }
                    if (null === (t = this._parseString()))
                      return this._emitError(new Error("Packet too short"));
                    if (
                      ((u.clientId = t),
                      c("_parseConnect: packet.clientId: %s", u.clientId),
                      s.will)
                    ) {
                      if (5 === u.protocolVersion) {
                        var f = this._parseProperties();
                        Object.getOwnPropertyNames(f).length &&
                          (u.will.properties = f);
                      }
                      if (null === (r = this._parseString()))
                        return this._emitError(
                          new Error("Cannot parse will topic")
                        );
                      if (
                        ((u.will.topic = r),
                        c("_parseConnect: packet.will.topic: %s", u.will.topic),
                        null === (n = this._parseBuffer()))
                      )
                        return this._emitError(
                          new Error("Cannot parse will payload")
                        );
                      (u.will.payload = n),
                        c(
                          "_parseConnect: packet.will.paylaod: %s",
                          u.will.payload
                        );
                    }
                    if (s.username) {
                      if (null === (o = this._parseString()))
                        return this._emitError(
                          new Error("Cannot parse username")
                        );
                      (u.username = o),
                        c("_parseConnect: packet.username: %s", u.username);
                    }
                    if (s.password) {
                      if (null === (i = this._parseBuffer()))
                        return this._emitError(
                          new Error("Cannot parse password")
                        );
                      u.password = i;
                    }
                    return (this.settings = u), c("_parseConnect: complete"), u;
                  }),
                  (u.prototype._parseConnack = function () {
                    c("_parseConnack");
                    var e = this.packet;
                    if (this._list.length < 2) return null;
                    if (
                      ((e.sessionPresent = !!(
                        this._list.readUInt8(this._pos++) &
                        a.SESSIONPRESENT_MASK
                      )),
                      5 === this.settings.protocolVersion
                        ? (e.reasonCode = this._list.readUInt8(this._pos++))
                        : (e.returnCode = this._list.readUInt8(this._pos++)),
                      -1 === e.returnCode || -1 === e.reasonCode)
                    )
                      return this._emitError(
                        new Error("Cannot parse return code")
                      );
                    if (5 === this.settings.protocolVersion) {
                      var t = this._parseProperties();
                      Object.getOwnPropertyNames(t).length &&
                        (e.properties = t);
                    }
                    c("_parseConnack: complete");
                  }),
                  (u.prototype._parsePublish = function () {
                    c("_parsePublish");
                    var e = this.packet;
                    if (((e.topic = this._parseString()), null === e.topic))
                      return this._emitError(new Error("Cannot parse topic"));
                    if (!(e.qos > 0) || this._parseMessageId()) {
                      if (5 === this.settings.protocolVersion) {
                        var t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length &&
                          (e.properties = t);
                      }
                      (e.payload = this._list.slice(this._pos, e.length)),
                        c(
                          "_parsePublish: payload from buffer list: %o",
                          e.payload
                        );
                    }
                  }),
                  (u.prototype._parseSubscribe = function () {
                    c("_parseSubscribe");
                    var e,
                      t,
                      r,
                      n,
                      i,
                      o,
                      s,
                      u = this.packet;
                    if (1 !== u.qos)
                      return this._emitError(
                        new Error("Wrong subscribe header")
                      );
                    if (((u.subscriptions = []), this._parseMessageId())) {
                      if (5 === this.settings.protocolVersion) {
                        var l = this._parseProperties();
                        Object.getOwnPropertyNames(l).length &&
                          (u.properties = l);
                      }
                      for (; this._pos < u.length; ) {
                        if (null === (e = this._parseString()))
                          return this._emitError(
                            new Error("Cannot parse topic")
                          );
                        if (this._pos >= u.length)
                          return this._emitError(
                            new Error("Malformed Subscribe Payload")
                          );
                        (r =
                          (t = this._parseByte()) &
                          a.SUBSCRIBE_OPTIONS_QOS_MASK),
                          (o =
                            0 !=
                            ((t >> a.SUBSCRIBE_OPTIONS_NL_SHIFT) &
                              a.SUBSCRIBE_OPTIONS_NL_MASK)),
                          (i =
                            0 !=
                            ((t >> a.SUBSCRIBE_OPTIONS_RAP_SHIFT) &
                              a.SUBSCRIBE_OPTIONS_RAP_MASK)),
                          (n =
                            (t >> a.SUBSCRIBE_OPTIONS_RH_SHIFT) &
                            a.SUBSCRIBE_OPTIONS_RH_MASK),
                          (s = { topic: e, qos: r }),
                          5 === this.settings.protocolVersion &&
                            ((s.nl = o), (s.rap = i), (s.rh = n)),
                          c(
                            "_parseSubscribe: push subscription `%s` to subscription",
                            s
                          ),
                          u.subscriptions.push(s);
                      }
                    }
                  }),
                  (u.prototype._parseSuback = function () {
                    c("_parseSuback");
                    var e = this.packet;
                    if (((this.packet.granted = []), this._parseMessageId())) {
                      if (5 === this.settings.protocolVersion) {
                        var t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length &&
                          (e.properties = t);
                      }
                      for (; this._pos < this.packet.length; )
                        this.packet.granted.push(
                          this._list.readUInt8(this._pos++)
                        );
                    }
                  }),
                  (u.prototype._parseUnsubscribe = function () {
                    c("_parseUnsubscribe");
                    var e = this.packet;
                    if (((e.unsubscriptions = []), this._parseMessageId())) {
                      if (5 === this.settings.protocolVersion) {
                        var t = this._parseProperties();
                        Object.getOwnPropertyNames(t).length &&
                          (e.properties = t);
                      }
                      for (; this._pos < e.length; ) {
                        var r;
                        if (null === (r = this._parseString()))
                          return this._emitError(
                            new Error("Cannot parse topic")
                          );
                        c(
                          "_parseUnsubscribe: push topic `%s` to unsubscriptions",
                          r
                        ),
                          e.unsubscriptions.push(r);
                      }
                    }
                  }),
                  (u.prototype._parseUnsuback = function () {
                    c("_parseUnsuback");
                    var e = this.packet;
                    if (!this._parseMessageId())
                      return this._emitError(
                        new Error("Cannot parse messageId")
                      );
                    if (5 === this.settings.protocolVersion) {
                      var t = this._parseProperties();
                      for (
                        Object.getOwnPropertyNames(t).length &&
                          (e.properties = t),
                          e.granted = [];
                        this._pos < this.packet.length;

                      )
                        this.packet.granted.push(
                          this._list.readUInt8(this._pos++)
                        );
                    }
                  }),
                  (u.prototype._parseConfirmation = function () {
                    c("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
                    var e = this.packet;
                    if (
                      (this._parseMessageId(),
                      5 === this.settings.protocolVersion &&
                        (e.length > 2 &&
                          ((e.reasonCode = this._parseByte()),
                          c(
                            "_parseConfirmation: packet.reasonCode `%d`",
                            e.reasonCode
                          )),
                        e.length > 3))
                    ) {
                      var t = this._parseProperties();
                      Object.getOwnPropertyNames(t).length &&
                        (e.properties = t);
                    }
                    return !0;
                  }),
                  (u.prototype._parseDisconnect = function () {
                    var e = this.packet;
                    if (
                      (c("_parseDisconnect"),
                      5 === this.settings.protocolVersion)
                    ) {
                      e.reasonCode = this._parseByte();
                      var t = this._parseProperties();
                      Object.getOwnPropertyNames(t).length &&
                        (e.properties = t);
                    }
                    return c("_parseDisconnect result: true"), !0;
                  }),
                  (u.prototype._parseAuth = function () {
                    c("_parseAuth");
                    var e = this.packet;
                    if (5 !== this.settings.protocolVersion)
                      return this._emitError(
                        new Error(
                          "Not supported auth packet for this version MQTT"
                        )
                      );
                    e.reasonCode = this._parseByte();
                    var t = this._parseProperties();
                    return (
                      Object.getOwnPropertyNames(t).length &&
                        (e.properties = t),
                      c("_parseAuth: result: true"),
                      !0
                    );
                  }),
                  (u.prototype._parseMessageId = function () {
                    var e = this.packet;
                    return (
                      (e.messageId = this._parseNum()),
                      null === e.messageId
                        ? (this._emitError(new Error("Cannot parse messageId")),
                          !1)
                        : (c(
                            "_parseMessageId: packet.messageId %d",
                            e.messageId
                          ),
                          !0)
                    );
                  }),
                  (u.prototype._parseString = function (e) {
                    var t,
                      r = this._parseNum(),
                      n = r + this._pos;
                    return -1 === r ||
                      n > this._list.length ||
                      n > this.packet.length
                      ? null
                      : ((t = this._list.toString("utf8", this._pos, n)),
                        (this._pos += r),
                        c("_parseString: result: %s", t),
                        t);
                  }),
                  (u.prototype._parseStringPair = function () {
                    return (
                      c("_parseStringPair"),
                      { name: this._parseString(), value: this._parseString() }
                    );
                  }),
                  (u.prototype._parseBuffer = function () {
                    var e,
                      t = this._parseNum(),
                      r = t + this._pos;
                    return -1 === t ||
                      r > this._list.length ||
                      r > this.packet.length
                      ? null
                      : ((e = this._list.slice(this._pos, r)),
                        (this._pos += t),
                        c("_parseBuffer: result: %o", e),
                        e);
                  }),
                  (u.prototype._parseNum = function () {
                    if (this._list.length - this._pos < 2) return -1;
                    var e = this._list.readUInt16BE(this._pos);
                    return (this._pos += 2), c("_parseNum: result: %s", e), e;
                  }),
                  (u.prototype._parse4ByteNum = function () {
                    if (this._list.length - this._pos < 4) return -1;
                    var e = this._list.readUInt32BE(this._pos);
                    return (
                      (this._pos += 4), c("_parse4ByteNum: result: %s", e), e
                    );
                  }),
                  (u.prototype._parseVarByteNum = function (e) {
                    c("_parseVarByteNum");
                    for (
                      var t,
                        r = 0,
                        n = 1,
                        i = 0,
                        o = !0,
                        s = this._pos ? this._pos : 0;
                      r < 5 &&
                      ((i +=
                        n *
                        ((t = this._list.readUInt8(s + r++)) & a.LENGTH_MASK)),
                      (n *= 128),
                      0 != (t & a.LENGTH_FIN_MASK));

                    )
                      if (this._list.length <= r) {
                        o = !1;
                        break;
                      }
                    return (
                      s && (this._pos += r),
                      c(
                        "_parseVarByteNum: result: %o",
                        (o = !!o && (e ? { bytes: r, value: i } : i))
                      ),
                      o
                    );
                  }),
                  (u.prototype._parseByte = function () {
                    var e = this._list.readUInt8(this._pos);
                    return this._pos++, c("_parseByte: result: %o", e), e;
                  }),
                  (u.prototype._parseByType = function (e) {
                    switch ((c("_parseByType: type: %s", e), e)) {
                      case "byte":
                        return 0 !== this._parseByte();
                      case "int8":
                        return this._parseByte();
                      case "int16":
                        return this._parseNum();
                      case "int32":
                        return this._parse4ByteNum();
                      case "var":
                        return this._parseVarByteNum();
                      case "string":
                        return this._parseString();
                      case "pair":
                        return this._parseStringPair();
                      case "binary":
                        return this._parseBuffer();
                    }
                  }),
                  (u.prototype._parseProperties = function () {
                    c("_parseProperties");
                    for (
                      var e = this._parseVarByteNum(),
                        t = this._pos + e,
                        r = {};
                      this._pos < t;

                    ) {
                      var n = this._parseByte(),
                        i = a.propertiesCodes[n];
                      if (!i)
                        return (
                          this._emitError(new Error("Unknown property")), !1
                        );
                      if ("userProperties" !== i)
                        r[i]
                          ? (Array.isArray(r[i]) || (r[i] = [r[i]]),
                            r[i].push(this._parseByType(a.propertiesTypes[i])))
                          : (r[i] = this._parseByType(a.propertiesTypes[i]));
                      else {
                        r[i] || (r[i] = {});
                        var o = this._parseByType(a.propertiesTypes[i]);
                        if (r[i][o.name])
                          if (Array.isArray(r[i][o.name]))
                            r[i][o.name].push(o.value);
                          else {
                            var s = r[i][o.name];
                            (r[i][o.name] = [s]), r[i][o.name].push(o.value);
                          }
                        else r[i][o.name] = o.value;
                      }
                    }
                    return r;
                  }),
                  (u.prototype._newPacket = function () {
                    return (
                      c("_newPacket"),
                      this.packet &&
                        (this._list.consume(this.packet.length),
                        c(
                          "_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",
                          this.packet.cmd,
                          this.packet.payload,
                          this.packet.length
                        ),
                        this.emit("packet", this.packet)),
                      c("_newPacket: new packet"),
                      (this.packet = new s()),
                      (this._pos = 0),
                      !0
                    );
                  }),
                  (u.prototype._emitError = function (e) {
                    c("_emitError"), (this.error = e), this.emit("error", e);
                  }),
                  (t.exports = u);
              },
              {
                "./constants": 91,
                "./packet": 95,
                bl: 11,
                debug: 17,
                events: 83,
                inherits: 88,
              },
            ],
            97: [
              function (e, t, r) {
                "use strict";
                var n = e("./constants"),
                  i = e("safe-buffer").Buffer,
                  o = i.allocUnsafe(0),
                  s = i.from([0]),
                  a = e("./numbers"),
                  c = e("process-nextick-args").nextTick,
                  u = e("debug")("mqtt-packet:writeToStream"),
                  l = a.cache,
                  f = a.generateNumber,
                  h = a.generateCache,
                  p = a.genBufVariableByteInt,
                  d = a.generate4ByteBuffer,
                  g = x,
                  m = !0;
                function y(e, t, r) {
                  switch (
                    (u("generate called"),
                    t.cork && (t.cork(), c(b, t)),
                    m && ((m = !1), h()),
                    u("generate: packet.cmd: %s", e.cmd),
                    e.cmd)
                  ) {
                    case "connect":
                      return (function (e, t, r) {
                        var o = e || {},
                          s = o.protocolId || "MQTT",
                          a = o.protocolVersion || 4,
                          c = o.will,
                          u = o.clean,
                          l = o.keepalive || 0,
                          f = o.clientId || "",
                          h = o.username,
                          p = o.password,
                          d = o.properties;
                        void 0 === u && (u = !0);
                        var m = 0;
                        if (!s || ("string" != typeof s && !i.isBuffer(s)))
                          return (
                            t.emit("error", new Error("Invalid protocolId")), !1
                          );
                        if (
                          ((m += s.length + 2), 3 !== a && 4 !== a && 5 !== a)
                        )
                          return (
                            t.emit(
                              "error",
                              new Error("Invalid protocol version")
                            ),
                            !1
                          );
                        if (
                          ((m += 1),
                          ("string" != typeof f && !i.isBuffer(f)) ||
                            (!f && 4 !== a) ||
                            (!f && !u))
                        ) {
                          if (a < 4)
                            return (
                              t.emit(
                                "error",
                                new Error(
                                  "clientId must be supplied before 3.1.1"
                                )
                              ),
                              !1
                            );
                          if (1 * u == 0)
                            return (
                              t.emit(
                                "error",
                                new Error(
                                  "clientId must be given if cleanSession set to 0"
                                )
                              ),
                              !1
                            );
                        } else m += f.length + 2;
                        if (
                          "number" != typeof l ||
                          l < 0 ||
                          l > 65535 ||
                          l % 1 != 0
                        )
                          return (
                            t.emit("error", new Error("Invalid keepalive")), !1
                          );
                        if (((m += 2), (m += 1), 5 === a)) {
                          var y = I(t, d);
                          if (!y) return !1;
                          m += y.length;
                        }
                        if (c) {
                          if ("object" != typeof c)
                            return (
                              t.emit("error", new Error("Invalid will")), !1
                            );
                          if (!c.topic || "string" != typeof c.topic)
                            return (
                              t.emit("error", new Error("Invalid will topic")),
                              !1
                            );
                          if (
                            ((m += i.byteLength(c.topic) + 2),
                            (m += 2),
                            c.payload)
                          ) {
                            if (!(c.payload.length >= 0))
                              return (
                                t.emit(
                                  "error",
                                  new Error("Invalid will payload")
                                ),
                                !1
                              );
                            "string" == typeof c.payload
                              ? (m += i.byteLength(c.payload))
                              : (m += c.payload.length);
                          }
                          var b = {};
                          if (5 === a) {
                            if (!(b = I(t, c.properties))) return !1;
                            m += b.length;
                          }
                        }
                        var v = !1;
                        if (null != h) {
                          if (!j(h))
                            return (
                              t.emit("error", new Error("Invalid username")), !1
                            );
                          (v = !0), (m += i.byteLength(h) + 2);
                        }
                        if (null != p) {
                          if (!v)
                            return (
                              t.emit(
                                "error",
                                new Error(
                                  "Username is required to use password"
                                )
                              ),
                              !1
                            );
                          if (!j(p))
                            return (
                              t.emit("error", new Error("Invalid password")), !1
                            );
                          m += A(p) + 2;
                        }
                        t.write(n.CONNECT_HEADER),
                          _(t, m),
                          E(t, s),
                          t.write(
                            4 === a
                              ? n.VERSION4
                              : 5 === a
                              ? n.VERSION5
                              : n.VERSION3
                          );
                        var S = 0;
                        return (
                          (S |= null != h ? n.USERNAME_MASK : 0),
                          (S |= null != p ? n.PASSWORD_MASK : 0),
                          (S |= c && c.retain ? n.WILL_RETAIN_MASK : 0),
                          (S |= c && c.qos ? c.qos << n.WILL_QOS_SHIFT : 0),
                          (S |= c ? n.WILL_FLAG_MASK : 0),
                          (S |= u ? n.CLEAN_SESSION_MASK : 0),
                          t.write(i.from([S])),
                          g(t, l),
                          5 === a && y.write(),
                          E(t, f),
                          c &&
                            (5 === a && b.write(),
                            w(t, c.topic),
                            E(t, c.payload)),
                          null != h && E(t, h),
                          null != p && E(t, p),
                          !0
                        );
                      })(e, t);
                    case "connack":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          a = e || {},
                          c = 5 === o ? a.reasonCode : a.returnCode,
                          u = a.properties,
                          l = 2;
                        if ("number" != typeof c)
                          return (
                            t.emit("error", new Error("Invalid return code")),
                            !1
                          );
                        var f = null;
                        if (5 === o) {
                          if (!(f = I(t, u))) return !1;
                          l += f.length;
                        }
                        return (
                          t.write(n.CONNACK_HEADER),
                          _(t, l),
                          t.write(
                            a.sessionPresent ? n.SESSIONPRESENT_HEADER : s
                          ),
                          t.write(i.from([c])),
                          null != f && f.write(),
                          !0
                        );
                      })(e, t, r);
                    case "publish":
                      return (function (e, t, r) {
                        u("publish: packet: %o", e);
                        var s = r ? r.protocolVersion : 4,
                          a = e || {},
                          c = a.qos || 0,
                          l = a.retain ? n.RETAIN_MASK : 0,
                          f = a.topic,
                          h = a.payload || o,
                          p = a.messageId,
                          d = a.properties,
                          m = 0;
                        if ("string" == typeof f) m += i.byteLength(f) + 2;
                        else {
                          if (!i.isBuffer(f))
                            return (
                              t.emit("error", new Error("Invalid topic")), !1
                            );
                          m += f.length + 2;
                        }
                        if (
                          (i.isBuffer(h)
                            ? (m += h.length)
                            : (m += i.byteLength(h)),
                          c && "number" != typeof p)
                        )
                          return (
                            t.emit("error", new Error("Invalid messageId")), !1
                          );
                        c && (m += 2);
                        var y = null;
                        if (5 === s) {
                          if (!(y = I(t, d))) return !1;
                          m += y.length;
                        }
                        return (
                          t.write(
                            n.PUBLISH_HEADER[c][a.dup ? 1 : 0][l ? 1 : 0]
                          ),
                          _(t, m),
                          g(t, A(f)),
                          t.write(f),
                          c > 0 && g(t, p),
                          null != y && y.write(),
                          u("publish: payload: %o", h),
                          t.write(h)
                        );
                      })(e, t, r);
                    case "puback":
                    case "pubrec":
                    case "pubrel":
                    case "pubcomp":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.cmd || "puback",
                          c = s.messageId,
                          u = s.dup && "pubrel" === a ? n.DUP_MASK : 0,
                          l = 0,
                          f = s.reasonCode,
                          h = s.properties,
                          p = 5 === o ? 3 : 2;
                        if (("pubrel" === a && (l = 1), "number" != typeof c))
                          return (
                            t.emit("error", new Error("Invalid messageId")), !1
                          );
                        var d = null;
                        if (5 === o && "object" == typeof h) {
                          if (!(d = C(t, h, r, p))) return !1;
                          p += d.length;
                        }
                        return (
                          t.write(n.ACKS[a][l][u][0]),
                          _(t, p),
                          g(t, c),
                          5 === o && t.write(i.from([f])),
                          null !== d && d.write(),
                          !0
                        );
                      })(e, t, r);
                    case "subscribe":
                      return (function (e, t, r) {
                        u("subscribe: packet: ");
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.dup ? n.DUP_MASK : 0,
                          c = s.messageId,
                          l = s.subscriptions,
                          f = s.properties,
                          h = 0;
                        if ("number" != typeof c)
                          return (
                            t.emit("error", new Error("Invalid messageId")), !1
                          );
                        h += 2;
                        var p = null;
                        if (5 === o) {
                          if (!(p = I(t, f))) return !1;
                          h += p.length;
                        }
                        if ("object" != typeof l || !l.length)
                          return (
                            t.emit("error", new Error("Invalid subscriptions")),
                            !1
                          );
                        for (var d = 0; d < l.length; d += 1) {
                          var m = l[d].topic,
                            y = l[d].qos;
                          if ("string" != typeof m)
                            return (
                              t.emit(
                                "error",
                                new Error(
                                  "Invalid subscriptions - invalid topic"
                                )
                              ),
                              !1
                            );
                          if ("number" != typeof y)
                            return (
                              t.emit(
                                "error",
                                new Error("Invalid subscriptions - invalid qos")
                              ),
                              !1
                            );
                          if (5 === o) {
                            if ("boolean" != typeof (l[d].nl || !1))
                              return (
                                t.emit(
                                  "error",
                                  new Error(
                                    "Invalid subscriptions - invalid No Local"
                                  )
                                ),
                                !1
                              );
                            if ("boolean" != typeof (l[d].rap || !1))
                              return (
                                t.emit(
                                  "error",
                                  new Error(
                                    "Invalid subscriptions - invalid Retain as Published"
                                  )
                                ),
                                !1
                              );
                            var b = l[d].rh || 0;
                            if ("number" != typeof b || b > 2)
                              return (
                                t.emit(
                                  "error",
                                  new Error(
                                    "Invalid subscriptions - invalid Retain Handling"
                                  )
                                ),
                                !1
                              );
                          }
                          h += i.byteLength(m) + 2 + 1;
                        }
                        u(
                          "subscribe: writing to stream: %o",
                          n.SUBSCRIBE_HEADER
                        ),
                          t.write(n.SUBSCRIBE_HEADER[1][a ? 1 : 0][0]),
                          _(t, h),
                          g(t, c),
                          null !== p && p.write();
                        for (var v = !0, S = 0; S < l.length; S++) {
                          var x,
                            k = l[S],
                            E = k.topic,
                            C = k.qos,
                            O = +k.nl,
                            P = +k.rap,
                            A = k.rh;
                          w(t, E),
                            (x = n.SUBSCRIBE_OPTIONS_QOS[C]),
                            5 === o &&
                              ((x |= O ? n.SUBSCRIBE_OPTIONS_NL : 0),
                              (x |= P ? n.SUBSCRIBE_OPTIONS_RAP : 0),
                              (x |= A ? n.SUBSCRIBE_OPTIONS_RH[A] : 0)),
                            (v = t.write(i.from([x])));
                        }
                        return v;
                      })(e, t, r);
                    case "suback":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.messageId,
                          c = s.granted,
                          u = s.properties,
                          l = 0;
                        if ("number" != typeof a)
                          return (
                            t.emit("error", new Error("Invalid messageId")), !1
                          );
                        if (((l += 2), "object" != typeof c || !c.length))
                          return (
                            t.emit("error", new Error("Invalid qos vector")), !1
                          );
                        for (var f = 0; f < c.length; f += 1) {
                          if ("number" != typeof c[f])
                            return (
                              t.emit("error", new Error("Invalid qos vector")),
                              !1
                            );
                          l += 1;
                        }
                        var h = null;
                        if (5 === o) {
                          if (!(h = C(t, u, r, l))) return !1;
                          l += h.length;
                        }
                        return (
                          t.write(n.SUBACK_HEADER),
                          _(t, l),
                          g(t, a),
                          null !== h && h.write(),
                          t.write(i.from(c))
                        );
                      })(e, t, r);
                    case "unsubscribe":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.messageId,
                          c = s.dup ? n.DUP_MASK : 0,
                          u = s.unsubscriptions,
                          l = s.properties,
                          f = 0;
                        if ("number" != typeof a)
                          return (
                            t.emit("error", new Error("Invalid messageId")), !1
                          );
                        if (((f += 2), "object" != typeof u || !u.length))
                          return (
                            t.emit(
                              "error",
                              new Error("Invalid unsubscriptions")
                            ),
                            !1
                          );
                        for (var h = 0; h < u.length; h += 1) {
                          if ("string" != typeof u[h])
                            return (
                              t.emit(
                                "error",
                                new Error("Invalid unsubscriptions")
                              ),
                              !1
                            );
                          f += i.byteLength(u[h]) + 2;
                        }
                        var p = null;
                        if (5 === o) {
                          if (!(p = I(t, l))) return !1;
                          f += p.length;
                        }
                        t.write(n.UNSUBSCRIBE_HEADER[1][c ? 1 : 0][0]),
                          _(t, f),
                          g(t, a),
                          null !== p && p.write();
                        for (var d = !0, m = 0; m < u.length; m++)
                          d = w(t, u[m]);
                        return d;
                      })(e, t, r);
                    case "unsuback":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.messageId,
                          c = s.dup ? n.DUP_MASK : 0,
                          u = s.granted,
                          l = s.properties,
                          f = s.cmd,
                          h = 2;
                        if ("number" != typeof a)
                          return (
                            t.emit("error", new Error("Invalid messageId")), !1
                          );
                        if (5 === o) {
                          if ("object" != typeof u || !u.length)
                            return (
                              t.emit("error", new Error("Invalid qos vector")),
                              !1
                            );
                          for (var p = 0; p < u.length; p += 1) {
                            if ("number" != typeof u[p])
                              return (
                                t.emit(
                                  "error",
                                  new Error("Invalid qos vector")
                                ),
                                !1
                              );
                            h += 1;
                          }
                        }
                        var d = null;
                        if (5 === o) {
                          if (!(d = C(t, l, r, h))) return !1;
                          h += d.length;
                        }
                        return (
                          t.write(n.ACKS[f][0][c][0]),
                          _(t, h),
                          g(t, a),
                          null !== d && d.write(),
                          5 === o && t.write(i.from(u)),
                          !0
                        );
                      })(e, t, r);
                    case "pingreq":
                    case "pingresp":
                      return (function (e, t, r) {
                        return t.write(n.EMPTY[e.cmd]);
                      })(e, t);
                    case "disconnect":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.reasonCode,
                          c = s.properties,
                          u = 5 === o ? 1 : 0,
                          l = null;
                        if (5 === o) {
                          if (!(l = C(t, c, r, u))) return !1;
                          u += l.length;
                        }
                        return (
                          t.write(i.from([n.codes.disconnect << 4])),
                          _(t, u),
                          5 === o && t.write(i.from([a])),
                          null !== l && l.write(),
                          !0
                        );
                      })(e, t, r);
                    case "auth":
                      return (function (e, t, r) {
                        var o = r ? r.protocolVersion : 4,
                          s = e || {},
                          a = s.reasonCode,
                          c = s.properties,
                          u = 5 === o ? 1 : 0;
                        5 !== o &&
                          t.emit(
                            "error",
                            new Error("Invalid mqtt version for auth packet")
                          );
                        var l = C(t, c, r, u);
                        return (
                          !!l &&
                          ((u += l.length),
                          t.write(i.from([n.codes.auth << 4])),
                          _(t, u),
                          t.write(i.from([a])),
                          null !== l && l.write(),
                          !0)
                        );
                      })(e, t, r);
                    default:
                      return t.emit("error", new Error("Unknown command")), !1;
                  }
                }
                function b(e) {
                  e.uncork();
                }
                Object.defineProperty(y, "cacheNumbers", {
                  get: function () {
                    return g === x;
                  },
                  set: function (e) {
                    e
                      ? ((l && 0 !== Object.keys(l).length) || (m = !0),
                        (g = x))
                      : ((m = !1), (g = k));
                  },
                });
                var v = {};
                function _(e, t) {
                  var r = v[t];
                  r || ((r = p(t).data), t < 16384 && (v[t] = r)),
                    u("writeVarByteInt: writing to stream: %o", r),
                    e.write(r);
                }
                function w(e, t) {
                  var r = i.byteLength(t);
                  return g(e, r), u("writeString: %s", t), e.write(t, "utf8");
                }
                function S(e, t, r) {
                  w(e, t), w(e, r);
                }
                function x(e, t) {
                  return (
                    u("writeNumberCached: number: %d", t),
                    u("writeNumberCached: %o", l[t]),
                    e.write(l[t])
                  );
                }
                function k(e, t) {
                  var r = f(t);
                  return u("writeNumberGenerated: %o", r), e.write(r);
                }
                function E(e, t) {
                  "string" == typeof t
                    ? w(e, t)
                    : t
                    ? (g(e, t.length), e.write(t))
                    : g(e, 0);
                }
                function I(e, t) {
                  if ("object" != typeof t || null != t.length)
                    return {
                      length: 1,
                      write: function () {
                        P(e, {}, 0);
                      },
                    };
                  var r = 0;
                  function o(t, r) {
                    var o = 0;
                    switch (n.propertiesTypes[t]) {
                      case "byte":
                        if ("boolean" != typeof r)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 2;
                        break;
                      case "int8":
                        if ("number" != typeof r || r < 0 || r > 255)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 2;
                        break;
                      case "binary":
                        if (r && null === r)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 1 + i.byteLength(r) + 2;
                        break;
                      case "int16":
                        if ("number" != typeof r || r < 0 || r > 65535)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 3;
                        break;
                      case "int32":
                        if ("number" != typeof r || r < 0 || r > 4294967295)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 5;
                        break;
                      case "var":
                        if ("number" != typeof r || r < 0 || r > 4294967295)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 1 + p(r).length;
                        break;
                      case "string":
                        if ("string" != typeof r)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += 3 + i.byteLength(r.toString());
                        break;
                      case "pair":
                        if ("object" != typeof r)
                          return (
                            e.emit(
                              "error",
                              new Error("Invalid " + t + ": " + r)
                            ),
                            !1
                          );
                        o += Object.getOwnPropertyNames(r).reduce(function (
                          e,
                          t
                        ) {
                          var n = r[t];
                          return (
                            Array.isArray(n)
                              ? (e += n.reduce(function (e, r) {
                                  return (e +=
                                    3 +
                                    i.byteLength(t.toString()) +
                                    2 +
                                    i.byteLength(r.toString()));
                                }, 0))
                              : (e +=
                                  3 +
                                  i.byteLength(t.toString()) +
                                  2 +
                                  i.byteLength(r[t].toString())),
                            e
                          );
                        },
                        0);
                        break;
                      default:
                        return (
                          e.emit(
                            "error",
                            new Error("Invalid property " + t + ": " + r)
                          ),
                          !1
                        );
                    }
                    return o;
                  }
                  if (t)
                    for (var s in t) {
                      var a = 0,
                        c = 0,
                        u = t[s];
                      if (Array.isArray(u))
                        for (var l = 0; l < u.length; l++) {
                          if (!(c = o(s, u[l]))) return !1;
                          a += c;
                        }
                      else {
                        if (!(c = o(s, u))) return !1;
                        a = c;
                      }
                      if (!a) return !1;
                      r += a;
                    }
                  return {
                    length: p(r).length + r,
                    write: function () {
                      P(e, t, r);
                    },
                  };
                }
                function C(e, t, r, n) {
                  var i = ["reasonString", "userProperties"],
                    o =
                      r && r.properties && r.properties.maximumPacketSize
                        ? r.properties.maximumPacketSize
                        : 0,
                    s = I(e, t);
                  if (o)
                    for (; n + s.length > o; ) {
                      var a = i.shift();
                      if (!a || !t[a]) return !1;
                      delete t[a], (s = I(e, t));
                    }
                  return s;
                }
                function O(e, t, r) {
                  switch (n.propertiesTypes[t]) {
                    case "byte":
                      e.write(i.from([n.properties[t]])), e.write(i.from([+r]));
                      break;
                    case "int8":
                      e.write(i.from([n.properties[t]])), e.write(i.from([r]));
                      break;
                    case "binary":
                      e.write(i.from([n.properties[t]])), E(e, r);
                      break;
                    case "int16":
                      e.write(i.from([n.properties[t]])), g(e, r);
                      break;
                    case "int32":
                      e.write(i.from([n.properties[t]])),
                        (function (e, t) {
                          var r = d(t);
                          u("write4ByteNumber: %o", r), e.write(r);
                        })(e, r);
                      break;
                    case "var":
                      e.write(i.from([n.properties[t]])), _(e, r);
                      break;
                    case "string":
                      e.write(i.from([n.properties[t]])), w(e, r);
                      break;
                    case "pair":
                      Object.getOwnPropertyNames(r).forEach(function (o) {
                        var s = r[o];
                        Array.isArray(s)
                          ? s.forEach(function (r) {
                              e.write(i.from([n.properties[t]])),
                                S(e, o.toString(), r.toString());
                            })
                          : (e.write(i.from([n.properties[t]])),
                            S(e, o.toString(), s.toString()));
                      });
                      break;
                    default:
                      return (
                        e.emit(
                          "error",
                          new Error("Invalid property " + t + " value: " + r)
                        ),
                        !1
                      );
                  }
                }
                function P(e, t, r) {
                  for (var n in (_(e, r), t))
                    if (t.hasOwnProperty(n) && null !== t[n]) {
                      var i = t[n];
                      if (Array.isArray(i))
                        for (var o = 0; o < i.length; o++) O(e, n, i[o]);
                      else O(e, n, i);
                    }
                }
                function A(e) {
                  return e ? (e instanceof i ? e.length : i.byteLength(e)) : 0;
                }
                function j(e) {
                  return "string" == typeof e || e instanceof i;
                }
                t.exports = y;
              },
              {
                "./constants": 91,
                "./numbers": 94,
                debug: 17,
                "process-nextick-args": 100,
                "safe-buffer": 117,
              },
            ],
            98: [
              function (e, t, r) {
                var n = 1e3,
                  i = 6e4,
                  o = 60 * i,
                  s = 24 * o;
                function a(e, t, r, n) {
                  var i = t >= 1.5 * r;
                  return Math.round(e / r) + " " + n + (i ? "s" : "");
                }
                t.exports = function (e, t) {
                  t = t || {};
                  var r,
                    c,
                    u = typeof e;
                  if ("string" === u && e.length > 0)
                    return (function (e) {
                      if (!((e = String(e)).length > 100)) {
                        var t =
                          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                            e
                          );
                        if (t) {
                          var r = parseFloat(t[1]);
                          switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                              return 315576e5 * r;
                            case "weeks":
                            case "week":
                            case "w":
                              return 6048e5 * r;
                            case "days":
                            case "day":
                            case "d":
                              return r * s;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                              return r * o;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                              return r * i;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                              return r * n;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                              return r;
                            default:
                              return;
                          }
                        }
                      }
                    })(e);
                  if ("number" === u && isFinite(e))
                    return t.long
                      ? ((r = e),
                        (c = Math.abs(r)) >= s
                          ? a(r, c, s, "day")
                          : c >= o
                          ? a(r, c, o, "hour")
                          : c >= i
                          ? a(r, c, i, "minute")
                          : c >= n
                          ? a(r, c, n, "second")
                          : r + " ms")
                      : (function (e) {
                          var t = Math.abs(e);
                          return t >= s
                            ? Math.round(e / s) + "d"
                            : t >= o
                            ? Math.round(e / o) + "h"
                            : t >= i
                            ? Math.round(e / i) + "m"
                            : t >= n
                            ? Math.round(e / n) + "s"
                            : e + "ms";
                        })(e);
                  throw new Error(
                    "val is not a non-empty string or a valid number. val=" +
                      JSON.stringify(e)
                  );
                };
              },
              {},
            ],
            99: [
              function (e, t, r) {
                var n = e("wrappy");
                function i(e) {
                  var t = function () {
                    return t.called
                      ? t.value
                      : ((t.called = !0), (t.value = e.apply(this, arguments)));
                  };
                  return (t.called = !1), t;
                }
                function o(e) {
                  var t = function () {
                      if (t.called) throw new Error(t.onceError);
                      return (
                        (t.called = !0), (t.value = e.apply(this, arguments))
                      );
                    },
                    r = e.name || "Function wrapped with `once`";
                  return (
                    (t.onceError = r + " shouldn't be called more than once"),
                    (t.called = !1),
                    t
                  );
                }
                (t.exports = n(i)),
                  (t.exports.strict = n(o)),
                  (i.proto = i(function () {
                    Object.defineProperty(Function.prototype, "once", {
                      value: function () {
                        return i(this);
                      },
                      configurable: !0,
                    }),
                      Object.defineProperty(Function.prototype, "onceStrict", {
                        value: function () {
                          return o(this);
                        },
                        configurable: !0,
                      });
                  }));
              },
              { wrappy: 138 },
            ],
            100: [
              function (e, t, r) {
                (function (e) {
                  "use strict";
                  void 0 === e ||
                  !e.version ||
                  0 === e.version.indexOf("v0.") ||
                  (0 === e.version.indexOf("v1.") &&
                    0 !== e.version.indexOf("v1.8."))
                    ? (t.exports = {
                        nextTick: function (t, r, n, i) {
                          if ("function" != typeof t)
                            throw new TypeError(
                              '"callback" argument must be a function'
                            );
                          var o,
                            s,
                            a = arguments.length;
                          switch (a) {
                            case 0:
                            case 1:
                              return e.nextTick(t);
                            case 2:
                              return e.nextTick(function () {
                                t.call(null, r);
                              });
                            case 3:
                              return e.nextTick(function () {
                                t.call(null, r, n);
                              });
                            case 4:
                              return e.nextTick(function () {
                                t.call(null, r, n, i);
                              });
                            default:
                              for (o = new Array(a - 1), s = 0; s < o.length; )
                                o[s++] = arguments[s];
                              return e.nextTick(function () {
                                t.apply(null, o);
                              });
                          }
                        },
                      })
                    : (t.exports = e);
                }.call(this, e("_process")));
              },
              { _process: 101 },
            ],
            101: [
              function (e, t, r) {
                var n,
                  i,
                  o = (t.exports = {});
                function s() {
                  throw new Error("setTimeout has not been defined");
                }
                function a() {
                  throw new Error("clearTimeout has not been defined");
                }
                function c(e) {
                  if (n === setTimeout) return setTimeout(e, 0);
                  if ((n === s || !n) && setTimeout)
                    return (n = setTimeout), setTimeout(e, 0);
                  try {
                    return n(e, 0);
                  } catch (t) {
                    try {
                      return n.call(null, e, 0);
                    } catch (t) {
                      return n.call(this, e, 0);
                    }
                  }
                }
                !(function () {
                  try {
                    n = "function" == typeof setTimeout ? setTimeout : s;
                  } catch (e) {
                    n = s;
                  }
                  try {
                    i = "function" == typeof clearTimeout ? clearTimeout : a;
                  } catch (e) {
                    i = a;
                  }
                })();
                var u,
                  l = [],
                  f = !1,
                  h = -1;
                function p() {
                  f &&
                    u &&
                    ((f = !1),
                    u.length ? (l = u.concat(l)) : (h = -1),
                    l.length && d());
                }
                function d() {
                  if (!f) {
                    var e = c(p);
                    f = !0;
                    for (var t = l.length; t; ) {
                      for (u = l, l = []; ++h < t; ) u && u[h].run();
                      (h = -1), (t = l.length);
                    }
                    (u = null),
                      (f = !1),
                      (function (e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === a || !i) && clearTimeout)
                          return (i = clearTimeout), clearTimeout(e);
                        try {
                          i(e);
                        } catch (t) {
                          try {
                            return i.call(null, e);
                          } catch (t) {
                            return i.call(this, e);
                          }
                        }
                      })(e);
                  }
                }
                function g(e, t) {
                  (this.fun = e), (this.array = t);
                }
                function m() {}
                (o.nextTick = function (e) {
                  var t = new Array(arguments.length - 1);
                  if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++)
                      t[r - 1] = arguments[r];
                  l.push(new g(e, t)), 1 !== l.length || f || c(d);
                }),
                  (g.prototype.run = function () {
                    this.fun.apply(null, this.array);
                  }),
                  (o.title = "browser"),
                  (o.browser = !0),
                  (o.env = {}),
                  (o.argv = []),
                  (o.version = ""),
                  (o.versions = {}),
                  (o.on = m),
                  (o.addListener = m),
                  (o.once = m),
                  (o.off = m),
                  (o.removeListener = m),
                  (o.removeAllListeners = m),
                  (o.emit = m),
                  (o.prependListener = m),
                  (o.prependOnceListener = m),
                  (o.listeners = function (e) {
                    return [];
                  }),
                  (o.binding = function (e) {
                    throw new Error("process.binding is not supported");
                  }),
                  (o.cwd = function () {
                    return "/";
                  }),
                  (o.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                  }),
                  (o.umask = function () {
                    return 0;
                  });
              },
              {},
            ],
            102: [
              function (e, r, n) {
                (function (e) {
                  !(function (t) {
                    var i = "object" == typeof n && n && !n.nodeType && n,
                      o = "object" == typeof r && r && !r.nodeType && r,
                      s = "object" == typeof e && e;
                    (s.global !== s && s.window !== s && s.self !== s) ||
                      (t = s);
                    var a,
                      c,
                      u = 2147483647,
                      l = /^xn--/,
                      f = /[^\x20-\x7E]/,
                      h = /[\x2E\u3002\uFF0E\uFF61]/g,
                      p = {
                        overflow:
                          "Overflow: input needs wider integers to process",
                        "not-basic":
                          "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input",
                      },
                      d = Math.floor,
                      g = String.fromCharCode;
                    function m(e) {
                      throw new RangeError(p[e]);
                    }
                    function y(e, t) {
                      for (var r = e.length, n = []; r--; ) n[r] = t(e[r]);
                      return n;
                    }
                    function b(e, t) {
                      var r = e.split("@"),
                        n = "";
                      return (
                        r.length > 1 && ((n = r[0] + "@"), (e = r[1])),
                        n + y((e = e.replace(h, ".")).split("."), t).join(".")
                      );
                    }
                    function v(e) {
                      for (var t, r, n = [], i = 0, o = e.length; i < o; )
                        (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
                          ? 56320 == (64512 & (r = e.charCodeAt(i++)))
                            ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
                            : (n.push(t), i--)
                          : n.push(t);
                      return n;
                    }
                    function _(e) {
                      return y(e, function (e) {
                        var t = "";
                        return (
                          e > 65535 &&
                            ((t += g((((e -= 65536) >>> 10) & 1023) | 55296)),
                            (e = 56320 | (1023 & e))),
                          (t += g(e))
                        );
                      }).join("");
                    }
                    function w(e, t) {
                      return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                    }
                    function S(e, t, r) {
                      var n = 0;
                      for (
                        e = r ? d(e / 700) : e >> 1, e += d(e / t);
                        e > 455;
                        n += 36
                      )
                        e = d(e / 35);
                      return d(n + (36 * e) / (e + 38));
                    }
                    function x(e) {
                      var t,
                        r,
                        n,
                        i,
                        o,
                        s,
                        a,
                        c,
                        l,
                        f,
                        h,
                        p = [],
                        g = e.length,
                        y = 0,
                        b = 128,
                        v = 72;
                      for (
                        (r = e.lastIndexOf("-")) < 0 && (r = 0), n = 0;
                        n < r;
                        ++n
                      )
                        e.charCodeAt(n) >= 128 && m("not-basic"),
                          p.push(e.charCodeAt(n));
                      for (i = r > 0 ? r + 1 : 0; i < g; ) {
                        for (
                          o = y, s = 1, a = 36;
                          i >= g && m("invalid-input"),
                            ((c =
                              (h = e.charCodeAt(i++)) - 48 < 10
                                ? h - 22
                                : h - 65 < 26
                                ? h - 65
                                : h - 97 < 26
                                ? h - 97
                                : 36) >= 36 ||
                              c > d((u - y) / s)) &&
                              m("overflow"),
                            (y += c * s),
                            !(c < (l = a <= v ? 1 : a >= v + 26 ? 26 : a - v));
                          a += 36
                        )
                          s > d(u / (f = 36 - l)) && m("overflow"), (s *= f);
                        (v = S(y - o, (t = p.length + 1), 0 == o)),
                          d(y / t) > u - b && m("overflow"),
                          (b += d(y / t)),
                          (y %= t),
                          p.splice(y++, 0, b);
                      }
                      return _(p);
                    }
                    function k(e) {
                      var t,
                        r,
                        n,
                        i,
                        o,
                        s,
                        a,
                        c,
                        l,
                        f,
                        h,
                        p,
                        y,
                        b,
                        _,
                        x = [];
                      for (
                        p = (e = v(e)).length, t = 128, r = 0, o = 72, s = 0;
                        s < p;
                        ++s
                      )
                        (h = e[s]) < 128 && x.push(g(h));
                      for (n = i = x.length, i && x.push("-"); n < p; ) {
                        for (a = u, s = 0; s < p; ++s)
                          (h = e[s]) >= t && h < a && (a = h);
                        for (
                          a - t > d((u - r) / (y = n + 1)) && m("overflow"),
                            r += (a - t) * y,
                            t = a,
                            s = 0;
                          s < p;
                          ++s
                        )
                          if (
                            ((h = e[s]) < t && ++r > u && m("overflow"), h == t)
                          ) {
                            for (
                              c = r, l = 36;
                              !(
                                c < (f = l <= o ? 1 : l >= o + 26 ? 26 : l - o)
                              );
                              l += 36
                            )
                              (_ = c - f),
                                (b = 36 - f),
                                x.push(g(w(f + (_ % b), 0))),
                                (c = d(_ / b));
                            x.push(g(w(c, 0))),
                              (o = S(r, y, n == i)),
                              (r = 0),
                              ++n;
                          }
                        ++r, ++t;
                      }
                      return x.join("");
                    }
                    if (
                      ((a = {
                        version: "1.4.1",
                        ucs2: { decode: v, encode: _ },
                        decode: x,
                        encode: k,
                        toASCII: function (e) {
                          return b(e, function (e) {
                            return f.test(e) ? "xn--" + k(e) : e;
                          });
                        },
                        toUnicode: function (e) {
                          return b(e, function (e) {
                            return l.test(e) ? x(e.slice(4).toLowerCase()) : e;
                          });
                        },
                      }),
                      i && o)
                    )
                      if (r.exports == i) o.exports = a;
                      else for (c in a) a.hasOwnProperty(c) && (i[c] = a[c]);
                    else t.punycode = a;
                  })(this);
                }.call(
                  this,
                  void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            103: [
              function (e, t, r) {
                "use strict";
                function n(e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }
                t.exports = function (e, t, r, o) {
                  (t = t || "&"), (r = r || "=");
                  var s = {};
                  if ("string" != typeof e || 0 === e.length) return s;
                  var a = /\+/g;
                  e = e.split(t);
                  var c = 1e3;
                  o && "number" == typeof o.maxKeys && (c = o.maxKeys);
                  var u = e.length;
                  c > 0 && u > c && (u = c);
                  for (var l = 0; l < u; ++l) {
                    var f,
                      h,
                      p,
                      d,
                      g = e[l].replace(a, "%20"),
                      m = g.indexOf(r);
                    m >= 0
                      ? ((f = g.substr(0, m)), (h = g.substr(m + 1)))
                      : ((f = g), (h = "")),
                      (p = decodeURIComponent(f)),
                      (d = decodeURIComponent(h)),
                      n(s, p)
                        ? i(s[p])
                          ? s[p].push(d)
                          : (s[p] = [s[p], d])
                        : (s[p] = d);
                  }
                  return s;
                };
                var i =
                  Array.isArray ||
                  function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  };
              },
              {},
            ],
            104: [
              function (e, t, r) {
                "use strict";
                var n = function (e) {
                  switch (typeof e) {
                    case "string":
                      return e;
                    case "boolean":
                      return e ? "true" : "false";
                    case "number":
                      return isFinite(e) ? e : "";
                    default:
                      return "";
                  }
                };
                t.exports = function (e, t, r, a) {
                  return (
                    (t = t || "&"),
                    (r = r || "="),
                    null === e && (e = void 0),
                    "object" == typeof e
                      ? o(s(e), function (s) {
                          var a = encodeURIComponent(n(s)) + r;
                          return i(e[s])
                            ? o(e[s], function (e) {
                                return a + encodeURIComponent(n(e));
                              }).join(t)
                            : a + encodeURIComponent(n(e[s]));
                        }).join(t)
                      : a
                      ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e))
                      : ""
                  );
                };
                var i =
                  Array.isArray ||
                  function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  };
                function o(e, t) {
                  if (e.map) return e.map(t);
                  for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                  return r;
                }
                var s =
                  Object.keys ||
                  function (e) {
                    var t = [];
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t;
                  };
              },
              {},
            ],
            105: [
              function (e, t, r) {
                "use strict";
                (r.decode = r.parse = e("./decode")),
                  (r.encode = r.stringify = e("./encode"));
              },
              { "./decode": 103, "./encode": 104 },
            ],
            106: [
              function (e, t, r) {
                t.exports = e("./lib/_stream_duplex.js");
              },
              { "./lib/_stream_duplex.js": 107 },
            ],
            107: [
              function (e, t, r) {
                "use strict";
                var n = e("process-nextick-args"),
                  i =
                    Object.keys ||
                    function (e) {
                      var t = [];
                      for (var r in e) t.push(r);
                      return t;
                    };
                t.exports = f;
                var o = Object.create(e("core-util-is"));
                o.inherits = e("inherits");
                var s = e("./_stream_readable"),
                  a = e("./_stream_writable");
                o.inherits(f, s);
                for (var c = i(a.prototype), u = 0; u < c.length; u++) {
                  var l = c[u];
                  f.prototype[l] || (f.prototype[l] = a.prototype[l]);
                }
                function f(e) {
                  if (!(this instanceof f)) return new f(e);
                  s.call(this, e),
                    a.call(this, e),
                    e && !1 === e.readable && (this.readable = !1),
                    e && !1 === e.writable && (this.writable = !1),
                    (this.allowHalfOpen = !0),
                    e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
                    this.once("end", h);
                }
                function h() {
                  this.allowHalfOpen ||
                    this._writableState.ended ||
                    n.nextTick(p, this);
                }
                function p(e) {
                  e.end();
                }
                Object.defineProperty(f.prototype, "writableHighWaterMark", {
                  enumerable: !1,
                  get: function () {
                    return this._writableState.highWaterMark;
                  },
                }),
                  Object.defineProperty(f.prototype, "destroyed", {
                    get: function () {
                      return (
                        void 0 !== this._readableState &&
                        void 0 !== this._writableState &&
                        this._readableState.destroyed &&
                        this._writableState.destroyed
                      );
                    },
                    set: function (e) {
                      void 0 !== this._readableState &&
                        void 0 !== this._writableState &&
                        ((this._readableState.destroyed = e),
                        (this._writableState.destroyed = e));
                    },
                  }),
                  (f.prototype._destroy = function (e, t) {
                    this.push(null), this.end(), n.nextTick(t, e);
                  });
              },
              {
                "./_stream_readable": 109,
                "./_stream_writable": 111,
                "core-util-is": 14,
                inherits: 88,
                "process-nextick-args": 100,
              },
            ],
            108: [
              function (e, t, r) {
                "use strict";
                t.exports = o;
                var n = e("./_stream_transform"),
                  i = Object.create(e("core-util-is"));
                function o(e) {
                  if (!(this instanceof o)) return new o(e);
                  n.call(this, e);
                }
                (i.inherits = e("inherits")),
                  i.inherits(o, n),
                  (o.prototype._transform = function (e, t, r) {
                    r(null, e);
                  });
              },
              { "./_stream_transform": 110, "core-util-is": 14, inherits: 88 },
            ],
            109: [
              function (e, r, n) {
                (function (t, n) {
                  "use strict";
                  var i = e("process-nextick-args");
                  r.exports = v;
                  var o,
                    s = e("isarray");
                  (v.ReadableState = b), e("events").EventEmitter;
                  var a = function (e, t) {
                      return e.listeners(t).length;
                    },
                    c = e("./internal/streams/stream"),
                    u = e("safe-buffer").Buffer,
                    l = n.Uint8Array || function () {},
                    f = Object.create(e("core-util-is"));
                  f.inherits = e("inherits");
                  var h = e("util"),
                    p = void 0;
                  p = h && h.debuglog ? h.debuglog("stream") : function () {};
                  var d,
                    g = e("./internal/streams/BufferList"),
                    m = e("./internal/streams/destroy");
                  f.inherits(v, c);
                  var y = ["error", "close", "destroy", "pause", "resume"];
                  function b(t, r) {
                    t = t || {};
                    var n = r instanceof (o = o || e("./_stream_duplex"));
                    (this.objectMode = !!t.objectMode),
                      n &&
                        (this.objectMode =
                          this.objectMode || !!t.readableObjectMode);
                    var i = t.highWaterMark,
                      s = t.readableHighWaterMark,
                      a = this.objectMode ? 16 : 16384;
                    (this.highWaterMark =
                      i || 0 === i ? i : n && (s || 0 === s) ? s : a),
                      (this.highWaterMark = Math.floor(this.highWaterMark)),
                      (this.buffer = new g()),
                      (this.length = 0),
                      (this.pipes = null),
                      (this.pipesCount = 0),
                      (this.flowing = null),
                      (this.ended = !1),
                      (this.endEmitted = !1),
                      (this.reading = !1),
                      (this.sync = !0),
                      (this.needReadable = !1),
                      (this.emittedReadable = !1),
                      (this.readableListening = !1),
                      (this.resumeScheduled = !1),
                      (this.destroyed = !1),
                      (this.defaultEncoding = t.defaultEncoding || "utf8"),
                      (this.awaitDrain = 0),
                      (this.readingMore = !1),
                      (this.decoder = null),
                      (this.encoding = null),
                      t.encoding &&
                        (d || (d = e("string_decoder/").StringDecoder),
                        (this.decoder = new d(t.encoding)),
                        (this.encoding = t.encoding));
                  }
                  function v(t) {
                    if (
                      ((o = o || e("./_stream_duplex")), !(this instanceof v))
                    )
                      return new v(t);
                    (this._readableState = new b(t, this)),
                      (this.readable = !0),
                      t &&
                        ("function" == typeof t.read && (this._read = t.read),
                        "function" == typeof t.destroy &&
                          (this._destroy = t.destroy)),
                      c.call(this);
                  }
                  function _(e, t, r, n, i) {
                    var o,
                      s = e._readableState;
                    return (
                      null === t
                        ? ((s.reading = !1),
                          (function (e, t) {
                            if (!t.ended) {
                              if (t.decoder) {
                                var r = t.decoder.end();
                                r &&
                                  r.length &&
                                  (t.buffer.push(r),
                                  (t.length += t.objectMode ? 1 : r.length));
                              }
                              (t.ended = !0), x(e);
                            }
                          })(e, s))
                        : (i ||
                            (o = (function (e, t) {
                              var r, n;
                              return (
                                (n = t),
                                u.isBuffer(n) ||
                                  n instanceof l ||
                                  "string" == typeof t ||
                                  void 0 === t ||
                                  e.objectMode ||
                                  (r = new TypeError(
                                    "Invalid non-string/buffer chunk"
                                  )),
                                r
                              );
                            })(s, t)),
                          o
                            ? e.emit("error", o)
                            : s.objectMode || (t && t.length > 0)
                            ? ("string" == typeof t ||
                                s.objectMode ||
                                Object.getPrototypeOf(t) === u.prototype ||
                                (t = (function (e) {
                                  return u.from(e);
                                })(t)),
                              n
                                ? s.endEmitted
                                  ? e.emit(
                                      "error",
                                      new Error(
                                        "stream.unshift() after end event"
                                      )
                                    )
                                  : w(e, s, t, !0)
                                : s.ended
                                ? e.emit(
                                    "error",
                                    new Error("stream.push() after EOF")
                                  )
                                : ((s.reading = !1),
                                  s.decoder && !r
                                    ? ((t = s.decoder.write(t)),
                                      s.objectMode || 0 !== t.length
                                        ? w(e, s, t, !1)
                                        : E(e, s))
                                    : w(e, s, t, !1)))
                            : n || (s.reading = !1)),
                      (function (e) {
                        return (
                          !e.ended &&
                          (e.needReadable ||
                            e.length < e.highWaterMark ||
                            0 === e.length)
                        );
                      })(s)
                    );
                  }
                  function w(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync
                      ? (e.emit("data", r), e.read(0))
                      : ((t.length += t.objectMode ? 1 : r.length),
                        n ? t.buffer.unshift(r) : t.buffer.push(r),
                        t.needReadable && x(e)),
                      E(e, t);
                  }
                  function S(e, t) {
                    return e <= 0 || (0 === t.length && t.ended)
                      ? 0
                      : t.objectMode
                      ? 1
                      : e != e
                      ? t.flowing && t.length
                        ? t.buffer.head.data.length
                        : t.length
                      : (e > t.highWaterMark &&
                          (t.highWaterMark = (function (e) {
                            return (
                              e >= 8388608
                                ? (e = 8388608)
                                : (e--,
                                  (e |= e >>> 1),
                                  (e |= e >>> 2),
                                  (e |= e >>> 4),
                                  (e |= e >>> 8),
                                  (e |= e >>> 16),
                                  e++),
                              e
                            );
                          })(e)),
                        e <= t.length
                          ? e
                          : t.ended
                          ? t.length
                          : ((t.needReadable = !0), 0));
                  }
                  function x(e) {
                    var t = e._readableState;
                    (t.needReadable = !1),
                      t.emittedReadable ||
                        (p("emitReadable", t.flowing),
                        (t.emittedReadable = !0),
                        t.sync ? i.nextTick(k, e) : k(e));
                  }
                  function k(e) {
                    p("emit readable"), e.emit("readable"), P(e);
                  }
                  function E(e, t) {
                    t.readingMore ||
                      ((t.readingMore = !0), i.nextTick(I, e, t));
                  }
                  function I(e, t) {
                    for (
                      var r = t.length;
                      !t.reading &&
                      !t.flowing &&
                      !t.ended &&
                      t.length < t.highWaterMark &&
                      (p("maybeReadMore read 0"), e.read(0), r !== t.length);

                    )
                      r = t.length;
                    t.readingMore = !1;
                  }
                  function C(e) {
                    p("readable nexttick read 0"), e.read(0);
                  }
                  function O(e, t) {
                    t.reading || (p("resume read 0"), e.read(0)),
                      (t.resumeScheduled = !1),
                      (t.awaitDrain = 0),
                      e.emit("resume"),
                      P(e),
                      t.flowing && !t.reading && e.read(0);
                  }
                  function P(e) {
                    var t = e._readableState;
                    for (
                      p("flow", t.flowing);
                      t.flowing && null !== e.read();

                    );
                  }
                  function A(e, t) {
                    return 0 === t.length
                      ? null
                      : (t.objectMode
                          ? (r = t.buffer.shift())
                          : !e || e >= t.length
                          ? ((r = t.decoder
                              ? t.buffer.join("")
                              : 1 === t.buffer.length
                              ? t.buffer.head.data
                              : t.buffer.concat(t.length)),
                            t.buffer.clear())
                          : (r = (function (e, t, r) {
                              var n;
                              return (
                                e < t.head.data.length
                                  ? ((n = t.head.data.slice(0, e)),
                                    (t.head.data = t.head.data.slice(e)))
                                  : (n =
                                      e === t.head.data.length
                                        ? t.shift()
                                        : r
                                        ? (function (e, t) {
                                            var r = t.head,
                                              n = 1,
                                              i = r.data;
                                            for (
                                              e -= i.length;
                                              (r = r.next);

                                            ) {
                                              var o = r.data,
                                                s = e > o.length ? o.length : e;
                                              if (
                                                (s === o.length
                                                  ? (i += o)
                                                  : (i += o.slice(0, e)),
                                                0 == (e -= s))
                                              ) {
                                                s === o.length
                                                  ? (++n,
                                                    r.next
                                                      ? (t.head = r.next)
                                                      : (t.head = t.tail =
                                                          null))
                                                  : ((t.head = r),
                                                    (r.data = o.slice(s)));
                                                break;
                                              }
                                              ++n;
                                            }
                                            return (t.length -= n), i;
                                          })(e, t)
                                        : (function (e, t) {
                                            var r = u.allocUnsafe(e),
                                              n = t.head,
                                              i = 1;
                                            for (
                                              n.data.copy(r),
                                                e -= n.data.length;
                                              (n = n.next);

                                            ) {
                                              var o = n.data,
                                                s = e > o.length ? o.length : e;
                                              if (
                                                (o.copy(r, r.length - e, 0, s),
                                                0 == (e -= s))
                                              ) {
                                                s === o.length
                                                  ? (++i,
                                                    n.next
                                                      ? (t.head = n.next)
                                                      : (t.head = t.tail =
                                                          null))
                                                  : ((t.head = n),
                                                    (n.data = o.slice(s)));
                                                break;
                                              }
                                              ++i;
                                            }
                                            return (t.length -= i), r;
                                          })(e, t)),
                                n
                              );
                            })(e, t.buffer, t.decoder)),
                        r);
                    var r;
                  }
                  function j(e) {
                    var t = e._readableState;
                    if (t.length > 0)
                      throw new Error(
                        '"endReadable()" called on non-empty stream'
                      );
                    t.endEmitted || ((t.ended = !0), i.nextTick(T, t, e));
                  }
                  function T(e, t) {
                    e.endEmitted ||
                      0 !== e.length ||
                      ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
                  }
                  function M(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                      if (e[r] === t) return r;
                    return -1;
                  }
                  Object.defineProperty(v.prototype, "destroyed", {
                    get: function () {
                      return (
                        void 0 !== this._readableState &&
                        this._readableState.destroyed
                      );
                    },
                    set: function (e) {
                      this._readableState &&
                        (this._readableState.destroyed = e);
                    },
                  }),
                    (v.prototype.destroy = m.destroy),
                    (v.prototype._undestroy = m.undestroy),
                    (v.prototype._destroy = function (e, t) {
                      this.push(null), t(e);
                    }),
                    (v.prototype.push = function (e, t) {
                      var r,
                        n = this._readableState;
                      return (
                        n.objectMode
                          ? (r = !0)
                          : "string" == typeof e &&
                            ((t = t || n.defaultEncoding) !== n.encoding &&
                              ((e = u.from(e, t)), (t = "")),
                            (r = !0)),
                        _(this, e, t, !1, r)
                      );
                    }),
                    (v.prototype.unshift = function (e) {
                      return _(this, e, null, !0, !1);
                    }),
                    (v.prototype.isPaused = function () {
                      return !1 === this._readableState.flowing;
                    }),
                    (v.prototype.setEncoding = function (t) {
                      return (
                        d || (d = e("string_decoder/").StringDecoder),
                        (this._readableState.decoder = new d(t)),
                        (this._readableState.encoding = t),
                        this
                      );
                    }),
                    (v.prototype.read = function (e) {
                      p("read", e), (e = parseInt(e, 10));
                      var t = this._readableState,
                        r = e;
                      if (
                        (0 !== e && (t.emittedReadable = !1),
                        0 === e &&
                          t.needReadable &&
                          (t.length >= t.highWaterMark || t.ended))
                      )
                        return (
                          p("read: emitReadable", t.length, t.ended),
                          0 === t.length && t.ended ? j(this) : x(this),
                          null
                        );
                      if (0 === (e = S(e, t)) && t.ended)
                        return 0 === t.length && j(this), null;
                      var n,
                        i = t.needReadable;
                      return (
                        p("need readable", i),
                        (0 === t.length || t.length - e < t.highWaterMark) &&
                          p("length less than watermark", (i = !0)),
                        t.ended || t.reading
                          ? p("reading or ended", (i = !1))
                          : i &&
                            (p("do read"),
                            (t.reading = !0),
                            (t.sync = !0),
                            0 === t.length && (t.needReadable = !0),
                            this._read(t.highWaterMark),
                            (t.sync = !1),
                            t.reading || (e = S(r, t))),
                        null === (n = e > 0 ? A(e, t) : null)
                          ? ((t.needReadable = !0), (e = 0))
                          : (t.length -= e),
                        0 === t.length &&
                          (t.ended || (t.needReadable = !0),
                          r !== e && t.ended && j(this)),
                        null !== n && this.emit("data", n),
                        n
                      );
                    }),
                    (v.prototype._read = function (e) {
                      this.emit(
                        "error",
                        new Error("_read() is not implemented")
                      );
                    }),
                    (v.prototype.pipe = function (e, r) {
                      var n = this,
                        o = this._readableState;
                      switch (o.pipesCount) {
                        case 0:
                          o.pipes = e;
                          break;
                        case 1:
                          o.pipes = [o.pipes, e];
                          break;
                        default:
                          o.pipes.push(e);
                      }
                      (o.pipesCount += 1),
                        p("pipe count=%d opts=%j", o.pipesCount, r);
                      var c =
                        (r && !1 === r.end) || e === t.stdout || e === t.stderr
                          ? v
                          : l;
                      function u(t, r) {
                        p("onunpipe"),
                          t === n &&
                            r &&
                            !1 === r.hasUnpiped &&
                            ((r.hasUnpiped = !0),
                            p("cleanup"),
                            e.removeListener("close", y),
                            e.removeListener("finish", b),
                            e.removeListener("drain", f),
                            e.removeListener("error", m),
                            e.removeListener("unpipe", u),
                            n.removeListener("end", l),
                            n.removeListener("end", v),
                            n.removeListener("data", g),
                            (h = !0),
                            !o.awaitDrain ||
                              (e._writableState &&
                                !e._writableState.needDrain) ||
                              f());
                      }
                      function l() {
                        p("onend"), e.end();
                      }
                      o.endEmitted ? i.nextTick(c) : n.once("end", c),
                        e.on("unpipe", u);
                      var f = (function (e) {
                        return function () {
                          var t = e._readableState;
                          p("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain &&
                              a(e, "data") &&
                              ((t.flowing = !0), P(e));
                        };
                      })(n);
                      e.on("drain", f);
                      var h = !1,
                        d = !1;
                      function g(t) {
                        p("ondata"),
                          (d = !1),
                          !1 !== e.write(t) ||
                            d ||
                            (((1 === o.pipesCount && o.pipes === e) ||
                              (o.pipesCount > 1 && -1 !== M(o.pipes, e))) &&
                              !h &&
                              (p(
                                "false write response, pause",
                                n._readableState.awaitDrain
                              ),
                              n._readableState.awaitDrain++,
                              (d = !0)),
                            n.pause());
                      }
                      function m(t) {
                        p("onerror", t),
                          v(),
                          e.removeListener("error", m),
                          0 === a(e, "error") && e.emit("error", t);
                      }
                      function y() {
                        e.removeListener("finish", b), v();
                      }
                      function b() {
                        p("onfinish"), e.removeListener("close", y), v();
                      }
                      function v() {
                        p("unpipe"), n.unpipe(e);
                      }
                      return (
                        n.on("data", g),
                        (function (e, t, r) {
                          if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                          e._events && e._events[t]
                            ? s(e._events[t])
                              ? e._events[t].unshift(r)
                              : (e._events[t] = [r, e._events[t]])
                            : e.on(t, r);
                        })(e, "error", m),
                        e.once("close", y),
                        e.once("finish", b),
                        e.emit("pipe", n),
                        o.flowing || (p("pipe resume"), n.resume()),
                        e
                      );
                    }),
                    (v.prototype.unpipe = function (e) {
                      var t = this._readableState,
                        r = { hasUnpiped: !1 };
                      if (0 === t.pipesCount) return this;
                      if (1 === t.pipesCount)
                        return (
                          (e && e !== t.pipes) ||
                            (e || (e = t.pipes),
                            (t.pipes = null),
                            (t.pipesCount = 0),
                            (t.flowing = !1),
                            e && e.emit("unpipe", this, r)),
                          this
                        );
                      if (!e) {
                        var n = t.pipes,
                          i = t.pipesCount;
                        (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                        for (var o = 0; o < i; o++)
                          n[o].emit("unpipe", this, r);
                        return this;
                      }
                      var s = M(t.pipes, e);
                      return (
                        -1 === s ||
                          (t.pipes.splice(s, 1),
                          (t.pipesCount -= 1),
                          1 === t.pipesCount && (t.pipes = t.pipes[0]),
                          e.emit("unpipe", this, r)),
                        this
                      );
                    }),
                    (v.prototype.on = function (e, t) {
                      var r = c.prototype.on.call(this, e, t);
                      if ("data" === e)
                        !1 !== this._readableState.flowing && this.resume();
                      else if ("readable" === e) {
                        var n = this._readableState;
                        n.endEmitted ||
                          n.readableListening ||
                          ((n.readableListening = n.needReadable = !0),
                          (n.emittedReadable = !1),
                          n.reading
                            ? n.length && x(this)
                            : i.nextTick(C, this));
                      }
                      return r;
                    }),
                    (v.prototype.addListener = v.prototype.on),
                    (v.prototype.resume = function () {
                      var e = this._readableState;
                      return (
                        e.flowing ||
                          (p("resume"),
                          (e.flowing = !0),
                          (function (e, t) {
                            t.resumeScheduled ||
                              ((t.resumeScheduled = !0), i.nextTick(O, e, t));
                          })(this, e)),
                        this
                      );
                    }),
                    (v.prototype.pause = function () {
                      return (
                        p("call pause flowing=%j", this._readableState.flowing),
                        !1 !== this._readableState.flowing &&
                          (p("pause"),
                          (this._readableState.flowing = !1),
                          this.emit("pause")),
                        this
                      );
                    }),
                    (v.prototype.wrap = function (e) {
                      var t = this,
                        r = this._readableState,
                        n = !1;
                      for (var i in (e.on("end", function () {
                        if ((p("wrapped end"), r.decoder && !r.ended)) {
                          var e = r.decoder.end();
                          e && e.length && t.push(e);
                        }
                        t.push(null);
                      }),
                      e.on("data", function (i) {
                        p("wrapped data"),
                          r.decoder && (i = r.decoder.write(i)),
                          (r.objectMode && null == i) ||
                            ((r.objectMode || (i && i.length)) &&
                              (t.push(i) || ((n = !0), e.pause())));
                      }),
                      e))
                        void 0 === this[i] &&
                          "function" == typeof e[i] &&
                          (this[i] = (function (t) {
                            return function () {
                              return e[t].apply(e, arguments);
                            };
                          })(i));
                      for (var o = 0; o < y.length; o++)
                        e.on(y[o], this.emit.bind(this, y[o]));
                      return (
                        (this._read = function (t) {
                          p("wrapped _read", t), n && ((n = !1), e.resume());
                        }),
                        this
                      );
                    }),
                    Object.defineProperty(
                      v.prototype,
                      "readableHighWaterMark",
                      {
                        enumerable: !1,
                        get: function () {
                          return this._readableState.highWaterMark;
                        },
                      }
                    ),
                    (v._fromList = A);
                }.call(
                  this,
                  e("_process"),
                  void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {
                "./_stream_duplex": 107,
                "./internal/streams/BufferList": 112,
                "./internal/streams/destroy": 113,
                "./internal/streams/stream": 114,
                _process: 101,
                "core-util-is": 14,
                events: 83,
                inherits: 88,
                isarray: 90,
                "process-nextick-args": 100,
                "safe-buffer": 117,
                "string_decoder/": 119,
                util: 12,
              },
            ],
            110: [
              function (e, t, r) {
                "use strict";
                t.exports = s;
                var n = e("./_stream_duplex"),
                  i = Object.create(e("core-util-is"));
                function o(e, t) {
                  var r = this._transformState;
                  r.transforming = !1;
                  var n = r.writecb;
                  if (!n)
                    return this.emit(
                      "error",
                      new Error("write callback called multiple times")
                    );
                  (r.writechunk = null),
                    (r.writecb = null),
                    null != t && this.push(t),
                    n(e);
                  var i = this._readableState;
                  (i.reading = !1),
                    (i.needReadable || i.length < i.highWaterMark) &&
                      this._read(i.highWaterMark);
                }
                function s(e) {
                  if (!(this instanceof s)) return new s(e);
                  n.call(this, e),
                    (this._transformState = {
                      afterTransform: o.bind(this),
                      needTransform: !1,
                      transforming: !1,
                      writecb: null,
                      writechunk: null,
                      writeencoding: null,
                    }),
                    (this._readableState.needReadable = !0),
                    (this._readableState.sync = !1),
                    e &&
                      ("function" == typeof e.transform &&
                        (this._transform = e.transform),
                      "function" == typeof e.flush && (this._flush = e.flush)),
                    this.on("prefinish", a);
                }
                function a() {
                  var e = this;
                  "function" == typeof this._flush
                    ? this._flush(function (t, r) {
                        c(e, t, r);
                      })
                    : c(this, null, null);
                }
                function c(e, t, r) {
                  if (t) return e.emit("error", t);
                  if ((null != r && e.push(r), e._writableState.length))
                    throw new Error(
                      "Calling transform done when ws.length != 0"
                    );
                  if (e._transformState.transforming)
                    throw new Error(
                      "Calling transform done when still transforming"
                    );
                  return e.push(null);
                }
                (i.inherits = e("inherits")),
                  i.inherits(s, n),
                  (s.prototype.push = function (e, t) {
                    return (
                      (this._transformState.needTransform = !1),
                      n.prototype.push.call(this, e, t)
                    );
                  }),
                  (s.prototype._transform = function (e, t, r) {
                    throw new Error("_transform() is not implemented");
                  }),
                  (s.prototype._write = function (e, t, r) {
                    var n = this._transformState;
                    if (
                      ((n.writecb = r),
                      (n.writechunk = e),
                      (n.writeencoding = t),
                      !n.transforming)
                    ) {
                      var i = this._readableState;
                      (n.needTransform ||
                        i.needReadable ||
                        i.length < i.highWaterMark) &&
                        this._read(i.highWaterMark);
                    }
                  }),
                  (s.prototype._read = function (e) {
                    var t = this._transformState;
                    null !== t.writechunk && t.writecb && !t.transforming
                      ? ((t.transforming = !0),
                        this._transform(
                          t.writechunk,
                          t.writeencoding,
                          t.afterTransform
                        ))
                      : (t.needTransform = !0);
                  }),
                  (s.prototype._destroy = function (e, t) {
                    var r = this;
                    n.prototype._destroy.call(this, e, function (e) {
                      t(e), r.emit("close");
                    });
                  });
              },
              { "./_stream_duplex": 107, "core-util-is": 14, inherits: 88 },
            ],
            111: [
              function (e, r, n) {
                (function (t, n, i) {
                  "use strict";
                  var o = e("process-nextick-args");
                  function s(e) {
                    var t = this;
                    (this.next = null),
                      (this.entry = null),
                      (this.finish = function () {
                        !(function (e, t, r) {
                          var n = e.entry;
                          for (e.entry = null; n; ) {
                            var i = n.callback;
                            t.pendingcb--, i(r), (n = n.next);
                          }
                          t.corkedRequestsFree
                            ? (t.corkedRequestsFree.next = e)
                            : (t.corkedRequestsFree = e);
                        })(t, e);
                      });
                  }
                  r.exports = b;
                  var a,
                    c =
                      !t.browser &&
                      ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
                        ? i
                        : o.nextTick;
                  b.WritableState = y;
                  var u = Object.create(e("core-util-is"));
                  u.inherits = e("inherits");
                  var l,
                    f = { deprecate: e("util-deprecate") },
                    h = e("./internal/streams/stream"),
                    p = e("safe-buffer").Buffer,
                    d = n.Uint8Array || function () {},
                    g = e("./internal/streams/destroy");
                  function m() {}
                  function y(t, r) {
                    (a = a || e("./_stream_duplex")), (t = t || {});
                    var n = r instanceof a;
                    (this.objectMode = !!t.objectMode),
                      n &&
                        (this.objectMode =
                          this.objectMode || !!t.writableObjectMode);
                    var i = t.highWaterMark,
                      u = t.writableHighWaterMark,
                      l = this.objectMode ? 16 : 16384;
                    (this.highWaterMark =
                      i || 0 === i ? i : n && (u || 0 === u) ? u : l),
                      (this.highWaterMark = Math.floor(this.highWaterMark)),
                      (this.finalCalled = !1),
                      (this.needDrain = !1),
                      (this.ending = !1),
                      (this.ended = !1),
                      (this.finished = !1),
                      (this.destroyed = !1);
                    var f = !1 === t.decodeStrings;
                    (this.decodeStrings = !f),
                      (this.defaultEncoding = t.defaultEncoding || "utf8"),
                      (this.length = 0),
                      (this.writing = !1),
                      (this.corked = 0),
                      (this.sync = !0),
                      (this.bufferProcessing = !1),
                      (this.onwrite = function (e) {
                        !(function (e, t) {
                          var r = e._writableState,
                            n = r.sync,
                            i = r.writecb;
                          if (
                            ((function (e) {
                              (e.writing = !1),
                                (e.writecb = null),
                                (e.length -= e.writelen),
                                (e.writelen = 0);
                            })(r),
                            t)
                          )
                            !(function (e, t, r, n, i) {
                              --t.pendingcb,
                                r
                                  ? (o.nextTick(i, n),
                                    o.nextTick(k, e, t),
                                    (e._writableState.errorEmitted = !0),
                                    e.emit("error", n))
                                  : (i(n),
                                    (e._writableState.errorEmitted = !0),
                                    e.emit("error", n),
                                    k(e, t));
                            })(e, r, n, t, i);
                          else {
                            var s = S(r);
                            s ||
                              r.corked ||
                              r.bufferProcessing ||
                              !r.bufferedRequest ||
                              w(e, r),
                              n ? c(_, e, r, s, i) : _(e, r, s, i);
                          }
                        })(r, e);
                      }),
                      (this.writecb = null),
                      (this.writelen = 0),
                      (this.bufferedRequest = null),
                      (this.lastBufferedRequest = null),
                      (this.pendingcb = 0),
                      (this.prefinished = !1),
                      (this.errorEmitted = !1),
                      (this.bufferedRequestCount = 0),
                      (this.corkedRequestsFree = new s(this));
                  }
                  function b(t) {
                    if (
                      ((a = a || e("./_stream_duplex")),
                      !(l.call(b, this) || this instanceof a))
                    )
                      return new b(t);
                    (this._writableState = new y(t, this)),
                      (this.writable = !0),
                      t &&
                        ("function" == typeof t.write &&
                          (this._write = t.write),
                        "function" == typeof t.writev &&
                          (this._writev = t.writev),
                        "function" == typeof t.destroy &&
                          (this._destroy = t.destroy),
                        "function" == typeof t.final &&
                          (this._final = t.final)),
                      h.call(this);
                  }
                  function v(e, t, r, n, i, o, s) {
                    (t.writelen = n),
                      (t.writecb = s),
                      (t.writing = !0),
                      (t.sync = !0),
                      r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
                      (t.sync = !1);
                  }
                  function _(e, t, r, n) {
                    r ||
                      (function (e, t) {
                        0 === t.length &&
                          t.needDrain &&
                          ((t.needDrain = !1), e.emit("drain"));
                      })(e, t),
                      t.pendingcb--,
                      n(),
                      k(e, t);
                  }
                  function w(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                      var n = t.bufferedRequestCount,
                        i = new Array(n),
                        o = t.corkedRequestsFree;
                      o.entry = r;
                      for (var a = 0, c = !0; r; )
                        (i[a] = r), r.isBuf || (c = !1), (r = r.next), (a += 1);
                      (i.allBuffers = c),
                        v(e, t, !0, t.length, i, "", o.finish),
                        t.pendingcb++,
                        (t.lastBufferedRequest = null),
                        o.next
                          ? ((t.corkedRequestsFree = o.next), (o.next = null))
                          : (t.corkedRequestsFree = new s(t)),
                        (t.bufferedRequestCount = 0);
                    } else {
                      for (; r; ) {
                        var u = r.chunk,
                          l = r.encoding,
                          f = r.callback;
                        if (
                          (v(e, t, !1, t.objectMode ? 1 : u.length, u, l, f),
                          (r = r.next),
                          t.bufferedRequestCount--,
                          t.writing)
                        )
                          break;
                      }
                      null === r && (t.lastBufferedRequest = null);
                    }
                    (t.bufferedRequest = r), (t.bufferProcessing = !1);
                  }
                  function S(e) {
                    return (
                      e.ending &&
                      0 === e.length &&
                      null === e.bufferedRequest &&
                      !e.finished &&
                      !e.writing
                    );
                  }
                  function x(e, t) {
                    e._final(function (r) {
                      t.pendingcb--,
                        r && e.emit("error", r),
                        (t.prefinished = !0),
                        e.emit("prefinish"),
                        k(e, t);
                    });
                  }
                  function k(e, t) {
                    var r = S(t);
                    return (
                      r &&
                        ((function (e, t) {
                          t.prefinished ||
                            t.finalCalled ||
                            ("function" == typeof e._final
                              ? (t.pendingcb++,
                                (t.finalCalled = !0),
                                o.nextTick(x, e, t))
                              : ((t.prefinished = !0), e.emit("prefinish")));
                        })(e, t),
                        0 === t.pendingcb &&
                          ((t.finished = !0), e.emit("finish"))),
                      r
                    );
                  }
                  u.inherits(b, h),
                    (y.prototype.getBuffer = function () {
                      for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e), (e = e.next);
                      return t;
                    }),
                    (function () {
                      try {
                        Object.defineProperty(y.prototype, "buffer", {
                          get: f.deprecate(
                            function () {
                              return this.getBuffer();
                            },
                            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                            "DEP0003"
                          ),
                        });
                      } catch (e) {}
                    })(),
                    "function" == typeof Symbol &&
                    Symbol.hasInstance &&
                    "function" == typeof Function.prototype[Symbol.hasInstance]
                      ? ((l = Function.prototype[Symbol.hasInstance]),
                        Object.defineProperty(b, Symbol.hasInstance, {
                          value: function (e) {
                            return (
                              !!l.call(this, e) ||
                              (this === b && e && e._writableState instanceof y)
                            );
                          },
                        }))
                      : (l = function (e) {
                          return e instanceof this;
                        }),
                    (b.prototype.pipe = function () {
                      this.emit(
                        "error",
                        new Error("Cannot pipe, not readable")
                      );
                    }),
                    (b.prototype.write = function (e, t, r) {
                      var n,
                        i = this._writableState,
                        s = !1,
                        a =
                          !i.objectMode &&
                          ((n = e), p.isBuffer(n) || n instanceof d);
                      return (
                        a &&
                          !p.isBuffer(e) &&
                          (e = (function (e) {
                            return p.from(e);
                          })(e)),
                        "function" == typeof t && ((r = t), (t = null)),
                        a ? (t = "buffer") : t || (t = i.defaultEncoding),
                        "function" != typeof r && (r = m),
                        i.ended
                          ? (function (e, t) {
                              var r = new Error("write after end");
                              e.emit("error", r), o.nextTick(t, r);
                            })(this, r)
                          : (a ||
                              (function (e, t, r, n) {
                                var i = !0,
                                  s = !1;
                                return (
                                  null === r
                                    ? (s = new TypeError(
                                        "May not write null values to stream"
                                      ))
                                    : "string" == typeof r ||
                                      void 0 === r ||
                                      t.objectMode ||
                                      (s = new TypeError(
                                        "Invalid non-string/buffer chunk"
                                      )),
                                  s &&
                                    (e.emit("error", s),
                                    o.nextTick(n, s),
                                    (i = !1)),
                                  i
                                );
                              })(this, i, e, r)) &&
                            (i.pendingcb++,
                            (s = (function (e, t, r, n, i, o) {
                              if (!r) {
                                var s = (function (e, t, r) {
                                  return (
                                    e.objectMode ||
                                      !1 === e.decodeStrings ||
                                      "string" != typeof t ||
                                      (t = p.from(t, r)),
                                    t
                                  );
                                })(t, n, i);
                                n !== s && ((r = !0), (i = "buffer"), (n = s));
                              }
                              var a = t.objectMode ? 1 : n.length;
                              t.length += a;
                              var c = t.length < t.highWaterMark;
                              if (
                                (c || (t.needDrain = !0), t.writing || t.corked)
                              ) {
                                var u = t.lastBufferedRequest;
                                (t.lastBufferedRequest = {
                                  chunk: n,
                                  encoding: i,
                                  isBuf: r,
                                  callback: o,
                                  next: null,
                                }),
                                  u
                                    ? (u.next = t.lastBufferedRequest)
                                    : (t.bufferedRequest =
                                        t.lastBufferedRequest),
                                  (t.bufferedRequestCount += 1);
                              } else v(e, t, !1, a, n, i, o);
                              return c;
                            })(this, i, a, e, t, r))),
                        s
                      );
                    }),
                    (b.prototype.cork = function () {
                      this._writableState.corked++;
                    }),
                    (b.prototype.uncork = function () {
                      var e = this._writableState;
                      e.corked &&
                        (e.corked--,
                        e.writing ||
                          e.corked ||
                          e.finished ||
                          e.bufferProcessing ||
                          !e.bufferedRequest ||
                          w(this, e));
                    }),
                    (b.prototype.setDefaultEncoding = function (e) {
                      if (
                        ("string" == typeof e && (e = e.toLowerCase()),
                        !(
                          [
                            "hex",
                            "utf8",
                            "utf-8",
                            "ascii",
                            "binary",
                            "base64",
                            "ucs2",
                            "ucs-2",
                            "utf16le",
                            "utf-16le",
                            "raw",
                          ].indexOf((e + "").toLowerCase()) > -1
                        ))
                      )
                        throw new TypeError("Unknown encoding: " + e);
                      return (this._writableState.defaultEncoding = e), this;
                    }),
                    Object.defineProperty(
                      b.prototype,
                      "writableHighWaterMark",
                      {
                        enumerable: !1,
                        get: function () {
                          return this._writableState.highWaterMark;
                        },
                      }
                    ),
                    (b.prototype._write = function (e, t, r) {
                      r(new Error("_write() is not implemented"));
                    }),
                    (b.prototype._writev = null),
                    (b.prototype.end = function (e, t, r) {
                      var n = this._writableState;
                      "function" == typeof e
                        ? ((r = e), (e = null), (t = null))
                        : "function" == typeof t && ((r = t), (t = null)),
                        null != e && this.write(e, t),
                        n.corked && ((n.corked = 1), this.uncork()),
                        n.ending ||
                          n.finished ||
                          (function (e, t, r) {
                            (t.ending = !0),
                              k(e, t),
                              r &&
                                (t.finished
                                  ? o.nextTick(r)
                                  : e.once("finish", r)),
                              (t.ended = !0),
                              (e.writable = !1);
                          })(this, n, r);
                    }),
                    Object.defineProperty(b.prototype, "destroyed", {
                      get: function () {
                        return (
                          void 0 !== this._writableState &&
                          this._writableState.destroyed
                        );
                      },
                      set: function (e) {
                        this._writableState &&
                          (this._writableState.destroyed = e);
                      },
                    }),
                    (b.prototype.destroy = g.destroy),
                    (b.prototype._undestroy = g.undestroy),
                    (b.prototype._destroy = function (e, t) {
                      this.end(), t(e);
                    });
                }.call(
                  this,
                  e("_process"),
                  void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {},
                  e("timers").setImmediate
                ));
              },
              {
                "./_stream_duplex": 107,
                "./internal/streams/destroy": 113,
                "./internal/streams/stream": 114,
                _process: 101,
                "core-util-is": 14,
                inherits: 88,
                "process-nextick-args": 100,
                "safe-buffer": 117,
                timers: 120,
                "util-deprecate": 134,
              },
            ],
            112: [
              function (e, t, r) {
                "use strict";
                var n = e("safe-buffer").Buffer,
                  i = e("util");
                (t.exports = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.head = null),
                      (this.tail = null),
                      (this.length = 0);
                  }
                  return (
                    (e.prototype.push = function (e) {
                      var t = { data: e, next: null };
                      this.length > 0 ? (this.tail.next = t) : (this.head = t),
                        (this.tail = t),
                        ++this.length;
                    }),
                    (e.prototype.unshift = function (e) {
                      var t = { data: e, next: this.head };
                      0 === this.length && (this.tail = t),
                        (this.head = t),
                        ++this.length;
                    }),
                    (e.prototype.shift = function () {
                      if (0 !== this.length) {
                        var e = this.head.data;
                        return (
                          1 === this.length
                            ? (this.head = this.tail = null)
                            : (this.head = this.head.next),
                          --this.length,
                          e
                        );
                      }
                    }),
                    (e.prototype.clear = function () {
                      (this.head = this.tail = null), (this.length = 0);
                    }),
                    (e.prototype.join = function (e) {
                      if (0 === this.length) return "";
                      for (var t = this.head, r = "" + t.data; (t = t.next); )
                        r += e + t.data;
                      return r;
                    }),
                    (e.prototype.concat = function (e) {
                      if (0 === this.length) return n.alloc(0);
                      if (1 === this.length) return this.head.data;
                      for (
                        var t,
                          r,
                          i,
                          o = n.allocUnsafe(e >>> 0),
                          s = this.head,
                          a = 0;
                        s;

                      )
                        (t = s.data),
                          (r = o),
                          (i = a),
                          t.copy(r, i),
                          (a += s.data.length),
                          (s = s.next);
                      return o;
                    }),
                    e
                  );
                })()),
                  i &&
                    i.inspect &&
                    i.inspect.custom &&
                    (t.exports.prototype[i.inspect.custom] = function () {
                      var e = i.inspect({ length: this.length });
                      return this.constructor.name + " " + e;
                    });
              },
              { "safe-buffer": 117, util: 12 },
            ],
            113: [
              function (e, t, r) {
                "use strict";
                var n = e("process-nextick-args");
                function i(e, t) {
                  e.emit("error", t);
                }
                t.exports = {
                  destroy: function (e, t) {
                    var r = this,
                      o = this._readableState && this._readableState.destroyed,
                      s = this._writableState && this._writableState.destroyed;
                    return o || s
                      ? (t
                          ? t(e)
                          : !e ||
                            (this._writableState &&
                              this._writableState.errorEmitted) ||
                            n.nextTick(i, this, e),
                        this)
                      : (this._readableState &&
                          (this._readableState.destroyed = !0),
                        this._writableState &&
                          (this._writableState.destroyed = !0),
                        this._destroy(e || null, function (e) {
                          !t && e
                            ? (n.nextTick(i, r, e),
                              r._writableState &&
                                (r._writableState.errorEmitted = !0))
                            : t && t(e);
                        }),
                        this);
                  },
                  undestroy: function () {
                    this._readableState &&
                      ((this._readableState.destroyed = !1),
                      (this._readableState.reading = !1),
                      (this._readableState.ended = !1),
                      (this._readableState.endEmitted = !1)),
                      this._writableState &&
                        ((this._writableState.destroyed = !1),
                        (this._writableState.ended = !1),
                        (this._writableState.ending = !1),
                        (this._writableState.finished = !1),
                        (this._writableState.errorEmitted = !1));
                  },
                };
              },
              { "process-nextick-args": 100 },
            ],
            114: [
              function (e, t, r) {
                t.exports = e("events").EventEmitter;
              },
              { events: 83 },
            ],
            115: [
              function (e, t, r) {
                ((r = t.exports = e("./lib/_stream_readable.js")).Stream = r),
                  (r.Readable = r),
                  (r.Writable = e("./lib/_stream_writable.js")),
                  (r.Duplex = e("./lib/_stream_duplex.js")),
                  (r.Transform = e("./lib/_stream_transform.js")),
                  (r.PassThrough = e("./lib/_stream_passthrough.js"));
              },
              {
                "./lib/_stream_duplex.js": 107,
                "./lib/_stream_passthrough.js": 108,
                "./lib/_stream_readable.js": 109,
                "./lib/_stream_transform.js": 110,
                "./lib/_stream_writable.js": 111,
              },
            ],
            116: [
              function (e, t, r) {
                "use strict";
                function n(e, t, r) {
                  var n = this;
                  (this._callback = e),
                    (this._args = r),
                    (this._interval = setInterval(e, t, this._args)),
                    (this.reschedule = function (e) {
                      e || (e = n._interval),
                        n._interval && clearInterval(n._interval),
                        (n._interval = setInterval(n._callback, e, n._args));
                    }),
                    (this.clear = function () {
                      n._interval &&
                        (clearInterval(n._interval), (n._interval = void 0));
                    }),
                    (this.destroy = function () {
                      n._interval && clearInterval(n._interval),
                        (n._callback = void 0),
                        (n._interval = void 0),
                        (n._args = void 0);
                    });
                }
                t.exports = function () {
                  if ("function" != typeof arguments[0])
                    throw new Error("callback needed");
                  if ("number" != typeof arguments[1])
                    throw new Error("interval needed");
                  var e;
                  if (arguments.length > 0) {
                    e = new Array(arguments.length - 2);
                    for (var t = 0; t < e.length; t++) e[t] = arguments[t + 2];
                  }
                  return new n(arguments[0], arguments[1], e);
                };
              },
              {},
            ],
            117: [
              function (e, t, r) {
                var n = e("buffer"),
                  i = n.Buffer;
                function o(e, t) {
                  for (var r in e) t[r] = e[r];
                }
                function s(e, t, r) {
                  return i(e, t, r);
                }
                i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
                  ? (t.exports = n)
                  : (o(n, r), (r.Buffer = s)),
                  o(i, s),
                  (s.from = function (e, t, r) {
                    if ("number" == typeof e)
                      throw new TypeError("Argument must not be a number");
                    return i(e, t, r);
                  }),
                  (s.alloc = function (e, t, r) {
                    if ("number" != typeof e)
                      throw new TypeError("Argument must be a number");
                    var n = i(e);
                    return (
                      void 0 !== t
                        ? "string" == typeof r
                          ? n.fill(t, r)
                          : n.fill(t)
                        : n.fill(0),
                      n
                    );
                  }),
                  (s.allocUnsafe = function (e) {
                    if ("number" != typeof e)
                      throw new TypeError("Argument must be a number");
                    return i(e);
                  }),
                  (s.allocUnsafeSlow = function (e) {
                    if ("number" != typeof e)
                      throw new TypeError("Argument must be a number");
                    return n.SlowBuffer(e);
                  });
              },
              { buffer: 13 },
            ],
            118: [
              function (e, t, r) {
                t.exports = function (e) {
                  var t,
                    r = e._readableState;
                  return r
                    ? r.objectMode || "number" == typeof e._duplexState
                      ? e.read()
                      : e.read(
                          (t = r).buffer.length
                            ? t.buffer.head
                              ? t.buffer.head.data.length
                              : t.buffer[0].length
                            : t.length
                        )
                    : null;
                };
              },
              {},
            ],
            119: [
              function (e, t, r) {
                "use strict";
                var n = e("safe-buffer").Buffer,
                  i =
                    n.isEncoding ||
                    function (e) {
                      switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                          return !0;
                        default:
                          return !1;
                      }
                    };
                function o(e) {
                  var t;
                  switch (
                    ((this.encoding = (function (e) {
                      var t = (function (e) {
                        if (!e) return "utf8";
                        for (var t; ; )
                          switch (e) {
                            case "utf8":
                            case "utf-8":
                              return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                              return "utf16le";
                            case "latin1":
                            case "binary":
                              return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                              return e;
                            default:
                              if (t) return;
                              (e = ("" + e).toLowerCase()), (t = !0);
                          }
                      })(e);
                      if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                        throw new Error("Unknown encoding: " + e);
                      return t || e;
                    })(e)),
                    this.encoding)
                  ) {
                    case "utf16le":
                      (this.text = c), (this.end = u), (t = 4);
                      break;
                    case "utf8":
                      (this.fillLast = a), (t = 4);
                      break;
                    case "base64":
                      (this.text = l), (this.end = f), (t = 3);
                      break;
                    default:
                      return (this.write = h), void (this.end = p);
                  }
                  (this.lastNeed = 0),
                    (this.lastTotal = 0),
                    (this.lastChar = n.allocUnsafe(t));
                }
                function s(e) {
                  return e <= 127
                    ? 0
                    : e >> 5 == 6
                    ? 2
                    : e >> 4 == 14
                    ? 3
                    : e >> 3 == 30
                    ? 4
                    : e >> 6 == 2
                    ? -1
                    : -2;
                }
                function a(e) {
                  var t = this.lastTotal - this.lastNeed,
                    r = (function (e, t, r) {
                      if (128 != (192 & t[0]))
                        return (e.lastNeed = 0), "\ufffd";
                      if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1]))
                          return (e.lastNeed = 1), "\ufffd";
                        if (
                          e.lastNeed > 2 &&
                          t.length > 2 &&
                          128 != (192 & t[2])
                        )
                          return (e.lastNeed = 2), "\ufffd";
                      }
                    })(this, e);
                  return void 0 !== r
                    ? r
                    : this.lastNeed <= e.length
                    ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                      this.lastChar.toString(this.encoding, 0, this.lastTotal))
                    : (e.copy(this.lastChar, t, 0, e.length),
                      void (this.lastNeed -= e.length));
                }
                function c(e, t) {
                  if ((e.length - t) % 2 == 0) {
                    var r = e.toString("utf16le", t);
                    if (r) {
                      var n = r.charCodeAt(r.length - 1);
                      if (n >= 55296 && n <= 56319)
                        return (
                          (this.lastNeed = 2),
                          (this.lastTotal = 4),
                          (this.lastChar[0] = e[e.length - 2]),
                          (this.lastChar[1] = e[e.length - 1]),
                          r.slice(0, -1)
                        );
                    }
                    return r;
                  }
                  return (
                    (this.lastNeed = 1),
                    (this.lastTotal = 2),
                    (this.lastChar[0] = e[e.length - 1]),
                    e.toString("utf16le", t, e.length - 1)
                  );
                }
                function u(e) {
                  var t = e && e.length ? this.write(e) : "";
                  if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, r);
                  }
                  return t;
                }
                function l(e, t) {
                  var r = (e.length - t) % 3;
                  return 0 === r
                    ? e.toString("base64", t)
                    : ((this.lastNeed = 3 - r),
                      (this.lastTotal = 3),
                      1 === r
                        ? (this.lastChar[0] = e[e.length - 1])
                        : ((this.lastChar[0] = e[e.length - 2]),
                          (this.lastChar[1] = e[e.length - 1])),
                      e.toString("base64", t, e.length - r));
                }
                function f(e) {
                  var t = e && e.length ? this.write(e) : "";
                  return this.lastNeed
                    ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
                    : t;
                }
                function h(e) {
                  return e.toString(this.encoding);
                }
                function p(e) {
                  return e && e.length ? this.write(e) : "";
                }
                (r.StringDecoder = o),
                  (o.prototype.write = function (e) {
                    if (0 === e.length) return "";
                    var t, r;
                    if (this.lastNeed) {
                      if (void 0 === (t = this.fillLast(e))) return "";
                      (r = this.lastNeed), (this.lastNeed = 0);
                    } else r = 0;
                    return r < e.length
                      ? t
                        ? t + this.text(e, r)
                        : this.text(e, r)
                      : t || "";
                  }),
                  (o.prototype.end = function (e) {
                    var t = e && e.length ? this.write(e) : "";
                    return this.lastNeed ? t + "\ufffd" : t;
                  }),
                  (o.prototype.text = function (e, t) {
                    var r = (function (e, t, r) {
                      var n = t.length - 1;
                      if (n < r) return 0;
                      var i = s(t[n]);
                      return i >= 0
                        ? (i > 0 && (e.lastNeed = i - 1), i)
                        : --n < r || -2 === i
                        ? 0
                        : (i = s(t[n])) >= 0
                        ? (i > 0 && (e.lastNeed = i - 2), i)
                        : --n < r || -2 === i
                        ? 0
                        : (i = s(t[n])) >= 0
                        ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)),
                          i)
                        : 0;
                    })(this, e, t);
                    if (!this.lastNeed) return e.toString("utf8", t);
                    this.lastTotal = r;
                    var n = e.length - (r - this.lastNeed);
                    return (
                      e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
                    );
                  }),
                  (o.prototype.fillLast = function (e) {
                    if (this.lastNeed <= e.length)
                      return (
                        e.copy(
                          this.lastChar,
                          this.lastTotal - this.lastNeed,
                          0,
                          this.lastNeed
                        ),
                        this.lastChar.toString(this.encoding, 0, this.lastTotal)
                      );
                    e.copy(
                      this.lastChar,
                      this.lastTotal - this.lastNeed,
                      0,
                      e.length
                    ),
                      (this.lastNeed -= e.length);
                  });
              },
              { "safe-buffer": 117 },
            ],
            120: [
              function (e, t, r) {
                (function (t, n) {
                  var i = e("process/browser.js").nextTick,
                    o = Function.prototype.apply,
                    s = Array.prototype.slice,
                    a = {},
                    c = 0;
                  function u(e, t) {
                    (this._id = e), (this._clearFn = t);
                  }
                  (r.setTimeout = function () {
                    return new u(
                      o.call(setTimeout, window, arguments),
                      clearTimeout
                    );
                  }),
                    (r.setInterval = function () {
                      return new u(
                        o.call(setInterval, window, arguments),
                        clearInterval
                      );
                    }),
                    (r.clearTimeout = r.clearInterval =
                      function (e) {
                        e.close();
                      }),
                    (u.prototype.unref = u.prototype.ref = function () {}),
                    (u.prototype.close = function () {
                      this._clearFn.call(window, this._id);
                    }),
                    (r.enroll = function (e, t) {
                      clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                    }),
                    (r.unenroll = function (e) {
                      clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                    }),
                    (r._unrefActive = r.active =
                      function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 &&
                          (e._idleTimeoutId = setTimeout(function () {
                            e._onTimeout && e._onTimeout();
                          }, t));
                      }),
                    (r.setImmediate =
                      "function" == typeof t
                        ? t
                        : function (e) {
                            var t = c++,
                              n =
                                !(arguments.length < 2) && s.call(arguments, 1);
                            return (
                              (a[t] = !0),
                              i(function () {
                                a[t] &&
                                  (n ? e.apply(null, n) : e.call(null),
                                  r.clearImmediate(t));
                              }),
                              t
                            );
                          }),
                    (r.clearImmediate =
                      "function" == typeof n
                        ? n
                        : function (e) {
                            delete a[e];
                          });
                }.call(
                  this,
                  e("timers").setImmediate,
                  e("timers").clearImmediate
                ));
              },
              { "process/browser.js": 101, timers: 120 },
            ],
            121: [
              function (e, t, r) {
                "use strict";
                var n = e("../prototype/is");
                t.exports = function (e) {
                  if ("function" != typeof e) return !1;
                  if (!hasOwnProperty.call(e, "length")) return !1;
                  try {
                    if ("number" != typeof e.length) return !1;
                    if ("function" != typeof e.call) return !1;
                    if ("function" != typeof e.apply) return !1;
                  } catch (e) {
                    return !1;
                  }
                  return !n(e);
                };
              },
              { "../prototype/is": 128 },
            ],
            122: [
              function (e, t, r) {
                "use strict";
                var n = e("../value/is"),
                  i = e("../object/is"),
                  o = e("../string/coerce"),
                  s = e("./to-short-string"),
                  a = function (e, t) {
                    return e.replace("%v", s(t));
                  };
                t.exports = function (e, t, r) {
                  if (!i(r)) throw new TypeError(a(t, e));
                  if (!n(e)) {
                    if ("default" in r) return r.default;
                    if (r.isOptional) return null;
                  }
                  var s = o(r.errorMessage);
                  throw (n(s) || (s = t), new TypeError(a(s, e)));
                };
              },
              {
                "../object/is": 125,
                "../string/coerce": 129,
                "../value/is": 131,
                "./to-short-string": 124,
              },
            ],
            123: [
              function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                  try {
                    return e.toString();
                  } catch (t) {
                    try {
                      return String(e);
                    } catch (e) {
                      return null;
                    }
                  }
                };
              },
              {},
            ],
            124: [
              function (e, t, r) {
                "use strict";
                var n = e("./safe-to-string"),
                  i = /[\n\r\u2028\u2029]/g;
                t.exports = function (e) {
                  var t = n(e);
                  return null === t
                    ? "<Non-coercible to string value>"
                    : (t.length > 100 && (t = t.slice(0, 99) + "\u2026"),
                      (t = t.replace(i, function (e) {
                        switch (e) {
                          case "\n":
                            return "\\n";
                          case "\r":
                            return "\\r";
                          case "\u2028":
                            return "\\u2028";
                          case "\u2029":
                            return "\\u2029";
                          default:
                            throw new Error("Unexpected character");
                        }
                      })));
                };
              },
              { "./safe-to-string": 123 },
            ],
            125: [
              function (e, t, r) {
                "use strict";
                var n = e("../value/is"),
                  i = { object: !0, function: !0, undefined: !0 };
                t.exports = function (e) {
                  return !!n(e) && hasOwnProperty.call(i, typeof e);
                };
              },
              { "../value/is": 131 },
            ],
            126: [
              function (e, t, r) {
                "use strict";
                var n = e("../lib/resolve-exception"),
                  i = e("./is");
                t.exports = function (e) {
                  return i(e)
                    ? e
                    : n(e, "%v is not a plain function", arguments[1]);
                };
              },
              { "../lib/resolve-exception": 122, "./is": 127 },
            ],
            127: [
              function (e, t, r) {
                "use strict";
                var n = e("../function/is"),
                  i = /^\s*class[\s{/}]/,
                  o = Function.prototype.toString;
                t.exports = function (e) {
                  return !!n(e) && !i.test(o.call(e));
                };
              },
              { "../function/is": 121 },
            ],
            128: [
              function (e, t, r) {
                "use strict";
                var n = e("../object/is");
                t.exports = function (e) {
                  if (!n(e)) return !1;
                  try {
                    return !!e.constructor && e.constructor.prototype === e;
                  } catch (e) {
                    return !1;
                  }
                };
              },
              { "../object/is": 125 },
            ],
            129: [
              function (e, t, r) {
                "use strict";
                var n = e("../value/is"),
                  i = e("../object/is"),
                  o = Object.prototype.toString;
                t.exports = function (e) {
                  if (!n(e)) return null;
                  if (i(e)) {
                    var t = e.toString;
                    if ("function" != typeof t) return null;
                    if (t === o) return null;
                  }
                  try {
                    return "" + e;
                  } catch (e) {
                    return null;
                  }
                };
              },
              { "../object/is": 125, "../value/is": 131 },
            ],
            130: [
              function (e, t, r) {
                "use strict";
                var n = e("../lib/resolve-exception"),
                  i = e("./is");
                t.exports = function (e) {
                  return i(e) ? e : n(e, "Cannot use %v", arguments[1]);
                };
              },
              { "../lib/resolve-exception": 122, "./is": 131 },
            ],
            131: [
              function (e, t, r) {
                "use strict";
                t.exports = function (e) {
                  return null != e;
                };
              },
              {},
            ],
            132: [
              function (e, t, r) {
                "use strict";
                var n = e("punycode"),
                  i = e("./util");
                function o() {
                  (this.protocol = null),
                    (this.slashes = null),
                    (this.auth = null),
                    (this.host = null),
                    (this.port = null),
                    (this.hostname = null),
                    (this.hash = null),
                    (this.search = null),
                    (this.query = null),
                    (this.pathname = null),
                    (this.path = null),
                    (this.href = null);
                }
                (r.parse = v),
                  (r.resolve = function (e, t) {
                    return v(e, !1, !0).resolve(t);
                  }),
                  (r.resolveObject = function (e, t) {
                    return e ? v(e, !1, !0).resolveObject(t) : t;
                  }),
                  (r.format = function (e) {
                    return (
                      i.isString(e) && (e = v(e)),
                      e instanceof o ? e.format() : o.prototype.format.call(e)
                    );
                  }),
                  (r.Url = o);
                var s = /^([a-z0-9.+-]+:)/i,
                  a = /:[0-9]*$/,
                  c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                  u = ["{", "}", "|", "\\", "^", "`"].concat([
                    "<",
                    ">",
                    '"',
                    "`",
                    " ",
                    "\r",
                    "\n",
                    "\t",
                  ]),
                  l = ["'"].concat(u),
                  f = ["%", "/", "?", ";", "#"].concat(l),
                  h = ["/", "?", "#"],
                  p = /^[+a-z0-9A-Z_-]{0,63}$/,
                  d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                  g = { javascript: !0, "javascript:": !0 },
                  m = { javascript: !0, "javascript:": !0 },
                  y = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0,
                  },
                  b = e("querystring");
                function v(e, t, r) {
                  if (e && i.isObject(e) && e instanceof o) return e;
                  var n = new o();
                  return n.parse(e, t, r), n;
                }
                (o.prototype.parse = function (e, t, r) {
                  if (!i.isString(e))
                    throw new TypeError(
                      "Parameter 'url' must be a string, not " + typeof e
                    );
                  var o = e.indexOf("?"),
                    a = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                    u = e.split(a);
                  u[0] = u[0].replace(/\\/g, "/");
                  var v = (e = u.join(a));
                  if (((v = v.trim()), !r && 1 === e.split("#").length)) {
                    var _ = c.exec(v);
                    if (_)
                      return (
                        (this.path = v),
                        (this.href = v),
                        (this.pathname = _[1]),
                        _[2]
                          ? ((this.search = _[2]),
                            (this.query = t
                              ? b.parse(this.search.substr(1))
                              : this.search.substr(1)))
                          : t && ((this.search = ""), (this.query = {})),
                        this
                      );
                  }
                  var w = s.exec(v);
                  if (w) {
                    var S = (w = w[0]).toLowerCase();
                    (this.protocol = S), (v = v.substr(w.length));
                  }
                  if (r || w || v.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var x = "//" === v.substr(0, 2);
                    !x ||
                      (w && m[w]) ||
                      ((v = v.substr(2)), (this.slashes = !0));
                  }
                  if (!m[w] && (x || (w && !y[w]))) {
                    for (var k, E, I = -1, C = 0; C < h.length; C++)
                      -1 !== (O = v.indexOf(h[C])) &&
                        (-1 === I || O < I) &&
                        (I = O);
                    for (
                      -1 !==
                        (E =
                          -1 === I
                            ? v.lastIndexOf("@")
                            : v.lastIndexOf("@", I)) &&
                        ((k = v.slice(0, E)),
                        (v = v.slice(E + 1)),
                        (this.auth = decodeURIComponent(k))),
                        I = -1,
                        C = 0;
                      C < f.length;
                      C++
                    ) {
                      var O;
                      -1 !== (O = v.indexOf(f[C])) &&
                        (-1 === I || O < I) &&
                        (I = O);
                    }
                    -1 === I && (I = v.length),
                      (this.host = v.slice(0, I)),
                      (v = v.slice(I)),
                      this.parseHost(),
                      (this.hostname = this.hostname || "");
                    var P =
                      "[" === this.hostname[0] &&
                      "]" === this.hostname[this.hostname.length - 1];
                    if (!P)
                      for (
                        var A = this.hostname.split(/\./),
                          j = ((C = 0), A.length);
                        C < j;
                        C++
                      ) {
                        var T = A[C];
                        if (T && !T.match(p)) {
                          for (var M = "", R = 0, B = T.length; R < B; R++)
                            T.charCodeAt(R) > 127 ? (M += "x") : (M += T[R]);
                          if (!M.match(p)) {
                            var L = A.slice(0, C),
                              U = A.slice(C + 1),
                              N = T.match(d);
                            N && (L.push(N[1]), U.unshift(N[2])),
                              U.length && (v = "/" + U.join(".") + v),
                              (this.hostname = L.join("."));
                            break;
                          }
                        }
                      }
                    this.hostname.length > 255
                      ? (this.hostname = "")
                      : (this.hostname = this.hostname.toLowerCase()),
                      P || (this.hostname = n.toASCII(this.hostname));
                    var F = this.port ? ":" + this.port : "",
                      D = this.hostname || "";
                    (this.host = D + F),
                      (this.href += this.host),
                      P &&
                        ((this.hostname = this.hostname.substr(
                          1,
                          this.hostname.length - 2
                        )),
                        "/" !== v[0] && (v = "/" + v));
                  }
                  if (!g[S])
                    for (C = 0, j = l.length; C < j; C++) {
                      var q = l[C];
                      if (-1 !== v.indexOf(q)) {
                        var z = encodeURIComponent(q);
                        z === q && (z = escape(q)), (v = v.split(q).join(z));
                      }
                    }
                  var H = v.indexOf("#");
                  -1 !== H && ((this.hash = v.substr(H)), (v = v.slice(0, H)));
                  var K = v.indexOf("?");
                  if (
                    (-1 !== K
                      ? ((this.search = v.substr(K)),
                        (this.query = v.substr(K + 1)),
                        t && (this.query = b.parse(this.query)),
                        (v = v.slice(0, K)))
                      : t && ((this.search = ""), (this.query = {})),
                    v && (this.pathname = v),
                    y[S] &&
                      this.hostname &&
                      !this.pathname &&
                      (this.pathname = "/"),
                    this.pathname || this.search)
                  ) {
                    F = this.pathname || "";
                    var W = this.search || "";
                    this.path = F + W;
                  }
                  return (this.href = this.format()), this;
                }),
                  (o.prototype.format = function () {
                    var e = this.auth || "";
                    e &&
                      ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")),
                      (e += "@"));
                    var t = this.protocol || "",
                      r = this.pathname || "",
                      n = this.hash || "",
                      o = !1,
                      s = "";
                    this.host
                      ? (o = e + this.host)
                      : this.hostname &&
                        ((o =
                          e +
                          (-1 === this.hostname.indexOf(":")
                            ? this.hostname
                            : "[" + this.hostname + "]")),
                        this.port && (o += ":" + this.port)),
                      this.query &&
                        i.isObject(this.query) &&
                        Object.keys(this.query).length &&
                        (s = b.stringify(this.query));
                    var a = this.search || (s && "?" + s) || "";
                    return (
                      t && ":" !== t.substr(-1) && (t += ":"),
                      this.slashes || ((!t || y[t]) && !1 !== o)
                        ? ((o = "//" + (o || "")),
                          r && "/" !== r.charAt(0) && (r = "/" + r))
                        : o || (o = ""),
                      n && "#" !== n.charAt(0) && (n = "#" + n),
                      a && "?" !== a.charAt(0) && (a = "?" + a),
                      t +
                        o +
                        (r = r.replace(/[?#]/g, function (e) {
                          return encodeURIComponent(e);
                        })) +
                        (a = a.replace("#", "%23")) +
                        n
                    );
                  }),
                  (o.prototype.resolve = function (e) {
                    return this.resolveObject(v(e, !1, !0)).format();
                  }),
                  (o.prototype.resolveObject = function (e) {
                    if (i.isString(e)) {
                      var t = new o();
                      t.parse(e, !1, !0), (e = t);
                    }
                    for (
                      var r = new o(), n = Object.keys(this), s = 0;
                      s < n.length;
                      s++
                    ) {
                      var a = n[s];
                      r[a] = this[a];
                    }
                    if (((r.hash = e.hash), "" === e.href))
                      return (r.href = r.format()), r;
                    if (e.slashes && !e.protocol) {
                      for (var c = Object.keys(e), u = 0; u < c.length; u++) {
                        var l = c[u];
                        "protocol" !== l && (r[l] = e[l]);
                      }
                      return (
                        y[r.protocol] &&
                          r.hostname &&
                          !r.pathname &&
                          (r.path = r.pathname = "/"),
                        (r.href = r.format()),
                        r
                      );
                    }
                    if (e.protocol && e.protocol !== r.protocol) {
                      if (!y[e.protocol]) {
                        for (var f = Object.keys(e), h = 0; h < f.length; h++) {
                          var p = f[h];
                          r[p] = e[p];
                        }
                        return (r.href = r.format()), r;
                      }
                      if (((r.protocol = e.protocol), e.host || m[e.protocol]))
                        r.pathname = e.pathname;
                      else {
                        for (
                          var d = (e.pathname || "").split("/");
                          d.length && !(e.host = d.shift());

                        );
                        e.host || (e.host = ""),
                          e.hostname || (e.hostname = ""),
                          "" !== d[0] && d.unshift(""),
                          d.length < 2 && d.unshift(""),
                          (r.pathname = d.join("/"));
                      }
                      if (
                        ((r.search = e.search),
                        (r.query = e.query),
                        (r.host = e.host || ""),
                        (r.auth = e.auth),
                        (r.hostname = e.hostname || e.host),
                        (r.port = e.port),
                        r.pathname || r.search)
                      ) {
                        var g = r.pathname || "",
                          b = r.search || "";
                        r.path = g + b;
                      }
                      return (
                        (r.slashes = r.slashes || e.slashes),
                        (r.href = r.format()),
                        r
                      );
                    }
                    var v = r.pathname && "/" === r.pathname.charAt(0),
                      _ =
                        e.host || (e.pathname && "/" === e.pathname.charAt(0)),
                      w = _ || v || (r.host && e.pathname),
                      S = w,
                      x = (r.pathname && r.pathname.split("/")) || [],
                      k =
                        ((d = (e.pathname && e.pathname.split("/")) || []),
                        r.protocol && !y[r.protocol]);
                    if (
                      (k &&
                        ((r.hostname = ""),
                        (r.port = null),
                        r.host &&
                          ("" === x[0] ? (x[0] = r.host) : x.unshift(r.host)),
                        (r.host = ""),
                        e.protocol &&
                          ((e.hostname = null),
                          (e.port = null),
                          e.host &&
                            ("" === d[0] ? (d[0] = e.host) : d.unshift(e.host)),
                          (e.host = null)),
                        (w = w && ("" === d[0] || "" === x[0]))),
                      _)
                    )
                      (r.host = e.host || "" === e.host ? e.host : r.host),
                        (r.hostname =
                          e.hostname || "" === e.hostname
                            ? e.hostname
                            : r.hostname),
                        (r.search = e.search),
                        (r.query = e.query),
                        (x = d);
                    else if (d.length)
                      x || (x = []),
                        x.pop(),
                        (x = x.concat(d)),
                        (r.search = e.search),
                        (r.query = e.query);
                    else if (!i.isNullOrUndefined(e.search))
                      return (
                        k &&
                          ((r.hostname = r.host = x.shift()),
                          (P =
                            !!(r.host && r.host.indexOf("@") > 0) &&
                            r.host.split("@")) &&
                            ((r.auth = P.shift()),
                            (r.host = r.hostname = P.shift()))),
                        (r.search = e.search),
                        (r.query = e.query),
                        (i.isNull(r.pathname) && i.isNull(r.search)) ||
                          (r.path =
                            (r.pathname ? r.pathname : "") +
                            (r.search ? r.search : "")),
                        (r.href = r.format()),
                        r
                      );
                    if (!x.length)
                      return (
                        (r.pathname = null),
                        r.search ? (r.path = "/" + r.search) : (r.path = null),
                        (r.href = r.format()),
                        r
                      );
                    for (
                      var E = x.slice(-1)[0],
                        I =
                          ((r.host || e.host || x.length > 1) &&
                            ("." === E || ".." === E)) ||
                          "" === E,
                        C = 0,
                        O = x.length;
                      O >= 0;
                      O--
                    )
                      "." === (E = x[O])
                        ? x.splice(O, 1)
                        : ".." === E
                        ? (x.splice(O, 1), C++)
                        : C && (x.splice(O, 1), C--);
                    if (!w && !S) for (; C--; C) x.unshift("..");
                    !w ||
                      "" === x[0] ||
                      (x[0] && "/" === x[0].charAt(0)) ||
                      x.unshift(""),
                      I && "/" !== x.join("/").substr(-1) && x.push("");
                    var P,
                      A = "" === x[0] || (x[0] && "/" === x[0].charAt(0));
                    return (
                      k &&
                        ((r.hostname = r.host =
                          A ? "" : x.length ? x.shift() : ""),
                        (P =
                          !!(r.host && r.host.indexOf("@") > 0) &&
                          r.host.split("@")) &&
                          ((r.auth = P.shift()),
                          (r.host = r.hostname = P.shift()))),
                      (w = w || (r.host && x.length)) && !A && x.unshift(""),
                      x.length
                        ? (r.pathname = x.join("/"))
                        : ((r.pathname = null), (r.path = null)),
                      (i.isNull(r.pathname) && i.isNull(r.search)) ||
                        (r.path =
                          (r.pathname ? r.pathname : "") +
                          (r.search ? r.search : "")),
                      (r.auth = e.auth || r.auth),
                      (r.slashes = r.slashes || e.slashes),
                      (r.href = r.format()),
                      r
                    );
                  }),
                  (o.prototype.parseHost = function () {
                    var e = this.host,
                      t = a.exec(e);
                    t &&
                      (":" !== (t = t[0]) && (this.port = t.substr(1)),
                      (e = e.substr(0, e.length - t.length))),
                      e && (this.hostname = e);
                  });
              },
              { "./util": 133, punycode: 102, querystring: 105 },
            ],
            133: [
              function (e, t, r) {
                "use strict";
                t.exports = {
                  isString: function (e) {
                    return "string" == typeof e;
                  },
                  isObject: function (e) {
                    return "object" == typeof e && null !== e;
                  },
                  isNull: function (e) {
                    return null === e;
                  },
                  isNullOrUndefined: function (e) {
                    return null == e;
                  },
                };
              },
              {},
            ],
            134: [
              function (e, r, n) {
                (function (e) {
                  function t(t) {
                    try {
                      if (!e.localStorage) return !1;
                    } catch (e) {
                      return !1;
                    }
                    var r = e.localStorage[t];
                    return null != r && "true" === String(r).toLowerCase();
                  }
                  r.exports = function (e, r) {
                    if (t("noDeprecation")) return e;
                    var n = !1;
                    return function () {
                      if (!n) {
                        if (t("throwDeprecation")) throw new Error(r);
                        t("traceDeprecation")
                          ? console.trace(r)
                          : console.warn(r),
                          (n = !0);
                      }
                      return e.apply(this, arguments);
                    };
                  };
                }.call(
                  this,
                  void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            135: [
              function (e, t, r) {
                "function" == typeof Object.create
                  ? (t.exports = function (e, t) {
                      (e.super_ = t),
                        (e.prototype = Object.create(t.prototype, {
                          constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        }));
                    })
                  : (t.exports = function (e, t) {
                      e.super_ = t;
                      var r = function () {};
                      (r.prototype = t.prototype),
                        (e.prototype = new r()),
                        (e.prototype.constructor = e);
                    });
              },
              {},
            ],
            136: [
              function (e, t, r) {
                t.exports = function (e) {
                  return (
                    e &&
                    "object" == typeof e &&
                    "function" == typeof e.copy &&
                    "function" == typeof e.fill &&
                    "function" == typeof e.readUInt8
                  );
                };
              },
              {},
            ],
            137: [
              function (e, r, n) {
                (function (t, r) {
                  var i = /%[sdj%]/g;
                  (n.format = function (e) {
                    if (!y(e)) {
                      for (var t = [], r = 0; r < arguments.length; r++)
                        t.push(a(arguments[r]));
                      return t.join(" ");
                    }
                    r = 1;
                    for (
                      var n = arguments,
                        o = n.length,
                        s = String(e).replace(i, function (e) {
                          if ("%%" === e) return "%";
                          if (r >= o) return e;
                          switch (e) {
                            case "%s":
                              return String(n[r++]);
                            case "%d":
                              return Number(n[r++]);
                            case "%j":
                              try {
                                return JSON.stringify(n[r++]);
                              } catch (e) {
                                return "[Circular]";
                              }
                            default:
                              return e;
                          }
                        }),
                        c = n[r];
                      r < o;
                      c = n[++r]
                    )
                      g(c) || !_(c) ? (s += " " + c) : (s += " " + a(c));
                    return s;
                  }),
                    (n.deprecate = function (e, i) {
                      if (b(r.process))
                        return function () {
                          return n.deprecate(e, i).apply(this, arguments);
                        };
                      if (!0 === t.noDeprecation) return e;
                      var o = !1;
                      return function () {
                        if (!o) {
                          if (t.throwDeprecation) throw new Error(i);
                          t.traceDeprecation
                            ? console.trace(i)
                            : console.error(i),
                            (o = !0);
                        }
                        return e.apply(this, arguments);
                      };
                    });
                  var o,
                    s = {};
                  function a(e, t) {
                    var r = { seen: [], stylize: u };
                    return (
                      arguments.length >= 3 && (r.depth = arguments[2]),
                      arguments.length >= 4 && (r.colors = arguments[3]),
                      d(t) ? (r.showHidden = t) : t && n._extend(r, t),
                      b(r.showHidden) && (r.showHidden = !1),
                      b(r.depth) && (r.depth = 2),
                      b(r.colors) && (r.colors = !1),
                      b(r.customInspect) && (r.customInspect = !0),
                      r.colors && (r.stylize = c),
                      l(r, e, r.depth)
                    );
                  }
                  function c(e, t) {
                    var r = a.styles[t];
                    return r
                      ? "\x1b[" +
                          a.colors[r][0] +
                          "m" +
                          e +
                          "\x1b[" +
                          a.colors[r][1] +
                          "m"
                      : e;
                  }
                  function u(e, t) {
                    return e;
                  }
                  function l(e, t, r) {
                    if (
                      e.customInspect &&
                      t &&
                      x(t.inspect) &&
                      t.inspect !== n.inspect &&
                      (!t.constructor || t.constructor.prototype !== t)
                    ) {
                      var i = t.inspect(r, e);
                      return y(i) || (i = l(e, i, r)), i;
                    }
                    var o = (function (e, t) {
                      if (b(t)) return e.stylize("undefined", "undefined");
                      if (y(t)) {
                        var r =
                          "'" +
                          JSON.stringify(t)
                            .replace(/^"|"$/g, "")
                            .replace(/'/g, "\\'")
                            .replace(/\\"/g, '"') +
                          "'";
                        return e.stylize(r, "string");
                      }
                      return m(t)
                        ? e.stylize("" + t, "number")
                        : d(t)
                        ? e.stylize("" + t, "boolean")
                        : g(t)
                        ? e.stylize("null", "null")
                        : void 0;
                    })(e, t);
                    if (o) return o;
                    var s = Object.keys(t),
                      a = (function (e) {
                        var t = {};
                        return (
                          e.forEach(function (e, r) {
                            t[e] = !0;
                          }),
                          t
                        );
                      })(s);
                    if (
                      (e.showHidden && (s = Object.getOwnPropertyNames(t)),
                      S(t) &&
                        (s.indexOf("message") >= 0 ||
                          s.indexOf("description") >= 0))
                    )
                      return f(t);
                    if (0 === s.length) {
                      if (x(t)) {
                        var c = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + c + "]", "special");
                      }
                      if (v(t))
                        return e.stylize(
                          RegExp.prototype.toString.call(t),
                          "regexp"
                        );
                      if (w(t))
                        return e.stylize(
                          Date.prototype.toString.call(t),
                          "date"
                        );
                      if (S(t)) return f(t);
                    }
                    var u,
                      _ = "",
                      k = !1,
                      E = ["{", "}"];
                    return (
                      p(t) && ((k = !0), (E = ["[", "]"])),
                      x(t) &&
                        (_ =
                          " [Function" + (t.name ? ": " + t.name : "") + "]"),
                      v(t) && (_ = " " + RegExp.prototype.toString.call(t)),
                      w(t) && (_ = " " + Date.prototype.toUTCString.call(t)),
                      S(t) && (_ = " " + f(t)),
                      0 !== s.length || (k && 0 != t.length)
                        ? r < 0
                          ? v(t)
                            ? e.stylize(
                                RegExp.prototype.toString.call(t),
                                "regexp"
                              )
                            : e.stylize("[Object]", "special")
                          : (e.seen.push(t),
                            (u = k
                              ? (function (e, t, r, n, i) {
                                  for (
                                    var o = [], s = 0, a = t.length;
                                    s < a;
                                    ++s
                                  )
                                    O(t, String(s))
                                      ? o.push(h(e, t, r, n, String(s), !0))
                                      : o.push("");
                                  return (
                                    i.forEach(function (i) {
                                      i.match(/^\d+$/) ||
                                        o.push(h(e, t, r, n, i, !0));
                                    }),
                                    o
                                  );
                                })(e, t, r, a, s)
                              : s.map(function (n) {
                                  return h(e, t, r, a, n, k);
                                })),
                            e.seen.pop(),
                            (function (e, t, r) {
                              return e.reduce(function (e, t) {
                                return (
                                  t.indexOf("\n"),
                                  e +
                                    t.replace(/\u001b\[\d\d?m/g, "").length +
                                    1
                                );
                              }, 0) > 60
                                ? r[0] +
                                    ("" === t ? "" : t + "\n ") +
                                    " " +
                                    e.join(",\n  ") +
                                    " " +
                                    r[1]
                                : r[0] + t + " " + e.join(", ") + " " + r[1];
                            })(u, _, E))
                        : E[0] + _ + E[1]
                    );
                  }
                  function f(e) {
                    return "[" + Error.prototype.toString.call(e) + "]";
                  }
                  function h(e, t, r, n, i, o) {
                    var s, a, c;
                    if (
                      ((c = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i],
                      }).get
                        ? (a = c.set
                            ? e.stylize("[Getter/Setter]", "special")
                            : e.stylize("[Getter]", "special"))
                        : c.set && (a = e.stylize("[Setter]", "special")),
                      O(n, i) || (s = "[" + i + "]"),
                      a ||
                        (e.seen.indexOf(c.value) < 0
                          ? (a = g(r)
                              ? l(e, c.value, null)
                              : l(e, c.value, r - 1)).indexOf("\n") > -1 &&
                            (a = o
                              ? a
                                  .split("\n")
                                  .map(function (e) {
                                    return "  " + e;
                                  })
                                  .join("\n")
                                  .substr(2)
                              : "\n" +
                                a
                                  .split("\n")
                                  .map(function (e) {
                                    return "   " + e;
                                  })
                                  .join("\n"))
                          : (a = e.stylize("[Circular]", "special"))),
                      b(s))
                    ) {
                      if (o && i.match(/^\d+$/)) return a;
                      (s = JSON.stringify("" + i)).match(
                        /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/
                      )
                        ? ((s = s.substr(1, s.length - 2)),
                          (s = e.stylize(s, "name")))
                        : ((s = s
                            .replace(/'/g, "\\'")
                            .replace(/\\"/g, '"')
                            .replace(/(^"|"$)/g, "'")),
                          (s = e.stylize(s, "string")));
                    }
                    return s + ": " + a;
                  }
                  function p(e) {
                    return Array.isArray(e);
                  }
                  function d(e) {
                    return "boolean" == typeof e;
                  }
                  function g(e) {
                    return null === e;
                  }
                  function m(e) {
                    return "number" == typeof e;
                  }
                  function y(e) {
                    return "string" == typeof e;
                  }
                  function b(e) {
                    return void 0 === e;
                  }
                  function v(e) {
                    return _(e) && "[object RegExp]" === k(e);
                  }
                  function _(e) {
                    return "object" == typeof e && null !== e;
                  }
                  function w(e) {
                    return _(e) && "[object Date]" === k(e);
                  }
                  function S(e) {
                    return (
                      _(e) && ("[object Error]" === k(e) || e instanceof Error)
                    );
                  }
                  function x(e) {
                    return "function" == typeof e;
                  }
                  function k(e) {
                    return Object.prototype.toString.call(e);
                  }
                  function E(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10);
                  }
                  (n.debuglog = function (e) {
                    if (
                      (b(o) && (o = t.env.NODE_DEBUG || ""),
                      (e = e.toUpperCase()),
                      !s[e])
                    )
                      if (new RegExp("\\b" + e + "\\b", "i").test(o)) {
                        var r = t.pid;
                        s[e] = function () {
                          var t = n.format.apply(n, arguments);
                          console.error("%s %d: %s", e, r, t);
                        };
                      } else s[e] = function () {};
                    return s[e];
                  }),
                    (n.inspect = a),
                    (a.colors = {
                      bold: [1, 22],
                      italic: [3, 23],
                      underline: [4, 24],
                      inverse: [7, 27],
                      white: [37, 39],
                      grey: [90, 39],
                      black: [30, 39],
                      blue: [34, 39],
                      cyan: [36, 39],
                      green: [32, 39],
                      magenta: [35, 39],
                      red: [31, 39],
                      yellow: [33, 39],
                    }),
                    (a.styles = {
                      special: "cyan",
                      number: "yellow",
                      boolean: "yellow",
                      undefined: "grey",
                      null: "bold",
                      string: "green",
                      date: "magenta",
                      regexp: "red",
                    }),
                    (n.isArray = p),
                    (n.isBoolean = d),
                    (n.isNull = g),
                    (n.isNullOrUndefined = function (e) {
                      return null == e;
                    }),
                    (n.isNumber = m),
                    (n.isString = y),
                    (n.isSymbol = function (e) {
                      return "symbol" == typeof e;
                    }),
                    (n.isUndefined = b),
                    (n.isRegExp = v),
                    (n.isObject = _),
                    (n.isDate = w),
                    (n.isError = S),
                    (n.isFunction = x),
                    (n.isPrimitive = function (e) {
                      return (
                        null === e ||
                        "boolean" == typeof e ||
                        "number" == typeof e ||
                        "string" == typeof e ||
                        "symbol" == typeof e ||
                        void 0 === e
                      );
                    }),
                    (n.isBuffer = e("./support/isBuffer"));
                  var I = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ];
                  function C() {
                    var e = new Date(),
                      t = [
                        E(e.getHours()),
                        E(e.getMinutes()),
                        E(e.getSeconds()),
                      ].join(":");
                    return [e.getDate(), I[e.getMonth()], t].join(" ");
                  }
                  function O(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                  }
                  (n.log = function () {
                    console.log("%s - %s", C(), n.format.apply(n, arguments));
                  }),
                    (n.inherits = e("inherits")),
                    (n._extend = function (e, t) {
                      if (!t || !_(t)) return e;
                      for (var r = Object.keys(t), n = r.length; n--; )
                        e[r[n]] = t[r[n]];
                      return e;
                    });
                }.call(
                  this,
                  e("_process"),
                  void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { "./support/isBuffer": 136, _process: 101, inherits: 135 },
            ],
            138: [
              function (e, t, r) {
                t.exports = function e(t, r) {
                  if (t && r) return e(t)(r);
                  if ("function" != typeof t)
                    throw new TypeError("need wrapper function");
                  return (
                    Object.keys(t).forEach(function (e) {
                      n[e] = t[e];
                    }),
                    n
                  );
                  function n() {
                    for (
                      var e = new Array(arguments.length), r = 0;
                      r < e.length;
                      r++
                    )
                      e[r] = arguments[r];
                    var n = t.apply(this, e),
                      i = e[e.length - 1];
                    return (
                      "function" == typeof n &&
                        n !== i &&
                        Object.keys(i).forEach(function (e) {
                          n[e] = i[e];
                        }),
                      n
                    );
                  }
                };
              },
              {},
            ],
            139: [
              function (e, t, r) {
                "use strict";
                t.exports = function () {
                  throw new Error(
                    "ws does not work in the browser. Browser clients must use the native WebSocket object"
                  );
                };
              },
              {},
            ],
            140: [
              function (e, t, r) {
                t.exports = function () {
                  for (var e = {}, t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) n.call(r, i) && (e[i] = r[i]);
                  }
                  return e;
                };
                var n = Object.prototype.hasOwnProperty;
              },
              {},
            ],
          },
          {},
          [9]
        )(9);
      }.call(this, r(3)));
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return l;
        });
        var n = r(4),
          i = r(0),
          o = r(5),
          s = r(2),
          a = r(1);
        e.Buffer = e.Buffer || r(7).Buffer;
        const c = r(8).connect,
          u = { 0: "image", 1: "audio", 2: "video", 3: "file" };
        class l extends n.EventEmitter {
          constructor(e) {
            super(),
              (this.Host = ""),
              (this.Port = ""),
              (this.Username = ""),
              (this.Password = ""),
              (this.SecreteKey = ""),
              (this.Connection = ""),
              (this.ChennalKey = ""),
              (this.reConnectivity = ""),
              (this.clientId = ""),
              (this.QueueFiles = {}),
              (this.Host = e.host),
              (this.Port = e.port),
              (this.Username = e.credentials.username),
              (this.Password = e.credentials.password),
              (this.SecreteKey = e.secret),
              (this.reConnectivity = e.reConnectivity),
              e.clientId && (this.clientId = e.clientId);
            let t = `${e.host}:${e.port}`,
              r = c(t, { username: this.Username, keepalive: 5 });
            (this.Connection = r),
              r.on("message", (e, t, r) => {
                console.log(
                  "on MessagePacket",
                  r,
                  "=====ERRRR-====message",
                  t.toString()
                );
                let n = JSON.parse(t.toString());
                "object" == typeof n &&
                  (n.hasOwnProperty("event")
                    ? this.SetPresenceEvent(n)
                    : n.hasOwnProperty("status") && 200 == n.status
                    ? (console.log("on Createion", n), this.emit("create", n))
                    : this.SetMessagePacket(n));
              }),
              r.on("connect", () => {
                this.emit("connect");
              }),
              r.on("packetsend", function (e) {
                console.log("on packetsend", e);
              }),
              r.on("packetreceive", function (e) {
                console.log("on packetreceive", e);
              }),
              r.on("presence", function (e) {
                console.log("on presence", e);
              }),
              r.on("disconnect", (e) => {
                this.emit("disconnect", e);
              }),
              r.on("error", (e) => {
                this.emit("error", e);
              });
          }
          CreateChannel(e) {
            let t = {
              key: "cWV91camkwd99XO9rvHmamvXxGdyeHK5",
              channel: e + "/",
              type: "rwslp",
              ttl: 999999,
            };
            this.Connection.publish("emitter/keygen/", JSON.stringify(t));
          }
          Subscribe(e) {
            let t = `${e.key}/${e.channel}`;
            this.Connection.subscribe(t, [], (t, r) => {
              console.log("===Subscrib===", t, r),
                r && null != r && this.SendPresence(e);
            });
          }
          UnSubscribe(e) {
            let t = `${e.key}/${e.channel}`;
            this.Connection.unsubscribe(t, [], (t) => {
              null == t && this.emit("unsubscribed", e);
            });
          }
          Presence(e) {}
          SendMessage(e) {
            let t = `${e.key}/${e.to}`;
            this.Connection.publish(t, JSON.stringify(e), {}, () => {
              this.Connection.on("message", (t, r, n) => {
                if (t == e.to) {
                  let i = n.payload;
                  "publish" == n.cmd &&
                    null != i &&
                    i == JSON.stringify(e) &&
                    (console.log("===ReceivedMessage", r.toString()),
                    this.emit("messagesent", { channel: t, message: r }));
                }
              });
            });
          }
          SendReceipt(e) {
            let t = `${e.key}/${e.topic}`;
            this.Connection.publish(t, JSON.stringify(e), {}, () => {
              this.Connection.on("message", (t, r, n) => {
                if (t == e.to) {
                  let i = n.payload;
                  "publish" == n.cmd &&
                    null != i &&
                    i == JSON.stringify(e) &&
                    this.emit("messagesent", { channel: t, message: r });
                }
              });
            });
          }
          SendRawMessage(e, t) {
            let r = `${t.key}/${t.topic}`;
            this.Connection.publish(r, e, {}, () => {
              this.Connection.on("message", (e, r, n) => {
                if (e == t.topic) {
                  let i = n.payload;
                  "publish" == n.cmd &&
                    null != i &&
                    i == JSON.stringify(t) &&
                    this.emit("messagesent", { channel: e, message: r });
                }
              });
            });
          }
          SendFile(e, t) {
            i.a.SendFile(e, t, this);
          }
          Disconnect() {
            this.Connection.end();
          }
          SendPresence(e) {
            let t = { key: e.key, channel: e.channel, changes: !0, status: !0 };
            this.Connection.publish(
              "emitter/presence/",
              JSON.stringify(t),
              {},
              () => {
                this.Connection.on("message", (e, t, r) => {});
              }
            );
          }
          SetPresenceEvent(e) {
            "status" == e.event && this.emit("subscribed", e),
              "subscribe" == e.event && this.emit("online", e),
              "unsubscribe" == e.event && this.emit("offline", e);
          }
          SetMessagePacket(e) {
            let t = !1,
              r = i.a.MapHeaderPacket(e),
              n = i.a.MapFileMessagePacket(e);
            if (
              (r &&
                ((t = !0),
                (this.QueueFiles[e.headerId] = { Header: e, Content: [] }),
                this.SetFileLoadingMessage(e)),
              n)
            ) {
              t = !0;
              let r = this.QueueFiles[e.headerId];
              if (null != r) {
                let t = r.Content;
                (r.Content = t.concat(e.content)),
                  (this.QueueFiles[e.headerId] = Object.assign({}, r)),
                  r.Header.totalPacket == e.packetNo &&
                    this.SetFileMessage(r, e);
              }
            }
            n || r || this.emit("message", e);
          }
          async SetFileMessage(e, t) {
            let r = a.a;
            (r.type = e.Header.type),
              (r.size = e.Header.size),
              (r.to = e.Header.topic),
              (r.key = e.Header.key),
              (r.from = e.Header.from),
              (r.isBuffering = !1),
              (r.ext = e.Header.fileExtension),
              (r.id = t.headerId),
              (r.filename =
                this.Username +
                Math.random() +
                "." +
                e.Header.fileExtension.toLowerCase()),
              (r.content = await Object(s.a)(
                e.Content,
                e.Header.fileExtension
              )),
              (r.type = u[r.type]),
              this.emit("message", r),
              delete this.QueueFiles[t.headerId];
          }
          SetFileLoadingMessage(e) {
            let t = new o.a();
            (t.content = ""),
              (t.type = e.type),
              (t.size = e.size),
              (t.to = e.topic),
              (t.key = e.key),
              (t.from = e.from),
              (t.isBuffering = !0),
              (t.ext = e.fileExtension),
              (t.id = e.headerId),
              t.ShowFileLoadingMessage(this);
          }
        }
      }.call(this, r(3)));
    },
    function (e, t, r) {
      "use strict";
      const n = new (class {
        constructor() {}
        async Authorization(e, t) {
          let r = { project_id: e, auth_token: t };
          return fetch("https://vtkapi.vdotok.dev/API/v0/AuthenticateSDK", {
            method: "POST",
            body: JSON.stringify(r),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
            .then((e) => e.json())
            .then((e) => e)
            .catch((e) => (console.log(e), e));
        }
      })();
      t.a = n;
    },
    function (e, t, r) {
      "use strict";
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            n = u(e),
            s = n[0],
            a = n[1],
            c = new o(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, s, a)
            ),
            l = 0,
            f = a > 0 ? s - 4 : s;
          for (r = 0; r < f; r += 4)
            (t =
              (i[e.charCodeAt(r)] << 18) |
              (i[e.charCodeAt(r + 1)] << 12) |
              (i[e.charCodeAt(r + 2)] << 6) |
              i[e.charCodeAt(r + 3)]),
              (c[l++] = (t >> 16) & 255),
              (c[l++] = (t >> 8) & 255),
              (c[l++] = 255 & t);
          2 === a &&
            ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
            (c[l++] = 255 & t));
          1 === a &&
            ((t =
              (i[e.charCodeAt(r)] << 10) |
              (i[e.charCodeAt(r + 1)] << 4) |
              (i[e.charCodeAt(r + 2)] >> 2)),
            (c[l++] = (t >> 8) & 255),
            (c[l++] = 255 & t));
          return c;
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i;
            s < a;
            s += 16383
          )
            o.push(l(e, s, s + 16383 > a ? a : s + 16383));
          1 === i
            ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
            : 2 === i &&
              ((t = (e[r - 2] << 8) + e[r - 1]),
              o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var n = [],
          i = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          c = s.length;
        a < c;
        ++a
      )
        (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function l(e, t, r) {
        for (var i, o, s = [], a = t; a < r; a += 3)
          (i =
            ((e[a] << 16) & 16711680) +
            ((e[a + 1] << 8) & 65280) +
            (255 & e[a + 2])),
            s.push(
              n[((o = i) >> 18) & 63] +
                n[(o >> 12) & 63] +
                n[(o >> 6) & 63] +
                n[63 & o]
            );
        return s.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (e, t) {
      (t.read = function (e, t, r, n, i) {
        var o,
          s,
          a = 8 * i - n - 1,
          c = (1 << a) - 1,
          u = c >> 1,
          l = -7,
          f = r ? i - 1 : 0,
          h = r ? -1 : 1,
          p = e[t + f];
        for (
          f += h, o = p & ((1 << -l) - 1), p >>= -l, l += a;
          l > 0;
          o = 256 * o + e[t + f], f += h, l -= 8
        );
        for (
          s = o & ((1 << -l) - 1), o >>= -l, l += n;
          l > 0;
          s = 256 * s + e[t + f], f += h, l -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === c) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, n)), (o -= u);
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - n);
      }),
        (t.write = function (e, t, r, n, i, o) {
          var s,
            a,
            c,
            u = 8 * o - i - 1,
            l = (1 << u) - 1,
            f = l >> 1,
            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : o - 1,
            d = n ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                  (t += s + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 &&
                    (s++, (c /= 2)),
                  s + f >= l
                    ? ((a = 0), (s = l))
                    : s + f >= 1
                    ? ((a = (t * c - 1) * Math.pow(2, i)), (s += f))
                    : ((a = t * Math.pow(2, f - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            e[r + p] = 255 & a, p += d, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, u += i;
            u > 0;
            e[r + p] = 255 & s, p += d, s /= 256, u -= 8
          );
          e[r + p - d] |= 128 * g;
        });
    },
    function (e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == r.call(e);
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "name", function () {
          return s;
        }),
        r.d(t, "version", function () {
          return o;
        }),
        r.d(t, "Client", function () {
          return n.a;
        }),
        r.d(t, "URLBased", function () {
          return i.a;
        });
      var n = r(6),
        i = r(9);
      const o = "0.0.1",
        s = "vdotok-messaging";
    },
  ]);
});
