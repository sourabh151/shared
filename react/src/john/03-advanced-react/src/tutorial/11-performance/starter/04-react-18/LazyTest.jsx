import { lazy, useState, Suspense } from 'react'

const SlowComponent = lazy(() => import('./SlowComponent'))
function LazyTest() {
    const [show, setShow] = useState(false)
    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>show</button>
            {show && <Suspense fallback={<h4>Loading...</h4>}>
                <SlowComponent />
            </Suspense>}
        </>
    )
}


export default LazyTest