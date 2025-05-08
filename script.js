function shareTo(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  let shareUrl = '';

  switch (platform) {
    case 'whatsapp':
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    default:
      return;
  }

  window.open(shareUrl, '_blank');
}