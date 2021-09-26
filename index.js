const axios = require('axios');
const fs = require('fs');
const Markdown = require('@dimerapp/markdown');
// Bit of a mess atm but works :)

async function main() {
	const doc = await axios('https://docs.microsoft.com/en-us/gaming/xbox-live/api-ref/xbox-live-rest/toc.json').then(res => res.data);

	const reference = doc.items[0].children[0].children.slice(1);

	let string = '';

	const propTypes = {};

	for (let i = 0; i < reference.length; i++) {
		const parent = reference[i];

		const parentTitle = `${parent.toc_title.replace(/ URIs/g, '').replace(/ /g, '-').toLowerCase()}`;
		const parentTitleClean = `${parent.toc_title.replace(/ URIs/g, '')}`;

		console.log(parentTitleClean);
		await initFolder(parentTitle, parentTitleClean);

		string += `* [${parentTitleClean}](work-in-progress/${parentTitle}/README.md)\n`;

		for (let j = 1; j < parent.children.length; j++) {
			const child = parent.children[j];

			const ignore = ['URI Overview', 'In this section'];
			const removeUri = child.children.filter(res => !ignore.includes(res.toc_title));

			for (let k = 0; k < removeUri.length; k++) {
				const item = removeUri[k];

				const md = await axios(`https://raw.githubusercontent.com/MicrosoftDocs/xbox-live-docs/docs/xbox-live-docs-pr/api-ref/xbox-live-rest/${item.href}.md`).then(res => res.data).catch(err => console.log(err.message));

				if (!md) continue;

				const regEx = /(?<=title: ).*$/gm;

				const title = md.match(regEx)[0];

				const backupMethod = title.split(' ')[0];

				const mdd = new Markdown(md, { generateToc: true });
				const json = await mdd.toJSON();
				// or toJSON

				await fs.promises.writeFile('./md.json', JSON.stringify(json));

				const page = json.contents.children;

				const path = title.replace(/^(.*?) \(|\)$/g, '').split(' ');

				const methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];

				const reqInfo = {
					description: page[5]?.children[0]?.value,
					path: (methods.includes(path[0])) ? path[1] : path[0],
				};

				let curHeader = '';

				for (let l = 0; l < page.length; l++) {
					const pageElement = page[l];

					const headerTypes = ['h2', 'h3', 'h4', 'h5'];
					if (headerTypes.includes(pageElement.tag)) curHeader = pageElement.props.id;

					propTypes[curHeader] = true;

					if (pageElement.props.className?.includes('dimer-highlight')) {
						reqInfo[curHeader] = pageElement.children[0].children[0].children[0].value;
					}

					if (pageElement.children[0]?.props?.href?.includes('.md') && pageElement.children[0]?.props?.href?.includes('uri-')) {
						reqInfo['method'] = (!methods.includes(backupMethod)) ? pageElement.children[0].children[0].value.split(' ')[0] : backupMethod;
					}

					const domainDir = await pageElement.children.find(res => res.children?.some(e => e.value?.includes('xboxlive.com')));

					if (domainDir) reqInfo['domain'] = domainDir.children[0]?.value;

					if (pageElement?.tag !== 'table') continue;

					if (pageElement.children[0].type === 'text') continue;

					const headers = pageElement.children[0].children[0].children;
					const rows = pageElement.children[1].children;

					const arr = [];
					for (let m = 0; m < rows.length; m++) {
						const row = rows[m], tempObj = {};
						for (let n = 0; n < row.children.length; n++) {
							const rowInfo = row.children[n];

							if (rowInfo.children.length < 1 || headers[n].children.length < 1) continue;

							tempObj[headers[n].children[0].value] = rowInfo.children[0].value;
						}
						arr.push(tempObj);
					}
					reqInfo[curHeader] = arr;
				}

				console.log(`https://raw.githubusercontent.com/MicrosoftDocs/xbox-live-docs/docs/xbox-live-docs-pr/api-ref/xbox-live-rest/${item.href}.md`);
				console.log(reqInfo);
				// console.log(reqInfo['path']);
				// console.log(reqInfo['method']);

				const formattedTitle = title.replace(/[^a-zA-Z]/g, ' ')
					.toLowerCase()
					.split(' ')
					.filter(e => e)
					.join('-');

				const uriParams = reqInfo['uri-parameters']?.map(res => {
					return {
						name: res.Parameter,
						description: res.Description,
						required: true,
						type: 'string',
					};
				});

				const queryParams = reqInfo['query-string-parameters']?.map(res => {
					return {
						name: res.Property || res.Parameter,
						description: res.Remarks || res.Description,
						required: false,
						type: 'string',
					};
				});

				const headersReq = reqInfo['required-request-headers'], headersOpt = reqInfo['optional-request-headers'];

				const required = headersReq?.map(res => {
					return {
						name: res.Header,
						description: res.Description,
						required: true,
						type: 'string',
					};
				});

				const optional = headersOpt?.map(res => {
					return {
						name: res.Header,
						description: res.Description,
						required: true,
						type: 'string',
					};
				});

				let response = { code: 200 };
				if (reqInfo['sample-response']) response = { code: 200, response: reqInfo['sample-response'] };

				const headersFormated = [];

				if (required?.length > 1) headersFormated.push(...required);
				if (optional?.length > 1) headersFormated.push(...optional);

				let request = new ApiRequest(reqInfo)
					.setTitle(`${reqInfo.method} ${reqInfo.path}`)
					.setDescription(reqInfo.description)
					.setSummary(reqInfo.description)
					.setRequest(uriParams, queryParams, headersFormated)
					.setResponse([response]);

				if (reqInfo['sample-request'] || reqInfo['sample-request-body']) {
					request += `
                    \`\`\`text
                    # Sample Request

                    ${reqInfo['sample-request'] || reqInfo['sample-request-body']}
                    \`\`\`
                    `;
				}

				await fs.promises.writeFile(`./work-in-progress/${parentTitle}/${formattedTitle}.md`, request);

				string += `  * [${escapeRegExp(title)}](work-in-progress/${parentTitle}/${formattedTitle}.md)\n`;
			}
		}
	}
	console.log(propTypes);
	await fs.promises.appendFile('./SUMMARY.md', string);
}

function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

async function initFolder(path, name) {
	await fs.promises.mkdir(`./work-in-progress/${path}`, { recursive: true });
	await fs.promises.writeFile(`./work-in-progress/${path}/README.md`, `# ${name}`);
}

class ApiRequest {
	constructor({ method = 'OPTIONS', domain, path }) {
		this.body = `{% api-method method="${method.toLowerCase()}" host="https://${domain}" path="${path}" %}`;
	}

	setTitle(title) {
		this.body = `# ${title}\n\n` + this.body;
		return this;
	}

	setSummary(summary) {
		this.body += `
        {% api-method-summary %}
        ${summary}
        {% endapi-method-summary %}`;
		return this;
	}

	setDescription(desc) {
		this.body += `
        {% api-method-description %}
        ${desc}
        {% endapi-method-description %}`;
		return this;
	}

	setRequest(pathParams, queryParams, headers) {
		this.body += `
        {% api-method-spec %}
        {% api-method-request %}`;

		if (pathParams) {
			this.body += `
        {% api-method-path-parameters %}
        ${this._createParameters(pathParams)}
        {% endapi-method-path-parameters %}`;
		}
		if (queryParams) {
			this.body += `
        {% api-method-query-parameters %}
        ${this._createParameters(queryParams)}
        {% endapi-method-query-parameters %}`;
		}
		if (headers.length > 1) {
			this.body += `
        {% api-method-headers %}
        ${this._createParameters(headers)}
        {% endapi-method-headers %}`;
		}

		this.body += '\n{% endapi-method-request %}';
		return this;
	}

	setResponse(responses) {
		this.body += `
        {% api-method-response %}
        ${this._createResponses(responses)}
        {% endapi-method-response %}
        `;
		return this.body += `
        {% endapi-method-spec %}
        {% endapi-method %}`;
	}

	_createResponses(responses) {
		const temp = responses.map(res => {
			return `
        {% api-method-response-example httpCode=${res.code} %}
        {% api-method-response-example-description %}
        ${res.description || ''}
        {% endapi-method-response-example-description %}
        
        \`\`\`text
        ${res.response || ''}
        \`\`\`
        {% endapi-method-response-example %}`;
		});
		return temp.join('\n');
	}

	_createParameters(params) {
		const temp = params.map(res => {
			return `
            {% api-method-parameter name="${res.name}" type="${res.type}" required=${res.required} %}
            ${res.description}
            {% endapi-method-parameter %}`;
		});
		return temp.join('\n');
	}
}

main();
