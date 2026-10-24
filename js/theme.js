/* Mavzuni sahifa chizilishidan oldin qo‘yadi (oq "miltillash" bo‘lmasligi uchun).
   <head> ichida defer'siz ulanadi — shuning uchun alohida va juda kichik fayl. */
(function () {
  var t = null;
  try { t = localStorage.getItem('kx-theme'); } catch (e) {}
  if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
  document.documentElement.classList.add('js');
})();
