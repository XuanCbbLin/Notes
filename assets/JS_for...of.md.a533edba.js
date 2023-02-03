import{_ as s,c as a,o as n,a as o}from"./app.846d1fb9.js";const f=JSON.parse('{"title":"for...of","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FED\u4EE3\u9663\u5217","slug":"\u8FED\u4EE3\u9663\u5217","link":"#\u8FED\u4EE3\u9663\u5217","children":[{"level":3,"title":"\u4F7F\u7528 break \u4E2D\u65B7 for...of","slug":"\u4F7F\u7528-break-\u4E2D\u65B7-for-of","link":"#\u4F7F\u7528-break-\u4E2D\u65B7-for-of","children":[]}]},{"level":2,"title":"\u53C3\u8003\u8CC7\u6599","slug":"\u53C3\u8003\u8CC7\u6599","link":"#\u53C3\u8003\u8CC7\u6599","children":[]}],"relativePath":"JS/for...of.md"}'),l={name:"JS/for...of.md"},e=o(`<h1 id="for-of" tabindex="-1">for...of <a class="header-anchor" href="#for-of" aria-hidden="true">#</a></h1><h2 id="\u8FED\u4EE3\u9663\u5217" tabindex="-1">\u8FED\u4EE3\u9663\u5217 <a class="header-anchor" href="#\u8FED\u4EE3\u9663\u5217" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> array1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> element </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> array1) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F7F\u7528-break-\u4E2D\u65B7-for-of" tabindex="-1">\u4F7F\u7528 <code>break</code> \u4E2D\u65B7 <code>for...of</code> <a class="header-anchor" href="#\u4F7F\u7528-break-\u4E2D\u65B7-for-of" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tile </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> currentRow) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">tile</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">letter</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">tile</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">letter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">letter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53C3\u8003\u8CC7\u6599" tabindex="-1">\u53C3\u8003\u8CC7\u6599 <a class="header-anchor" href="#\u53C3\u8003\u8CC7\u6599" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank" rel="noreferrer">for...of</a></p>`,7),p=[e];function r(t,c,D,F,y,i){return n(),a("div",null,p)}const C=s(l,[["render",r]]);export{f as __pageData,C as default};