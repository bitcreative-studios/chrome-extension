chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, ({ url }) => {
    // test that we are on the proper site
    ;/^https:\/\/www\.google/.test(url) &&
      chrome.tabs.executeScript(null, { file: 'foreground.js' }, () =>
        console.log('I injected')
      )
  })
})
