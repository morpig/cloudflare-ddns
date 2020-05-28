const superagent = require('superagent');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

function update() {
    console.log(`${new Date()}: Updating IP address to Cloudflare's API..`)
    superagent.get('http://ip-api.com/json').then((res) => {
        const ip = res.body.query;
        console.log(`${new Date()}: Current IP address is ${ip}`);
        superagent
            .put(`https://api.cloudflare.com/client/v4/zones/${config.zone_id}/dns_records/${config.dns_record_id}`)
            .set('X-Auth-Email', config.email)
            .set('X-Auth-Key', config.api_key)
            .send({
                type: 'A',
                name: config.dns_name,
                content: ip,
                ttl: config.ttl,
                proxied: config.proxied
            }).then((res) => {
                const { success, errors } = res.body;
                if (success) {
                    console.log(`${new Date()}: Successfully updated DNS record of ${config.dns_name} to ${ip}.`);
                } else {
                    console.error(`${new Date()}: ${errors}`);
                }
            });
    });
}

update()
setInterval(() => {
    update();
}, config.interval * 1000);