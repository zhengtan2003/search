import {createRoot} from 'react-dom/client';
import {FloatButton} from 'antd'

const App = () => {
    const toGoogle = () => {
        const keyword = (document.querySelector('input[name="wd"]') as HTMLInputElement)?.value;
        window.open(`//www.google.com/search?q=${keyword}`, "_blank");
    }
    const toBaidu = () => {
        const keyword = (document.querySelector('input[name="q"]') as HTMLInputElement)?.value;
        window.open(`//www.baidu.com/s?wd=${keyword}`, "_blank")
    }
    return (
        <FloatButton.Group shape="circle" style={{left: 24}}>
            {
                !location.host.includes('google') && (
                    <FloatButton onClick={toGoogle}
                                 tooltip={"跳转到google"}
                                 icon={
                                     <img alt={"google"}
                                          src={`//t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=18`}/>
                                 }/>
                )
            }
            {
                !location.host.includes('baidu') && (
                    <FloatButton onClick={toBaidu}
                                 tooltip={"跳转到baidu"}
                                 icon={
                                     <img alt="baidu"
                                          src={`//www.google.com/s2/favicons?sz=18&domain=baidu.com`}/>
                                 }/>
                )
            }
            <FloatButton.BackTop visibilityHeight={0}/>
        </FloatButton.Group>
    )
}
const quickSwitch = () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const body = createRoot(container);
    body.render(<App/>);
}

export default quickSwitch