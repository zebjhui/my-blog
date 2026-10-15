/* global hexo */
// 将 A-Ads 广告代码注入到每个页面的 <head> 标签开始处
hexo.extend.injector.register('head_begin', `
  <!-- BEGIN AADS AD UNIT 2458596 -->
  <div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 99998;">
    <iframe data-aa='2458596' src='//acceptable.a-ads.com/2458596/?size=Adaptive'
            style='border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto'></iframe>
  </div>
  <!-- END AADS AD UNIT 2458596 -->
`, 'default');
