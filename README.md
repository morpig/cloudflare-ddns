## cloudflare-ddns
fuck dyndns.. fuck ddns providers.. A Nodejs-powered client that automatically updates your DNS A record based on your current IP address.

### Installation
Installation is straightforward. Clone and install!

```bash
git clone https://github.com/morpig/cloudflare-ddns.git
cd cloudflare-ddns
npm install
```

It only install one dependency, which is superagent.

### Configuration 
**You must configure `cloudflare-ddns` before you can use it.**

```json
{
    "interval": 15, //counted as minutes
    "email": "john@doe.com", //registered email @ cloudflare
    "api_key": "626953b55d2b2cae7eb55asdasd39aasdasd", // API key obtained from https://www.cloudflare.com/a/account/my-account 
    "zone_id": "4539ecd6a8261ff1247edbd48asdasd", // Zone ID can be obtained from Cloudflare's dashboard
    "dns_record_id": "498810cce2a1a4eb2a0b24ff084976cc", // DNS record id obtained manually from Dashboard, check network requests or query GET to /dns_records
    "dns_name": "biznet-1.macan.live", //your intended DNS record name
    "ttl": 1, //TTL. TTL = 1 automatic.
    "proxied": false //proxied via CF's network?
}
```

After fulfilling all the requirements, please change .config.json to config.json.
