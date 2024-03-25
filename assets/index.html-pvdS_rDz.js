import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-uYD0Z7Pu.js";const t="/docs/assets/api-token-qizm4AYV.png",o={},p=e('<h2 id="подготовка-до-и-интеграция" tabindex="-1"><a class="header-anchor" href="#подготовка-до-и-интеграция" aria-hidden="true">#</a> Подготовка до и интеграция</h2><p>Прежде чем начать использовать API, вам необходимо создать магазин в учетной записи мерчанта и получить токен API</p><p><img src="'+t+`" alt="api token"></p><p>Этот токен должен быть установлен для всех запросов в заголовках x-api-key</p><p>Созданный нами X-Api-ключ нужен для аутентификации магазина в учетной записи мерчанта.</p><h2 id="конечные-точки" tabindex="-1"><a class="header-anchor" href="#конечные-точки" aria-hidden="true">#</a> Конечные точки</h2><h3 id="создание-адресов-для-плательщика" tabindex="-1"><a class="header-anchor" href="#создание-адресов-для-плательщика" aria-hidden="true">#</a> Создание адресов для плательщика</h3><p>Если плательщик еще не создан, то мы создадим его, если он уже создан, то возьмем Существующего и вернем платежные адреса для всех блокчейнов. Мы настоятельно рекомендуем использовать этот метод для простой интеграции и постоянного получения адресов</p><p><code>[POST] /payer/addresses</code></p><p>Тело запроса json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;storeUserId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>пример ответа</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="создать-плательщика" tabindex="-1"><a class="header-anchor" href="#создать-плательщика" aria-hidden="true">#</a> Создать плательщика</h3><p>Создаем плательщика, если создан пользователь с таким идентификатором, то будут возвращены данные из базы данных</p><p><code>[POST] /payer/create/</code></p><p>тело запроса json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  storeUserId<span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>storeUserId уникальный идентификатор плательщика в магазине</p><p>пример ответа</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Стоит отметить, что строку адреса следует отметить пустой, если мы только что создали плательщика</p><h3 id="запрос-адресов-плательщика-для-определеннои-валюте" tabindex="-1"><a class="header-anchor" href="#запрос-адресов-плательщика-для-определеннои-валюте" aria-hidden="true">#</a> Запрос адресов плательщика для определенной валюте</h3><p>Возможно, вы не хотите принимать платежи только в определенной валюте, тогда эта конечная точка будет вам полезна <code>[GET]/address/{payer}/{currency}</code></p><p>Где payer - идентификатор плательщика, который был получен при создании соответствующего запроса, а currency – валюта BTC.Bitcoin, USDT.tron пример запроса</p><p><code>[GET]/address/9ff39a38-71e1-4a27-83f6-65312691e28e/BTC.Bitcoin</code></p><p>пример ответа</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="запрос-курса-валюты-магазина" tabindex="-1"><a class="header-anchor" href="#запрос-курса-валюты-магазина" aria-hidden="true">#</a> Запрос курса валюты магазина</h3><p><code>[GET] /v2/stores/currencies/rate</code></p><p>Валюта передается в параметре запроса</p><p>пример запроса <code>[GET] /v2/stores/currencies/rate?currency=BTC.Bitcoin</code></p><p>пример ответа</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),i=[p];function u(r,c){return s(),a("div",null,i)}const v=n(o,[["render",u],["__file","index.html.vue"]]);export{v as default};
