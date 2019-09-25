$(() => {

    // C#
    var highlight = $('.language-csharp pre.highlight');

    highlight.find('.n + .n').prev()
        .removeClass("n")
        .addClass("nc");

    highlight.find('.k:contains(new) + .nf')
        .removeClass("nf")
        .addClass("nc");

    highlight.find('.k:contains(return)')
        .removeClass("k")
        .addClass("kco");
        
    highlight.find('.s').each((_, value) => {
        var textValue = value.textContent;
        const matches = textValue.match(/\{[0-9]+\}/g) || [];

        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            
            textValue = textValue.replace(match, "</span><span class=\"si\">" + match + "</span><span class=\"s<\">")
        }

        if (matches.length > 0) {
            $(value).replaceWith("<span class=\"s\">" + textValue + "</span>");
        }
    });

    highlight.find('.n + .n').prev()
        .removeClass("n")
        .addClass("nc");

    highlight.find('.n + .p + .nf').prev().prev().each((_, value) => {
        var x = value.textContent[0];

        if (x[0] == x[0].toUpperCase()) {
            $(value)
                .removeClass("n")
                .addClass("nc");
        }
    });
    
    // JSON
    highlight = $('.language-json pre.highlight');

    highlight.find('.s2 + .p:contains(:)').prev()
        .removeClass("s2")
        .addClass("nt");
        
    highlight.find('.err:contains(//...)')
        .removeClass("err")
        .addClass("c");
});