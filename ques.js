// Leetcode extension installed

// MacOS is currently supported
const fs = require('fs');
const os = require('os');
const path = require('path');

const rootPath = os.homedir();
const lcPath = path.resolve(rootPath, '.lc');
const buildPath = path.resolve(__dirname, 'build');

const cacheQuesPath = path.resolve(lcPath, fs.readdirSync(lcPath)[0], 'cache');
const quesJsonList = fs.readdirSync(cacheQuesPath);

const PrefixZero = (num, n = 4) => {
  return (Array(n).join(0) + num).slice(-n);
};

const readJson = (fileName) => {
  try {
    fs.mkdirSync(buildPath, { recursive: true });
  } catch (error) {
    console.log(error);
  }

  const _path = path.resolve(cacheQuesPath, fileName);
  const jsonData = fs.readFileSync(_path, {
    encoding: 'utf-8',
  });

  return JSON.parse(jsonData);
};

const whiteHtml = (fileName) => {
  const data = readJson(fileName);
  let contentData = '';

  contentData += `<a href="${data.link}">${PrefixZero(data.fid)}-${
    data.templateMeta.name
  } (${data.name})</a>\n\n`;

  contentData += `<strong>难度：</strong><code>${data.level}</code>\n\n`;

  contentData += `<strong>标签：</strong>`;
  data.tags.forEach((item, index) => {
    if (index !== data.tags.length - 1) {
      contentData += `<code>${item}</code> `;
    } else {
      contentData += `<code>${item}</code>\n\n`;
    }
  });

  contentData += data.desc;

  contentData += `\n\n<strong>公司：</strong>`;
  data.companies &&
    data.companies.forEach((item, index) => {
      if (index !== data.companies.length - 1) {
        contentData += `<code>${item}</code> `;
      } else {
        contentData += `<code>${item}</code>`;
      }
    });

  const buildName = fileName.split('.');
  buildName[0] = PrefixZero(buildName[0]);
  buildName.pop();
  buildName.push('html');

  const _path = buildName.join('.');

  try {
    fs.writeFileSync(path.resolve(buildPath, _path), contentData, {
      encoding: 'utf-8',
    });
  } catch (error) {
    console.log(error);
  }
};

quesJsonList.forEach((item, index) => {
  if (index < quesJsonList.length - 2) {
    whiteHtml(item);
  }
});
