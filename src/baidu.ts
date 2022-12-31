const killAD = () => {
    document.querySelectorAll('.EC_result')?.forEach((item) => item.remove());
    document.querySelectorAll(' #content_left .result,#content_right .cr-content')?.forEach((item) => {
        item.querySelectorAll("span,a").forEach((childItem) => {
            if (childItem && (childItem.innerHTML == "广告" || childItem.getAttribute("data-tuiguang"))) {
                item.remove();
            }
        })
    })
    document.querySelectorAll('.ec_wise_ad')?.forEach((item) => item.remove());
}
const baidu = () => {
    killAD()
    const observer = new MutationObserver(killAD);
    observer.observe(document.body, {
        'childList': true,
        'subtree': true
    });
}
export default baidu