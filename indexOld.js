const axios = require('axios')
const fs = require('fs')

// Bit of a mess atm but works :)

async function main() {
    const doc = await axios('https://docs.microsoft.com/en-us/gaming/xbox-live/api-ref/xbox-live-rest/toc.json').then(res => res.data)

    const reference = doc.items[0].children[0].children.slice(1)

    let string = ''

    for (let i = 0; i < reference.length; i++) {
        const parent = reference[i];

        const parentTitle = `${parent.toc_title.replace(/ URIs/g, '').replace(/ /g, '-').toLowerCase()}`
        const parentTitleClean = `${parent.toc_title.replace(/ URIs/g, '')}`

        console.log(parentTitleClean)
        await initFolder(parentTitle, parentTitleClean)

        string += `* [${parentTitleClean}](work-in-progress/${parentTitle}/README.md)\n`

        for (let j = 1; j < parent.children.length; j++) {
            const child = parent.children[j];

            const childTitle = child.toc_title.slice(1).replace(/\//g, '-').replace(/\?|\|/g, '~').replace(/\{statname\)/g, '{statname}').replace(/\(\{xuid\}\)/g, '{xuid}');
            const childTitleClean = child.toc_title.slice(1).replace(/{/g, ':').replace(/}/g, '').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

            await initFolder(`${parentTitle}/${childTitle}`, childTitleClean)

            string += `  * [${childTitleClean}](work-in-progress/${parentTitle}/${childTitle}/README.md)\n`

            const removeUri = child.children.filter(res => !res.toc_title.includes('URI'))

            for (let k = 1; k < removeUri.length; k++) {
                const item = removeUri[k];

                const args = item.toc_title.split(' ')

                const method = args[0]
                const host = `${parentTitle.toLowerCase()}.xboxlive.com`
                const urlPath = args[1].slice(1, -1).replace(/{/g, ':').replace(/}/g, '')

                const body = formatRequestPage(method, host, urlPath, 'Wip', 'Wip')

                const fileName = `${method}-${childTitle.split('-')[0]}`
                const formatedfileName = fileName.toLowerCase().replace(/\//g, '-')

                await fs.promises.writeFile(`./work-in-progress/${parentTitle}/${childTitle}/${formatedfileName}-${k}.md`, body)

                string += `    * [${method} ${childTitle.split('-')[0]}](work-in-progress/${parentTitle}/${childTitle}/${formatedfileName}-${k}.md)\n`

            }
        }
    }
    await fs.promises.appendFile('./SUMMARY.md', string)
}

async function initFolder(path, name) {
    await fs.promises.mkdir(`./work-in-progress/${path}`, { recursive: true })
    await fs.promises.writeFile(`./work-in-progress/${path}/README.md`, `# ${name}`)
}

function formatRequestPage(method, host, path, summary, description) {
    const body = `# ${method} ${path}\n\n{% api-method method="${method.toLowerCase()}" host="https://${host}" path="${path}" %}\n{% api-method-summary %}\n${summary}\n{% endapi-method-summary %}\n\n{% api-method-description %}\n${description}\n{% endapi-method-description %}\n\n{% api-method-spec %}\n{% api-method-request %}\n\n{% api-method-response %}\n{% api-method-response-example httpCode=200 %}\n{% api-method-response-example-description %}\n\n{% endapi-method-response-example-description %}\n\`\`\`\n\n\`\`\`\n{% endapi-method-response-example %}\n{% endapi-method-response %}\n{% endapi-method-spec %}\n{% endapi-method %}`

    return body;
}

main()
