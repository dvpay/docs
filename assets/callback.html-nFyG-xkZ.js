import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,d as o}from"./app-uYD0Z7Pu.js";const a="/docs/assets/callback_setting-BrvBDIrf.png",s={},i=o('<h1 id="web-hook" tabindex="-1"><a class="header-anchor" href="#web-hook" aria-hidden="true">#</a> Web Hook</h1><p>To notify the store when a payment has been received, we use a web hook mechanism. To receive information about payments in your store, register the endpoint to which you want to receive notifications about payments in the merchant’s store settings</p><p><img src="'+a+`" alt="img.png"></p><p>Where the secret is used for signing</p><p>Be sure to check the box next to A new payment has been received</p><p>Receiving a callback in order to find out about a payment, you need to create an endpoint on the integrator side to which the merchant will send an event at the given moment. The merchant supports only one event option: receiving a payment</p><p>To secure the store, a signature mechanism is used. The merchant transmits a hashed sha256 string in the X-sign header, which includes the body of the request being sent and the concatenated secret</p><p>For example, a merchant sends a web hook to the url <code>https://mystore.com/callback/merchant</code> with a POST request</p><p>The request body in this case will be like this</p><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
  &quot;orderId&quot;: &quot;&quot;,
  &quot;status&quot;: &quot;paid&quot;,
  &quot;createdAt&quot;: &quot;2023-09-15T07:31:46.000000Z&quot;,
  &quot;paidAt&quot;: &quot;2023-09-15T07:31:46.000000Z&quot;,
  &quot;expiredAt&quot;: &quot;2023-09-15T07:51:46.000000Z&quot;,
  &quot;amount&quot;: 15,
  &quot;receivedAmount&quot;: &quot;15.00&quot;,
  &quot;transactions&quot;: [
    {
      &quot;txId&quot;: &quot;98af9289aa06da5a13a9881dd2ee74ba85cfd1af20343ce50c6071275eea8e7b&quot;,
      &quot;createdAt&quot;: &quot;2023-09-15 07:31:46&quot;,
      &quot;currency&quot;: &quot;USDT&quot;,
      &quot;blockchain&quot;: &quot;tron&quot;,
      &quot;amount&quot;: &quot;15.00000000&quot;,
      &quot;amountUsd&quot;: &quot;15.00&quot;,
      &quot;rate&quot;: &quot;1.00000000&quot;
    }
  ],
  &quot;payer&quot;: {
    &quot;id&quot;: &quot;623cf62d-7ec3-4b60-8abc-ba063f3bbf93&quot;,
    &quot;storeUserId&quot;: &quot;502162&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>our X-sign header will be eaba3d825829da2db79b95ef362e7b24a4c8b27fb643bad54d180e43ca9152de</p><p>Accordingly, on the store side it is worth checking the validity of the signature by creating the same hash and checking it with the header</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$requestBodyString</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;{&quot;orderId&quot;:&quot;&quot;,&quot;status&quot;:&quot;paid&quot;,&quot;createdAt&quot;:&quot;2023-09-15T07:31:46.000000Z&quot;,&quot;paidAt&quot;:&quot;2023-09-15T07:31:46.000000Z&quot;,&quot;expiredAt&quot;:&quot;2023-09-15T07:51:46.000000Z&quot;,&quot;amount&quot;:15,&quot;receivedAmount&quot;:&quot;15.00&quot;,&quot;transactions&quot;:[{&quot;txId&quot;:&quot;98af9289aa06da5a13a9881dd2ee74ba85cfd1af20343ce50c6071275eea8e7b&quot;,&quot;createdAt&quot;:&quot;2023-09-15 07:31:46&quot;,&quot;currency&quot;:&quot;USDT&quot;,&quot;blockchain&quot;:&quot;tron&quot;,&quot;amount&quot;:&quot;15.00000000&quot;,&quot;amountUsd&quot;:&quot;15.00&quot;,&quot;rate&quot;
:&quot;1.00000000&quot;}],&quot;payer&quot;:{&quot;id&quot;:&quot;623cf62d-7ec3-4b60-8abc-ba063f3bbf93&quot;,&quot;storeUserId&quot;:&quot;502162&quot;}}&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$secret</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;c23a3ce904b4a9421d35590639f3589e0a491bf7&#39;</span>

<span class="token variable">$sign</span> <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;sha256&#39;</span><span class="token punctuation">,</span> <span class="token variable">$requestBodyString</span> <span class="token operator">.</span> <span class="token variable">$secret</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//eaba3d825829da2db79b95ef362e7b24a4c8b27fb643bad54d180e43ca9152de</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if for some reason it was not possible to receive a 200 response from the store, after some time the merchant will send the message again, the frequency of sending increases exponentially</p>`,14),u=[i];function r(c,d){return t(),n("div",null,u)}const p=e(s,[["render",r],["__file","callback.html.vue"]]);export{p as default};
