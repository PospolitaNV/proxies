var hostWithoutProxy = [
  'localhost',
  'git',
  'confluence',
  'mvn',
  'jira',
  'dojenkins'
];

var slack = [
  '*.slack.com',
  '*.slack-msgs.com',
  '*.slack-files.com',
  '*.slack-imgs.com',
  '*.slack-edge.com',
  '*.slack-core.com',
  '*.slack-redir.net.'
];

function FindProxyForURL(url, host) {
  if (
    shExpMatch(host, '(*.moscow.alfaintra.net)') ||
    (isPlainHostName(host) && hostWithoutProxy.indexOf(host) === -1)
  ) {
    return 'PROXY 127.0.0.1:3128';
  } else {
    for (let i = 0; i < slack.length; i++) {
      if (shExpMatch(host, slack[i])) {
        return 'PROXY 178.62.220.232:3128';
      }
    }
  }
  return 'DIRECT';
}
