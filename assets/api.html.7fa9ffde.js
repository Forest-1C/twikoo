import{_ as n,o as s,c as a,e}from"./app.48735342.js";const t={},p=e(`<h1 id="api-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#api-\u6587\u6863" aria-hidden="true">#</a> API \u6587\u6863</h1><p>\u901A\u8FC7 Twikoo API\uFF0C\u4E3B\u9898\u5F00\u53D1\u8005\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u7279\u6B8A\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\uFF1A\u5728\u6587\u7AE0\u5217\u8868\u663E\u793A\u6587\u7AE0\u8BC4\u8BBA\u6570\uFF0C\u5728\u9996\u9875\u663E\u793A\u6700\u65B0\u8BC4\u8BBA\uFF0C\u7B49\u3002</p><p>\u8C03\u7528 Twikoo API \u524D\uFF0C<strong>\u4E0D\u9700\u8981</strong> \u6267\u884C <code>twikoo.init()</code>\u3002</p><h2 id="get-comments-count" tabindex="-1"><a class="header-anchor" href="#get-comments-count" aria-hidden="true">#</a> Get comments count</h2><p>\u6279\u91CF\u83B7\u53D6\u6587\u7AE0\u8BC4\u8BBA\u6570\u3002</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h3><p><code>&gt;= 0.2.7</code></p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>twikoo<span class="token punctuation">.</span><span class="token function">getCommentsCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">envId</span><span class="token operator">:</span> <span class="token string">&#39;\u60A8\u7684\u73AF\u5883id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u73AF\u5883 ID</span>
  <span class="token comment">// region: &#39;ap-guangzhou&#39;, // \u73AF\u5883\u5730\u57DF\uFF0C\u9ED8\u8BA4\u4E3A ap-shanghai\uFF0C\u5982\u679C\u60A8\u7684\u73AF\u5883\u5730\u57DF\u4E0D\u662F\u4E0A\u6D77\uFF0C\u9700\u4F20\u6B64\u53C2\u6570</span>
  <span class="token literal-property property">urls</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u4E0D\u5305\u542B\u534F\u8BAE\u3001\u57DF\u540D\u3001\u53C2\u6570\u7684\u6587\u7AE0\u8DEF\u5F84\u5217\u8868\uFF0C\u5FC5\u4F20\u53C2\u6570</span>
    <span class="token string">&#39;/2020/10/post-1.html&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/2020/11/post-2.html&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/2020/12/post-3.html&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">includeReply</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// \u8BC4\u8BBA\u6570\u662F\u5426\u5305\u62EC\u56DE\u590D\uFF0C\u9ED8\u8BA4\uFF1Afalse</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE\u793A\u4F8B: [</span>
  <span class="token comment">//   { url: &#39;/2020/10/post-1.html&#39;, count: 10 },</span>
  <span class="token comment">//   { url: &#39;/2020/11/post-2.html&#39;, count: 0 },</span>
  <span class="token comment">//   { url: &#39;/2020/12/post-3.html&#39;, count: 20 }</span>
  <span class="token comment">// ]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D1\u751F\u9519\u8BEF</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-recent-comments" tabindex="-1"><a class="header-anchor" href="#get-recent-comments" aria-hidden="true">#</a> Get recent comments</h2><p>\u83B7\u53D6\u6700\u65B0\u8BC4\u8BBA\u3002</p><h3 id="version-1" tabindex="-1"><a class="header-anchor" href="#version-1" aria-hidden="true">#</a> Version</h3><p><code>&gt;= 0.2.7</code></p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>twikoo<span class="token punctuation">.</span><span class="token function">getRecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">envId</span><span class="token operator">:</span> <span class="token string">&#39;\u60A8\u7684\u73AF\u5883id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u73AF\u5883 ID</span>
  <span class="token comment">// region: &#39;ap-guangzhou&#39;, // \u73AF\u5883\u5730\u57DF\uFF0C\u9ED8\u8BA4\u4E3A ap-shanghai\uFF0C\u5982\u679C\u60A8\u7684\u73AF\u5883\u5730\u57DF\u4E0D\u662F\u4E0A\u6D77\uFF0C\u9700\u4F20\u6B64\u53C2\u6570</span>
  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// \u83B7\u53D6\u591A\u5C11\u6761\uFF0C\u9ED8\u8BA4\uFF1A10\uFF0C\u6700\u5927\uFF1A100</span>
  <span class="token literal-property property">includeReply</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u5305\u62EC\u6700\u65B0\u56DE\u590D\uFF0C\u9ED8\u8BA4\uFF1Afalse</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE Array\uFF0C\u5305\u542B\u6700\u65B0\u8BC4\u8BBA\u7684</span>
  <span class="token comment">//   * id:           \u8BC4\u8BBA ID</span>
  <span class="token comment">//   * url:          \u8BC4\u8BBA\u5730\u5740</span>
  <span class="token comment">//   * nick:         \u6635\u79F0</span>
  <span class="token comment">//   * mailMd5:      \u90AE\u7BB1\u7684 MD5 \u503C\uFF0C\u53EF\u7528\u4E8E\u5C55\u793A\u5934\u50CF</span>
  <span class="token comment">//   * link:         \u7F51\u5740</span>
  <span class="token comment">//   * comment:      HTML \u683C\u5F0F\u7684\u8BC4\u8BBA\u5185\u5BB9</span>
  <span class="token comment">//   * commentText:  \u7EAF\u6587\u672C\u683C\u5F0F\u7684\u8BC4\u8BBA\u5185\u5BB9</span>
  <span class="token comment">//   * created:      \u8BC4\u8BBA\u65F6\u95F4\uFF0C\u683C\u5F0F\u4E3A\u6BEB\u79D2\u7EA7\u65F6\u95F4\u6233</span>
  <span class="token comment">//   * avatar:       \u5934\u50CF\u5730\u5740\uFF080.2.9 \u65B0\u589E\uFF09</span>
  <span class="token comment">//   * relativeTime: \u76F8\u5BF9\u8BC4\u8BBA\u65F6\u95F4\uFF0C\u5982 \u201C1 \u5C0F\u65F6\u524D\u201D\uFF080.2.9 \u65B0\u589E\uFF09</span>
  <span class="token comment">// \u8FD4\u56DE\u793A\u4F8B: [ // \u4ECE\u65B0\u5230\u65E7\u987A\u5E8F</span>
  <span class="token comment">//   { id: &#39;&#39;, url: &#39;&#39;, nick: &#39;&#39;, mailMd5: &#39;&#39;, link: &#39;&#39;, comment: &#39;&#39;, commentText: &#39;&#39;, created: 0 },</span>
  <span class="token comment">//   { id: &#39;&#39;, url: &#39;&#39;, nick: &#39;&#39;, mailMd5: &#39;&#39;, link: &#39;&#39;, comment: &#39;&#39;, commentText: &#39;&#39;, created: 0 },</span>
  <span class="token comment">//   { id: &#39;&#39;, url: &#39;&#39;, nick: &#39;&#39;, mailMd5: &#39;&#39;, link: &#39;&#39;, comment: &#39;&#39;, commentText: &#39;&#39;, created: 0 }</span>
  <span class="token comment">// ]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D1\u751F\u9519\u8BEF</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="on-twikoo-loaded" tabindex="-1"><a class="header-anchor" href="#on-twikoo-loaded" aria-hidden="true">#</a> On Twikoo loaded</h2><p>Twikoo \u6210\u529F\u6302\u8F7D\u540E\u7684\u56DE\u8C03\u51FD\u6570\u3002<br> \u73AF\u5883 ID \u9519\u8BEF\u3001\u7F51\u7EDC\u5F02\u5E38\u3001\u6302\u8F7D\u5931\u8D25\u7B49\u60C5\u51B5\u65F6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="version-2" tabindex="-1"><a class="header-anchor" href="#version-2" aria-hidden="true">#</a> Version</h3><p><code>&gt;= 0.5.2</code></p><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>twikoo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Twikoo \u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="on-comment-loaded" tabindex="-1"><a class="header-anchor" href="#on-comment-loaded" aria-hidden="true">#</a> On comment loaded</h2><p>\u8BC4\u8BBA\u52A0\u8F7D\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570\u3002<br> \u53D1\u8868\u8BC4\u8BBA\u540E\u81EA\u52A8\u5237\u65B0\u8BC4\u8BBA\u65F6\u3001\u52A0\u8F7D\u4E0B\u4E00\u9875\u8BC4\u8BBA\u65F6\uFF0C\u4E5F\u4F1A\u89E6\u53D1\u3002<br> \u8BC4\u8BBA\u52A0\u8F7D\u5931\u8D25\u65F6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="version-3" tabindex="-1"><a class="header-anchor" href="#version-3" aria-hidden="true">#</a> Version</h3><p><code>&gt;= 0.5.2</code></p><h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>twikoo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onCommentLoaded</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BC4\u8BBA\u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","api.html.vue"]]);export{r as default};
