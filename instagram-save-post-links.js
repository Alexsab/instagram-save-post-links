javascript:

(()=>{

    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    function css(element, style) {
        for (const property in style)
            element.style[property] = style[property];
    }

    let posts = [],
        btn = document.createElement("a");

    btn.style.cssText += "position: fixed; background: red; top: 0; left: 0; padding: 10px; color: white;"
    btn.href = "javascript:void(0);"
    document.body.appendChild(btn);
    btn.addEventListener("click", ()=>{
        copyToClipboard(posts.join("\n"))
    })

    setInterval(() => {
        document.querySelectorAll('[href^="/p/"]').forEach((p) => {
            if (!posts.includes(p.href)) {
                posts.push(p.href)
                btn.innerText = "Скопировать ссылки постов ("+posts.length+")";
            }
        })
    }, 100)

})()