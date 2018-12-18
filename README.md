## gitbook-plugin-onlineresources
GitBook plugin to append a resources markdown, shown fully on the website and as a link in ebooks

Display a link to your GitHub repo in your gitbook.

### Usage

1. Write an article (i.e. called `article.md`) and list it in the SUMMARY.md
2. Write a resources file for the article
3. Save the resources file with the following name: `{original}.resources.md` (i.e. `article.resources.md`)
4. Include the resources file in the article using `{% include "./article.resources.md" %}`
5. Put this in your book.json:

```js
{
    "plugins": [ "onlineresources@git+https://github.com/abeggchr/gitbook-plugin-onlineresources" ],
    "pluginsConfig": {
        "onlineresources": {
            "url": "https://pages.github.com/your/repo",
            "text": "Online Resources: "
        }
    }
}
```

### Result

When generating a website, the resources file is included.
When generating an eBook, a link to the resources file is shown as QR code.

EBook:
![EBook](./assets/ebook.jpg" "EBook")

Web:
![Web](./assets/web.jpg" "Web")
