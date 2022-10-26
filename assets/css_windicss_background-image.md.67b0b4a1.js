import{_ as s,c as a,o as n,a as l}from"./app.0046f5a4.js";const g=JSON.parse('{"title":"background-image \u8207 vite \u7684 base url","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7121\u6CD5\u975C\u614B\u548C\u52D5\u614B\u7522\u751F\u9023\u7D50","slug":"\u7121\u6CD5\u975C\u614B\u548C\u52D5\u614B\u7522\u751F\u9023\u7D50","link":"#\u7121\u6CD5\u975C\u614B\u548C\u52D5\u614B\u7522\u751F\u9023\u7D50","children":[]},{"level":2,"title":"windi.config.js \u8A2D\u5B9A background-image","slug":"windi-config-js-\u8A2D\u5B9A-background-image","link":"#windi-config-js-\u8A2D\u5B9A-background-image","children":[]},{"level":2,"title":"\u76F4\u63A5\u5BEB class name","slug":"\u76F4\u63A5\u5BEB-class-name","link":"#\u76F4\u63A5\u5BEB-class-name","children":[]},{"level":2,"title":"\u7E3D\u7D50","slug":"\u7E3D\u7D50","link":"#\u7E3D\u7D50","children":[]}],"relativePath":"css/windicss/background-image.md"}'),p={name:"css/windicss/background-image.md"},o=l(`<h1 id="background-image-\u8207-vite-\u7684-base-url" tabindex="-1">background-image \u8207 vite \u7684 base url <a class="header-anchor" href="#background-image-\u8207-vite-\u7684-base-url" aria-hidden="true">#</a></h1><h2 id="\u7121\u6CD5\u975C\u614B\u548C\u52D5\u614B\u7522\u751F\u9023\u7D50" tabindex="-1">\u7121\u6CD5\u975C\u614B\u548C\u52D5\u614B\u7522\u751F\u9023\u7D50 <a class="header-anchor" href="#\u7121\u6CD5\u975C\u614B\u548C\u52D5\u614B\u7522\u751F\u9023\u7D50" aria-hidden="true">#</a></h2><p>\u5982\u679C\u8981\u505A\u52D5\u614B\u548C\u975C\u614B\u7522\u751F url \u5728 WindiCSS \u4E0D\u5141\u8A31</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h-36 w-36</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :class=&quot;\`bg-[url(\${getImg()})]\`&quot;&gt;&lt;/div&gt; </span><span style="color:#676E95;">/* \u52D5\u614B */</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;div </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h-36 w-36 bg-[url(&#39;./assets/xuan.jpg&#39;)]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /* \u975C\u614B */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">const getImg = () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/xuan.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="windi-config-js-\u8A2D\u5B9A-background-image" tabindex="-1">windi.config.js \u8A2D\u5B9A background-image <a class="header-anchor" href="#windi-config-js-\u8A2D\u5B9A-background-image" aria-hidden="true">#</a></h2><p>\u96D6\u7136\u53EF\u4EE5\u8A2D\u5B9A background-image \u4F46\u7121\u6CD5\u5957 base url</p><p>windi.config.js</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">windicss/helpers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">backgroundImage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">xuan</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url(&quot;./src/assets/xuan.jpg&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>app.vue</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h-36 w-36 bg-xuan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u76F4\u63A5\u5BEB-class-name" tabindex="-1">\u76F4\u63A5\u5BEB class name <a class="header-anchor" href="#\u76F4\u63A5\u5BEB-class-name" aria-hidden="true">#</a></h2><p>\u9019\u505A\u6CD5\u5728 build \u5F8C\u6703\u5957 base url</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h-36 w-36 test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.test </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  background</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">image: </span><span style="color:#82AAFF;">url</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/xuan.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u7E3D\u7D50" tabindex="-1">\u7E3D\u7D50 <a class="header-anchor" href="#\u7E3D\u7D50" aria-hidden="true">#</a></h2><ul><li>\u7121\u6CD5\u505A\u52D5\u614B\u548C\u975C\u614B\u9023\u7D50,\u5728 windi.config.js \u8A2D\u5B9A backgroundImage \u624D\u80FD\u7528</li><li>\u9700\u8981\u5957 base url \u8981\u76F4\u63A5\u5BEB class name</li></ul>`,15),e=[o];function t(c,r,D,F,i,y){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};