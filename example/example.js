const remark = require('remark');
const mdx = require('remark-mdx');
const vfile = require('to-vfile');

const plugin = require('../index');

(async () => {
    const file = await vfile.read('./example/example.mdx');
    const result = await remark()
        .use(mdx)
        .use(plugin, {
            meta: {
                lastEdited: `${new Date().toISOString()}`
            }
        })
        .process(file);

    // eslint-disable-next-line no-console
    console.log(result.toString());
})();
