
import { injectGlobal } from 'styled-components';

injectGlobal`

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1532096978815'); /* IE9*/
    src: url('./iconfont.eot?t=1532096978815#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1532096978815') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1532096978815#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-icon01:before { content: "\e603"; }

  .icon-sousuo:before { content: "\e641"; }

  .icon-Aa:before { content: "\e65a"; }

`;