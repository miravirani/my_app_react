import A3 from './A3'

function A2(props){
    return(
        <>
            <h1>this is A2 component</h1>
            A2 === {props.data.comName}
            <A3 data = {props.data}/>
        </>
    )
}
export default A2