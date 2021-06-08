const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        })

        function changeCursor(){
            cursor.style.width = '60px';
            cursor.style.height = '60px';
            cursor.style.border = '2px solid #2196f3';
        }

        function defaultCursor(){
            cursor.style.width = '0px';
            cursor.style.height = '0px';
        }

        const items = document.querySelectorAll('.changeCursor');
        items.forEach(i =>{
            i.onmouseenter = changeCursor;
            i.onmouseleave = defaultCursor;
});