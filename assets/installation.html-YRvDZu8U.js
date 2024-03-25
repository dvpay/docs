import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as p,a as n,e as s,w as c,b as a,d as t}from"./app-uYD0Z7Pu.js";const d="/docs/assets/startingInstaller1-S47V8l4h.jpg",u="/docs/assets/startingInstaller2-sgtK-ivE.jpg",h="/docs/assets/startingInstaller3-m-MDRasu.jpg",v="/docs/assets/startingInstaller4-UjmkuDg-.jpg",m={},b=n("h1",{id:"install",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),a(" Install")],-1),g=n("p",null,"You can install DV PAY in several ways",-1),k=n("li",null,"[Install from shell script](./INSTALLATION.html#Install from shell script)",-1),f=n("h2",{id:"prepairing-for-installation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prepairing-for-installation","aria-hidden":"true"},"#"),a(" Prepairing for installation")],-1),_=n("p",null,"For successful installation you will need 3 domains:",-1),y=n("li",null,[n("strong",null,"Frontend domain."),a(" Domain on which the personal account user interface will be deployed;")],-1),x=n("li",null,[n("strong",null,"Backend domain."),a(" Domain where the backend will be located;")],-1),w=n("li",null,[n("strong",null,"Payment domain."),a(" The domain where the payment form for your clients will be located;")],-1),S=n("strong",null,"Processing URL",-1),I={href:"https://t.me/dv_pay_bot",target:"_blank",rel:"noopener noreferrer"},L=t(`<blockquote><p>For example, if your main site is on the <code>mybestshop.com</code> domain, then you can create the following additional domains:</p><ul><li><code>app.mybestshop.com</code> (frontend)</li><li><code>api.mybestshop.com</code> (backend)</li><li><code>pay.mybestshop.com</code> (payment)</li></ul></blockquote><p>Prepare a virtual machine with CentOS. All necessary update packages will be installed automatically during script execution.</p><h2 id="install-from-shell-script" tabindex="-1"><a class="header-anchor" href="#install-from-shell-script" aria-hidden="true">#</a> Install from shell script</h2><h3 id="step-1-launch" tabindex="-1"><a class="header-anchor" href="#step-1-launch" aria-hidden="true">#</a> Step 1. Launch</h3><p>To successfully install the required application on your server, you&#39;ll need a server running the CentOS operating system. Please ensure that your server meets these requirements.</p><p>To initiate the application installation, execute the following command in your server terminal:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-Ls</span> https://raw.githubusercontent.com/dvpay/dv-backend/master/init.sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will download and automatically run the installation script from the specified repository link. Ensure that your server has internet access for the process to complete successfully.</p><p>Make sure to verify the validity of the repository link to ensure you are using the latest version of the installation script.</p>`,9),q={href:"https://t.me/dv_pay_support",target:"_blank",rel:"noopener noreferrer"},A=t('<h3 id="step-2-input-domains" tabindex="-1"><a class="header-anchor" href="#step-2-input-domains" aria-hidden="true">#</a> Step 2. Input domains</h3><p>Enter your domains, which you got during <a href="#prepairing-for-installation">preparation</a></p><p><img src="https://i.ibb.co/pLXL2qk/Domains.jpg" alt="Launch"></p><h3 id="step-3-enter-processing-url" tabindex="-1"><a class="header-anchor" href="#step-3-enter-processing-url" aria-hidden="true">#</a> Step 3. Enter processing URL</h3>',4),E={href:"https://t.me/dv_pay_support",target:"_blank",rel:"noopener noreferrer"},D=t(`<p><img src="https://i.ibb.co/LzHQ1Ss/tg-image-4049204792.jpg" alt="Launch"></p><p>After entering processing URL script will continue installation. In the end of script you will be provided with <strong>DV Credentials - copy it to a safe place.</strong></p><h2 id="web-installation" tabindex="-1"><a class="header-anchor" href="#web-installation" aria-hidden="true">#</a> Web installation</h2><p>To install the product you will need a server with a Linux operating system, we recommend using the centos distribution and you need to install the following software:</p><ul><li>Nginx</li><li>php 8.1^ and php extension cli,fpm,mysqlnd,pdo_mysql,zip,devel,gd,mbstring,curl,xml,pear,bcmath,json,pecl-redis5,exif,pcntl,sockets,gmp</li><li>composer</li><li>redis</li><li>Database mysql percona and database need make with collation utf8mb4_unicode_ci</li><li>node 18^ and npm</li><li>global installed vite package for install <code> npm install -g vite</code></li></ul><h3 id="recommendations" tabindex="-1"><a class="header-anchor" href="#recommendations" aria-hidden="true">#</a> Recommendations</h3><p>Create a new user in you server for example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adduser server <span class="token operator">&amp;&amp;</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> wheel server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-1-download-and-extract-web-installer" tabindex="-1"><a class="header-anchor" href="#step-1-download-and-extract-web-installer" aria-hidden="true">#</a> Step 1. Download and extract Web Installer</h3><p>Create a new directory and upload the archive with the installer into it. For example, in /home/server/merchant:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/server/merchant <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /home/server/merchant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/dvpay/web-installer/archive/refs/tags/install.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> install.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-2-grant-rights-to-the-directory" tabindex="-1"><a class="header-anchor" href="#step-2-grant-rights-to-the-directory" aria-hidden="true">#</a> Step 2. Grant rights to the directory</h3><p>Give the created user rights to the directory, where the installer is downloaded and unpacked:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> /home/server <span class="token operator">&amp;&amp;</span> <span class="token function">chown</span> server:server <span class="token parameter variable">-R</span> /home/server/merchant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-3-add-nginx-configuration" tabindex="-1"><a class="header-anchor" href="#step-3-add-nginx-configuration" aria-hidden="true">#</a> Step 3. Add nginx configuration</h3><p>In the <code>etc/nginx/conf.d</code> directory, create a configuration file with the extension <code>.conf</code>, give it a convenient name:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> mydomain.com.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Fill the configuration file with the following code, substituting your domain (line 4) and path to php.sock (lines 30, 45 и 51):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>

    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name mydomain.com<span class="token punctuation">;</span>

    add_header <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span> <span class="token string">&#39;*&#39;</span> always<span class="token punctuation">;</span>
    add_header <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token string">&#39;*&#39;</span> always<span class="token punctuation">;</span>

    access_log  /var/log/nginx/merchant.access.log<span class="token punctuation">;</span>
    error_log   /var/log/nginx/merchant.error.log<span class="token punctuation">;</span>

    root        /home/server/merchant<span class="token punctuation">;</span>
    index       index.php, index.html<span class="token punctuation">;</span>

    location /install <span class="token punctuation">{</span>
        root /home/server/merchant<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html?<span class="token variable">$args</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location / <span class="token punctuation">{</span>
       root /home/server/merchant/frontend<span class="token punctuation">;</span>
       try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html?<span class="token variable">$args</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ^~ /api <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span> /home/server/merchant/public<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @api<span class="token punctuation">;</span>

        location ~ .php <span class="token punctuation">{</span>
            fastcgi_pass unix:/var/run/php82.sock<span class="token punctuation">;</span>
            fastcgi_split_path_info ^<span class="token punctuation">(</span>.+.php<span class="token punctuation">)</span><span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$<span class="token punctuation">;</span>
            include fastcgi.conf<span class="token punctuation">;</span>
            fastcgi_param SCRIPT_FILENAME /home/server/merchant/public/index.php<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    location @api <span class="token punctuation">{</span>
        rewrite /api/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /api/index.php?/<span class="token variable">$1</span> last<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~ api.php$ <span class="token punctuation">{</span>
        include fastcgi.conf<span class="token punctuation">;</span>
        fastcgi_param PHP_VALUE <span class="token string">&quot;max_execution_time = 900&quot;</span><span class="token punctuation">;</span>
        fastcgi_param PHP_VALUE <span class="token string">&quot;max_input_time = 900&quot;</span><span class="token punctuation">;</span>
        fastcgi_pass unix:/var/run/php82.sock<span class="token punctuation">;</span>
        fastcgi_read_timeout <span class="token number">900</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~ .php$ <span class="token punctuation">{</span>
        include fastcgi.conf<span class="token punctuation">;</span>
        fastcgi_pass unix:/var/run/php82.sock<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~ /.<span class="token punctuation">(</span>ht<span class="token operator">|</span>svn<span class="token operator">|</span><span class="token function">git</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deny all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-4-running-the-installer" tabindex="-1"><a class="header-anchor" href="#step-4-running-the-installer" aria-hidden="true">#</a> Step 4. Running the installer</h3><p>Now you are ready to run the installer - it will check matches the installed packages and will ask for the necessary information. Open your browser and go to link mydomain.com/install.html</p><h4 id="_1-enter-domain" tabindex="-1"><a class="header-anchor" href="#_1-enter-domain" aria-hidden="true">#</a> 1.Enter domain</h4><p><img src="`+d+'" alt="InstallStep1"></p><h4 id="_2-connecting-the-database" tabindex="-1"><a class="header-anchor" href="#_2-connecting-the-database" aria-hidden="true">#</a> 2.Connecting the database</h4><p>Enter the credentials for connect to you database.</p><p><img src="'+u+'" alt="InstallStep1"></p><h4 id="_3-set-the-login-and-password-for-admin" tabindex="-1"><a class="header-anchor" href="#_3-set-the-login-and-password-for-admin" aria-hidden="true">#</a> 3.Set the login and password for admin</h4><p>Enter the email address that will be be used as a login, and also set password for the account.</p><p><img src="'+h+'" alt="InstallStep1"></p><h4 id="_4-complete-installation" tabindex="-1"><a class="header-anchor" href="#_4-complete-installation" aria-hidden="true">#</a> 4.Complete installation</h4><p>After checking access to the database, the installation will begin. Once the installation is complete, click the “go to website” button to go to your DV Pay personal account. Log in using the username and password that asked in the last step.</p><p><img src="'+v+`" alt="InstallStep1"></p><h3 id="step-5-setting-up-queues-and-cron" tabindex="-1"><a class="header-anchor" href="#step-5-setting-up-queues-and-cron" aria-hidden="true">#</a> Step 5. Setting up queues and cron</h3><p>Launch cron editor:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add a regular launch setting:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* * * * * <span class="token builtin class-name">cd</span> /path-to-your-project <span class="token operator">&amp;&amp;</span> /usr/bin/php artisan schedule:run <span class="token operator">&gt;&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Path</p><p>Change /path-to-your-project to actual path to you directory with application and actual path to you /usr/bin/php</p></div><h4 id="setting-up-systemd-configuration" tabindex="-1"><a class="header-anchor" href="#setting-up-systemd-configuration" aria-hidden="true">#</a> Setting up systemd configuration</h4><p>Go to directory /etc/systemd/system/ and create 2 configuration files:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/systemd/system
<span class="token function">touch</span> transfers.service queue@.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add configuration code to each file:</p><p>For the transfers.service file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Transfer to Processing
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">User</span><span class="token operator">=</span>server

<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/server
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/php /home/server/backend/artisan withdrawal:loop

<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">StandardOutput</span><span class="token operator">=</span>syslog
<span class="token assign-left variable">StandardError</span><span class="token operator">=</span>syslog
<span class="token assign-left variable">SyslogIdentifier</span><span class="token operator">=</span>transfers

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For the file queue@.service:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Queue Worker %I
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>server
<span class="token assign-left variable">Group</span><span class="token operator">=</span>server
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/php /home/server/backend/artisan queue:work <span class="token parameter variable">--queue</span><span class="token operator">=</span>default,notifications,monitor <span class="token parameter variable">--sleep</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--tries</span><span class="token operator">=</span><span class="token number">3</span> --max-time<span class="token operator">=</span><span class="token number">3600</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Run the systemd demon</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> transfers.service
systemctl <span class="token builtin class-name">enable</span> queue@.service

systemctl start transfers.service
systemctl start queue@.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function P(R,C){const l=i("RouterLink"),e=i("ExternalLinkIcon");return o(),p("div",null,[b,g,n("ul",null,[k,n("li",null,[s(l,{to:"/getting-started/INSTALLATION.html#web-installation"},{default:c(()=>[a("Web Install")]),_:1})])]),f,_,n("ul",null,[y,x,w,n("li",null,[S,a(" contact "),n("a",I,[a("DV Support"),s(e)]),a(" to get it.")])]),L,n("p",null,[a("If you encounter any questions or issues during the installation process, feel free to reach out for support. "),n("a",q,[a("DV Support"),s(e)])]),A,n("p",null,[a("If you are going to use your own payments processing - enter IP or URL here. If not - ask "),n("a",E,[a("DV Support"),s(e)]),a(" to use ours ablosutely free!")]),D])}const $=r(m,[["render",P],["__file","installation.html.vue"]]);export{$ as default};