### Deploy on vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Toasty360/vidsrc_wasm)

### Usage

```javascript
try {
  const { vrf } = await (
    await fetch(`https://[Your-instance].vercel.app/vrf/${id}`)
  ).json();

  const params = new URLSearchParams({
    id,
    type: isMovie ? "movie" : "tv",
    vrf,
    isMobile: "false",
    ...(!isMovie && { season, episode }),
  });

  const { data } = await (
    await fetch(`${this.baseUrl}api/${id}/servers?${params}`, {
      headers: {
        Referer: "https://vidsrc.cc",
      },
    })
  ).json();
  const servers = Object.fromEntries(
    data.map(({ name, hash }) => [name.toLowerCase(), hash])
  );
  console.log(servers);
} catch (error) {}
```
