import Link from 'next/link'

export default function Breadcrumbs(props) {

    const urlcrumbs = props.urlPath.split('/');
    const textcrumbs = props.urlPath.replace('-', ' ').split('/');
    textcrumbs.shift();
    urlcrumbs.shift();

    function partialURL(index) {
        let url = '/';
        for (let i = 0; i <= index; i++) {
            url += urlcrumbs[i];
            url += '/';
        }
        console.log(url);
        return url;

    }

    return (
        <div className="px-8 py-4">
            <h5 className="text-2xl">{props.title}</h5>
            <h6>
                <Link href={{ pathname: '/home' }} >
                    <span>
                        Portal&nbsp;
                    </span>
                </Link>/
                {textcrumbs.map((child, index) => (
                    <span>
                        <Link href={{ pathname: partialURL(index) }} >
                            <span className='capitalize'>
                                &nbsp;{child}&nbsp;
                            </span>
                        </Link>
                        {index != textcrumbs.length - 1 && ('/')}
                    </span>
                )
                )}
                {/* <Link href={{ pathname: '/home' }} >
                    <span>
                        Portal /
                    </span>
                </Link>
                <Link href={{ pathname: '/products' }} >
                    <span>
                        &nbsp;Products&nbsp;
                    </span>
                </Link>
                / Overview */}
            </h6>
        </div>
    )
}