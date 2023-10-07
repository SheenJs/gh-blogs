export function loadScript(url: string) {
  window.onload = () => {
    const script = document?.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    document?.head?.appendChild(script);
  };
}
