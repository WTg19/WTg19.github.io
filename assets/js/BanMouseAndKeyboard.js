//�����Ҽ�����ֹ�Ҽ��鿴Դ���룩
window.oncontextmenu = function () {
    return false;
}
//��ֹ�κμ����û��¼�����ֹF12��shift+ctrl+i���𿪷��߹��ߣ�
window.onkeydown = window.onkeyup = window.onkeypress = function () {
    window.event.returnValue = false;
    return false;
}

window.addEventListener("keydown", function (e) {
    //�����ж��ǲ���mac�������mac,ctrl��Ϊ����
    //event.preventDefault() ������ֹԪ�ط���Ĭ�ϵ���Ϊ��
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        // Process event...
        document.getElementById("test").innerHTML = "ctrl+s�ɹ�";
    }
}, false);