import {createRoot} from 'react-dom/client';
import {FloatButton} from 'antd'

const App = () => {
    const {host} = location;
    const openInTab = (url) => {
        let keyword = ""
        if (host.includes('baidu.com')) {
            keyword = (document.querySelector('input[name="wd"]') as HTMLInputElement)?.value ?? (document.querySelector('input[name="word"]') as HTMLInputElement)?.value
        } else if (location.host.includes('google')) {
            keyword = (document.querySelector('input[name="q"]') as HTMLInputElement)?.value
        }
        // @ts-ignore
        GM_openInTab(`${url}${keyword}`, {active: true});
    }
    const getIcon = (src) => {
        const num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        return (
            <img alt={src}
                 width={18}
                 height={18}
                 src={`//t${num}.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${src}?client=SOCIAL&size=64`}/>
        )
    }
    return (
        <FloatButton.Group shape="circle" style={{left: 24}}>
            {
                !location.host.includes('google') && (
                    <FloatButton onClick={() => openInTab("//www.google.com/search?q=")}
                                 tooltip={"跳转到google"}
                                 icon={getIcon("google.com")}/>
                )
            }
            {
                !location.host.includes('baidu') && (
                    <FloatButton onClick={() => openInTab("//www.baidu.com/s?wd=")}
                                 tooltip={"跳转到baidu"}
                                 icon={getIcon("baidu.com")}/>
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