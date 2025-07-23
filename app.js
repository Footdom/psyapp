if (!window.Telegram) {
  window.Telegram = { WebApp: { openLink: href => window.location.href = href } };
}
