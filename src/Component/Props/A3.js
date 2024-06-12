import A4 from './A4'

function A3(props) {

    // console.log("A3 ==", props);
    return (
        <>
            <h1>this is A3 component</h1>
            A3 == {props.data.comName}
            <A4 data1 = {props.data} />
        </>
    )
}
export default A3