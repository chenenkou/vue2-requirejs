define(['text!components/amList/amList.html'], function (amListTemplate) {
    return {
        template: amListTemplate,
        data: function () {
            return {
                list: [
                    {
                        content: '每个人都有一个死角， 自己走不出来，别人也闯不进去。'
                    },
                    {
                        content: '我把最深沉的秘密放在那里。'
                    },
                    {
                        content: '你不懂我，我不怪你。'
                    },
                    {
                        content: '每个人都有一道伤口， 或深或浅，盖上布，以为不存在。'
                    }
                ]
            };
        }
    };
});