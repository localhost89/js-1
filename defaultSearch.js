/* Barcode Feeds */
var searchFormConfig={url:"https://"+window.location.hostname+"",numPost:9999,summaryPost:true,summaryLength:100,resultTitle:"Hasil penelusuran untuk kata kunci",noResult:"Tidak di temukan hasil dengan kata kunci yang anda cari",resultThumbnail:true,thumbSize:40,fallbackThumb:"https://idplus.googlecode.com/svn/trunk/images/no-images.gif"};function getId(id){return document.getElementById(id)}var config=searchFormConfig,input=getId('feed-q-input'),resultContainer=getId('idplus_search-result-container'),resultLoader=getId('idplus_search-result-loader'),skeleton='';function showResult(json){var entry=json.feed.entry?json.feed.entry:"",url,summary,img;skeleton='<h4>'+config.resultTitle+' &quot;'+input.value+'&quot;</h4>';skeleton+='<a class="idplus_closed-box" href="#close" title="Close"></a><ol>';if(entry===""){skeleton+='<li>'+config.noResult+'</li>'}for(var i=0;i<config.numPost;i++){if(i==entry.length)break;var mark=new RegExp(input.value,"ig"),entries=entry[i],title=entries.title.$t.replace(mark,"<mark>"+input.value+"</mark>");for(var j=0;j<entries.link.length;j++){if(entries.link[j].rel=='alternate'){url=entries.link[j].href;break}}summary=("summary"in entries&&config.summaryPost===true)?entries.summary.$t:"";if(config.resultThumbnail===true){img=("media$thumbnail"in entries)?entries.media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+config.thumbSize+"-c"):config.fallbackThumb}summary=summary.replace(/<(.*?)>/g,"");if(summary.length>config.summaryLength){summary=summary.substring(0,config.summaryLength)+'...'}summary=summary.replace(mark,"<mark>"+input.value+"</mark>");skeleton+='<li><img style="width:'+config.thumbSize+'px;height:'+config.thumbSize+'px;" src="'+img+'" alt="" /><a href="'+url+'">'+title+'</a>'+summary+'</li>'}skeleton+='</ol>';resultContainer.innerHTML=skeleton;resultLoader.style.display="none";resultContainer.style.display="block"}(function(){var s=document.createElement('script');s.type="text/javascript";s.id="search-feed-script";document.getElementsByTagName('head')[0].appendChild(s)})();function updateScript(){resultContainer.style.display="none";resultLoader.style.display="block";var script=getId('search-feed-script'),newScript=document.createElement('script');newScript.id="search-feed-script";newScript.type="text/javascript";newScript.src=config.url+"/feeds/posts/summary?alt=json-in-script&q="+input.value+"&max-results="+config.numPost+"&callback=showResult";script.parentNode.removeChild(script);document.getElementsByTagName('head')[0].appendChild(newScript);return false}function resetField(){if(input.value===""){resultContainer.style.display="none";resultLoader.style.display="none"}}
/* Barcode Search */
(function(){var a={a:$("html,body"),b:$(".idplus_form-search-button"),c:$(".blog-post,.post-outer,.snippet-list,.custom-status-message,#blog-pager"),d:$("#idplus_search-posts"),e:$("#out-shadow"),f:$("#main-nav"),g:$(".idplus_closed-form")};a.b.on("click",function(){a.a.stop().delay(400).animate({scrollTop:a.f.offset().top- -20},600);a.c.hide();a.d.show()});a.g.removeAttr('href').on("click",function(){a.d.hide();a.c.show();a.a.stop().animate({scrollTop:0},600)})})(jQuery,window,document);