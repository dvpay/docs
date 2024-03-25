import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as n,d as e}from"./app-uYD0Z7Pu.js";const a="/docs/assets/callback_setting-BrvBDIrf.png",s={},u=e('<h1 id="web-hook" tabindex="-1"><a class="header-anchor" href="#web-hook" aria-hidden="true">#</a> Web-hook</h1><p>Для уведомлять магазина о получении платежа, мы используем механизм web-hook. Чтобы получать информацию о платежах в вашем магазине, зарегистрируйте конечную точку, на которую вы хотите получать уведомления о платежах, в настройках магазина мерчанта.</p><p><img src="'+a+`" alt="img.png"> Где используется “secret” для подписи.</p><p>Обязательно установите флажок напротив &quot;Поступил новый платеж&quot;</p><p>Для получение обратного вызова с целью узнать о платеже, вам необходимо создать конечную точку на стороне интегратора, на которую мерчант отправит событие в данный момент. Мерчант поддерживает только один вариант событий: получение платежа.</p><p>Для обеспечения безопасности магазина используется механизм подписи. Мерчант передает зашифрованную строку sha256 в заголовке X-sign, которая включает в себя тело отправляемого запроса и объединенный “secret”.</p><p>Например, мерчант отправляет веб-хук по URL _____________ с запросом POST</p><p>Тело запроса в этом случае будет выглядеть следующим образом</p><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>наш заголовок X-sign будет eaba3d825829da2db79b95ef362e7b24a4c8b27fb643bad54d180e43ca9152de</p><p>Соответственно, со стороны хранилища стоит проверить правильность подписи, создав тот же хэш и сверив его с заголовком</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$requestBodyString</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;{&quot;orderId&quot;:&quot;&quot;,&quot;status&quot;:&quot;paid&quot;,&quot;createdAt&quot;:&quot;2023-09-15T07:31:46.000000Z&quot;,&quot;paidAt&quot;:&quot;2023-09-15T07:31:46.000000Z&quot;,&quot;expiredAt&quot;:&quot;2023-09-15T07:51:46.000000Z&quot;,&quot;amount&quot;:15,&quot;receivedAmount&quot;:&quot;15.00&quot;,&quot;transactions&quot;:[{&quot;txId&quot;:&quot;98af9289aa06da5a13a9881dd2ee74ba85cfd1af20343ce50c6071275eea8e7b&quot;,&quot;createdAt&quot;:&quot;2023-09-15 07:31:46&quot;,&quot;currency&quot;:&quot;USDT&quot;,&quot;blockchain&quot;:&quot;tron&quot;,&quot;amount&quot;:&quot;15.00000000&quot;,&quot;amountUsd&quot;:&quot;15.00&quot;,&quot;rate&quot;
:&quot;1.00000000&quot;}],&quot;payer&quot;:{&quot;id&quot;:&quot;623cf62d-7ec3-4b60-8abc-ba063f3bbf93&quot;,&quot;storeUserId&quot;:&quot;502162&quot;}}&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$secret</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;c23a3ce904b4a9421d35590639f3589e0a491bf7&#39;</span>

<span class="token variable">$sign</span> <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;sha256&#39;</span><span class="token punctuation">,</span> <span class="token variable">$requestBodyString</span> <span class="token operator">.</span> <span class="token variable">$secret</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//eaba3d825829da2db79b95ef362e7b24a4c8b27fb643bad54d180e43ca9152de</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>если по какой-либо причине не удалось получить ответ 200 от магазина, через некоторое время мерчант повторно отправит сообщение, частота отправки увеличивается экспоненциально.</p>`,13),i=[u];function d(q,c){return o(),n("div",null,i)}const p=t(s,[["render",d],["__file","callback.html.vue"]]);export{p as default};
