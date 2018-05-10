const cssVars = (function cssVarsModule() {
  const publicApi = {
    init
  };

  return publicApi;

  function init() {
    document
      .querySelector('.controls')
      .addEventListener('change', onValueChangeHandler);
  }

  function onValueChangeHandler({ target: { value, name, dataset } }) {
    const units = dataset.sizing || '';
    setCssVariable(name, `${value}${units}`);
  }

  function setCssVariable(name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
  }
})();

cssVars.init();
