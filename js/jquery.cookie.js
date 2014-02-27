




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-cookie/jquery.cookie.js at master · carhartl/jquery-cookie</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="carhartl/jquery-cookie" name="twitter:title" /><meta content="jquery-cookie - A simple, lightweight jQuery plugin for reading, writing and deleting cookies" name="twitter:description" /><meta content="https://avatars.githubusercontent.com/u/21918" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars.githubusercontent.com/u/21918" property="og:image" /><meta content="carhartl/jquery-cookie" property="og:title" /><meta content="https://github.com/carhartl/jquery-cookie" property="og:url" /><meta content="jquery-cookie - A simple, lightweight jQuery plugin for reading, writing and deleting cookies" property="og:description" />

    <meta name="hostname" content="github-fe130-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B01A1C4D:6EA9:143C50:530E7D90" name="octolytics-dimension-request_id" /><meta content="458604" name="octolytics-actor-id" /><meta content="alexconlin" name="octolytics-actor-login" /><meta content="52bf7ba649eff73a134ba3f1bfa3ee573d16d1ceded4e8a649063fa15206d7b7" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="1bRBPz/GwTtruuUbLVYh7woMgzd74KoEbOLbFUQdzrM=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-99f0c420247f036251131234f2df1eaaf2ddb386.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-80896c157f0cb78d636e793895f101dea5f2214b.css" media="all" rel="stylesheet" type="text/css" />
    
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-01ab94ef47d6293597922a1fab60e274e1d8f37e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-503e94cbf26ee02e8f8908f6cfda39f6b1947500.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="24062edff74e74a6d1daa0f9c82f64a1">

        <link data-pjax-transient rel='permalink' href='/carhartl/jquery-cookie/blob/433a10696e71f1584662cae507c404f4bfbb9526/jquery.cookie.js'>

  <meta name="description" content="jquery-cookie - A simple, lightweight jQuery plugin for reading, writing and deleting cookies" />

  <meta content="21918" name="octolytics-dimension-user_id" /><meta content="carhartl" name="octolytics-dimension-user_login" /><meta content="268027" name="octolytics-dimension-repository_id" /><meta content="carhartl/jquery-cookie" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="268027" name="octolytics-dimension-repository_network_root_id" /><meta content="carhartl/jquery-cookie" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/carhartl/jquery-cookie/commits/master.atom" rel="alternate" title="Recent Commits to jquery-cookie:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob tipsy-tooltips">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="alexconlin"
      data-repo="carhartl/jquery-cookie"
      data-branch="master"
      data-sha="78a3a514d75704d6ca286e33244e50e4dbbd34fc"
  >

    <input type="hidden" name="nwo" value="carhartl/jquery-cookie" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/alexconlin" class="name">
        <img alt="alexconlin" class=" js-avatar" data-user="458604" height="20" src="https://avatars.githubusercontent.com/u/458604" width="20" /> alexconlin
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="carhartl/jquery-cookie">This repository</span>
    </li>
      <li>
        <a href="/carhartl/jquery-cookie/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="1bRBPz/GwTtruuUbLVYh7woMgzd74KoEbOLbFUQdzrM=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="268027" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/carhartl/jquery-cookie/watchers">
        351
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/carhartl/jquery-cookie/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/carhartl/jquery-cookie/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/carhartl/jquery-cookie/stargazers">
        4,911
      </a>
  </div>

  </li>


        <li>
          <a href="/carhartl/jquery-cookie/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/carhartl/jquery-cookie/network" class="social-count">2,465</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/carhartl" class="url fn" itemprop="url" rel="author"><span itemprop="title">carhartl</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/carhartl/jquery-cookie" class="js-current-repository js-repo-home-link">jquery-cookie</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/carhartl/jquery-cookie" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /carhartl/jquery-cookie">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/carhartl/jquery-cookie/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /carhartl/jquery-cookie/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>6</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/carhartl/jquery-cookie/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /carhartl/jquery-cookie/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/carhartl/jquery-cookie/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /carhartl/jquery-cookie/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/carhartl/jquery-cookie/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /carhartl/jquery-cookie/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/carhartl/jquery-cookie/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /carhartl/jquery-cookie/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/carhartl/jquery-cookie/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /carhartl/jquery-cookie/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/carhartl/jquery-cookie.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/carhartl/jquery-cookie.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:carhartl/jquery-cookie.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:carhartl/jquery-cookie.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/carhartl/jquery-cookie" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/carhartl/jquery-cookie" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/carhartl/jquery-cookie" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/carhartl/jquery-cookie/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ff7b3b5a2a6f774fb4021a4d36afc1a4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/carhartl/jquery-cookie/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/blob/master/jquery.cookie.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/blob/test_android/jquery.cookie.js"
                 data-name="test_android"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="test_android">test_android</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/tree/v1.4.0/jquery.cookie.js"
                 data-name="v1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.4.0">v1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/tree/v1.3.1/jquery.cookie.js"
                 data-name="v1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.1">v1.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/tree/v1.3.0/jquery.cookie.js"
                 data-name="v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0">v1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/tree/v1.2.0/jquery.cookie.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/tree/v1.1/jquery.cookie.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/carhartl/jquery-cookie/tree/v1.0/jquery.cookie.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/carhartl/jquery-cookie" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-cookie</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.cookie.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.cookie.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Klaus Hartl" class="main-avatar js-avatar" data-user="21918" height="24" src="https://0.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?d=https%3A%2F%2Fidenticons.github.com%2Fb54b25d3e55ecd6033db40a728a21ca1.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/carhartl" rel="author">carhartl</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-11-29T13:54:53-08:00" title="2013-11-29 13:54:53">November 29, 2013</time>
    <div class="commit-title">
        <a href="/carhartl/jquery-cookie/commit/ecb597b65e4c477baa2b30a2a5a67fdaee9870ea" class="message" data-pjax="true" title="Allow fractions of a day for expires option.

Closes #246.">Allow fractions of a day for expires option.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="carhartl" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=carhartl"><img alt="Klaus Hartl" class=" js-avatar" data-user="21918" height="20" src="https://0.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?d=https%3A%2F%2Fidenticons.github.com%2Fb54b25d3e55ecd6033db40a728a21ca1.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="FagnerMartinsBrack" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=FagnerMartinsBrack"><img alt="Fagner Brack" class=" js-avatar" data-user="835857" height="20" src="https://1.gravatar.com/avatar/750783d32a1edb8e23b56fb21f34a936?d=https%3A%2F%2Fidenticons.github.com%2Fad14644188de52e990126decfb51a0fb.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="kswedberg" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=kswedberg"><img alt="Karl Swedberg" class=" js-avatar" data-user="3485" height="20" src="https://2.gravatar.com/avatar/0f6923fc391653284355a60fb4974e86?d=https%3A%2F%2Fidenticons.github.com%2Fdfeb9598fbfb97cc6bbcc0aff2c785d6.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tomkins" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=tomkins"><img alt="Alex Tomkins" class=" js-avatar" data-user="177332" height="20" src="https://2.gravatar.com/avatar/0a5e77e53a4c3d19133e7a005d36ab95?d=https%3A%2F%2Fidenticons.github.com%2F4b6ddfccc2a3b006157e256aac859397.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="duncansmart" href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js?author=duncansmart"><img alt="Duncan Smart" class=" js-avatar" data-user="576343" height="20" src="https://2.gravatar.com/avatar/13ead10356c893aead42be91b5cdcc01?d=https%3A%2F%2Fidenticons.github.com%2F1f405025abad722475b5b70abc654b4e.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Klaus Hartl" class=" js-avatar" data-user="21918" height="24" src="https://0.gravatar.com/avatar/ae8c6ae27f6b9d5707bc5a32d0fb21a6?d=https%3A%2F%2Fidenticons.github.com%2Fb54b25d3e55ecd6033db40a728a21ca1.png&amp;r=x&amp;s=140" width="24" />
            <a href="/carhartl">carhartl</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Fagner Brack" class=" js-avatar" data-user="835857" height="24" src="https://1.gravatar.com/avatar/750783d32a1edb8e23b56fb21f34a936?d=https%3A%2F%2Fidenticons.github.com%2Fad14644188de52e990126decfb51a0fb.png&amp;r=x&amp;s=140" width="24" />
            <a href="/FagnerMartinsBrack">FagnerMartinsBrack</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Karl Swedberg" class=" js-avatar" data-user="3485" height="24" src="https://2.gravatar.com/avatar/0f6923fc391653284355a60fb4974e86?d=https%3A%2F%2Fidenticons.github.com%2Fdfeb9598fbfb97cc6bbcc0aff2c785d6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kswedberg">kswedberg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alex Tomkins" class=" js-avatar" data-user="177332" height="24" src="https://2.gravatar.com/avatar/0a5e77e53a4c3d19133e7a005d36ab95?d=https%3A%2F%2Fidenticons.github.com%2F4b6ddfccc2a3b006157e256aac859397.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tomkins">tomkins</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Duncan Smart" class=" js-avatar" data-user="576343" height="24" src="https://2.gravatar.com/avatar/13ead10356c893aead42be91b5cdcc01?d=https%3A%2F%2Fidenticons.github.com%2F1f405025abad722475b5b70abc654b4e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/duncansmart">duncansmart</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>115 lines (91 sloc)</span>
          <span class="meta-divider"></span>
        <span>3.066 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/carhartl/jquery-cookie?branch=master&amp;filepath=jquery.cookie.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/carhartl/jquery-cookie/edit/master/jquery.cookie.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/carhartl/jquery-cookie/raw/master/jquery.cookie.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/carhartl/jquery-cookie/blame/master/jquery.cookie.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/carhartl/jquery-cookie/commits/master/jquery.cookie.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped tooltipped-s"
             href="/carhartl/jquery-cookie/delete/master/jquery.cookie.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery Cookie Plugin v1.4.0</span></div><div class='line' id='LC3'><span class="cm"> * https://github.com/carhartl/jquery-cookie</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2013 Klaus Hartl</span></div><div class='line' id='LC6'><span class="cm"> * Released under the MIT license</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>		<span class="c1">// AMD. Register as anonymous module.</span></div><div class='line' id='LC11'>		<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">factory</span><span class="p">);</span></div><div class='line' id='LC12'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC13'>		<span class="c1">// Browser globals.</span></div><div class='line' id='LC14'>		<span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC15'>	<span class="p">}</span></div><div class='line' id='LC16'><span class="p">}(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>	<span class="kd">var</span> <span class="nx">pluses</span> <span class="o">=</span> <span class="sr">/\+/g</span><span class="p">;</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>	<span class="kd">function</span> <span class="nx">encode</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="k">return</span> <span class="nx">config</span><span class="p">.</span><span class="nx">raw</span> <span class="o">?</span> <span class="nx">s</span> <span class="o">:</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></div><div class='line' id='LC22'>	<span class="p">}</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="kd">function</span> <span class="nx">decode</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="k">return</span> <span class="nx">config</span><span class="p">.</span><span class="nx">raw</span> <span class="o">?</span> <span class="nx">s</span> <span class="o">:</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></div><div class='line' id='LC26'>	<span class="p">}</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="kd">function</span> <span class="nx">stringifyCookieValue</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="k">return</span> <span class="nx">encode</span><span class="p">(</span><span class="nx">config</span><span class="p">.</span><span class="nx">json</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">));</span></div><div class='line' id='LC30'>	<span class="p">}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>	<span class="kd">function</span> <span class="nx">parseCookieValue</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>		<span class="k">if</span> <span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;&quot;&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>			<span class="c1">// This is a quoted cookie as according to RFC2068, unescape...</span></div><div class='line' id='LC35'>			<span class="nx">s</span> <span class="o">=</span> <span class="nx">s</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&quot;/g</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\\\/g</span><span class="p">,</span> <span class="s1">&#39;\\&#39;</span><span class="p">);</span></div><div class='line' id='LC36'>		<span class="p">}</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC39'>			<span class="c1">// Replace server-side written pluses with spaces.</span></div><div class='line' id='LC40'>			<span class="c1">// If we can&#39;t decode the cookie, ignore it, it&#39;s unusable.</span></div><div class='line' id='LC41'>			<span class="c1">// If we can&#39;t parse the cookie, ignore it, it&#39;s unusable.</span></div><div class='line' id='LC42'>			<span class="nx">s</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">pluses</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">));</span></div><div class='line' id='LC43'>			<span class="k">return</span> <span class="nx">config</span><span class="p">.</span><span class="nx">json</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="o">:</span> <span class="nx">s</span><span class="p">;</span></div><div class='line' id='LC44'>		<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC45'>	<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>	<span class="kd">function</span> <span class="nx">read</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">converter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>		<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">raw</span> <span class="o">?</span> <span class="nx">s</span> <span class="o">:</span> <span class="nx">parseCookieValue</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></div><div class='line' id='LC49'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">converter</span><span class="p">)</span> <span class="o">?</span> <span class="nx">converter</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC50'>	<span class="p">}</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>	<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>		<span class="c1">// Write</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>		<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC57'>			<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">config</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>				<span class="kd">var</span> <span class="nx">days</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span><span class="p">,</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC61'>				<span class="nx">t</span><span class="p">.</span><span class="nx">setTime</span><span class="p">(</span><span class="o">+</span><span class="nx">t</span> <span class="o">+</span> <span class="nx">days</span> <span class="o">*</span> <span class="mi">864</span><span class="nx">e</span><span class="o">+</span><span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC62'>			<span class="p">}</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>			<span class="k">return</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC65'>				<span class="nx">encode</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span> <span class="s1">&#39;=&#39;</span><span class="p">,</span> <span class="nx">stringifyCookieValue</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span></div><div class='line' id='LC66'>				<span class="nx">options</span><span class="p">.</span><span class="nx">expires</span> <span class="o">?</span> <span class="s1">&#39;; expires=&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expires</span><span class="p">.</span><span class="nx">toUTCString</span><span class="p">()</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="c1">// use expires attribute, max-age is not supported by IE</span></div><div class='line' id='LC67'>				<span class="nx">options</span><span class="p">.</span><span class="nx">path</span>    <span class="o">?</span> <span class="s1">&#39;; path=&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">path</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC68'>				<span class="nx">options</span><span class="p">.</span><span class="nx">domain</span>  <span class="o">?</span> <span class="s1">&#39;; domain=&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">domain</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC69'>				<span class="nx">options</span><span class="p">.</span><span class="nx">secure</span>  <span class="o">?</span> <span class="s1">&#39;; secure&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span></div><div class='line' id='LC70'>			<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC71'>		<span class="p">}</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>		<span class="c1">// Read</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">key</span> <span class="o">?</span> <span class="kc">undefined</span> <span class="o">:</span> <span class="p">{};</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>		<span class="c1">// To prevent the for loop in the first place assign an empty array</span></div><div class='line' id='LC78'>		<span class="c1">// in case there are no cookies at all. Also prevents odd result when</span></div><div class='line' id='LC79'>		<span class="c1">// calling $.cookie().</span></div><div class='line' id='LC80'>		<span class="kd">var</span> <span class="nx">cookies</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span> <span class="o">?</span> <span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;; &#39;</span><span class="p">)</span> <span class="o">:</span> <span class="p">[];</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">cookies</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>			<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">cookies</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">);</span></div><div class='line' id='LC84'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">decode</span><span class="p">(</span><span class="nx">parts</span><span class="p">.</span><span class="nx">shift</span><span class="p">());</span></div><div class='line' id='LC85'>			<span class="kd">var</span> <span class="nx">cookie</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">);</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>			<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">===</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>				<span class="c1">// If second argument (value) is a function it&#39;s a converter...</span></div><div class='line' id='LC89'>				<span class="nx">result</span> <span class="o">=</span> <span class="nx">read</span><span class="p">(</span><span class="nx">cookie</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC90'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>			<span class="c1">// Prevent storing a cookie that we couldn&#39;t decode.</span></div><div class='line' id='LC94'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">key</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">cookie</span> <span class="o">=</span> <span class="nx">read</span><span class="p">(</span><span class="nx">cookie</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="nx">result</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">cookie</span><span class="p">;</span></div><div class='line' id='LC96'>			<span class="p">}</span></div><div class='line' id='LC97'>		<span class="p">}</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC100'>	<span class="p">};</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>	<span class="nx">config</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>	<span class="nx">$</span><span class="p">.</span><span class="nx">removeCookie</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC105'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC107'>		<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		<span class="c1">// Must not alter options, thus extending a fresh object...</span></div><div class='line' id='LC110'>		<span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span> <span class="nx">expires</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">}));</span></div><div class='line' id='LC111'>		<span class="k">return</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC112'>	<span class="p">};</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'><span class="p">}));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05525s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

