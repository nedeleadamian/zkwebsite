export function resizeScale() {
  const docEle = document.documentElement;
  const screenRatioByDesign = 16 / 9;
  function setHtmlFontSize() {
    const screenRatio = docEle.clientWidth / docEle.clientHeight;
    let fontSize =
      ((screenRatio > screenRatioByDesign ? screenRatioByDesign / screenRatio : 1) *
        docEle.clientWidth) /
      10;
    // 增加192与16的对应关系
    fontSize = (fontSize / 192) * 16;
    docEle.style.fontSize = `${fontSize.toFixed(3)}px`;
  }
 
  setHtmlFontSize();
 
  window.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        setHtmlFontSize();
      }
    },
    false
  );
  window.addEventListener('resize', setHtmlFontSize, { passive: true });
}