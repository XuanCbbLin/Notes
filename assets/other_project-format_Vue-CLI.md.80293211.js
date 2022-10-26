import{_ as s,c as n,o as a,a as l}from"./app.bc1dcc4b.js";const d=JSON.parse('{"title":"vue cli \u624B\u52D5\u88DD ESLint \u548C Prettier","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 pnpm \u5B89\u88C5 vue create \u5831\u932F","slug":"\u4F7F\u7528-pnpm-\u5B89\u88C5-vue-create-\u5831\u932F","link":"#\u4F7F\u7528-pnpm-\u5B89\u88C5-vue-create-\u5831\u932F","children":[{"level":3,"title":"\u53C3\u8003\u8CC7\u6599","slug":"\u53C3\u8003\u8CC7\u6599","link":"#\u53C3\u8003\u8CC7\u6599","children":[]}]},{"level":2,"title":"eslint \u6AA2\u67E5\u9700\u8981\u63DB\u884C","slug":"eslint-\u6AA2\u67E5\u9700\u8981\u63DB\u884C","link":"#eslint-\u6AA2\u67E5\u9700\u8981\u63DB\u884C","children":[]},{"level":2,"title":"\u8A2D\u5B9A  \\"source.fixAll.eslint\\"","slug":"\u8A2D\u5B9A-source-fixall-eslint","link":"#\u8A2D\u5B9A-source-fixall-eslint","children":[]},{"level":2,"title":"\u95DC\u6389 eslint \u8DD1 yarn serve \u51FA\u73FE error Delete , prettier/prettier \u548C error Delete \u240D\u23CE","slug":"\u95DC\u6389-eslint-\u8DD1-yarn-serve-\u51FA\u73FE-error-delete-prettier-prettier-\u548C-error-delete-\u240D\u23CE","link":"#\u95DC\u6389-eslint-\u8DD1-yarn-serve-\u51FA\u73FE-error-delete-prettier-prettier-\u548C-error-delete-\u240D\u23CE","children":[]},{"level":2,"title":"\u5B8C\u6574\u914D\u7F6E","slug":"\u5B8C\u6574\u914D\u7F6E","link":"#\u5B8C\u6574\u914D\u7F6E","children":[]}],"relativePath":"other/project-format/Vue-CLI.md"}'),e={name:"other/project-format/Vue-CLI.md"},p=l(`<h1 id="vue-cli-\u624B\u52D5\u88DD-eslint-\u548C-prettier" tabindex="-1">vue cli \u624B\u52D5\u88DD <code>ESLint</code> \u548C <code>Prettier</code> <a class="header-anchor" href="#vue-cli-\u624B\u52D5\u88DD-eslint-\u548C-prettier" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528-pnpm-\u5B89\u88C5-vue-create-\u5831\u932F" tabindex="-1">\u4F7F\u7528 pnpm \u5B89\u88C5 vue create \u5831\u932F <a class="header-anchor" href="#\u4F7F\u7528-pnpm-\u5B89\u88C5-vue-create-\u5831\u932F" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">Error: </span><span style="color:#82AAFF;">command</span><span style="color:#A6ACCD;"> failed: pnpm install --reporter silent --shamefully-hoist</span></span>
<span class="line"></span></code></pre></div><p>current node version v16.14.2 pnpm 7.3.0</p><ul><li><p>\u964D\u7248\u65B9\u5F0F</p><ul><li><code>npm rm -g pnpm</code></li><li><code>npm install -g pnpm@6.34.0</code></li></ul></li><li><p>\u4E0D\u964D\u7248\u65B9\u5F0F</p></li></ul><p>\u56E0\u70BA\u4E00\u958B\u59CB\u9078\u64C7 npm / yarn / pnpm \u6642,\u5F8C\u9762\u5B89\u88DD\u6703\u81EA\u52D5\u7528 pnpm , \u5982\u679C\u4E0D\u60F3\u7528\u56FA\u5B9A\u7684\u65B9\u5F0F,\u53EF\u7528\u4EE5\u4E0B\u4FEE\u6539</p><p>\u6539\u7528 vue create <code>&lt;projectName&gt; -m &lt;npm / yarn&gt;</code> \u6307\u5B9A\u5B89\u88DD\u7684\u547D\u4EE4 vue cli \u521D\u59CB\u5F8C , eslint \u6703\u914D\u7F6E\u5728 package.json \u7684 eslintConfig \u53EF\u62C9\u51FA\u53BB\u62BD\u51FA\u53BB\u7368\u7ACB <code>.eslintrc.js</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parserOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">parser</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/eslint-parser</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="\u53C3\u8003\u8CC7\u6599" tabindex="-1">\u53C3\u8003\u8CC7\u6599 <a class="header-anchor" href="#\u53C3\u8003\u8CC7\u6599" aria-hidden="true">#</a></h3><p><a href="https://github.com/vuejs/vue-cli/issues/7284" target="_blank" rel="noreferrer">\u4F7F\u7528 pnpm \u5B89\u88C5 vue create \u5831\u932F</a></p><h2 id="eslint-\u6AA2\u67E5\u9700\u8981\u63DB\u884C" tabindex="-1"><code>eslint</code> \u6AA2\u67E5\u9700\u8981\u63DB\u884C <a class="header-anchor" href="#eslint-\u6AA2\u67E5\u9700\u8981\u63DB\u884C" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">Replace</span></span>
<span class="line"><span style="color:#89DDFF;">\`&quot;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">with</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u240D\u23CE\xB7\xB7\xB7\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\u240D\u23CE\xB7\xB7\xB7\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\u240D\u23CE\xB7\xB7\xB7\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,\u240D\u23CE\xB7\xB7</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span></code></pre></div><p>\u89E3\u6C7A 2 \u500B\u65B9\u6CD5</p><p><code>eslintrc.js</code> \u8A2D\u5B9A <code>printWidth</code>,\u4F46\u4E0D\u6703\u5354\u52A9\u63DB\u884C</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier/prettier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        printWidth</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u662F</p><p><code>.prettierrc.json</code> \u8A2D\u5B9A <code>printWidth</code></p><h2 id="\u8A2D\u5B9A-source-fixall-eslint" tabindex="-1">\u8A2D\u5B9A <code> &quot;source.fixAll.eslint&quot;</code> <a class="header-anchor" href="#\u8A2D\u5B9A-source-fixall-eslint" aria-hidden="true">#</a></h2><p>\u4E0D\u958B <code>prettier extensions</code> ,\u65B0\u589E <code>setting.json</code> \u8A2D\u5B9A <code> &quot;source.fixAll.eslint&quot;: true</code> \u8B93 <code>eslint</code> \u4FEE\u6B63\u932F\u8AA4,\u4F46\u662F\u5982\u679C\u662F\u4EE5\u4E0B\u72C0\u6CC1,\u5C31\u9084\u662F\u8981\u958B <code>prettier extensions</code> \u8655\u7406</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">Replace</span></span>
<span class="line"><span style="color:#89DDFF;">\`&quot;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">with</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u240D\u23CE\xB7\xB7\xB7\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\u240D\u23CE\xB7\xB7\xB7\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">\u240D\u23CE\xB7\xB7\xB7\xB7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,\u240D\u23CE\xB7\xB7</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span></code></pre></div><h2 id="\u95DC\u6389-eslint-\u8DD1-yarn-serve-\u51FA\u73FE-error-delete-prettier-prettier-\u548C-error-delete-\u240D\u23CE" tabindex="-1">\u95DC\u6389 <code>eslint</code> \u8DD1 yarn serve \u51FA\u73FE <code>error Delete </code>,<code> prettier/prettier</code> \u548C <code>error Delete \u240D\u23CE </code> <a class="header-anchor" href="#\u95DC\u6389-eslint-\u8DD1-yarn-serve-\u51FA\u73FE-error-delete-prettier-prettier-\u548C-error-delete-\u240D\u23CE" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">import/no-named-as-default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//  error  Delete \`,\`  prettier/prettier</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">import/no-named-as-default-member</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//  error  Delete \`,\`  prettier/prettier</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><p><a href="https://stackoverflow.com/questions/70646554/delete-prettier-prettier-and-parse-errors-in-imported-module-routes" target="_blank" rel="noreferrer">Delete <code>,</code> prettier/prettier and Parse errors in imported module &#39;./routes&#39;</a></p><p>\u4F46\u958B\u5C08\u6848\u6703\u7D71\u4E00\u6BCF\u500B\u4EBA\u7684\u8A2D\u5B9A,\u5982\u679C\u898F\u5B9A\u88DD <code>eslint extensions</code> \u4E0D\u6703\u6709 <code>error Delete </code>,<code> prettier/prettier</code> \u7684\u554F\u984C , \u4F46 <code>error Delete \u240D\u23CE </code> \u9084\u662F\u5B58\u5728\u4EE5\u4E0B\u914D\u7F6E\u8655\u7406</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier/prettier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        endOfLine</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// error  Delete \`\u240D\u23CE \`</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B8C\u6574\u914D\u7F6E" tabindex="-1">\u5B8C\u6574\u914D\u7F6E <a class="header-anchor" href="#\u5B8C\u6574\u914D\u7F6E" aria-hidden="true">#</a></h2><p><code>.eslintrc.js</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">node</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">extends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:vue/vue3-essential</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parserOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">parser</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/eslint-parser</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">prettier/prettier</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">endOfLine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,28),o=[p];function t(r,c,D,F,y,i){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{d as __pageData,u as default};