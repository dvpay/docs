import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,d as a}from"./app-uYD0Z7Pu.js";const t="/docs/assets/api-token-qizm4AYV.png",o={},p=a('<h2 id="preparation-before-and-integration" tabindex="-1"><a class="header-anchor" href="#preparation-before-and-integration" aria-hidden="true">#</a> Preparation before and integration</h2><p>Before you start using the API, you need to create a store in the merchant’s account and receive an API token</p><p><img src="'+t+`" alt="api token"></p><p>This token must be set for all requests in x-api-key headers</p><p>The X-Api-Key that we created is needed to authenticate the store in the merchant</p><h2 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h2><h3 id="creating-addresses-for-the-payer" tabindex="-1"><a class="header-anchor" href="#creating-addresses-for-the-payer" aria-hidden="true">#</a> Creating addresses for the payer</h3><p>If the payer has not yet been created then we will create it, if it has already been created then we will take the existing one and also return the payment addresses for all blockchains. We highly recommend using this method for simple integration and constant receipt of addresses</p><p><code>[POST] /payer/addresses</code></p><p>body request json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;storeUserId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>response example</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
  &quot;result&quot;: [
    {
      &quot;blockchain&quot;: &quot;bitcoin&quot;,
      &quot;currency&quot;: &quot;BTC.Bitcoin&quot;,
      &quot;address&quot;: &quot;bc1qwzefc7fp8tdlnv0es3pk6snad22hhet528d50e86&quot;,
      &quot;rate&quot;: &quot;26568.16995000&quot;,
      &quot;payer&quot;: {
        &quot;id&quot;: &quot;de95717c-9814-4887-ba6b-94fc31eb6973&quot;,
        &quot;storeUserId&quot;: &quot;1232143&quot;,
        &quot;payerUrl&quot;: &quot;https://dv.net/invoices/payer/de95717c-9814-4887-ba6b-94fc31eb6973&quot;
      }
    },
    {
      &quot;blockchain&quot;: &quot;tron&quot;,
      &quot;currency&quot;: &quot;USDT.Tron&quot;,
      &quot;address&quot;: &quot;TKn5GuNb62KgQh7SLXznUrP33Nae28d50e86&quot;,
      &quot;rate&quot;: &quot;1&quot;,
      &quot;payer&quot;: {
        &quot;id&quot;: &quot;de95717c-9814-4887-ba6b-94fc31eb6973&quot;,
        &quot;storeUserId&quot;: &quot;1232143&quot;,
        &quot;payerUrl&quot;: &quot;https://dv.net/invoices/payer/de95717c-9814-4887-ba6b-94fc31eb6973&quot;
      }
    }
  ],
  &quot;errors&quot;: []
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-payer" tabindex="-1"><a class="header-anchor" href="#create-payer" aria-hidden="true">#</a> Create payer</h3><p>Creating a payer, if a user with such an identifier is created, then data from the database will be returned</p><p><code>[POST] /payer/create/</code></p><p>body request json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  storeUserId<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>storeUserId unique identifier of the payer in the store</p><p>response example</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9ff39a38-71e1-4a27-83f6-65312691e28e&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;store_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9fe169fc-638c-4387-8477-8bf0e9268248&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;store_user_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;payerUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://dv.net/invoices/payer/9ff39a38-71e1-4a27-83f6-65312691e28e&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9fe169fc-638c-4387-8477-8bf0e9268248&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3321&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;staticAddress&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;storeCurrencyCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USD&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;blockchain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bitcoin&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;currency&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BTC.Bitcoin&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bc1qwzefc7fp8tdlnv0es3pk6snad22hhet56c300461&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;payer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9ff39a38-71e1-4a27-83f6-65312691e28e&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;storeUserId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;payerUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://dv.net/invoices/payer/9ff39a38-71e1-4a27-83f6-65312691e28e&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is worth noting that the address field will be empty if we have just created a payer</p><h3 id="request-the-payer-addresses-for-a-specific-currency" tabindex="-1"><a class="header-anchor" href="#request-the-payer-addresses-for-a-specific-currency" aria-hidden="true">#</a> Request the payer addresses for a specific currency</h3><p>Perhaps you do not want to accept payments only in a specific currency, then this endpoint will be useful to you</p><p><code>[GET]/address/{payer}/{currency}</code></p><p>Where payer is the id of the payer that was received when creating the corresponding request, currency currency BTC.Bitcoin, USDT.tron example request</p><p><code>[GET]/address/9ff39a38-71e1-4a27-83f6-65312691e28e/BTC.Bitcoin</code></p><p>response example</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;result&quot;: {
    &quot;blockchain&quot;: &quot;bitcoin&quot;,
    &quot;currency&quot;: &quot;BTC.Bitcoin&quot;,
    &quot;address&quot;: &quot;bc1qwzefc7fp8tdlnv0es3pk6snad22hhet56c300461&quot;,
    &quot;payer&quot;: {
      &quot;id&quot;: &quot;9ff39a38-71e1-4a27-83f6-65312691e28e&quot;,
      &quot;storeUserId&quot;: &quot;1&quot;
    }
  },
  &quot;errors&quot;: []
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request-the-store-currency-rate" tabindex="-1"><a class="header-anchor" href="#request-the-store-currency-rate" aria-hidden="true">#</a> Request the store currency rate</h3><p><code>[GET] /v2/stores/currencies/rate</code></p><p>Currency is passed in the query parameter</p><p>request example</p><p><code>[GET] /v2/stores/currencies/rate?currency=BTC.Bitcoin</code></p><p>response example</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rateSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Binance&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1714.99000000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lastUpdate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-08-31 11:55:57.062434&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;timezone_type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;timezone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UTC&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),r=[p];function i(u,c){return s(),e("div",null,r)}const v=n(o,[["render",i],["__file","index.html.vue"]]);export{v as default};
