const axios = require('axios')
const fs = require('fs')

// Bit of a mess atm but works :)

async function main() {
    const doc = await axios('https://docs.microsoft.com/en-us/gaming/xbox-live/api-ref/xbox-live-rest/toc.json').then(res => res.data)

    const reference = doc.items[0].children[0].children.slice(1)

    for (let i = 1; i < reference.length; i++) {
        const parent = reference[i];

        const parentTitle = `${parent.toc_title.replace(/ URIs/g, '').replace(/ /g, '-').toLowerCase()}`

        await initFolder(parentTitle, parent.toc_title.replace(/ URIs/g, ''))

        for (let j = 1; j < parent.children.length; j++) {
            const child = parent.children[j];

            const childTitle = child.toc_title.replace(/\//g, '_').replace(/\?|\|/g, '~');

            await initFolder(`${parentTitle}/${childTitle}`, child.toc_title.replace(/{/g, ':').replace(/}/g, ''))

            for (let k = 1; k < child.children.filter(res => !res.toc_title.includes('URI')).length; k++) {
                const item = child.children[k];

                const args = item?.toc_title.split(' ')

                const method = args[0]
                const host = `${parentTitle.toLowerCase()}.xboxlive.com`
                const urlPath = args[1].slice(1, -1).replace(/{/g, ':').replace(/}/g, '')

                const body = formatRequestPage(method, host, urlPath, 'Wip', 'Wip')

                const fileName = `${method}-${args[1].slice(1, -1).replace(/\?|\|/g, '~')}`
                const formatedfileName = fileName.toLowerCase().replace(/\//g, '-')

                await fs.promises.writeFile(`./test/${parentTitle}/${childTitle}/${formatedfileName}.md`, body)

            }
        }
    }
}

async function initFolder(path, name) {
    await fs.promises.mkdir(`./test/${path}`, { recursive: true })
    await fs.promises.writeFile(`./test/${path}/README.md`, `# ${name}`)
}

function formatRequestPage(method, host, path, summary, description) {
    const body = `# ${method} ${path}\n\n{% api-method method="${method.toLowerCase()}" host="${host}" path="${path}" %}\n{% api-method-summary %}\n${summary}\n{% endapi-method-summary %}\n\n{% api-method-description %}\n${description}\n{% endapi-method-description %}\n\n{% api-method-spec %}\n{% api-method-request %}\n\n{% api-method-response %}\n{% api-method-response-example httpCode=200 %}\n{% api-method-response-example-description %}\n\n{% endapi-method-response-example-description %}\n\`\`\`\n\n\`\`\`\n{% endapi-method-response-example %}\n{% endapi-method-response %}\n{% endapi-method-spec %}\n{% endapi-method %}`

    return body;
}

main()
